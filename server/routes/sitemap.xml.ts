import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async () => {
  const sitemap = new SitemapStream({
    hostname: "https://yoursite.com",
  });
  // add other pages like /about, /contact etc
  sitemap.write({
    url: "/",
    changefreq: "daily",
  });
  sitemap.write({
    url: "/contact",
    changefreq: "daily",
  });
  sitemap.end();

  return streamToPromise(sitemap);
});

// If you want to add your content from Nuxt Content, you can use this snippet instead:
/*
import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "https://yoursite.com",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "daily",
    });
  }*/
