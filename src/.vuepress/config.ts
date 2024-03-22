import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  head:[
    ["script", {src: "/navigator-jyutping/js/soundplay.js"}],
  ],

  base: "/navigator-jyutping/",

  lang: "zh-TW",
  title: "Navigator Jyutping",
  description: "Navigator粵拼",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
