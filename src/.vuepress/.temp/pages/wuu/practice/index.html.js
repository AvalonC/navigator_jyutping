import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/wuu/practice/index.html.vue"
const data = JSON.parse("{\"path\":\"/wuu/practice/\",\"title\":\"粵拼練習\",\"lang\":\"ja-JP\",\"frontmatter\":{\"title\":\"粵拼練習\",\"index\":false,\"icon\":\"highlighter\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1739540176000,\"contributors\":[{\"name\":\"AvalonC\",\"username\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":4,\"url\":\"https://github.com/AvalonC\"}]},\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"wuu/practice/README.md\",\"localizedDate\":\"2024年3月23日\"}")
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
