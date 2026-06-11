"use client";

import { useEffect, useState } from "react";

const titles = [
  "Développeur Full Stack",
  "Passionné par le Web",
  "Créateur de solutions modernes",
];

const TYPING_SPEED = 80;
const ERASING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_ERASE = 400;

export default function TypingEffect() {
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Effet curseur clignotant
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Effet typing / erasing
  useEffect(() => {
    const currentTitle = titles[titleIndex];

    if (isTyping) {
      // On est en train d'écrire
      if (displayedText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        // Texte complet → pause avant d'effacer
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_AFTER_TYPE);
        return () => clearTimeout(timeout);
      }
    } else {
      // On est en train d'effacer
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, ERASING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        // Texte effacé → pause puis titre suivant
        const timeout = setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }, PAUSE_AFTER_ERASE);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isTyping, titleIndex]);

  return (
    <span className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
      {displayedText}
      <span
        className={`ml-0.5 inline-block w-0.5 h-5 bg-indigo-500 align-middle transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}