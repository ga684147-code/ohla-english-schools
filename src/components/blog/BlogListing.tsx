"use client";
import { RevealHeading } from "@/components/ui/RevealHeading";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { blogArticles } from "@/data/blog";
import { BlogCard } from "./BlogCard";
import styles from "./Blog.module.css";
export function BlogListing() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const results = blogArticles.filter((a) =>
    `${a.title} ${a.description}`.toLowerCase().includes(term),
  );
  return (
    <section className={styles.listing} aria-labelledby="latest-blog-title">
      <div className={styles.listingInner}>
        <div className={styles.listingHeader}>
          <RevealHeading as="h2" id="latest-blog-title">
            Latest <strong>Articles</strong>
          </RevealHeading>
          <div className={styles.search}>
            <label htmlFor="blog-search" className="sr-only">
              Search articles by topic or keyword
            </label>
            <input
              type="search"
              id="blog-search"
              placeholder="Search by category"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-controls="blog-results"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear article search"
              >
                <X size={20} />
              </button>
            ) : (
              <Search size={20} aria-hidden="true" />
            )}
          </div>
        </div>
        {query && (
          <p className={styles.resultCount} role="status">
            {results.length} {results.length === 1 ? "article" : "articles"}{" "}
            found
          </p>
        )}
        <div id="blog-results" className={styles.grid}>
          {results.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
        {results.length === 0 && (
          <div className={styles.empty}>
            <h3>No articles found</h3>
            <p>Try another topic or keyword.</p>
            <button onClick={() => setQuery("")}>Show all articles</button>
          </div>
        )}
        <nav className={styles.pagination} aria-label="Blog pages">
          <button type="button" aria-current="page" aria-label="Page 1">
            01
          </button>
          {[2, 3, 4, 5].map((page) => (
            <button
              type="button"
              key={page}
              disabled
              aria-label={`Page ${page} — coming soon`}
              title="More articles coming soon"
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
