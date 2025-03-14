"use client";

import { navItems } from "../data";

import Hero from "../components/hero";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import Skills from "../components/Skills/Skills3D";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        
        <RecentProjects />
        
        <Experience />
  
        <Education />
        <Skills />
        <Footer />
      </div>
    </main>
  );
};

export default Home;