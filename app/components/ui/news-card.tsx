import Link from "next/link";
import type { NewsCard } from "@/app/types/newsCard";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { timeAgo } from "@/app/lib/utils";

type Props = NewsCard & {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export default function NewsCard({
  title,
  description,
  url,
  imageUrl,
  category,
  publishedAt,
  className,
}: Props) {
  return (
    <Link href={url}>
      <div
        className={cn(
          "grid grid-cols-[132px_1fr] sm:flex sm:flex-col gap-3 group border-b border-border pb-2",
          className
        )}
      >
        {imageUrl && (
          <div className="aspect-video w-[132px] sm:w-full relative">
            <Image
              alt={`${title}-news-image`}
              src={imageUrl}
              fill
              className="object-cover group-hover:opacity-80"
            />
          </div>
        )}
        <div className="flex flex-col gap-3 font-serif">
          <h2 className="group-hover:underline font-medium leading-[22px] text-lg">
            {title}
          </h2>
          {description && (
            <p className={`text-sm leading-[18px] ${imageUrl ? "hidden sm:block" : ""}`}>
              {description}
            </p>
          )}

          {publishedAt && category && (
            <div className="flex gap-2 items-center font-sans text-xs leading-3.5 text-muted h-8">
              <span>{timeAgo(publishedAt)}</span>
              <span>|</span>
              <span>{category}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
