"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type NavKey = "home" | "experience" | "projects" | "contact";

const navItems: { key: NavKey; href: string; icon: ReactNode }[] = [
  {
    key: "home",
    href: "#home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
    ),
  },
  {
    key: "experience",
    href: "#experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path></svg>
    ),
  },
  {
    key: "projects",
    href: "#projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>
    ),
  },
  {
    key: "contact",
    href: "#contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>
    ),
  },
];

const languageIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-full h-full"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
);

const maxScroll = 1000;
const minWidth = 600;

export default function Nav({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [scrolling, setScrolling] = useState(false);
  const [width, setWidth] = useState<string>();
  const [activeId, setActiveId] = useState<string | null>(null);
  const otherLang: Locale = lang === "es" ? "en" : "es";

  useEffect(() => {
    let rafId: number | null = null;

    const updateNav = () => {
      if (window.scrollY > 0) {
        setScrolling(true);

        const scrollProgress = Math.min(window.scrollY / maxScroll, 1);
        const easeProgress = 1 - Math.pow(1 - scrollProgress, 4);
        const maxWidth = window.innerWidth * 0.8;
        const currentWidth = maxWidth - (maxWidth - minWidth) * easeProgress;

        if (window.innerWidth >= 768) {
          setWidth(`${currentWidth}px`);
        }
      } else {
        setScrolling(false);
        setWidth("80%");
      }
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateNav);
      }
    };

    updateNav();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const onAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1) || "";
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", onAnchorClick));
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", onAnchorClick),
      );
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.6 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center w-full">
      <nav
        id="main-nav"
        className={`fixed left-1/2 -translate-x-1/2 z-[100] bg-background border border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%]${scrolling ? " scrolling" : ""}`}
        style={width ? { width } : undefined}
      >
        <div className="container mx-auto flex justify-center items-center p-3">
          <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-6 gap-2">
            {navItems.map((item) => (
              <li key={item.key} className="flex-1 md:flex-none">
                <a
                  href={item.href}
                  className={`flex flex-col items-center gap-1 text-icon transition-colors text-xs md:text-base relative group${activeId && item.href === `#${activeId}` ? " active" : ""}`}
                >
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-indicator nav-indicator hidden md:block" />
                  <span className="md:hidden flex items-center justify-center w-6 h-6">
                    {item.icon}
                  </span>
                  <span className="hidden md:inline-block">{dict[item.key]}</span>
                  <span className="md:hidden">{dict[item.key]}</span>
                </a>
              </li>
            ))}
            <li className="flex-1 md:flex-none">
              <Link
                href={`/${otherLang}`}
                scroll={false}
                hrefLang={otherLang}
                aria-label={dict.switchAria}
                className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-icon hover:text-white transition-colors text-xs md:text-base md:border md:border-icon-tr md:rounded-full md:px-3"
              >
                <span className="flex items-center justify-center w-6 h-6 md:w-4 md:h-4">
                  {languageIcon}
                </span>
                <span>{dict.switchLabel}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
