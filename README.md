# Next.js Blog

Simple Blog powered by Strapi, using the latest Next.js features like data caching and server components. Optimized for SEO and Performance, confirmed by Lighthouse tests.

### Perfomance![performance](/public/img/performance.png)

## Screenshots

### Homepage![homepage](/public/img/home.png)

### Category Page![category](/public/img/category.png)

### Post![post](/public/img/post.png)

## Tech Stack

- Next.js
- Strapi
- NextUI
- TailwindCSS

## Environment Variables (`.env`)

Before running the application, make sure you have correctly configured the environment variables. Fill in the following variables in the `.env` file:

```env
API= Strapi API URL
STORAGE= Strapi files storage url
NEXT_PUBLIC_STORAGE_URL= Strapi files storage url (Client side)
API_KEY= Key for Strapi API
```

## Installation and running the app

```
pnpm i
pnpm dev
```

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
