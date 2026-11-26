import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  use: { baseURL: "http://127.0.0.1:4175", reducedMotion: "reduce" },
  webServer: {
    command: "python3 -m http.server 4175 --bind 127.0.0.1 --directory out",
    url: "http://127.0.0.1:4175",
    reuseExistingServer: false,
  },
});
