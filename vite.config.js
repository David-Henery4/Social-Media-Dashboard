import { defineConfig } from "vite";

const path = require("path");
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "./javascript"),
      "@styles": path.resolve(__dirname, "./styles"),
      "@": path.resolve(__dirname, "./"),
      "~": path.resolve(__dirname, "./"),
    },
  },
});
