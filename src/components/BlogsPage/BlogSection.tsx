import React from "react";
import PageHeader from "../universal/PageHeader";
import blogPosts from "@/blogs.json";
import Link from "next/link";

export default function BlogSection() {
  return (
    <div className="min-h-screen w-full px-[10%] lg:px-[20%] flex flex-col items-center">
      <PageHeader
        title="Read My Journey"
        subtitle="Stories in code, reflections in logic—explore the path behind the pixels."
      />

      <div className="mt-8 w-full max-w-4xl flex flex-col gap-8">
        {Object.values(blogPosts).map((post, index) => (
          <div
            key={index}
            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-6 flex flex-col gap-4"
          >
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
        ))}
      </div>
    </div>
  );
}
