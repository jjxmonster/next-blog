export type Category = {
  name: string;
  slug: string;
};

export type Post = {
  title: string;
  slug: string;
  content: string;
  description: string;
  cover_image: {
    data: StrapiObject<CoverImage>;
  };
  category: {
    data: StrapiObject<Category>;
  };
  createdAt: string;
};

export type CoverImage = {
  url: string;
};

export type StrapiObject<T> = {
  id: number;
  attributes: T;
};

export type ResponseData<T> = {
  data: StrapiObject<T>[];
};
