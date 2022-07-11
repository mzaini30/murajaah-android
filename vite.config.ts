import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown, { meta } from "vite-plugin-md";
import Layouts from "vite-plugin-vue-layouts";
import legacy from "@vitejs/plugin-legacy";
import pages from "vite-plugin-pages";
import unocss from "unocss/vite";
import yaml from "vite-plugin-yaml2";
import apply from "@unocss/transformer-directives";
import Prism from "markdown-it-prism";
import presetIcons from "@unocss/preset-icons";
import { presetUno } from "unocss";

const hostname = "http://localhost:3000/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    yaml(),
    unocss({
      transformers: [apply()],
      presets: [presetIcons(), presetUno()],
    }),
    legacy(),
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    pages({
      extensions: ["vue", "md"],
    }),
    Markdown({
      headEnabled: true,
      builders: [meta()],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
      },
    }),
    Layouts(),
  ],
});
