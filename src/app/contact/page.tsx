import Hero from "@/components/ContactPage/Hero";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact | Siddhesh Lakhani",
  description:
    "Get in touch with Siddhesh Lakhani, a passionate tech enthusiast and computer engineering student, ready to collaborate on innovative projects and share knowledge on technology and design.",
  url: "https://sidlakhani.in/contact",
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