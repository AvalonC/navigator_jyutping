import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/en/practice/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/practice/\",\"title\":\"粵拼練習\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"粵拼練習\",\"index\":false,\"icon\":\"highlighter\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"en/practice/README.md\"}")
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
