import { cn } from "@/app/lib/utils";

export default function DownArrow({ className }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      className={cn(className)}
    >
      <path d="M26.7 12.6 16 23.2 5.3 12.6V8.8h21.4v3.8z"></path>
    </svg>
  );
}
