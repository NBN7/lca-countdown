import { Card } from "@/components/ui/card";
import type { TTimeUnit } from "@/types";

interface TimeUnitProps {
  timeUnit: TTimeUnit;
}

export const TimeUnit = ({ timeUnit }: TimeUnitProps) => {
  return (
    <Card className="flex flex-col items-center justify-center p-4 aspect-square">
      <span className="text-4xl font-bold tabular-nums transition-all duration-300">
        {timeUnit.value}
      </span>
      <span className="text-sm text-muted-foreground mt-2">
        {timeUnit.label}
      </span>
    </Card>
  );
};
