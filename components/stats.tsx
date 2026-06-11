"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Rocket, Trophy, Wrench } from "lucide-react";

const stats = [
  { label: "Années d'expérience", value: 3, suffix: "+", icon: CalendarDays },
  { label: "Projets réalisés", value: 5, suffix: "+", icon: Rocket },
  { label: "Certifications Oracle", value: 2, suffix: "", icon: Trophy },
  { label: "Technologies maîtrisées", value: 20, suffix: "+", icon: Wrench },
];

function useCounter(target: number, duration: number = 1500, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({
  label,
  value,
  suffix,
  icon: Icon,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(value, 1500, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <Icon className="w-8 h-8 mb-3 text-indigo-500" strokeWidth={1.5} />
      <span className="text-4xl font-bold text-black dark:text-white">
        {count}
        <span className="text-indigo-500">{suffix}</span>
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 border-t border-gray-100 dark:border-zinc-900"
    >
      {/* Surtitre */}
      <p className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
        Chiffres clés
      </p>

      {/* Titre */}
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10">
        En quelques chiffres
      </h2>

      {/* Grille de stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.section>
  );
}
