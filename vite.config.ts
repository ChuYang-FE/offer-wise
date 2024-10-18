import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ["react", "react-router-dom", "react-i18next", 'ahooks'],
      dts: "src/auto-imports.d.ts",
    }),
  ],
});
