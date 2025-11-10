import { cn } from "@/app/lib/utils";

export default function Button({className, ...props}: React.ComponentProps<"button">) {
    return(
        <button className={cn("px-3 py-1.5", className)} {...props}></button>
    );
}