export default function ({ env }) {
  return [
    "strapi::logger",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": [
              "'self'",
              "data:",
              "blob:",
              "market-assets.strapi.io",
              env("AWS_S3_BUCKET_URL"),
            ],
            "media-src": [
              "'self'",
              "data:",
              "blob:",
              "market-assets.strapi.io",
              env("AWS_S3_BUCKET_URL"),
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    "strapi::errors",
    "strapi::security",
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
}
