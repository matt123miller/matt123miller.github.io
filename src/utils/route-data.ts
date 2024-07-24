// import type { MarkdownHeading } from "astro";
// import { fileURLToPath } from "node:url";

// function getEditUrl({ entry, id, isFallback }: PageProps): URL | undefined {
//   const { editUrl } = entry.data;
//   // If frontmatter value is false, editing is disabled for this page.
//   if (editUrl === false) return;

//   let url: string | undefined;
//   if (typeof editUrl === "string") {
//     // If a URL was provided in frontmatter, use that.
//     url = editUrl;
//   } else if (config.editLink.baseUrl) {
//     const srcPath = project.srcDir.replace(project.root, "");
//     const filePath = isFallback
//       ? localizedId(id, config.defaultLocale.locale)
//       : id;
//     // If a base URL was added in Starlight config, synthesize the edit URL from it.
//     url =
//       ensureTrailingSlash(config.editLink.baseUrl) +
//       srcPath +
//       "content/docs/" +
//       filePath;
//   }
//   return url ? new URL(url) : undefined;
// }
