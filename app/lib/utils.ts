import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function timeAgo(date: Date | string): string {
  if (!date) return "";                        // nothing to show

  const past = new Date(date);
  if (isNaN(past.getTime())) return "";        // invalid date -> return empty

  const now = new Date();
  const diff = (now.getTime() - past.getTime()) / 1000;

  const units: [number, string][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hr"],
    [7, "day"],
    [4.34524, "week"],
    [12, "month"],
    [Number.POSITIVE_INFINITY, "year"],
  ];

  let value = diff;
  let unit = "second";

  for (let i = 0; i < units.length; i++) {
    if (value < units[i][0]) break;
    value /= units[i][0];
    unit = units[i][1];
  }

  const rounded = Math.floor(value);
  if (rounded <= 0) return "just now";

  const plural = rounded === 1 ? "" : "s";
  return `${rounded} ${unit}${plural} ago`;
}



