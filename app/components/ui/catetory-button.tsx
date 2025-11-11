import { cn } from "@/app/lib/utils";
import { ComponentProps } from "react";

export default function CategoryButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
      <button className={cn(className)} {...props}></button>
  );
}
