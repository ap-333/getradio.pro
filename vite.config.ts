import { copyFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// GitHub Pages serves /about from about.html with a 200, so give each top-level
// route its own copy of index.html instead of relying on the 404.html redirect.
function routeHtmlPages(): Plugin {
  return {
    name: "route-html-pages",
    apply: "build",
    writeBundle({ dir = "dist" }) {
      const routes = readdirSync("src/routes")
        .filter((f) => f.endsWith(".tsx") && !f.startsWith("__") && f !== "index.tsx")
        .map((f) => f.replace(/\.tsx$/, ""));
      for (const route of routes) {
        copyFileSync(join(dir, "index.html"), join(dir, `${route}.html`));
      }
    },
  };
}

// Single-page application: Vite + React + TanStack Router (file-based routes).
// No SSR — `vite build` emits a static bundle served from index.html.
export default defineConfig({
  base: "/",
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    routeHtmlPages(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
