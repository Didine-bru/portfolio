"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon  } from "lucide-react";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 border-t border-gray-100 dark:border-zinc-900"
    >
      
     
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
        Travaux
      </p>

      {/* Titre principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10">
        Mes projets
      </h2>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-gray-100 dark:border-zinc-900 rounded-2xl p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Titre du projet */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              {/* Technologies utilisées */}
              <div className="flex gap-2 flex-wrap mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Liens (GitHub & Démo) */}
                            {/* Liens (GitHub & Démo) */}
              <div className="flex gap-6 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                  >
                    <ExternalLinkIcon  size={16} />
                    Démo en ligne
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </motion.section>
  );
}