import * as esbuild from "esbuild";
import config from "./esbuild.config.js";
esbuild.build(config).catch(console.log);

let ctx = await esbuild.context({
  entryPoints: ["src/index.js"],
  outdir: "public",
  bundle: true,
  external: ["https", "http", "url", "zlib"],
});

let { host, port } = await ctx.serve({
  servedir: "public",
});
