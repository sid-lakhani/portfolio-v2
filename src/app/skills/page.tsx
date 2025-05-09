import Hero from "@/components/SkillsPage/Hero";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import { constructMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = constructMetadata({
  title: "Skills | Siddhesh Lakhani",
  description:
    "Explore the technical skills and expertise of Siddhesh Lakhani, covering areas such as web development, linux, machine learning, and more.",
  url: "https://sidlakhani.tech/skills",
});

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}