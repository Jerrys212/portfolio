"use client";

import { useEffect, useRef, useState } from "react";

export default function SpotifyEmbed({ src }: { src: string }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" },
        );
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-40 rounded-xl bg-surface">
            {visible && (
                <iframe
                    title="Spotify playlist"
                    style={{ borderRadius: "12px", border: 0 }}
                    src={src}
                    className="w-full h-40"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
            )}
        </div>
    );
}
