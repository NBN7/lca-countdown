"use client";

import { useState, useEffect } from "react";
import { TimeDisplay } from "@/components";
import { OPERATION_DATE, TARGET_DATE } from "@/constants";
import { calculateTimeUnits } from "@/utils";
import type { TTimeUnit } from "@/types";

export const Countdown = () => {
  const [elapsed, setElapsed] = useState<TTimeUnit[]>([]);
  const [remaining, setRemaining] = useState<TTimeUnit[]>([]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const elapsedMs = now.getTime() - OPERATION_DATE.getTime();
      const elapsedUnits = calculateTimeUnits(Math.max(0, elapsedMs));
      setElapsed(elapsedUnits);

      const remainingMs = TARGET_DATE.getTime() - now.getTime();
      const remainingUnits = calculateTimeUnits(Math.max(0, remainingMs));
      setRemaining(remainingUnits);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-dvh p-4">
      <div className="w-full max-w-3xl space-y-8">
        <TimeDisplay title="Tiempo transcurrido" timeUnits={elapsed} />
        <TimeDisplay title="Tiempo restante" timeUnits={remaining} />
      </div>
    </main>
  );
};
