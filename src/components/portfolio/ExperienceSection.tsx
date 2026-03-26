import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { education, experiences } from "./data";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <SectionHeading
        title={<>Professional Experience</>}
        description="Hands-on delivery across blockchain products, backend APIs, and integrated full-stack systems."
      />
      <div className="grid gap-4">
        {experiences.map((item) => (
          <TiltCard key={`${item.company}-${item.role}`} className="hover-lift" maxTilt={6}>
          <article className="border border-border/80 bg-secondary/40 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-heading text-xl text-foreground">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
              <p className="text-[0.68rem] uppercase tracking-[0.14em] text-(--success)">{item.period}</p>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point} className="border-l-2 border-primary/60 pl-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>
          </TiltCard>
        ))}
      </div>
      <TiltCard className="hover-lift" maxTilt={5}>
      <article className="border border-border/80 bg-secondary/25 p-5">
        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">Education</p>
        <h3 className="mt-2 font-heading text-xl">{education.degree}</h3>
        <p className="text-sm text-muted-foreground">
          {education.school} · {education.year}
        </p>
      </article>
      </TiltCard>
    </section>
  );
}
