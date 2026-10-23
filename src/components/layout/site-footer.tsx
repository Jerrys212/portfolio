export const SiteFooter = ({ fullName, email, linkedinUrl }: { fullName: string; email: string; linkedinUrl: string }) => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border px-6 py-6 md:px-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-jet-black/60 sm:flex-row">
                <p>
                    © {year} {fullName}
                </p>
                <nav aria-label="Enlaces de contacto" className="flex items-center gap-5">
                    <a href={`mailto:${email}`} className="transition-colors hover:text-twilight-indigo">
                        Email
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-twilight-indigo">
                        LinkedIn
                    </a>
                </nav>
            </div>
        </footer>
    );
};
