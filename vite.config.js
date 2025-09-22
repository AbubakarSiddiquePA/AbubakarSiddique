// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/AbubakarSiddique/", // <-- REPLACE with your repo name, e.g. "/personal_portfolio/"
  plugins: [react()]
});
