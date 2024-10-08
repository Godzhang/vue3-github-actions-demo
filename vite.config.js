import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE || "/",
    plugins: [vue()],
  };
});
