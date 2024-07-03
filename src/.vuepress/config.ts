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

  locales: {
    "/": {
      lang: "zh-TW",
      title: "Navigator Jyutping",
      description: "Navigator粵拼",
    },
    "/mandarin/": {
      lang: "zh-CN",
      title: "Navigator Jyutping",
      description: "Navigator粵拼",
    },
    "/wu/": {
      lang: "zh-TW",
      title: "Navigator Jyutping",
      description: "Navigator粵拼",
    },
    "/min/": {
      lang: "zh-TW",
      title: "Navigator Jyutping",
      description: "Navigator粵拼",
    },
    "/en/": {
      lang: "en-US",
      title: "Navigator Jyutping",
      description: "Navigator Jyutping",
    },
    "/vi/": {
      lang: "vi-VN",
      title: "Navigator Jyutping",
      description: "Điều hướng Việt bính"
    },

  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,



});
