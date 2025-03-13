import { TimeUnit } from "@/components";
import type { TTimeUnit } from "@/types";

interface TimeDisplayProps {
  title: string;
  timeUnits: TTimeUnit[];
}

export const TimeDisplay = ({ title, timeUnits }: TimeDisplayProps) => {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <TimeUnit key={index} value={unit.value} label={unit.label} />
        ))}
      </div>
    </div>
  );
};
