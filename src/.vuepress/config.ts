import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  head:[
    ["script", {src: "/navigator_jyutping/js/soundplay.js"}],
  ],

  base: "/navigator_jyutping/",

  lang: "zh-TW",
  title: "Navigator Jyutping",
  description: "Navigator粵拼",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
