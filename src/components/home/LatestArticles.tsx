import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { articles } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
export function LatestArticles() {
  return (
    <section className="latest-articles" aria-labelledby="articles-title">
      <div className="articles-inner">
        <h2 id="articles-title">
          <strong>Latest</strong> Articles
        </h2>
        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.slug}>
              <p className="article-category">{article.category}</p>
              <h3>{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <div className="article-photo">
                <Photo
                  name={article.image}
                  alt=""
                  sizes="(max-width:767px) 100vw,33vw"
                />
              </div>
              <div className="article-meta">
                <span className="article-author">
                  <Image
                    src="/images/logo.webp"
                    alt=""
                    width={28}
                    height={28}
                  />
                  OHLA
                </span>
                <time dateTime="2026-01-20">
                  <CalendarDays size={14} />
                  Jan 20, 2026
                </time>
                <Button href={`${routes.blog}/${article.slug}`} variant="blue">
                  Read more
                </Button>
              </div>
            </article>
          ))}
        </div>
        <Button href={routes.blog}>See all content</Button>
      </div>
    </section>
  );
}
