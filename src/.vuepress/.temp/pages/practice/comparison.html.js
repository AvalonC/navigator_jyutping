import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/comparison.html.vue"
const data = JSON.parse("{\"path\":\"/practice/comparison.html\",\"title\":\"对比式練習\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"对比式練習\",\"icon\":\"puzzle-piece\",\"category\":[\"練習\"]},\"headers\":[{\"level\":2,\"title\":\"發音對比\",\"slug\":\"發音對比\",\"link\":\"#發音對比\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.23,\"words\":70},\"filePathRelative\":\"practice/comparison.md\"}")
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
