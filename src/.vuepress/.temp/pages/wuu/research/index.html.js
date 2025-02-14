import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/wuu/research/index.html.vue"
const data = JSON.parse("{\"path\":\"/wuu/research/\",\"title\":\"説文解字\",\"lang\":\"zh-wuu\",\"frontmatter\":{\"title\":\"説文解字\",\"index\":false,\"icon\":\"person-chalkboard\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"wuu/research/README.md\"}")
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
