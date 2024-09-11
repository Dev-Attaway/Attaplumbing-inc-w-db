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
      minify: "esbuild", // Minify the code using esbuild
      chunkSizeWarningLimit: 1000, // Warn if chunk sizes exceed 1000kb
      sourcemap: false, // Disable source maps in production for security
      reportCompressedSize: false, // Don't report compressed size to avoid leaks
      // Other build options
    },
    test: {
      globals: true,
      environment: "happy-dom",
    },
  };
});
