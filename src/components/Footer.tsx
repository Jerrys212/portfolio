import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons";

const socialLinks = [
  { href: profile.githubUrl, icon: <GitHubIcon className="size-8" />, label: "GitHub" },
  { href: profile.linkedinUrl, icon: <LinkedInIcon className="size-8" />, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: <EmailIcon />, label: "Email" },
];

const textLinkClass = "text-icon hover:text-light transition duration-300 ease-in-out";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-divider">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="flex flex-col lg:items-start items-center">
            <div className="flex space-x-6 sm:space-x-8">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group" aria-label={link.label}>
                  <div className="text-icon hover:text-light transition duration-300 ease-in-out">
                    <div>{link.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-xs">
              <iframe
                style={{ borderRadius: "12px", border: 0 }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                className="w-full h-40"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-divider">
          <p className="text-center text-sm text-icon space-y-2">
            {/* If you are using this template, by MIT License you can't remove the copyright notice */}
            <span className="block sm:inline">
              Copyright © {currentYear} {profile.fullName}. {dict.rights} {dict.templateBy} <a target="_blank" rel="noopener noreferrer" className={textLinkClass} href="https://github.com/Gothsec">Andres Hernandez</a> <br /> {dict.distributedBy} <a target="_blank" rel="noopener noreferrer" className={textLinkClass} href="https://themewagon.com">ThemeWagon</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
