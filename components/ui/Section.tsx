import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "paper" | "paper2" | "white" | "dark" | "green";

const BG: Record<Tone, string> = {
  paper: "bg-paper",
  paper2: "bg-paper-2",
  white: "bg-surface",
  dark: "bg-ink-950 on-dark text-on-dark",
  green: "bg-green-900 on-dark text-on-dark",
};

export function Section({
  id,
  tone = "paper",
  children,
  className = "",
  size = "md",
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const pad = size === "sm" ? "py-section-sm" : size === "lg" ? "py-section-lg" : "py-section";
  return (
    <section id={id} className={`scroll-mt-24 ${pad} ${BG[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
