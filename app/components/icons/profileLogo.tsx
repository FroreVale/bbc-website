import { cn } from "@/app/lib/utils";
import { ComponentProps } from "react";

export default function ProfileLogo({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <div className={cn(className)}>
      <svg
        width={32}
        height={32}
        fill="none"
        style={{
          fill: "none",
          height: 20,
          pointerEvents: "none",
        }}
        viewBox="0 0 19 18"
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.5 9.843A4.43 4.43 0 0 1 5 5.483a4.43 4.43 0 0 1 4.5-4.358A4.43 4.43 0 0 1 14 5.484a4.43 4.43 0 0 1-4.5 4.36zm-7.875 7.032c0-3.31 4.23-5.625 7.883-5.625 3.637 0 7.867 2.317 7.867 5.621 0 .003-15.75.004-15.75.003z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
