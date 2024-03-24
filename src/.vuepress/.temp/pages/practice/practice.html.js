import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/practice.html.vue"
const data = JSON.parse("{\"path\":\"/practice/practice.html\",\"title\":\"標準練習\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"標準練習\",\"icon\":\"highlighter\",\"category\":[\"練習\"]},\"headers\":[{\"level\":2,\"title\":\"發聲練習\",\"slug\":\"發聲練習\",\"link\":\"#發聲練習\",\"children\":[]},{\"level\":2,\"title\":\"聆聽練習\",\"slug\":\"聆聽練習\",\"link\":\"#聆聽練習\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.72,\"words\":217},\"filePathRelative\":\"practice/practice.md\"}")
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
