import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ["src/**/*.js", "src/**/*.jsx"], // only lint source files
      failOnWarning: false, // don't stop build on warnings
      failOnError: false,   // don't stop build on errors
    }),
  ],
});
