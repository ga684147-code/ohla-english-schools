"""Check local navigation, fragments and media in the Next.js static export."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

OUTPUT = Path("out")
ORIGIN = "https://ohla.test"


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.ids = set()
        self.links = []
        self.assets = []
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
        if tag in {"img", "source", "video", "script", "iframe"} and attrs.get("src"):
            self.assets.append(attrs["src"])
        if tag == "video" and attrs.get("poster"):
            self.assets.append(attrs["poster"])
        if tag in {"img", "source"} and attrs.get("srcset"):
            self.assets.extend(item.strip().split()[0] for item in attrs["srcset"].split(","))
        if tag == "link" and attrs.get("rel") in {"icon", "stylesheet", "preload"} and attrs.get("href"):
            self.assets.append(attrs["href"])


def main():
    pages = {}
    for document in OUTPUT.rglob("index.html"):
        path = document.relative_to(OUTPUT).as_posix().removesuffix("index.html")
        if path not in {"404/", "_not-found/"}:
            pages["/" + path] = Page(document.read_text())
    if "/" not in pages:
        raise SystemExit("Run npm run build first.")

    errors = set()
    assets = set()
    external = set()
    count = 0
    for route, page in pages.items():
        for link in page.links:
            count += 1
            url = urlsplit(urljoin(ORIGIN + route, link))
            if url.scheme not in {"http", "https"}:
                continue
            if url.hostname != "ohla.test":
                external.add(url.geturl())
                continue
            path = unquote(url.path)
            if (OUTPUT / path.lstrip("/")).is_file():
                continue
            target = pages.get(path.rstrip("/") + "/")
            if not target or (url.fragment and unquote(url.fragment) not in target.ids):
                errors.add((route, link))
        for asset in page.assets:
            url = urlsplit(urljoin(ORIGIN + route, asset))
            if url.hostname != "ohla.test":
                continue
            assets.add(url.path)
            if not (OUTPUT / unquote(url.path).lstrip("/")).is_file():
                errors.add((route, asset))

    print(f"{len(pages)} pages, {count} links, {len(assets)} local assets, {len(external)} external URLs.")
    if errors:
        raise SystemExit("\n".join(f"{source} → {dest}" for source, dest in sorted(errors)))


if __name__ == "__main__":
    main()
