import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Gerardo García Medina — Full Stack Developer",
    description:
        "Desarrollador Full Stack especializado en Node.js y el ecosistema React/Next.js. Interfaces con shadcn/ui y Radix UI, pruebas con RTL y Playwright, despliegues en Vercel.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="es" className={`${lexend.variable} h-full scroll-smooth antialiased`}>
            <body className="flex min-h-full flex-col bg-background text-foreground">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
};

export default RootLayout;
