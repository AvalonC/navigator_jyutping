export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"首頁","i":"home"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/about.html.js"), meta: {"t":"關於","i":"circle-info"} }],
  ["/learning/", { loader: () => import(/* webpackChunkName: "learning_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/index.html.js"), meta: {"t":"粵拼學習","i":"book"} }],
  ["/learning/compare.html", { loader: () => import(/* webpackChunkName: "learning_compare.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/compare.html.js"), meta: {"t":"基於漢語拼音的粵拼學習","i":"book"} }],
  ["/learning/jsrs.html", { loader: () => import(/* webpackChunkName: "learning_jsrs.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/jsrs.html.js"), meta: {"t":"香港語言學學會粵語拼音方案","i":"book"} }],
  ["/mandarin/", { loader: () => import(/* webpackChunkName: "mandarin_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/index.html.js"), meta: {"t":"首頁","i":"home"} }],
  ["/mandarin/about.html", { loader: () => import(/* webpackChunkName: "mandarin_about.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/about.html.js"), meta: {"t":"關於","i":"circle-info"} }],
  ["/practice/", { loader: () => import(/* webpackChunkName: "practice_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/index.html.js"), meta: {"t":"粵拼練習","i":"highlighter"} }],
  ["/practice/game.html", { loader: () => import(/* webpackChunkName: "practice_game.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/game.html.js"), meta: {"t":"游戲式練習","i":"puzzle-piece"} }],
  ["/practice/practice.html", { loader: () => import(/* webpackChunkName: "practice_practice.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/practice.html.js"), meta: {"t":"標準練習","i":"highlighter"} }],
  ["/practice/tone_difference.html", { loader: () => import(/* webpackChunkName: "practice_tone_difference.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/tone_difference.html.js"), meta: {"t":"聲調辨別","i":"clipboard-check"} }],
  ["/resource/", { loader: () => import(/* webpackChunkName: "resource_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/index.html.js"), meta: {"t":"資源共享","i":"laptop-code"} }],
  ["/resource/resource.html", { loader: () => import(/* webpackChunkName: "resource_resource.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/resource.html.js"), meta: {"t":"資源站點","i":"laptop-code"} }],
  ["/research/", { loader: () => import(/* webpackChunkName: "research_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/index.html.js"), meta: {"t":"説文解字","i":"person-chalkboard"} }],
  ["/research/particles.html", { loader: () => import(/* webpackChunkName: "research_particles.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/particles.html.js"), meta: {"t":"粵語語氣詞","i":"comment-dots"} }],
  ["/research/typo.html", { loader: () => import(/* webpackChunkName: "research_typo.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/typo.html.js"), meta: {"t":"常見錯別字","i":"align-center"} }],
  ["/mandarin/learning/", { loader: () => import(/* webpackChunkName: "mandarin_learning_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/learning/index.html.js"), meta: {"t":"粵拼學習","i":"book"} }],
  ["/mandarin/learning/compare.html", { loader: () => import(/* webpackChunkName: "mandarin_learning_compare.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/learning/compare.html.js"), meta: {"t":"基於漢語拼音的粵拼學習","i":"book"} }],
  ["/mandarin/learning/jsrs.html", { loader: () => import(/* webpackChunkName: "mandarin_learning_jsrs.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/learning/jsrs.html.js"), meta: {"t":"香港語言學學會粵語拼音方案","i":"book"} }],
  ["/mandarin/practice/", { loader: () => import(/* webpackChunkName: "mandarin_practice_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/practice/index.html.js"), meta: {"t":"粵拼練習","i":"highlighter"} }],
  ["/mandarin/practice/game.html", { loader: () => import(/* webpackChunkName: "mandarin_practice_game.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/practice/game.html.js"), meta: {"t":"游戲式練習","i":"puzzle-piece"} }],
  ["/mandarin/practice/practice.html", { loader: () => import(/* webpackChunkName: "mandarin_practice_practice.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/practice/practice.html.js"), meta: {"t":"標準練習","i":"highlighter"} }],
  ["/mandarin/practice/tone_difference.html", { loader: () => import(/* webpackChunkName: "mandarin_practice_tone_difference.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/practice/tone_difference.html.js"), meta: {"t":"聲調辨別","i":"clipboard-check"} }],
  ["/mandarin/research/", { loader: () => import(/* webpackChunkName: "mandarin_research_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/research/index.html.js"), meta: {"t":"説文解字","i":"person-chalkboard"} }],
  ["/mandarin/research/particles.html", { loader: () => import(/* webpackChunkName: "mandarin_research_particles.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/research/particles.html.js"), meta: {"t":"粵語語氣詞","i":"comment-dots"} }],
  ["/mandarin/research/typo.html", { loader: () => import(/* webpackChunkName: "mandarin_research_typo.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/research/typo.html.js"), meta: {"t":"常見錯別字","i":"align-center"} }],
  ["/mandarin/resource/", { loader: () => import(/* webpackChunkName: "mandarin_resource_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/index.html.js"), meta: {"t":"資源共享","i":"laptop-code"} }],
  ["/mandarin/resource/resource.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_resource.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/resource.html.js"), meta: {"t":"資源站點","i":"laptop-code"} }],
  ["/resource/10weeks/", { loader: () => import(/* webpackChunkName: "resource_10weeks_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/index.html.js"), meta: {"t":"10周學粵拼","i":"laptop-code"} }],
  ["/resource/10weeks/week0.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week0.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week0.html.js"), meta: {"t":"Week00 - Introduction","i":"laptop-code"} }],
  ["/resource/10weeks/week1.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week1.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week1.html.js"), meta: {"t":"Week01 - Lesson1","i":"laptop-code"} }],
  ["/resource/10weeks/week10.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week10.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week10.html.js"), meta: {"t":"Week10 - Lesson10 & Revision","i":"laptop-code"} }],
  ["/resource/10weeks/week2.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week2.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week2.html.js"), meta: {"t":"Week02 - Lesson2","i":"laptop-code"} }],
  ["/resource/10weeks/week3.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week3.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week3.html.js"), meta: {"t":"Week03 - Lesson3","i":"laptop-code"} }],
  ["/resource/10weeks/week4.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week4.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week4.html.js"), meta: {"t":"Week04 - Lesson4","i":"laptop-code"} }],
  ["/resource/10weeks/week5.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week5.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week5.html.js"), meta: {"t":"Week05 - Lesson5","i":"laptop-code"} }],
  ["/resource/10weeks/week6.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week6.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week6.html.js"), meta: {"t":"Week06 - Lesson6","i":"laptop-code"} }],
  ["/resource/10weeks/week7.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week7.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week7.html.js"), meta: {"t":"Week07 - Lesson7","i":"laptop-code"} }],
  ["/resource/10weeks/week8.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week8.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week8.html.js"), meta: {"t":"Week08 - Lesson8","i":"laptop-code"} }],
  ["/resource/10weeks/week9.html", { loader: () => import(/* webpackChunkName: "resource_10weeks_week9.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week9.html.js"), meta: {"t":"Week09 - Lesson9","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_index.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/index.html.js"), meta: {"t":"10周學粵拼","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week0.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week0.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week0.html.js"), meta: {"t":"Week00 - Introduction","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week1.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week1.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week1.html.js"), meta: {"t":"Week01 - Lesson1","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week10.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week10.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week10.html.js"), meta: {"t":"Week10 - Lesson10 & Revision","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week2.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week2.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week2.html.js"), meta: {"t":"Week02 - Lesson2","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week3.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week3.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week3.html.js"), meta: {"t":"Week03 - Lesson3","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week4.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week4.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week4.html.js"), meta: {"t":"Week04 - Lesson4","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week5.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week5.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week5.html.js"), meta: {"t":"Week05 - Lesson5","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week6.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week6.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week6.html.js"), meta: {"t":"Week06 - Lesson6","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week7.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week7.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week7.html.js"), meta: {"t":"Week07 - Lesson7","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week8.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week8.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week8.html.js"), meta: {"t":"Week08 - Lesson8","i":"laptop-code"} }],
  ["/mandarin/resource/10weeks/week9.html", { loader: () => import(/* webpackChunkName: "mandarin_resource_10weeks_week9.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/resource/10weeks/week9.html.js"), meta: {"t":"Week09 - Lesson9","i":"laptop-code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
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
