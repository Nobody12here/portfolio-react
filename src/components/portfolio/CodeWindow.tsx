import { cn } from "@/lib/utils";

type CodeWindowProps = {
  className?: string;
  compact?: boolean;
};

const codeLines = [
  "<html>",
  "  <head>",
  "    <title>Portfolio Platform</title>",
  "  </head>",
  "  <body>",
  "    <section id=\"workspace\">",
  "      <label for=\"repo\">Repository</label>",
  "      <input type=\"text\" id=\"repo\" />",
  "      <label for=\"branch\">Branch</label>",
  "      <input type=\"text\" id=\"branch\" />",
  "      <button type=\"submit\">Ship</button>",
  "    </section>",
  "  </body>",
  "</html>",
];

export function CodeWindow({ className, compact = false }: CodeWindowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-[#0d1525]/85 shadow-[0_32px_75px_rgba(0,0,0,0.55)]",
        compact ? "min-h-[220px]" : "min-h-[340px]",
        className,
      )}
    >
      <div className="border-b border-border/80 bg-secondary/80 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#334155]" />
          <span className="size-2 rounded-full bg-primary/70" />
          <span className="size-2 rounded-full bg-[color:var(--success)]/70" />
          <span className="ml-3 text-[0.63rem] uppercase tracking-[0.16em] text-muted-foreground">workspace/main.tsx</span>
        </div>
      </div>
      <div className={cn("grid gap-1 px-5 py-4 font-mono text-xs leading-relaxed", compact && "text-[0.7rem]")}>
        {codeLines.map((line, index) => (
          <p key={`${line}-${index}`} className="text-foreground/85">
            <span className="mr-3 inline-block w-4 text-right text-muted-foreground/50">{index + 1}</span>
            <span className={index % 3 === 0 ? "text-[color:var(--success)]/90" : "text-foreground/80"}>{line}</span>
          </p>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
    </div>
  );
}
