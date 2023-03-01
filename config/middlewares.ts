export default function ({ env }: { env: any }) {
  return [
    "strapi::errors",
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
              "dl.airtable.com",
              env("AWS_S3_BUCKET_URL"),
            ],
            "media-src": [
              "'self'",
              "data:",
              "blob:",
              "dl.airtable.com",
              env("AWS_S3_BUCKET_URL"),
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
}