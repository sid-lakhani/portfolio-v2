import BlogSection from "@/components/BlogsPage/BlogSection";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import { constructMetadata } from "@/lib/metadata";
import React from "react";

export const metadata = constructMetadata({
  title: "Blogs | Siddhesh Lakhani",
  description:
    "Explore insightful blogs by Siddhesh Lakhani, where technology, coding, and design come together. Dive deep into innovative concepts and trends shaping the future of tech.",
  url: "https://sidlakhani.in/blogs",
});


export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
}
