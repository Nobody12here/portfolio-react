import { Blocks, Code2, Wallet } from "lucide-react";

import { CodeWindow } from "./CodeWindow";
import { GitHubImpactOverview } from "./GitHubImpactOverview";
import { GlowButton } from "./GlowButton";
import { SectionHeading } from "./SectionHeading";
import { highlights, profile } from "./data";

function HighlightsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {highlights.map((item, index) => (
        <div
          key={item.label}
          className="hover-lift animate-reveal border border-border/70 bg-secondary/35 p-3"
          style={{ animationDelay: `${120 + index * 90}ms` }}
        >
          <p className="font-heading text-xl text-foreground">{item.value}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function HeroVisualCluster() {
  return (
    <div className="pointer-events-none absolute -right-36 top-4 hidden w-32 lg:block xl:-right-44 xl:w-36">
      <div className="animate-float fx-sheen relative border border-border/70 bg-secondary/30 p-3">
        <Code2 className="mb-2 size-5 text-primary" />
        <p className="text-[0.58rem] uppercase tracking-[0.13em] text-muted-foreground">Backend</p>
        <p className="mt-1 font-heading text-sm text-foreground">Django APIs</p>
      </div>
      <div className="animate-float animate-glow relative mt-3 border border-border/70 bg-[#102032]/70 p-3" style={{ animationDelay: "300ms" }}>
        <Wallet className="mb-2 size-5 text-[color:var(--success)]" />
        <p className="text-[0.58rem] uppercase tracking-[0.13em] text-muted-foreground">Web3</p>
        <p className="mt-1 font-heading text-sm text-foreground">Smart Contracts</p>
      </div>
      <div className="animate-float relative mt-3 border border-border/70 bg-secondary/30 p-3" style={{ animationDelay: "650ms" }}>
        <Blocks className="mb-2 size-5 text-[color:var(--highlight)]" />
        <p className="text-[0.58rem] uppercase tracking-[0.13em] text-muted-foreground">Cloud</p>
        <p className="mt-1 font-heading text-sm text-foreground">DevOps Pipeline</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="space-y-8">
      <div className="grid gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className="animate-reveal relative space-y-6" style={{ animationDelay: "80ms" }}>
          <SectionHeading
            eyebrow={profile.location}
            title={
              <>
                {profile.title} building robust APIs, secure smart contracts, and production-ready Web3 systems.
              </>
            }
            description={profile.summary}
          />
          <div className="animate-reveal flex flex-wrap items-center gap-3" style={{ animationDelay: "160ms" }}>
            <GlowButton tone="success" asChild>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </GlowButton>
            <GlowButton asChild>
              <a href={`mailto:${profile.email}`}>Email Me</a>
            </GlowButton>
          </div>
          <p className="animate-reveal text-xs text-muted-foreground" style={{ animationDelay: "220ms" }}>
            {profile.phone} · {profile.email}
          </p>
        </div>
        <HighlightsGrid />
      </div>

      <div className="animate-reveal relative" style={{ animationDelay: "260ms" }}>
        <div className="pointer-events-none absolute -top-4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
        <CodeWindow className="fx-sheen w-full" />
        <div className="pointer-events-none absolute -bottom-4 right-0 h-px w-full bg-gradient-to-l from-transparent via-[color:var(--success)]/80 to-transparent" />
      </div>

      <div className="animate-reveal" style={{ animationDelay: "320ms" }}>
        <GitHubImpactOverview username={profile.githubHandle} />
      </div>
    </section>
  );
}
