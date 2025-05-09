"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import blogsData from "@/blogs.json";
import Header from "../universal/Header";
import Footer from "../universal/Footer";
import MarkdownRenderer from "./MarkdownRenderer";
import PageHeader from "../universal/PageHeader";

interface Blog {
  id: number;
  title: string;
  date: string;
  blogContent: string;
  slugUrl: string;
}

export default function BlogPage({ slugUrl }: { slugUrl: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    if (!slugUrl) return;

    const blogs: Blog[] = Object.values(blogsData);
    const foundBlog = blogs.find((b) => b.slugUrl === slugUrl) || null;

    if (foundBlog) {
      setBlog(foundBlog);

      const cleanPath = foundBlog.blogContent
        .replace(/^\/+|\/+$/g, "")
        .replace(/\s+/g, "-");

      const fetchStrategies = [
        `/${cleanPath}`,
        `/blogs/${cleanPath}`,
        cleanPath,
      ];

      const fetchContent = async () => {
        for (const path of fetchStrategies) {
          try {
            const response = await fetch(path);
            if (response.ok) {
              const text = await response.text();
              setMarkdownContent(text);
              return;
            }
          } catch (error) {
            console.error(`Failed to fetch from path: ${path}`, error);
          }
        }

        setMarkdownContent(
          "Unable to load blog content. Please check the file path."
        );
        console.error("All fetch strategies failed for path:", cleanPath);
      };

      fetchContent();
    }
  }, [slugUrl]);

  if (!blog) {
    return (
      <div>
        <Header />
        <p className="text-center mt-20">Blog not found or loading...</p>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-full w-full px-[10%] lg:px-[20%]">
        <PageHeader
          title={blog.title}
          subtitle={`${blog.date} ~ Siddhesh Lakhani`}
        />
        <div className="flex flex-col justify-center gap-8 md:p-8">
          <MarkdownRenderer content={markdownContent} />
          <Link href="/blogs">
            <button className="cursor-pointer mb-8 rounded-xl border font-montserrat font-bold text-xs px-4 py-2">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
