import React from "react";
import PageHeader from "../universal/PageHeader";
import blogPosts from "@/blogs/blogs.json";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  blogContent: string;
  slugUrl: string;
  date: string;
  tags: string[];
  image?: string;
}

export default function BlogSection() {
  return (
    <div className="min-h-screen w-full px-[10%] lg:px-[20%] flex flex-col items-center">
      <PageHeader
        title="Read My Journey"
        subtitle="Simple reflections on building better—tech, systems, and self."
      />

      <div className="mt-8 w-full max-w-4xl flex flex-col gap-8">
        {Object.values(blogPosts).map((post: BlogPost, index) => (
          <div
            key={index}
            className={`w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-6 flex ${
              post.image ? "flex-row" : "flex-col"
            } gap-6 items-center`}
          >
            {/* Left: Textual content */}
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
              <Link
                href={`/blogs/${post.slugUrl}`}
                className="self-start text-accent hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>

            {/* Right: Image (only if valid) */}
            {post.image?.trim() && (
              <div className="w-52 h-52 relative flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
