import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"關於\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"關於\",\"icon\":\"circle-info\",\"home\":true,\"heroText\":\"關於本站\",\"tagline\":\"Navigator Jyutping\"},\"headers\":[{\"level\":2,\"title\":\"鳴謝\",\"slug\":\"鳴謝\",\"link\":\"#鳴謝\",\"children\":[]}],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1711123984000,\"contributors\":[{\"name\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.87,\"words\":262},\"filePathRelative\":\"about.md\",\"localizedDate\":\"2024年3月23日\"}")
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
