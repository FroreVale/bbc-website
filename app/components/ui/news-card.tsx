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
      <div className={cn(className)}>
        {imageUrl && (
          <Image
            alt={`${title}-news-image`}
            src={imageUrl}
            width={1600}
            height={900}
            className="aspect-video w-full object-cover"
          />
        )}
        <h2>{title}</h2>
        {description && <p>{description}</p>}

        {publishedAt && category && (
          <div>
            <span>{timeAgo(publishedAt)}</span>
            <span>{category}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
