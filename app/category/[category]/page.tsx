import { PostCard } from "@/components/ui/post-card";
import { PostsHeader } from "@/components/ui/posts-header";
import { getPostsByCategory } from "@/data/post";
import { getCategories, getCategoryBySlug } from "@/data/category";
import { notFound } from "next/navigation";
import { Metadata } from "next";
export const generateStaticParams = async () => {
  const categories = await getCategories();

  return categories.map(category => ({
    category: category.attributes.slug,
  }));
};

export const generateMetadata = async ({
  params: { category: slug },
}: {
  params: { category: string };
}): Promise<Metadata> => {
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: category[0].attributes.name,
  };
};

export default async function PostsByCategory({
  params: { category: slug },
}: {
  params: { category: string };
}) {
  const category = await getCategoryBySlug(slug);
  const posts = await getPostsByCategory(slug);

  if (!category.length) {
    return notFound();
  }

  return (
    <div className="text-white flex flex-col items-center">
      <PostsHeader
        title={posts[0].attributes.category.data.attributes.name}
        description={`${posts.length} Articles`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
        {posts.map(post => (
          <div key={post.id}>
            <PostCard
              title={post.attributes.title}
              date={post.attributes.createdAt}
              image={post.attributes.cover_image.data.attributes.url}
              category={slug}
              slug={post.attributes.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
