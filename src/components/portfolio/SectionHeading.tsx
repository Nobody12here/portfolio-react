import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-5", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground/80">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
