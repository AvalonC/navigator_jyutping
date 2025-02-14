import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/nan/about.html.vue"
const data = JSON.parse("{\"path\":\"/nan/about.html\",\"title\":\"關於\",\"lang\":\"ko-KR\",\"frontmatter\":{\"title\":\"關於\",\"icon\":\"circle-info\",\"home\":true,\"heroText\":\"關於本站\",\"tagline\":\"Navigator Jyutping\"},\"headers\":[{\"level\":2,\"title\":\"鳴謝\",\"slug\":\"鳴謝\",\"link\":\"#鳴謝\",\"children\":[]}],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1739540176000,\"contributors\":[{\"name\":\"AvalonC\",\"username\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":6,\"url\":\"https://github.com/AvalonC\"}]},\"readingTime\":{\"minutes\":0.95,\"words\":284},\"filePathRelative\":\"nan/about.md\",\"localizedDate\":\"2024년 3월 23일\"}")
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
