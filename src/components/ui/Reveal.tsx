import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type Direction = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms, usado para escalonar (stagger) vários elementos */
  delay?: number;
  direction?: Direction;
  className?: string;
}

const hiddenClasses: Record<Direction, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
};

export function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
