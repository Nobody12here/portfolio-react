import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "success" | "ghost";
};

export function GlowButton({ children, className, tone = "primary" }: GlowButtonProps) {
  const toneStyles = {
    primary: "bg-primary/90 text-primary-foreground hover:bg-primary shadow-[0_0_28px_rgba(99,102,241,0.35)]",
    success: "bg-[color:var(--success)] text-background hover:bg-[color:var(--success)]/90 shadow-[0_0_28px_rgba(34,197,94,0.35)]",
    ghost:
      "bg-transparent border-border text-foreground hover:bg-secondary/70 shadow-[0_0_0_rgba(0,0,0,0)]",
  } as const;

  return (
    <Button
      size="lg"
      className={cn(
        "h-10 rounded-none border px-5 text-[0.72rem] tracking-[0.12em] uppercase transition-all duration-300",
        toneStyles[tone],
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-3.5" />
    </Button>
  );
}
