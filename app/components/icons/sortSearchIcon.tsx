import { cn } from "@/app/lib/utils";

export default function SortSearchIcon({className}: React.ComponentProps<"svg">) {
  return (
    <svg className={cn(className)} width={50} height={30} fill="none" viewBox="0 0 80 48">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M66.852 32.084a13.48 13.48 0 0 0 2.68-8.088c0-7.476-6.06-13.536-13.535-13.536S42.46 16.52 42.46 23.996s6.06 13.536 13.536 13.536c3 0 5.773-.976 8.017-2.629l5.076 5.077 2.829-2.829zm-3.695-1.727a9.54 9.54 0 0 0 2.417-6.361 9.577 9.577 0 0 0-9.577-9.577 9.577 9.577 0 1 0 0 19.154c2.441 0 4.67-.913 6.36-2.417zm-27.439 3.34H10.025v4h28.049a23 23 0 0 1-2.356-4m-2.033-11.699H10.027v4h23.658a23.5 23.5 0 0 1 0-4m4.39-11.698H10.027v4H35.72a23 23 0 0 1 2.356-4"
        clipRule="evenodd"
      />
    </svg>
  );
}
