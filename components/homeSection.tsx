"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import TypingEffect from "@/components/typingEffect";
export default function HomeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20 md:py-32"
    >
      {/* TEXTE (à gauche sur grand écran) */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Bonjour, je suis{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
            Kevin,
          </span>{" "}
        </h1>

       <TypingEffect />

        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Je crée des applications web modernes, performantes et scalables avec
          Next.js, React, Node.js et PostgreSQL.
        </p>

        {/* BOUTONS D'ACTION */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
          {/* Bouton Principal */}
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            Voir mes projets
          </Link>

          {/* Bouton Secondaire */}
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 text-gray-700 dark:text-gray-300 font-medium active:scale-98 transition-all duration-200"
          >
            Me contacter
          </Link>
          <a
            href="/CV RAZAFINDRATSIMBA Bruno Kevin.pdf"
            download="CV RAZAFINDRATSIMBA Bruno Kevin.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 active:scale-95 transition-all duration-200"
          >
            <Download size={17} />
            Télécharger mon CV
          </a>
        </div>
      </div>

      {/* PHOTO DE PROFIL (à droite sur grand écran) */}
      <div className="relative">
        {/* Un halo de lumière décoratif derrière la photo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-30 scale-105" />

        <Image
          src="/profile.jpg"
          alt="Kevin"
          width={200}
          height={200}
          className="relative rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-xl"
          priority
        />
      </div>
    </motion.section>
  );
}
