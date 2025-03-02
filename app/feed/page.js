import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: "All Post",
//   description: "Brwose all our posts",
// };

export async function generateMetadata() {
  const posts = await getPosts();

  return {
    title: `Browse out all ${posts.length} posts`,
    description: "Brwose all our posts",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
