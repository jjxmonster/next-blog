import { Category, ResponseData } from "@/types";

export const getCategories = async () => {
  const response = await fetch(`${process.env.API}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      tags: ["categories"],
      revalidate: 2000,
    },
  });
  const data = (await response.json()) as ResponseData<Category>;

  return data.data;
};

export const getCategoryBySlug = async (slug: string) => {
  const response = await fetch(
    `${process.env.API}/categories?filters[slug][$eq]=${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      next: {
        tags: ["postsByCategory", slug],
        revalidate: 2000,
      },
    }
  );

  const data = (await response.json()) as ResponseData<Category>;

  return data.data;
};
