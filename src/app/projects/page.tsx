import ProjectCards from "@/components/ProjectsPage/ProjectCards";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProjectCards />
      <Footer />
    </div>
  );
}
