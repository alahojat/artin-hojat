import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(
        env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    },
  };
});
