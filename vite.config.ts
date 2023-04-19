import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    environment: "happy-dom",
    // environmentMatchGlobs: [["**/*.test.{js,ts}", "happy-dom"]],
    globals: true,
    setupFiles: "./src/tests/setup-dom-env.ts",
  },
});
