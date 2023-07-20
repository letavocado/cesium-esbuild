import * as esbuild from "esbuild";
import config from "./esbuild.config.js";

esbuild.build(config).catch(console.log);
