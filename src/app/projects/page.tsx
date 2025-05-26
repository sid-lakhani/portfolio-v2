import ProjectCards from "@/components/ProjectsPage/ProjectCards";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import { constructMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = constructMetadata({
  title: "Projects | Siddhesh Lakhani",
  description:
    "Discover the innovative projects by Siddhesh Lakhani, where tech meets creativity. Explore my work on web development, machine learning, and game design.",
  url: "https://sidlakhani.in/projects",
});

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProjectCards />
      <Footer />
    </div>
  );
}
