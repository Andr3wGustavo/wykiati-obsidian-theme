import { defineConfig } from "vite";
import path from "node:path";
import fs from "node:fs";

function preserveStyleSettingsPlugin() {
  return {
    name: "preserve-style-settings",
    closeBundle() {
      const settingsPath = path.resolve(__dirname, "src/partials/style-settings/_settings.scss");
      const themeCssPath = path.resolve(__dirname, "theme.css");

      if (fs.existsSync(settingsPath) && fs.existsSync(themeCssPath)) {
        const settingsContent = fs.readFileSync(settingsPath, "utf-8");
        const match = settingsContent.match(/\/\*[\s\S]*?@settings[\s\S]*?\*\//);
        if (match) {
          const settingsComment = match[0];
          let themeCss = fs.readFileSync(themeCssPath, "utf-8");
          // Remove old @charset if present to place settings at very top
          themeCss = themeCss.replace(/^@charset\s+["'][^"']+["'];?\s*/i, "");
          fs.writeFileSync(themeCssPath, `@charset "UTF-8";\n\n${settingsComment}\n\n${themeCss}`, "utf-8");
          console.log("[Wykiati Build] Successfully prepended Style Settings header to theme.css");
        }
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [preserveStyleSettingsPlugin()],
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
