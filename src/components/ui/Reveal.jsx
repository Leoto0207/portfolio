import { useInView } from "../../hooks/useInView";

/** Fades/slides children up the first time they scroll into view. */
export default function Reveal({ as = "div", delay = 0, className = "", children }) {
  const Tag = as;
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
