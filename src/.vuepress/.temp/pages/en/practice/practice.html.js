import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/en/practice/practice.html.vue"
const data = JSON.parse("{\"path\":\"/en/practice/practice.html\",\"title\":\"標準練習\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"標準練習\",\"icon\":\"highlighter\",\"category\":[\"練習\"]},\"headers\":[{\"level\":2,\"title\":\"發聲練習\",\"slug\":\"發聲練習\",\"link\":\"#發聲練習\",\"children\":[]},{\"level\":2,\"title\":\"聆聽練習\",\"slug\":\"聆聽練習\",\"link\":\"#聆聽練習\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.72,\"words\":217},\"filePathRelative\":\"en/practice/practice.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
