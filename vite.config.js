import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    publicDir: false,
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, "src/theme.scss"),
        output: {
          assetFileNames: "theme.css",
        },
      },
      minify: isProduction,
      cssMinify: isProduction,
      outDir: ".",
      emptyOutDir: false,
      cssTarget: "esnext",
    },
  };
});
