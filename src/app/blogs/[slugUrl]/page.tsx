import BlogPage from "@/components/BlogsPage/BlogPage";
import blogsData from "@/blogs/blogs.json";
import { constructMetadata } from "@/lib/metadata";

export async function generateMetadata(props: { params: Promise<{ slugUrl: string }> }) {
  const params = await props.params;
  const { slugUrl } = params;
  const blogs = Object.values(blogsData);
  const blog = blogs.find((b) => b.slugUrl === slugUrl);

  return constructMetadata({
    title: blog ? `${blog.title} | Siddhesh Lakhani` : "Blogs | Siddhesh Lakhani",
    description:
      blog?.description ??
      "Explore insightful blogs by Siddhesh Lakhani, where technology, coding, and design come together. Dive deep into innovative concepts and trends shaping the future of tech.",
    url: `https://sidlakhani.in/blogs/${slugUrl}`,
    image: blog?.image ?? "./open-graph/poster-1.png",
  });
}

export default async function Page(props: { params: Promise<{ slugUrl: string }> }) {
  const params = await props.params;
  return <BlogPage slugUrl={params.slugUrl} />;
}
