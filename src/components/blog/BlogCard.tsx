import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import type { BlogArticle } from "@/data/blog";
import { routes } from "@/config/routes";
import styles from "./Blog.module.css";
export function ArticleMeta({ article }: { article: BlogArticle }) {
  return (
    <div className={styles.meta}>
      <time dateTime={article.date}>
        <CalendarDays size={16} aria-hidden="true" />
        {article.dateLabel}
      </time>
      <span>
        <Clock3 size={18} aria-hidden="true" />
        {article.minutes} MIN READ
      </span>
    </div>
  );
}
export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <article className={styles.card}>
      <Link
        className={styles.cardLink}
        href={`${routes.blog}/${article.slug}`}
        aria-label={`Read article: ${article.title}`}
      >
        <div className={styles.cardCopy}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <ArticleMeta article={article} />
        </div>
        <div className={styles.cardPhoto}>
          <Photo
            name={article.image}
            alt=""
            sizes="(max-width:699px) 100vw,(max-width:1023px) 50vw,33vw"
          />
        </div>
      </Link>
    </article>
  );
}
