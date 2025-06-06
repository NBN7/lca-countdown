"use client";

import { useState, useMemo } from "react";
import { TimeUnit } from "@/components";
import { Button } from "@/components/ui/button";
import { TIME_GROUP } from "@/constants";
import { SwitchIcon } from "@/icons";
import type { TTimeUnit, TTimeGroup } from "@/types";

interface TimeDisplayProps {
  title: string;
  timeUnits: TTimeUnit[];
  percentage: number;
}

export const TimeDisplay = ({
  title,
  timeUnits,
  percentage,
}: TimeDisplayProps) => {
  const [activeGroup, setActiveGroup] = useState<TTimeGroup>(TIME_GROUP.ONE);

  const timeToDisplay = useMemo(() => timeUnits.filter((unit) => unit.group === activeGroup), [timeUnits, activeGroup]);

  const toggleActiveGroup = () => setActiveGroup((prev) => (prev === TIME_GROUP.ONE ? TIME_GROUP.TWO : TIME_GROUP.ONE));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between sm:justify-start sm:gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <Button variant="ghost" onClick={toggleActiveGroup}>
          <SwitchIcon className="size-5 text-muted-foreground" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {activeGroup === TIME_GROUP.TWO && <TimeUnit percentage={percentage} />}
        {timeToDisplay.map((timeUnit, i) => (
          <TimeUnit key={i} timeUnit={timeUnit} />
        ))}
      </div>
    </div>
  );
};
