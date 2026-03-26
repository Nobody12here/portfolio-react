import { SectionHeading } from "./SectionHeading";
import { projects } from "./data";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <SectionHeading
        title={<>Selected Projects</>}
        description="Production-focused work spanning student workflow automation, DeFi tracking, and multi-chain wallet ecosystems."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="border border-border/80 bg-secondary/40 p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-heading text-xl text-foreground">{project.name}</h3>
              <span className="text-[0.62rem] uppercase tracking-[0.12em] text-[color:var(--success)]">{project.stack}</span>
            </div>
            <p className="text-sm text-muted-foreground">{project.summary}</p>
            <p className="mt-3 border-l-2 border-primary/60 pl-3 text-sm text-foreground/90">{project.impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
