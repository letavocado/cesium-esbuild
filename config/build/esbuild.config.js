import copyStaticFiles from "esbuild-copy-static-files";
import { CleanPlugin } from "./plugins/CleanPlugin.js";

const mode = process.env.MODE || "development";
const isDev = mode === "development";
const isProd = mode === "production";

const config = {
  outdir: "./build",
  entryPoints: ["src/index.js"],
  entryNames: "[dir]/bundle.[name]-[hash]",
  bundle: true,
  external: ["https", "http", "url", "zlib"],
  allowOverwrite: true,
  loader: {
    ".png": "file",
    ".svg": "file",
    ".jpg": "file",
  },
  keepNames: true,
  minifySyntax: true,
  minifyIdentifiers: false,
  minifyWhitespace: true,
  sourcemap: isDev,
  metafile: true,
  plugins: [
    CleanPlugin,
    copyStaticFiles({
      src: "node_modules/cesium/Build/Cesium/Workers",
      dest: "./public/static/Cesium/Workers/",
      dereference: true,
      errorOnExist: true,
      preserveTimestamps: true,
      recursive: true,
    }),
    copyStaticFiles({
      src: "node_modules/cesium/Build/Cesium/ThirdParty",
      dest: "./public/static/Cesium/ThirdParty/",
      dereference: true,
      errorOnExist: true,
      preserveTimestamps: true,
      recursive: true,
    }),
    copyStaticFiles({
      src: "node_modules/cesium/Build/Cesium/Assets",
      dest: "./public/static/Cesium/Assets/",
      dereference: true,
      errorOnExist: true,
      preserveTimestamps: true,
      recursive: true,
    }),
    copyStaticFiles({
      src: "node_modules/cesium/Build/Cesium/Widgets",
      dest: "./public/static/Cesium/Widgets/",
      dereference: true,
      errorOnExist: true,
      preserveTimestamps: true,
      recursive: true,
    }),
  ],
};

export default config;
