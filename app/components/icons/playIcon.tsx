import { cn } from "@/app/lib/utils";
import { ComponentProps } from "react";

export default function PlayIcon({className}: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="3em"
      height="3em"
      data-testid="inline-icon"
      className={cn(className)}
    >
      <path d="M29 16 5.8 1v30L29 16z" />
    </svg>
  );
}
