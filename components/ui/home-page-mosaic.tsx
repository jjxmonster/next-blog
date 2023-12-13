import { Post, StrapiObject } from "@/types";
import { PostCard } from "./post-card";

interface MosaicProps {
  posts: StrapiObject<Post>[];
}

export const Mosaic = ({ posts }: MosaicProps) => {
  const renderPosts = (postsToRender: StrapiObject<Post>[]) =>
    postsToRender.map(post => {
      const { title, createdAt, cover_image, category } = post.attributes;
      return (
        <PostCard
          key={post.id}
          title={title}
          date={createdAt}
          image={cover_image.data.attributes.url}
          category={category.data.attributes.name}
          slug={post.attributes.slug}
        />
      );
    });
  return (
    <section className="flex w-full flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
        {renderPosts(posts.slice(0, 2))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
        {renderPosts(posts.slice(2))}
      </div>
    </section>
  );
};
