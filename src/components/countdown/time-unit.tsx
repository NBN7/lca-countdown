import { Card } from "@/components/ui/card";
import type { TTimeUnit } from "@/types";

interface TimeUnitProps {
  timeUnit?: TTimeUnit;
  percentage?: number;
}
export const TimeUnit = ({ timeUnit, percentage }: TimeUnitProps) => {
  const isPercentage = percentage !== undefined;

  return (
    <Card className="flex flex-col items-center justify-center p-4 aspect-square">
      <span className="text-4xl font-bold tabular-nums transition-all duration-300">
        {isPercentage ? `${percentage}%` : timeUnit?.value}
      </span>
      <span className="text-sm text-muted-foreground mt-2">
        {isPercentage ? "porcentaje" : timeUnit?.label}
      </span>
    </Card>
  );
};
