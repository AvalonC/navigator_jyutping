import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/research/index.html.vue"
const data = JSON.parse("{\"path\":\"/research/\",\"title\":\"説文解字\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"説文解字\",\"index\":false,\"icon\":\"person-chalkboard\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1711123984000,\"contributors\":[{\"name\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"research/README.md\",\"localizedDate\":\"2024年3月23日\"}")
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
