import { Card } from "@/components/ui/card";
import type { TTimeUnit } from "@/types";

export const TimeUnit = ({ value, label }: TTimeUnit) => {
  return (
    <Card className="flex flex-col items-center justify-center p-4 aspect-square">
      <span className="text-4xl font-bold tabular-nums transition-all duration-300">
        {value}
      </span>
      <span className="text-sm text-muted-foreground mt-2">{label}</span>
    </Card>
  );
};
