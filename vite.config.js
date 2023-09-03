import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      VitePluginRadar({
        analytics: {
          id: process.env.VITE_GOOGLE_ANALYTICS,
        },
        config: {
          cookie_domain: "auto",
          cookie_expires: 63072000,
          cookie_prefix: "none",
          cookie_update: true,
          cookie_flags: "",
          send_page_view: true,
          allow_google_signals: true,
          allow_ad_personalization_signals: true,
        },
      }),
    ],
  });
};
