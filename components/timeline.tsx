"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Timeline() {
  const experiences = [
    {
      year: "2025",
      title: "Chrystal Tech Services",
      subtitle: "Optimisation & Gestion des données",
      description:
        "Identification et correction des anomalies de données, optimisation des bases de données Oracle et renforcement de l'intégrité et de la sécurité des données.",
    },
    {
      year: "2023 - 2024",
      title: "Ministère de l'Intérieur de Madagascar",
      subtitle: "Stage - Automatisation & Flux",
      description:
        "Analyse des flux d'informations administratifs, renforcement de la conformité des données et création d'outils numériques pour automatiser le suivi.",
    },
    {
      year: "2021 - 2022",
      title: "Banque Of Africa Madagascar",
      subtitle: "Stage - Gestion des Stocks",
      description:
        "Conception d'un module de gestion des stocks fiable avec une interface utilisateur intuitive pour optimiser la précision des inventaires.",
    },
    {
      year: "2019 - 2020",
      title: "Atout Service Madagascar",
      subtitle: "Stage - Plateforme financière & Administration",
      description:
        "Création d'une plateforme Multi-Cash Points avec CodeIgniter 4, administration de Microsoft Server, déploiement de services et sécurité réseau.",
    },
  ];

  const education = [
    {
      year: "2023 - 2024",
      title: "Master en Informatique",
      subtitle: "École Nationale d'Informatique (ENI)",
      description:
        "Études avancées en génie logiciel, architecture réseau, et gestion de projets.",
    },
    {
      year: "2021 - 2022",
      title: "Licence en Informatique",
      subtitle: "École Nationale d'Informatique (ENI)",
      description:
        "Bases solides en algorithmique, programmation web/mobile et bases de données.",
    },
    {
      year: "2018",
      title: "Baccalauréat Série C",
      subtitle: "Lycée Jules Ferry",
      description:
        "Série scientifique orientée Mathématiques et Sciences Physiques.",
    },
  ];

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 border-t border-gray-100 dark:border-zinc-900"
    >
      {/* Surtitre */}
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
        Mon parcours
      </p>

      {/* Titre principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-12">
        Expériences & Études
      </h2>

      {/* Grille : Expériences à gauche, Formations à droite */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* COLONNE GAUCHE : EXPÉRIENCES */}
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-2.5">
            <Briefcase
              size={20}
              className="text-indigo-600 dark:text-indigo-400"
            />{" "}
            Expériences Professionnelles
          </h3>

          <div className="relative border-l border-gray-200 dark:border-zinc-800 ml-3 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-6">
                {/* Le petit point sur la ligne */}
                <div className="absolute w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white dark:ring-zinc-950" />

                {/* Contenu */}
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {exp.year}
                </span>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">
                  {exp.title}
                </h4>
                <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {exp.subtitle}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE : FORMATIONS */}
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex items-center gap-2.5">
            <GraduationCap
              size={22}
              className="text-indigo-600 dark:text-indigo-400"
            />{" "}
            Diplômes & Études
          </h3>

          <div className="relative border-l border-gray-200 dark:border-zinc-800 ml-3 space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6">
                {/* Le petit point sur la ligne */}
                <div className="absolute w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white dark:ring-zinc-950" />

                {/* Contenu */}
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {edu.year}
                </span>
                <h4 className="font-bold text-gray-900 dark:text-white text-base">
                  {edu.title}
                </h4>
                <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {edu.subtitle}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
