import { getAllPosts } from "@/lib/posts";
import HomePage from "@/components/HomePage";

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 8);

  return <HomePage posts={featuredPosts} />;
}
