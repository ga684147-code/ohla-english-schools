"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { routes } from "@/config/routes";
import { Button } from "@/components/ui/Button";
export function Header() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
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
  return (
    <header
      ref={root}
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          const opened = root.current?.querySelector<HTMLButtonElement>(
            '[aria-expanded="true"]',
          );
          close();
          opened?.focus();
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
          priority
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
            className="nav-item"
            onMouseEnter={() => {
              if (window.matchMedia("(min-width:1200px)").matches)
                setActive(item.children ? item.label : null);
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(min-width:1200px)").matches)
                setActive(null);
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node))
                setActive(null);
            }}
          >
            {item.children ? (
              <>
                <button
                  className="nav-trigger"
                  aria-expanded={active === item.label}
                  aria-controls={`dropdown-${index}`}
                  onClick={() =>
                    setActive(active === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown size={13} />
                </button>
                <div
                  id={`dropdown-${index}`}
                  className={`dropdown ${active === item.label ? "is-open" : ""}`}
                  inert={active !== item.label}
                >
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} onClick={close}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                onClick={close}
                aria-current={item.href === "/" ? "page" : undefined}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <Button href={routes.contact} className="header-contact">
          Contact us
        </Button>
      </nav>
    </header>
  );
}
