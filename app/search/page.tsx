import { PostCard } from "@/components/ui/post-card";
import { PostsHeader } from "@/components/ui/posts-header";
import { getPostsByKeyword } from "@/data/post";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const posts = await getPostsByKeyword(searchParams.query as string);

  return (
    <div className="flex flex-col items-center">
      <PostsHeader title={`Wyniki wyszukiwania dla: ${searchParams.query}`} />
      <div className="grid grid-cols-3 mt-20 gap-10">
        {posts.length === 0 && (
          <span className="col-span-3 text-gray-500">Brak postów.</span>
        )}
        {posts.map(post => (
          <div key={post.id}>
            <PostCard
              title={post.attributes.title}
              date={post.attributes.createdAt}
              image={post.attributes.cover_image.data.attributes.url}
              category={post.attributes.category.data.attributes.slug}
              slug={post.attributes.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
