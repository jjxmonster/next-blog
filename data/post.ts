import { Post, ResponseData } from "@/types";

export const getPostsByKeyword = async (keyword: string) => {
  const response = await fetch(
    `${process.env.API}/posts?filters[title][$contains]=${keyword}&populate[category]=category&populate[cover_image]=cover_image`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = (await response.json()) as ResponseData<Post>;

  return data.data;
};

export const getPosts = async () => {
  const response = await fetch(
    `${process.env.API}/posts?populate[category]=category&populate[cover_image]=cover_image`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: {
        tags: ["posts"],
        revalidate: 3600,
      },
    }
  );

  const data = (await response.json()) as ResponseData<Post>;

  return data.data;
};

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(
    `${process.env.API}/posts?filters[slug][$eq]=${slug}&populate[category]=category&populate[cover_image]=cover_image`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: {
        tags: ["post"],
        revalidate: 3600,
      },
    }
  );

  const data = (await response.json()) as ResponseData<Post>;

  return data.data;
};

export const getPostsByCategory = async (slug: string) => {
  const response = await fetch(
    `${process.env.API}/posts?filters[category][slug][$eq]=${slug}&populate[category]=category&populate[cover_image]=cover_image`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: {
        tags: ["postsByCategory", slug],
      },
    }
  );

  const data = (await response.json()) as ResponseData<Post>;

  return data.data;
};
