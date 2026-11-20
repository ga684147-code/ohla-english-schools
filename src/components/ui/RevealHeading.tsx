"use client";

import {
  Children, cloneElement, isValidElement, useEffect, useRef, useState,
  type HTMLAttributes, type ReactNode,
} from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & { as: "h1" | "h2" };

export function RevealHeading({ as: Tag, children, ...props }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    const heading = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!heading || motion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setRevealing(true);
    });
    observer.observe(heading);
    function stop() {
      if (motion.matches) {
        observer.disconnect();
        setRevealing(false);
      }
    }
    motion.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", stop);
    };
  }, []);

  let index = 0;
  function split(nodes: ReactNode): ReactNode {
    return Children.map(nodes, child => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child).split(/(\s+)/).map((token, i) => {
          if (!token.trim()) return token;
          const order = index++;
          return <span className="reveal-word" key={i} style={{ animationDelay: `${order * 70}ms` }}
            onAnimationEnd={() => { if (order === index - 1) setRevealing(false); }}>{token}</span>;
        });
      }
      if (isValidElement<{ children?: ReactNode }>(child) && child.props.children != null) {
        return cloneElement(child, undefined, split(child.props.children));
      }
      return child;
    });
  }

  return <Tag {...props} ref={ref} data-revealing={revealing || undefined}>
    {revealing ? split(children) : children}
  </Tag>;
}
