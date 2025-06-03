"use client";

import { useState } from "react";
import { TimeUnit } from "@/components";
import { Button } from "@/components/ui/button";
import { TIME_GROUP } from "@/constants";
import { SwitchIcon } from "@/icons";
import type { TTimeUnit, TTimeGroup } from "@/types";

interface TimeDisplayProps {
  title: string;
  timeUnits: TTimeUnit[];
}

export const TimeDisplay = ({ title, timeUnits }: TimeDisplayProps) => {
  const [groupTime, setTimeGroup] = useState<TTimeGroup>(TIME_GROUP.ONE);

  const groupOne = timeUnits.filter((unit) => unit.group === 1);
  const groupTwo = timeUnits.filter((unit) => unit.group === 2);

  const timeToDisplay = groupTime === 1 ? groupOne : groupTwo;

  const toggleTimeType = () => setTimeGroup((prev) => (prev === 1 ? 2 : 1));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between sm:justify-start sm:gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <Button variant="ghost" onClick={toggleTimeType}>
          <SwitchIcon className="size-5 text-muted-foreground" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {timeToDisplay.map((timeUnit, i) => (
          <TimeUnit key={i} timeUnit={timeUnit} />
        ))}
      </div>
    </div>
  );
};
