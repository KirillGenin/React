// vite.config.ts
import { defineConfig } from "file:///D:/RSSCHOOL/RSSCHOOL_REACT/React/node_modules/vite/dist/node/index.js";
import react from "file:///D:/RSSCHOOL/RSSCHOOL_REACT/React/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///D:/RSSCHOOL/RSSCHOOL_REACT/React/node_modules/vite-plugin-eslint/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\RSSCHOOL\\RSSCHOOL_REACT\\React";
var entry = "entry";
var assets = "assets";
var pathResolver = (pathStr) => {
  return resolve(__vite_injected_original_dirname, ".", pathStr);
};
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": pathResolver("./src")
    }
  },
  plugins: [react(), eslint()],
  build: {
    rollupOptions: {
      input: {
        [entry]: pathResolver("./src/entry-client.tsx")
      },
      output: {
        entryFileNames: `${assets}/[name].js`,
        chunkFileNames: `${assets}/[name].js`,
        assetFileNames: `${assets}/[name].[ext]`
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      all: true,
      provider: "istanbul",
      reporter: ["text"]
    }
  }
});
export {
  assets,
  vite_config_default as default,
  entry,
  pathResolver
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxSU1NDSE9PTFxcXFxSU1NDSE9PTF9SRUFDVFxcXFxSZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUlNTQ0hPT0xcXFxcUlNTQ0hPT0xfUkVBQ1RcXFxcUmVhY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1JTU0NIT09ML1JTU0NIT09MX1JFQUNUL1JlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNvbnN0IGVudHJ5ID0gJ2VudHJ5JztcbmV4cG9ydCBjb25zdCBhc3NldHMgPSAnYXNzZXRzJztcblxuZXhwb3J0IGNvbnN0IHBhdGhSZXNvbHZlciA9IChwYXRoU3RyOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHJlc29sdmUoX19kaXJuYW1lLCAnLicsIHBhdGhTdHIpO1xufTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoUmVzb2x2ZXIoJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIGVzbGludCgpXSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBbZW50cnldOiBwYXRoUmVzb2x2ZXIoJy4vc3JjL2VudHJ5LWNsaWVudC50c3gnKSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IGAke2Fzc2V0c30vW25hbWVdLmpzYCxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGAke2Fzc2V0c30vW25hbWVdLmpzYCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGAke2Fzc2V0c30vW25hbWVdLltleHRdYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWycuL3NyYy9zZXR1cFRlc3RzLnRzJ10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIHByb3ZpZGVyOiAnaXN0YW5idWwnLFxuICAgICAgcmVwb3J0ZXI6IFsndGV4dCddLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsZUFBZTtBQU54QixJQUFNLG1DQUFtQztBQVFsQyxJQUFNLFFBQVE7QUFDZCxJQUFNLFNBQVM7QUFFZixJQUFNLGVBQWUsQ0FBQyxZQUFvQjtBQUMvQyxTQUFPLFFBQVEsa0NBQVcsS0FBSyxPQUFPO0FBQ3hDO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxhQUFhLE9BQU87QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDM0IsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsQ0FBQyxLQUFLLEdBQUcsYUFBYSx3QkFBd0I7QUFBQSxNQUNoRDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLEdBQUc7QUFBQSxRQUNuQixnQkFBZ0IsR0FBRztBQUFBLFFBQ25CLGdCQUFnQixHQUFHO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLHFCQUFxQjtBQUFBLElBQ2xDLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
