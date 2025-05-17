"use client";

import { useState } from "react";
import { TimeUnit } from "@/components";
import { Button } from "@/components/ui/button";
import { TIME_TYPE } from "@/constants";
import { SwitchIcon } from "@/icons";
import type { TTimeUnit, TTimeType } from "@/types";

interface TimeDisplayProps {
  title: string;
  timeUnits: TTimeUnit[];
}

export const TimeDisplay = ({ title, timeUnits }: TimeDisplayProps) => {
  const [timeType, setTimeType] = useState<TTimeType>(TIME_TYPE.INTEGER);

  const isDecimal = timeType === TIME_TYPE.DECIMAL;
  const timeToDisplay = timeUnits.filter((unit) =>
    isDecimal
      ? unit.value.toString().includes(".")
      : !unit.value.toString().includes(".")
  );

  const toggleTimeType = () => {
    setTimeType((prev) =>
      prev === TIME_TYPE.INTEGER ? TIME_TYPE.DECIMAL : TIME_TYPE.INTEGER
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between sm:justify-start sm:gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <Button variant="ghost" onClick={toggleTimeType}>
          <SwitchIcon className="size-5 text-muted-foreground" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {timeToDisplay.map(({ value, label }, i) => (
          <TimeUnit key={i} value={value} label={label} />
        ))}
      </div>
    </div>
  );
};
