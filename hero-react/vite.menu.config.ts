import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: appRoot,
  plugins: [react(), tailwindcss()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  resolve: {
    alias: { "@": resolve(appRoot, "src") },
  },
  build: {
    outDir: resolve(appRoot, "..", "assets", "menu-conveyor"),
    emptyOutDir: true,
    lib: {
      entry: resolve(appRoot, "src/menu-conveyor.tsx"),
      formats: ["es"],
      fileName: "menu-conveyor",
      cssFileName: "menu-conveyor",
    },
    rollupOptions: { output: { inlineDynamicImports: false } },
  },
});
