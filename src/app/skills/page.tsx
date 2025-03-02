import Hero from "@/components/SkillsPage/Hero";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen min-w-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}