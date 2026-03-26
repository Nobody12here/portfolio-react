import { cloneElement, isValidElement, type ComponentProps, type ReactElement, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "success" | "ghost";
} & Pick<ComponentProps<typeof Button>, "asChild" | "type" | "disabled" | "onClick">;

export function GlowButton({ children, className, tone = "primary", ...props }: GlowButtonProps) {
  const { asChild = false, ...buttonProps } = props;

  const toneStyles = {
    primary: "bg-primary/90 text-primary-foreground hover:bg-primary shadow-[0_0_28px_rgba(99,102,241,0.35)]",
    success: "bg-[color:var(--success)] text-background hover:bg-[color:var(--success)]/90 shadow-[0_0_28px_rgba(34,197,94,0.35)]",
    ghost:
      "bg-transparent border-border text-foreground hover:bg-secondary/70 shadow-[0_0_0_rgba(0,0,0,0)]",
  } as const;

  const sharedClassName = cn(
    "inline-flex h-10 items-center justify-center gap-2 rounded-none border px-5 text-[0.72rem] tracking-[0.12em] uppercase transition-all duration-300",
    toneStyles[tone],
    className,
  );

  if (asChild) {
    if (!isValidElement(children)) {
      return null;
    }

    const child = children as ReactElement<{ className?: string; children?: ReactNode }>;

    return cloneElement(child, {
      className: cn(sharedClassName, child.props.className),
      children: (
        <>
          {child.props.children}
          <ArrowUpRight className="size-3.5" />
        </>
      ),
    });
  }

  return (
    <Button
      size="lg"
      {...buttonProps}
      className={sharedClassName}
    >
      {children}
      <ArrowUpRight className="size-3.5" />
    </Button>
  );
}
