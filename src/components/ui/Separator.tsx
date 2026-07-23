import { useInView } from "../../hooks/useInView";

export function Separator() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref} className="flex w-full flex-col">
      <hr
        className={`w-full origin-left border-ink border-t-2 transition-transform duration-700 ease-out md:border-t-4 ${
          inView ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <hr
        className={`w-full origin-left border-olive border-t-1 transition-transform delay-150 duration-700 ease-out md:border-t-2 ${
          inView ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  )
}

