import type { TTimeUnit } from "@/types";

export const calculateTimeUnits = (ms: number): TTimeUnit[] => {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const weeks = parseFloat((ms / (1000 * 60 * 60 * 24 * 7)).toFixed(2));
  const months = parseFloat((ms / (1000 * 60 * 60 * 24 * 30)).toFixed(2));
  const years = parseFloat((ms / (1000 * 60 * 60 * 24 * 365)).toFixed(2));

  return [
    { value: years, label: "años", group: 2 },
    { value: months, label: "meses", group: 2 },
    { value: weeks, label: "semanas", group: 2 },
    { value: days, label: "días", group: 1 },
    { value: hours, label: "horas", group: 1 },
    { value: minutes, label: "minutos", group: 1 },
    { value: seconds, label: "segundos", group: 1 },
  ];
};
