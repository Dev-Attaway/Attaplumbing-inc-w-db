import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: 3002,
      open: true,
      proxy: {
        // Proxy API requests to the backend server
        "/graphql": {
          target: env.VITE_API_URL || "http://localhost:3001", // Use the environment variable or fallback to localhost
          secure: false,
          changeOrigin: true,
        },
      },
    },
    build: {
      // Additional build options if necessary
    },
    test: {
      globals: true,
      environment: "happy-dom",
    },
  };
});
