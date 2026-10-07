"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/** Delay between siblings entering, mirrors --motion-stagger in globals.css. */
export const STAGGER_MS = 70;

/** True once the element has entered the viewport; never goes back to false. */
function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}

/**
 * Fade-and-rise on first entry into the viewport. Runs once, then stops
 * observing. Hidden only when JavaScript runs (html.js); off under
 * prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
} & Record<string, unknown>) {
  const [ref, visible] = useInViewOnce<HTMLElement>();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Grid whose items enter one after another when the grid scrolls into
 * view. Each child is wrapped in a single-cell grid so cards stretch to
 * the row height, which keeps every card in a row equally tall.
 */
export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [ref, visible] = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={`stagger ${visible ? "is-visible" : ""} ${className}`}>
      {Children.toArray(children).map((child, i) => (
        <div
          key={isValidElement(child) && child.key != null ? child.key : i}
          className="grid"
          style={{ "--i": Math.min(i, 6) } as CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
