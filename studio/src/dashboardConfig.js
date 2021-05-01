export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608d07c295a3f4d319ccc78f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-5okcirwp",
                  apiId: "eca319fd-bf0f-4b3f-b52f-be5ad2384cb8",
                },
                {
                  buildHookId: "608d07c260b9e5df3b75bba6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-crcyx1m7",
                  apiId: "8c8dfb0b-7b81-4334-a392-fcfce3b208a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ijokerwalker/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-crcyx1m7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
