import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import tsPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  server: {
    port: 5173,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    mkcert({
      source: "coding",
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react-router-dom")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});

// export default defineConfig({
//   server: {
//     port: 5173,
//   },
//   plugins: [
//     react(),
//     mkcert({
//       source: "coding",
//     }),
//     tsPaths(),
//     tailwindcss(),
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           "react-vendor": ["react", "react-dom", "react-router-dom"],
//         },
//       },
//     },
//   },
//   optimizeDeps: {
//     include: ["react/jsx-runtime"],
//   },
// });
