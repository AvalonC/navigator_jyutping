import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar.js";


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

    "/cmn/": {
      lang: "zh-CN",
      title: "Navigator Jyutping",
      description: "Navigator粵拼",
    },

    "/wuu/": {
      lang: "ja-JP",
      title: "Navigator Jyutping",
      description: "Navigator粵拼",
    },

    "/nan/": {
      lang: "ko-KR",
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

  theme: hopeTheme({
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: false,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      hint: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    locales: {
      "/": {
        navbarLocales: {
          langName: "🌏粵語"
        },
        navbar: [
          "/learning/",
          "/jsrs",
          "/practice/",
          "/research/",
          "/resource/",
          "about"
        ]
      },
      "/en/": {
        navbarLocales: {
          langName: "🌍English"
        },
        navbar: [
          "/en/learning/",
          "/en/jsrs",
          "/en/practice/",
          "/en/research/",
          "/en/resource/",
          "/en/about"
        ]
      },
      "/wuu/": {
        navbarLocales: {
          langName: "🌏吴语",
        },
        navbar: [
          "/wuu/learning/",
          "/wuu/jsrs",
          "/wuu/practice/",
          "/wuu/research/",
          "/wuu/resource/",
          "/wuu/about"
        ],
      },
      "/nan/": {
        navbarLocales: {
          langName: "🌏閩南語"
        },

        navbar: [
          "/nan/learning/",
          "/nan/jsrs",
          "/nan/practice/",
          "/nan/research/",
          "/nan/resource/",
          "/nan/about"
        ],

      },

      "/vi/": {
        navbarLocales: {
          langName: "🌏Tiếng Việt"
        },
        navbar: [
          "/vi/learning/",
          "/vi/jsrs",
          "/vi/practice/",
          "/vi/research/",
          "/vi/resource/",
          "/vi/about"
        ]
      },

      "/cmn/": {
        navbarLocales: {
          langName: "🌏普通話/國語"
        },
        navbar: [
          "/cmn/learning/",
          "/cmn/jsrs",
          "/cmn/practice/",
          "/cmn/research/",
          "/cmn/resource/",
          "/cmn/about"
        ]
      },
    },

    author: {
      name: "CanCLID",
      url: "https://github.com/CanCLID",
    },

    logo: "logo.png",

    repo: "avalonc/navigator_jyutping",

    docsDir: "src",

    favicon: "favicon.ico",

    // 侧边栏
    sidebar,

    // 页脚
    footer: "2024-present CanCLID",
    displayFooter: true,

    hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {

      icon: {
        // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
        assets: "fontawesome"
      },

      components: {
        components: ["Badge", "VPCard", "SiteInfo", "BiliBili"],
      },

    },

  })
});

