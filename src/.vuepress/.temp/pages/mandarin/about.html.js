import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/mandarin/about.html.vue"
const data = JSON.parse("{\"path\":\"/mandarin/about.html\",\"title\":\"關於\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"關於\",\"icon\":\"circle-info\",\"home\":true,\"heroText\":\"關於本站\",\"tagline\":\"Navigator Jyutping\"},\"headers\":[{\"level\":2,\"title\":\"鳴謝\",\"slug\":\"鳴謝\",\"link\":\"#鳴謝\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.95,\"words\":284},\"filePathRelative\":\"mandarin/about.md\"}")
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
