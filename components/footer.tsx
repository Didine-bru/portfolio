import { GithubIcon, LinkedinIcon, MailIcon, FacebookIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-zinc-900 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Nom */}
        <p className="text-sm font-bold text-black dark:text-white">
          Kevin.dev
        </p>

        {/* Icônes réseaux sociaux */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/VOTRE-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <GithubIcon size={20} />
          </a>

          <a
            href="https://linkedin.com/in/VOTRE-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <LinkedinIcon size={20} />
          </a>

          <a
            href="mailto:votre@email.com"
            aria-label="Email"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <MailIcon size={20} />
          </a>
          <a
            href="https://facebook.com/VOTRE-PROFIL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200"
          >
            <FacebookIcon size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 dark:text-gray-600">
          © 2025 Kevin. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
