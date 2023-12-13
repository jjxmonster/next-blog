import { PostsHeader } from "@/components/ui/posts-header";
import { getPostBySlug, getPosts } from "@/data/post";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts.map(post => ({
    slug: post.attributes.slug,
  }));
};

export default async function PostsByCategory({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const posts = await getPostBySlug(slug);

  if (!posts.length) {
    return notFound();
  }

  const post = posts[0];

  return (
    <div className="text-white flex flex-col items-center">
      <PostsHeader
        title={post.attributes.title}
        description={new Date(post.attributes.createdAt).toDateString()}
      />
      <div className="mt-20 gap-10">
        <MDXRemote source={post.attributes.content} />
      </div>
    </div>
  );
}
