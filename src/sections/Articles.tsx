import { articles, articlesSection } from "../data/content";
import { ArticleCard } from "../components/ArticleCard";
import { PrimaryLink } from "../components/PrimaryLink";
import { Section, SectionHeader } from "../components/Section";
import { Text } from "../components/Text";
import styles from "./Articles.module.css";

export function Articles() {
  return (
    <Section id="articles" aria-labelledby="articles-heading">
      <SectionHeader
        count={8}
        title="Articles"
        heading={articlesSection.heading}
        headingId="articles-heading"
        description={articlesSection.description}
      />
      <div className={styles.body}>
        <div className={styles.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} href={`/articles/${article.slug}`} {...article} />
          ))}
        </div>
        <div className={styles.all}>
          <Text variant="label-big" as="sup" className={styles.count}>
            {articles.length}
          </Text>
          <PrimaryLink text="All Articles" href="/articles" size="large" />
        </div>
      </div>
    </Section>
  );
}
