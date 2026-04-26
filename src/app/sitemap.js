export default function sitemap() {
  const baseUrl = "https://www.livibe.co";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/effects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
