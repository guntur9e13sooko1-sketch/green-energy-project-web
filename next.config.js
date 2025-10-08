const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "static.wixstatic.com",
      "banner2.cleanpng.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog/newsgame",
        destination: "/static/ProjectNirwana_%20Re-Nusantara.html",
      },
    ];
  },
};

module.exports = nextConfig;
