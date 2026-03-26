import { GlowButton } from "./GlowButton";
import { profile } from "./data";

const navItems = ["Home", "Experience", "Skills", "Projects", "Contact"];

export function PortfolioHeader() {
  return (
    <header className="border-b border-border/70 px-5 py-5 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <a href="#home" className="font-heading text-lg text-foreground">
          {profile.name}
        </a>
        <nav className="hidden gap-7 text-[0.68rem] uppercase tracking-[0.13em] text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-foreground">
              {item}
            </a>
          ))}
        </nav>
        <GlowButton asChild className="h-9 px-4 text-[0.62rem]" tone="ghost">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </GlowButton>
      </div>
    </header>
  );
}
