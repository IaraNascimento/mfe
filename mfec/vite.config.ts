import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/bootstrap.tsx"),
      name: "RemoteApp",
      fileName: "remoteEntry",
      formats: ["iife"], // se você quer usar via <script>
    },
    outDir: "dist",
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
