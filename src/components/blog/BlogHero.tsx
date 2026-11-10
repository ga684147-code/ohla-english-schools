import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { featuredArticle } from "@/data/blog";
import { routes } from "@/config/routes";
import { ArticleMeta } from "./BlogCard";
import styles from "./Blog.module.css";
export function BlogHero() {
  return (
    <section className={styles.hero} aria-labelledby="blog-title">
      <Photo
        name="blog-hero"
        alt="Student with a laptop and coffee on city steps"
        priority
      />
      <div className={styles.heroShade} />
      <div className={styles.heroInner}>
        <h1 id="blog-title">Ohla Blog</h1>
        <p className={styles.intro}>
          Content for those who want to learn, study, and live in the United
          States
        </p>
        <article className={styles.featured}>
          <div className={styles.featuredPhoto}>
            <Photo
              name={featuredArticle.image}
              alt="Two women exchanging compliments"
              sizes="(max-width:699px) 100vw,24vw"
              priority
            />
          </div>
          <div className={styles.featuredCopy}>
            <ArticleMeta article={featuredArticle} />
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.description}</p>
            <Button href={`${routes.blog}/${featuredArticle.slug}`}>
              Read article
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
