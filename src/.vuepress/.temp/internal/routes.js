export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"首頁","i":"home"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/about.html.js"), meta: {"y":"h","t":"關於","i":"circle-info"} }],
  ["/learning/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/index.html.js"), meta: {"y":"a","t":"粵拼學習","i":"book"} }],
  ["/learning/compare.html", { loader: () => import(/* webpackChunkName: "compare.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/compare.html.js"), meta: {"y":"a","t":"基於漢語拼音的粵拼學習","i":"book"} }],
  ["/learning/jsrs.html", { loader: () => import(/* webpackChunkName: "jsrs.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/jsrs.html.js"), meta: {"y":"a","t":"香港語言學學會粵語拼音方案","i":"book"} }],
  ["/practice/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/index.html.js"), meta: {"y":"a","t":"粵拼練習","i":"highlighter"} }],
  ["/practice/game.html", { loader: () => import(/* webpackChunkName: "game.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/game.html.js"), meta: {"y":"a","t":"游戲式練習","i":"puzzle-piece"} }],
  ["/practice/tone_difference.html", { loader: () => import(/* webpackChunkName: "tone_difference.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/tone_difference.html.js"), meta: {"y":"a","t":"聲調辨別","i":"clipboard-check"} }],
  ["/research/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/index.html.js"), meta: {"y":"a","t":"説文解字","i":"person-chalkboard"} }],
  ["/research/particles.html", { loader: () => import(/* webpackChunkName: "particles.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/particles.html.js"), meta: {"y":"a","t":"粵語語氣詞","i":"comment-dots"} }],
  ["/research/typo.html", { loader: () => import(/* webpackChunkName: "typo.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/typo.html.js"), meta: {"y":"a","t":"常見錯別字","i":"align-center"} }],
  ["/resource/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/index.html.js"), meta: {"y":"a","t":"資源共享","i":"laptop-code"} }],
  ["/resource/resource.html", { loader: () => import(/* webpackChunkName: "resource.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/resource.html.js"), meta: {"y":"a","t":"資源站點","i":"laptop-code"} }],
  ["/resource/10weeks/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/index.html.js"), meta: {"y":"a","t":"10周學粵拼","i":"laptop-code"} }],
  ["/resource/10weeks/week0.html", { loader: () => import(/* webpackChunkName: "week0.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week0.html.js"), meta: {"y":"a","t":"Week00 - Introduction","i":"laptop-code"} }],
  ["/resource/10weeks/week1.html", { loader: () => import(/* webpackChunkName: "week1.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week1.html.js"), meta: {"y":"a","t":"Week01 - Lesson1","i":"laptop-code"} }],
  ["/resource/10weeks/week10.html", { loader: () => import(/* webpackChunkName: "week10.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week10.html.js"), meta: {"y":"a","t":"Week10 - Lesson10 & Revision","i":"laptop-code"} }],
  ["/resource/10weeks/week2.html", { loader: () => import(/* webpackChunkName: "week2.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week2.html.js"), meta: {"y":"a","t":"Week02 - Lesson2","i":"laptop-code"} }],
  ["/resource/10weeks/week3.html", { loader: () => import(/* webpackChunkName: "week3.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week3.html.js"), meta: {"y":"a","t":"Week03 - Lesson3","i":"laptop-code"} }],
  ["/resource/10weeks/week4.html", { loader: () => import(/* webpackChunkName: "week4.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week4.html.js"), meta: {"y":"a","t":"Week04 - Lesson4","i":"laptop-code"} }],
  ["/resource/10weeks/week5.html", { loader: () => import(/* webpackChunkName: "week5.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week5.html.js"), meta: {"y":"a","t":"Week05 - Lesson5","i":"laptop-code"} }],
  ["/resource/10weeks/week6.html", { loader: () => import(/* webpackChunkName: "week6.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week6.html.js"), meta: {"y":"a","t":"Week06 - Lesson6","i":"laptop-code"} }],
  ["/resource/10weeks/week7.html", { loader: () => import(/* webpackChunkName: "week7.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week7.html.js"), meta: {"y":"a","t":"Week07 - Lesson7","i":"laptop-code"} }],
  ["/resource/10weeks/week8.html", { loader: () => import(/* webpackChunkName: "week8.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week8.html.js"), meta: {"y":"a","t":"Week08 - Lesson8","i":"laptop-code"} }],
  ["/resource/10weeks/week9.html", { loader: () => import(/* webpackChunkName: "week9.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week9.html.js"), meta: {"y":"a","t":"Week09 - Lesson9","i":"laptop-code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
