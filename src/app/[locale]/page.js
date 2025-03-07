/* eslint-disable @next/next/no-async-client-component */
'use client'
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Card from "./components/Card";
export default   function Home() {
  

  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection  />
          <AchievementsSection  />
          <AboutSection  />
          {/* <ProjectsSection /> */}
          <EmailSection  />
          {/* <Card></Card> */}
        </div>
        <Footer />
      </main>
  );
}
