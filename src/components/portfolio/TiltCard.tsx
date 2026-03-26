import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  style?: CSSProperties;
};

export function TiltCard({ children, className, maxTilt = 8, perspective = 1000, style }: TiltCardProps) {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setIsReducedMotion(media.matches);

    applyPreference();
    media.addEventListener("change", applyPreference);

    return () => media.removeEventListener("change", applyPreference);
  }, []);

  const style_ = useMemo<CSSProperties>(
    () => ({
      transform,
      transformStyle: "preserve-3d",
      willChange: "transform",
      transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
    }),
    [transform],
  );

  if (isReducedMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <div
      className={cn("group relative", className)}
      style={{ perspective, ...style_ }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * maxTilt * 2;
        const rotateX = (0.5 - py) * maxTilt * 2;
        setTransform(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.01)`);
      }}
      onMouseLeave={() => setTransform("rotateX(0deg) rotateY(0deg) scale(1)")}
    >
      <div style={style} className="h-full">
        {children}
      </div>
    </div>
  );
}
