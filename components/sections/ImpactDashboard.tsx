import { ImpactStat } from "./ImpactStat";
import { Stagger } from "@/components/ui/Reveal";
import { IMPACT_METRICS } from "@/data/content";
import type { ImpactMetric } from "@/lib/types";

export function ImpactDashboard({
  metrics = IMPACT_METRICS,
  tone = "light",
  columns = 3,
  size = "md",
}: {
  metrics?: ImpactMetric[];
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  size?: "md" | "lg";
}) {
  const cols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <Stagger className={`grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 lg:gap-x-12 lg:gap-y-14 ${cols}`}>
      {metrics.map((m) => (
        <ImpactStat key={m.id} metric={m} tone={tone} size={size} />
      ))}
    </Stagger>
  );
}
