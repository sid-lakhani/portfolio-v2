import Hero from "@/components/AboutPage/Hero";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import { constructMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = constructMetadata({
  title: "About | Siddhesh Lakhani",
  description:
    "Learn more about Siddhesh Lakhani, a computer engineering student with a passion for technology, innovation, and solving real-world challenges through code and design.",
  url: "https://sidlakhani.in/about",
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
