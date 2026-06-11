import HomeSection from "@/components/homeSection";
import About from "@/components/about";
import Projects from "@/components/project";
import Stats from "@/components/stats";  
import Contact from "@/components/contact";
import Timeline from "@/components/timeline";
import ScrollToTop from "@/components/scrollToTop";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto space-y-32">
        <HomeSection />
        <About />
        <Timeline />
        <Projects />
        <Stats />
        <Contact />
        <ScrollToTop />
        <Footer />  
      </div>
    </main>
  );
}

