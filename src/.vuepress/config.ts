import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  head: [
    ["script", { src: "/navigator_jyutping/js/soundplay.js" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;900&display=swap" }]
  ],

  base: "/navigator_jyutping/",

  lang: "zh-TW",
  title: "Navigator Jyutping",
  description: "Navigator粵拼",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
