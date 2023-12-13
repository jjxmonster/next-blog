import { Mosaic } from "@/components/ui/home-page-mosaic";
import { getPosts } from "@/data/post";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Mosaic posts={posts} />
    </section>
  );
}
