import type { ReactNode } from "react";
import { Activity, BarChart3, Cpu, GitFork, Layers, Sparkles } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { CodeWindow } from "./CodeWindow";
import { GlowButton } from "./GlowButton";
import { SectionHeading } from "./SectionHeading";

const navItems = ["How it works", "Develop", "Features", "Docs", "Blog", "About"];
const partnerLogos = ["EpicDev", "dataBites", "starsup", "ExDone", "selfast"];
const softwareLogos = ["starsup", "ExDone", "TeamTalk", "SubSpace", "selfast"];

function AccentWord({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("text-[color:var(--success)]", className)}>{`{${children}}`}</span>;
}

function MetricStrip() {
  return (
    <div className="grid gap-4 border-y border-border/70 py-5 text-center sm:grid-cols-3 sm:text-left">
      <div>
        <p className="font-heading text-2xl text-foreground">12K+</p>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">deployments each month</p>
      </div>
      <div>
        <p className="font-heading text-2xl text-foreground">95ms</p>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">average response latency</p>
      </div>
      <div>
        <p className="font-heading text-2xl text-foreground">24/7</p>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">realtime observability</p>
      </div>
    </div>
  );
}

function InfographicPanel() {
  return (
    <div className="relative overflow-hidden border border-border/70 bg-[#0e1627]/80 p-4">
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[color:var(--success)]/20 blur-2xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Pipeline Status</p>
          <span className="rounded-full border border-[color:var(--success)]/50 bg-[color:var(--success)]/15 px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.14em] text-[color:var(--success)]">
            Live
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <div className="border border-border/60 bg-secondary/40 p-3">
            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Code Quality</p>
            <p className="mt-2 font-heading text-xl text-foreground">98.2%</p>
          </div>
          <div className="border border-border/60 bg-secondary/40 p-3">
            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Uptime</p>
            <p className="mt-2 font-heading text-xl text-foreground">99.99%</p>
          </div>
          <div className="border border-border/60 bg-secondary/40 p-3">
            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Deployments</p>
            <p className="mt-2 font-heading text-xl text-foreground">1,248</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-border/60 bg-secondary/35 p-3">
            <div className="mb-3 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.13em] text-muted-foreground">
              <BarChart3 className="size-3.5 text-primary" />
              Performance Index
            </div>
            <div className="flex h-16 items-end gap-1.5">
              {[30, 44, 36, 52, 68, 57, 70, 61, 76, 88].map((height, idx) => (
                <span
                  key={`${height}-${idx}`}
                  className="w-full bg-gradient-to-t from-primary/25 via-primary/55 to-[color:var(--success)]/85"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="border border-border/60 bg-secondary/35 p-3">
            <div className="mb-2 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.13em] text-muted-foreground">
              <Activity className="size-3.5 text-[color:var(--success)]" />
              Workflow
            </div>
            <div className="space-y-2">
              {[
                ["Ideation", "100%"],
                ["Build", "89%"],
                ["Release", "74%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">
                    <span>{label}</span>
                    <span className="text-foreground/90">{value}</span>
                  </div>
                  <div className="h-1.5 bg-background/70">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-[color:var(--success)]"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircularInfographic() {
  return (
    <div className="relative min-h-[280px] overflow-hidden border border-border/80 bg-secondary/35 p-6">
      <Cpu className="absolute right-4 top-4 size-9 text-primary/75" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background/80">
        <div className="absolute inset-2 rounded-full border border-[color:var(--success)]/45" />
        <div className="absolute inset-0 grid place-items-center">
          <p className="font-heading text-2xl text-foreground">87%</p>
        </div>
        <svg viewBox="0 0 120 120" className="absolute inset-1">
          <circle cx="60" cy="60" r="50" stroke="rgba(51,65,85,0.7)" strokeWidth="6" fill="none" />
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="url(#infographicGradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset="41"
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <defs>
            <linearGradient id="infographicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-6 bottom-6 border border-border/60 bg-background/55 p-4">
        <p className="font-heading text-lg">C++ Runtime</p>
        <p className="mt-2 text-sm text-muted-foreground">Fast runtime sandbox with static analysis hooks.</p>
      </div>
    </div>
  );
}

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
          <header className="border-b border-border/70 px-5 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a href="#" className="font-heading text-lg text-foreground">
                TheProgrammer
              </a>
              <nav className="hidden gap-7 text-[0.68rem] uppercase tracking-[0.13em] text-muted-foreground md:flex">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition-colors hover:text-foreground">
                    {item}
                  </a>
                ))}
              </nav>
              <GlowButton className="h-9 px-4 text-[0.62rem]" tone="ghost">
                Sign Up
              </GlowButton>
            </div>
          </header>

          <main className="space-y-20 px-5 py-10 sm:px-8 lg:space-y-24 lg:px-10 lg:py-14">
            <section className="space-y-10">
              <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="space-y-8">
                  <SectionHeading
                    title={
                      <>
                        Expert Developers for a Connected <AccentWord>World</AccentWord>
                      </>
                    }
                    description="Circle is a modern engineering platform that gives innovators the speed and reliability they need to build at the speed of inspiration."
                  />
                  <div className="flex flex-wrap items-center gap-4">
                    <GlowButton tone="success">Watch a Video</GlowButton>
                    <GlowButton>Get a Demo</GlowButton>
                  </div>
                </div>
                <MetricStrip />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute -top-4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
                <CodeWindow className="w-full" />
                <div className="pointer-events-none absolute -bottom-4 right-0 h-px w-full bg-gradient-to-l from-transparent via-[color:var(--success)]/80 to-transparent" />
              </div>

              <InfographicPanel />

              <div className="space-y-4">
                <p className="text-center text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Providing power to the world&apos;s best product teams
                </p>
                <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-5">
                  {partnerLogos.map((logo) => (
                    <div key={logo} className="border border-border/60 bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div className="space-y-6">
                <SectionHeading
                  title={
                    <>
                      Finally you can develop <AccentWord>full-stack</AccentWord> web applications in one place.
                    </>
                  }
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-none border-border/80 bg-secondary/45 py-0">
                    <CardHeader className="px-5 pt-5 pb-3">
                      <CardTitle className="font-heading text-xl">Optimized Frameworks</CardTitle>
                      <CardDescription>
                        A custom environment designed for developing and facilitating React, Vue, Angular, and others.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-5 pb-5 text-[0.67rem] uppercase tracking-[0.12em] text-[color:var(--success)]">
                      Read More
                    </CardContent>
                  </Card>
                  <Card className="rounded-none border-border/80 bg-secondary/45 py-0">
                    <CardHeader className="px-5 pt-5 pb-3">
                      <CardTitle className="font-heading text-xl">Integrated with GitHub</CardTitle>
                      <CardDescription>
                        Import and run repositories directly. Alternatively, commit your source code in seconds.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-5 pb-5 text-[0.67rem] uppercase tracking-[0.12em] text-[color:var(--success)]">
                      Read More
                    </CardContent>
                  </Card>
                </div>
              </div>
              <CodeWindow compact className="mt-4 lg:mt-10" />
            </section>

            <section className="space-y-10">
              <SectionHeading
                align="center"
                title={
                  <>
                    Concentrate on <AccentWord>larger</AccentWord> issues.
                  </>
                }
                description="Spend less time on repetitive code patterns and more time on what really matters: building great software."
              />
              <div className="grid gap-4 lg:grid-cols-3">
                <Card className="rounded-none border-border/80 bg-secondary/45 py-0 lg:col-span-1">
                  <CardHeader className="px-5 pt-5 pb-3">
                    <CardTitle className="font-heading text-xl">Customized AI-based recommendations</CardTitle>
                    <CardDescription>
                      Get customized recommendations in a tuned environment designed especially for development.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 text-[0.67rem] uppercase tracking-[0.12em] text-[color:var(--success)]">
                    Read More
                  </CardContent>
                </Card>
                <Card className="rounded-none border-border/80 bg-secondary/45 py-0 lg:col-span-1">
                  <CardHeader className="px-5 pt-5 pb-3">
                    <CardTitle className="font-heading text-xl">Help of plugins and source templates</CardTitle>
                    <CardDescription>
                      Extend your setup with reusable plugin bundles and battle-tested source templates.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 text-[0.67rem] uppercase tracking-[0.12em] text-[color:var(--success)]">
                    Read More
                  </CardContent>
                </Card>
                <CircularInfographic />
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <SectionHeading
                  title={
                    <>
                      Circle provides teams and individuals with customizable <AccentWord>management tools</AccentWord> for your source code.
                    </>
                  }
                  description="Create issues, sections into tasks, track relationships, add custom spaces, and automate repetitive workflows."
                />
                <div className="flex flex-wrap gap-4">
                  <GlowButton tone="success">Watch a Video</GlowButton>
                  <GlowButton>Get a Demo</GlowButton>
                </div>
              </div>
              <CodeWindow className="min-h-[300px]" compact />
            </section>

            <section className="space-y-8">
              <SectionHeading
                align="center"
                title={
                  <>
                    Useful <AccentWord>software</AccentWord> that can assist.
                  </>
                }
              />
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {softwareLogos.concat(softwareLogos).map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="border border-border/70 bg-secondary/45 px-4 py-3 text-center font-heading text-sm text-foreground/90"
                  >
                    {logo}
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <GlowButton tone="success" className="h-9 px-4 text-[0.62rem]">
                  See Full Software
                </GlowButton>
              </div>
            </section>

            <section className="border border-border/80 bg-secondary/30 p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <SectionHeading
                  title={
                    <>
                      Join the <AccentWord>community</AccentWord> around the world
                    </>
                  }
                />
                <p className="text-sm text-muted-foreground">
                  A custom environment designed especially for developing and facilitating React, Vue, Angular, and
                  other frameworks.
                </p>
              </div>
            </section>
          </main>

          <footer className="space-y-8 border-t border-border/70 bg-[#0a1322] px-5 py-10 sm:px-8 lg:px-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <p className="mb-3 font-heading text-base">Company</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>How it Works</li>
                  <li>Features</li>
                  <li>Docs</li>
                  <li>Blog</li>
                  <li>About</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Resource</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Docs</li>
                  <li>Forum</li>
                  <li>Careers</li>
                  <li>Templates</li>
                  <li>Feedback</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Legal</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Guidelines</li>
                  <li>Fair Use Policy</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Support</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>FAQs</li>
                  <li>Call Center</li>
                  <li>Maintenance</li>
                  <li>Status</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-heading text-base">Platform</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Team</li>
                  <li>Security</li>
                  <li>Roadmap</li>
                  <li>Features</li>
                  <li>Enterprise</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-5 text-xs text-muted-foreground">
              <p>2026 All Rights Reserved at Circle</p>
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
