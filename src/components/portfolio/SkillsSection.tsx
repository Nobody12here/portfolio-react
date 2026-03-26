import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "./data";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        align="center"
        title={<>Technical Skills</>}
        description="A balanced stack covering backend engineering, smart contracts, integration workflows, and deployment pipelines."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="border border-border/80 bg-secondary/40 p-5">
            <h3 className="font-heading text-xl text-foreground">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="border border-border/80 bg-background/70 px-2.5 py-1.5 text-[0.66rem] uppercase tracking-[0.09em] text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
