import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none w-full text-primary/80 leading-relaxed tracking-wide">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-5xl lg:text-6xl font-medium dark:text-white text-black my-6 pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-4xl lg:text-5xl font-medium dark:text-gray-100 text-gray-900 text-primary my-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold my-4 dark:text-gray-100 text-gray-900">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold my-4 dark:text-gray-100 text-gray-900">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-base md:text-lg dark:text-gray-200 text-gray-800 my-4">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4 transition-all duration-200"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc my-4 text-base">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal my-4 text-base">{children}</ol>
          ),
          li: ({ children }) => <li className="ml-4 my-2">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-6 italic text-primary/60 my-6">
              {children}
            </blockquote>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 overflow-x-auto text-sm my-4">
              {children}
            </pre>
          ),
          code: ({ children }) => (
            <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ),
          del: ({ children }) => <del className="opacity-70">{children}</del>,
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
