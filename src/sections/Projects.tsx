import { projects } from "../data/content";
import { PrimaryLink } from "../components/PrimaryLink";
import { ProjectCard } from "../components/ProjectCard";
import { Section, SectionHeader } from "../components/Section";
import { Text } from "../components/Text";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section id="projects" tone="black-90" aria-labelledby="projects-heading">
      <SectionHeader
        count={1}
        title="Projects"
        heading="Case studies"
        headingId="projects-heading"
        headingSize="large"
        description={`© 2016 - ${new Date(projects[0].date).getFullYear()}`}
        descriptionSize="large"
      />
      <div className={styles.body}>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              client={project.client}
              thumbnail={project.thumbnail}
              number={i + 1}
              date={project.date}
              services={project.services}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
        <div className={styles.all}>
          <Text variant="label-big" as="sup" className={styles.count}>
            {projects.length}
          </Text>
          <PrimaryLink text="All Case Studies" href="/projects" size="large" />
        </div>
      </div>
    </Section>
  );
}
