import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

import { VisitPing } from "@/components/analytics/visit-ping";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getGlobal } from "@/data/global/get-global";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const generateMetadata = async (): Promise<Metadata> => {
    const global = await getGlobal();

    return {
        title: global.seo?.metaTitle ?? `${global.fullName} — ${global.role}`,
        description: global.seo?.metaDescription,
    };
};

const RootLayout = async ({ children }: LayoutProps<"/">) => {
    const global = await getGlobal();

    return (
        <html lang="es" className={`${lexend.variable} h-full scroll-smooth antialiased`}>
            <body className="flex min-h-full flex-col bg-background text-foreground">
                <VisitPing />
                <SiteHeader name={global.name} cvUrl={global.cv?.url ?? null} />
                <main className="flex-1">{children}</main>
                <SiteFooter fullName={global.fullName} email={global.email} linkedinUrl={global.linkedinUrl} />
            </body>
        </html>
    );
};

export default RootLayout;
