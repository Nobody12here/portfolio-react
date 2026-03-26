import { GitFork, Layers, Sparkles } from "lucide-react";

import { GlowButton } from "./GlowButton";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { PortfolioHeader } from "./PortfolioHeader";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { profile } from "./data";

export function PortfolioLanding() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="site-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(65%_55%_at_50%_0%,rgba(99,102,241,0.22),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[24rem] h-[540px] bg-[radial-gradient(60%_48%_at_50%_20%,rgba(34,197,94,0.16),transparent_78%)]" />
      <div className="pointer-events-none absolute -left-28 top-40 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-[40rem] h-72 w-72 rounded-full bg-[color:var(--success)]/15 blur-[130px]" />

      <div className="relative mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-9 lg:py-10">
        <div className="main-shell relative border border-border/80 bg-[#09101d]/85 shadow-[0_28px_100px_rgba(0,0,0,0.55)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--success)]/65 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" />
          <PortfolioHeader />

          <main className="space-y-20 px-5 py-10 sm:px-8 lg:space-y-24 lg:px-10 lg:py-14">
            <HeroSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />

            <section id="contact" className="border border-border/80 bg-secondary/30 p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">Contact</p>
                  <h2 className="mt-2 font-heading text-3xl sm:text-4xl">Let&apos;s build scalable products together.</h2>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <GlowButton tone="success" asChild>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </GlowButton>
                  <GlowButton asChild>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </GlowButton>
                </div>
              </div>
            </section>
          </main>

          <footer className="space-y-8 border-t border-border/70 bg-[#0a1322] px-5 py-10 sm:px-8 lg:px-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="mb-3 font-heading text-base">About</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{profile.name}</li>
                  <li>{profile.title}</li>
                  <li>{profile.location}</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Contact</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{profile.email}</li>
                  <li>{profile.phone}</li>
                  <li>{profile.githubHandle}</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Profiles</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Focus Areas</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Django APIs</li>
                  <li>Solidity</li>
                  <li>Web3 Integration</li>
                  <li>Cloud Deployment</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5 text-xs text-muted-foreground">
              <p>2026 Portfolio · {profile.name}</p>
              <div className="flex items-center gap-4 text-muted-foreground/80">
                <GitFork className="size-4" />
                <Layers className="size-4" />
                <Sparkles className="size-4 text-[color:var(--highlight)]" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
