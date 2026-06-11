"use client"; // Obligatoire pour utiliser les hooks React (useState) et Framer Motion

import { useState } from "react";
import { CheckCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  //  Nos "variables mémoire" (les états)
  const [isLoading, setIsLoading] = useState(false);   // Gère l'effet d'attente pendant l'envoi
  const [isSubmitted, setIsSubmitted] = useState(false); // Retient si le message a été envoyé avec succès

  //  La fonction qui s'exécute lors du clic sur le bouton "Envoyer"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Bloque le rechargement de la page
    setIsLoading(true); // Démarre le chargement (bouton "Envoi en cours...")

    // On simule un temps d'attente de 1,2 seconde (comme si le message voyageait sur internet)
    setTimeout(() => {
      setIsLoading(false);   // Arrête le chargement
      setIsSubmitted(true); // Affiche le message de succès
    }, 1200);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 border-t border-gray-100 dark:border-zinc-900"
    >
      
      {/* Surtitre */}
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
        Contact
      </p>

      {/* Titre principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10">
        Contactez-moi
      </h2>

      {/* Condition : Si le message est envoyé, on montre le succès. Sinon, on montre le formulaire. */}
      {isSubmitted ? (
        
        // --- MESSAGE DE SUCCÈS ---
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl border border-green-200 dark:border-green-950 bg-green-50/50 dark:bg-green-950/20 max-w-lg text-center space-y-4"
        >
          <CheckCircleIcon size={48} className="text-green-500 dark:text-green-400 mx-auto" />
          <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
            Message envoyé !
          </h3>
          <p className="text-green-700 dark:text-green-400">
            Merci pour votre intérêt. Je vous répondrai dans les plus brefs délais !
          </p>
          <button
            onClick={() => setIsSubmitted(false)} // Permet de réinitialiser pour envoyer un autre message
            className="text-sm font-semibold text-green-800 dark:text-green-300 underline hover:no-underline pt-2 block mx-auto"
          >
            Envoyer un autre message
          </button>
        </motion.div>

      ) : (

        // --- FORMULAIRE DE SAISIE ---
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
          
          {/* Champ Nom */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Votre nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Insérer votre nom"
              className="w-full border border-gray-200 dark:border-zinc-800 p-3.5 rounded-xl bg-white/50 dark:bg-zinc-900/50 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              required
            />
          </div>

          {/* Champ Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Votre adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Insérer votre adresse e-mail"
              className="w-full border border-gray-200 dark:border-zinc-800 p-3.5 rounded-xl bg-white/50 dark:bg-zinc-900/50 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              required
            />
          </div>

          {/* Champ Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Votre message
            </label>
            <textarea
              id="message"
              placeholder="Insérer votre message..."
              rows={5}
              className="w-full border border-gray-200 dark:border-zinc-800 p-3.5 rounded-xl bg-white/50 dark:bg-zinc-900/50 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
              required
            />
          </div>

          {/* Bouton d'envoi dynamique */}
          <button
            type="submit"
            disabled={isLoading} // Empêche de cliquer plusieurs fois pendant l'envoi
            className="mt-2 w-full py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? "Envoi en cours..." : "Envoyer le message"}
          </button>

        </form>
      )}

    </motion.section>
  );
}