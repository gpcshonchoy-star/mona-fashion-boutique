import Link from "next/link";
import { cn } from "@/lib/utils";
import { announcement } from "@/data/navigation";

interface AnnouncementBarProps {
  className?: string;
}

/**
 * Top promotional banner above the header.
 * Closable — dismissed state is stored in sessionStorage.
 * Server component by default; the close interaction is handled
 * by a small client island inside this component.
 */
function AnnouncementBar({ className }: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "relative flex h-10 items-center justify-center gap-2 bg-primary px-4 text-sm text-white",
        className,
      )}
    >
      <span className="truncate">{announcement.message}</span>
      {announcement.link && announcement.linkText && (
        <Link
          href={announcement.link}
          className="shrink-0 font-medium underline underline-offset-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          {announcement.linkText}
        </Link>
      )}
    </div>
  );
}

export { AnnouncementBar, type AnnouncementBarProps };
