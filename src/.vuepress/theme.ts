import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
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
      navbar:[
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
      navbar:[
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
        selectLangAriaLabel: "选择语言",
      },
      navbar:[
        "/wuu/learning/",
        "/wuu/jsrs",
        "/wuu/practice/",
        "/wuu/research/",
        "/wuu/resource/",
        "/wuu/about"
      ],
      metaLocales: {
        author: "Author",
        date: "Writing Date",
        origin: "Original",
        views: "Page views",
        category: "Category",
        tag: "Tag",
        readingTime: "Reading Time",
        words: "Words",
        toc: "On This Page",
        prev: "Prev",
        next: "Next",
        lastUpdated: "Last update",
        contributors: "Contributors",
        editLink: "Edit this page",
        print: "Print",
      },
      blogLocales: {
        article: "Articles",
        articleList: "Article List",
        category: "Category",
        tag: "Tag",
        timeline: "Timeline",
        timelineTitle: "Yesterday Once More!",
        all: "All",
        intro: "Personal Intro",
        star: "Star",
        empty: "No $text",
      },

      paginationLocales: {
        prev: "Prev",
        next: "Next",
        navigate: "Jump to",
        action: "Go",
        errorText: "Please enter a number between 1 and $page !",
      },

      outlookLocales: {
        themeColor: "Theme Color",
        darkmode: "Theme Mode",
        fullscreen: "Full Screen",
      },

      encryptLocales: {
        iconLabel: "Page Encrypted",
        placeholder: "Enter password",
        remember: "Remember password",
        errorHint: "Please enter the correct password!",
      },

      routeLocales: {
        skipToContent: "Skip to main content",
        notFoundTitle: "Page not found",
        notFoundMsg: [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links.",
        ],
        back: "Go back",
        home: "Take me home",
      },
    },
    "/nan/": {
      navbarLocales: {
        langName: "🌏閩南語"
      },
      navbar:[
        "/nan/learning/",
        "/nan/jsrs",
        "/nan/practice/",
        "/nan/research/",
        "/nan/resource/",
        "/nan/about"
      ],
      metaLocales: {
        author: "Author",
        date: "Writing Date",
        origin: "Original",
        views: "Page views",
        category: "Category",
        tag: "Tag",
        readingTime: "Reading Time",
        words: "Words",
        toc: "On This Page",
        prev: "Prev",
        next: "Next",
        lastUpdated: "Last update",
        contributors: "Contributors",
        editLink: "Edit this page",
        print: "Print",
      },
      blogLocales: {
        article: "Articles",
        articleList: "Article List",
        category: "Category",
        tag: "Tag",
        timeline: "Timeline",
        timelineTitle: "Yesterday Once More!",
        all: "All",
        intro: "Personal Intro",
        star: "Star",
        empty: "No $text",
      },

      paginationLocales: {
        prev: "Prev",
        next: "Next",
        navigate: "Jump to",
        action: "Go",
        errorText: "Please enter a number between 1 and $page !",
      },

      outlookLocales: {
        themeColor: "Theme Color",
        darkmode: "Theme Mode",
        fullscreen: "Full Screen",
      },

      encryptLocales: {
        iconLabel: "Page Encrypted",
        placeholder: "Enter password",
        remember: "Remember password",
        errorHint: "Please enter the correct password!",
      },

      routeLocales: {
        skipToContent: "Skip to main content",
        notFoundTitle: "Page not found",
        notFoundMsg: [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links.",
        ],
        back: "Go back",
        home: "Take me home",
      },
    },

    "/vi/": {
      navbarLocales: {
        langName: "🌏Tiếng Việt"
      },
      navbar:[
        "/vi/learning/",
        "/vi/jsrs",
        "/vi/practice/",
        "/vi/research/",
        "/vi/resource/",
        "/vi/about"
      ]
    },
    
    "/cmn/": {
      navbarLocales:{
        langName: "🌏普通話/國語"
      },
      navbar:[
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
});
