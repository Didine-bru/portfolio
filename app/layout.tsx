import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Providers from "./providers";
import ScrollProgressBar from "@/components/scrollProgressBar";

// On initialise la police Inter avec les graisses dont on a besoin
const inter = Inter({
  subsets: ["latin"],        // On charge uniquement les caractères latins (français inclus)
  weight: ["400", "500", "600", "700", "800"], // Normal, Medium, SemiBold, Bold, ExtraBold
  variable: "--font-inter",  // On crée une variable CSS pour pouvoir l'utiliser partout
});

export const metadata = {
  title: "Portfolio - Kevin",
  description: "Portfolio développeur Full Stack",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
           <ScrollProgressBar />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}