import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Fração do elemento visível para disparar (0 a 1) */
  threshold?: number;
  /** Ajusta a área de detecção, útil para disparar um pouco antes/depois */
  rootMargin?: string;
  /** Se true, anima só uma vez e para de observar */
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  // Sem suporte a IntersectionObserver: já começa visível (fallback seguro)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}
