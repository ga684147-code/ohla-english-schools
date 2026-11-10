"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { routes } from "@/config/routes";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "./MegaMenu";
import styles from "./Header.module.css";
export function Header() {
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/$/, "") || "/";
  const isCurrent = (href: string) =>
    !href.includes("#") && (href.replace(/\/$/, "") || "/") === normalizedPath;
  const [mobile, setMobile] = useState(false),
    [active, setActive] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  useEffect(() => {
    function dismiss(e: PointerEvent) {
      if (!root.current?.contains(e.target as Node)) {
        setActive(null);
        setMobile(false);
      }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  function close() {
    setMobile(false);
    setActive(null);
  }
  function focusPanel(index: number, last = false) {
    requestAnimationFrame(() => {
      const prefix = window.matchMedia("(min-width:1200px)").matches
        ? ""
        : "mobile-";
      const links = document
        .getElementById(`${prefix}dropdown-${index}`)
        ?.querySelectorAll<HTMLAnchorElement>("a");
      if (links?.length) links[last ? links.length - 1 : 0].focus();
    });
  }
  return (
    <header
      ref={root}
      className={`${styles.header} site-header`}
      data-menu-open={Boolean(active)}
      onMouseLeave={() => {
        if (
          window.matchMedia("(min-width:1200px)").matches &&
          !root.current?.contains(document.activeElement)
        )
          setActive(null);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          if (!e.relatedTarget && e.currentTarget.matches(":hover")) return;
          close();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          if (active) {
            const key = active;
            setActive(null);
            triggerRefs.current[key]?.focus();
          } else if (mobile) {
            setMobile(false);
            root.current
              ?.querySelector<HTMLButtonElement>(".mobile-toggle")
              ?.focus();
          }
        }
      }}
    >
      <Link
        href="/"
        className="header-logo"
        aria-label="OHLA English Schools home"
        onClick={close}
      >
        <Image
          src="/images/logo.webp"
          alt="OHLA English Schools"
          width={99}
          height={94}
          preload
        />
      </Link>
      <button
        className="mobile-toggle"
        aria-label={mobile ? "Close navigation" : "Open navigation"}
        aria-expanded={mobile}
        aria-controls="main-navigation"
        onClick={() => {
          setMobile(!mobile);
          setActive(null);
        }}
      >
        {mobile ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={mobile ? "navigation is-open" : "navigation"}
      >
        {navigation.map((item, index) => (
          <div
            key={item.label}
            className={`nav-item ${isCurrent(item.href) || item.children?.some((child) => isCurrent(child.href)) ? "is-current" : ""}`}
            onMouseEnter={() => {
              if (window.matchMedia("(min-width:1200px)").matches)
                setActive(item.panel ? item.label : null);
            }}
          >
            {item.panel ? (
              <button
                ref={(el) => {
                  triggerRefs.current[item.label] = el;
                }}
                className="nav-trigger"
                aria-expanded={active === item.label}
                aria-controls={`dropdown-${index} mobile-dropdown-${index}`}
                onClick={() =>
                  setActive(active === item.label ? null : item.label)
                }
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive(item.label);
                    focusPanel(index, e.key === "ArrowUp");
                  }
                }}
              >
                {item.label}
                <ChevronDown size={13} aria-hidden="true" />
              </button>
            ) : (
              <Link
                href={item.href}
                onClick={close}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            )}
            {item.panel && (
              <div className={styles.mobilePanel}>
                <MegaMenu
                  id={`mobile-dropdown-${index}`}
                  label={item.label}
                  panel={item.panel}
                  open={active === item.label}
                  onNavigate={close}
                />
              </div>
            )}
          </div>
        ))}
        <Button href={routes.contact} className="header-contact">
          Contact us
        </Button>
      </nav>
      <div className={styles.desktopPanels}>
        {navigation.map(
          (item, index) =>
            item.panel && (
              <MegaMenu
                key={item.label}
                id={`dropdown-${index}`}
                label={item.label}
                panel={item.panel}
                open={active === item.label}
                onNavigate={close}
              />
            ),
        )}
      </div>
    </header>
  );
}
