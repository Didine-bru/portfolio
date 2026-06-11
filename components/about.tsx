"use client";

import { motion } from "framer-motion";

export default function About() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["ReactJS/TS", "Next.js", "Tailwind CSS", "React Native"],
    },
    {
      name: "Backend & Langages",
      skills: ["Node.js", "Express", "TypeScript", "Python", "PHP"],
    },
    {
      name: "Bases de données",
      skills: ["MySQL", "PostgreSQL", "Oracle DB", "UML / MERISE"],
    },
    {
      name: "Systèmes & Outils",
      skills: ["Linux", "Git / GitHub", "Windows Server", "PowerBI"],
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 border-t border-gray-100 dark:border-zinc-900"
    >
      {/* Surtitre */}
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
        Présentation
      </p>

      {/* Titre */}
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10">
        À propos de moi
      </h2>

      {/* Grille principale */}
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
        {/* Colonne gauche : texte + certification */}
        <div className="lg:col-span-2 space-y-6 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          <p>
            Passionné par le développement web, je crée des solutions modernes,
            robustes et efficaces. Mon ambition est de grandir dans un cadre
            propice à l&apos;excellence.
          </p>
          <p>
            Je recherche une équipe innovante au sein de laquelle je pourrai
            mettre mes compétences en valeur et participer à des projets à fort
            impact.
          </p>

          {/* Badge certification */}
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-950 bg-amber-50/40 dark:bg-amber-950/10 space-y-2">
            <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-400 uppercase">
              🏆 Certification Récente
            </span>
            <h4 className="font-bold text-gray-900 dark:text-white text-base">
              Oracle Cloud Infrastructure (OCI)
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              2025 : Certified Foundation Associate & Certified Architect
              Associate
            </p>
          </div>
           <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-950 bg-amber-50/40 dark:bg-amber-950/10 space-y-2">
            <span className="text-xs font-bold tracking-wider text-amber-700 dark:text-amber-400 uppercase">
              🏆 Certification Récente
            </span>
            <h4 className="font-bold text-gray-900 dark:text-white text-base">
              Certification Orange digital center
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              2025 : Certified fullstack developer with Node.js & MongoDB
            </p>
          </div>
        </div>

        {/* Colonne droite : hexagones par catégorie */}
        
        <div className="lg:col-span-3 space-y-5 lg:pl-8">
           <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            Mes technologies de prédilection :
          </h3>
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              {/* Nom de la catégorie */}
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                {category.name}
              </h3>

              {/* Grille d'hexagones */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="hexagon w-16 h-[70px] flex items-center justify-center bg-gray-100 dark:bg-zinc-800 hover:bg-indigo-500 dark:hover:bg-indigo-600 cursor-pointer"
                  >
                    <span className="text-gray-700 dark:text-gray-300 hover:text-white text-[9px] font-semibold text-center px-1 leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
