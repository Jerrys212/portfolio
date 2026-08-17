import { cn } from "@/lib/utils";

export const RotatedSquare = ({ className }: { className?: string }) => (
    <div aria-hidden="true" className={cn("pointer-events-none rotate-12 rounded-[10px] border-2 border-periwinkle", className)} />
);

export const PlusMark = ({ className }: { className?: string }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={cn("pointer-events-none", className)}>
        <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
);
