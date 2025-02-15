import comp from "/Users/laufei/Documents/GitHub/navigator_jyutping/src/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"關於\",\"lang\":\"yue\",\"frontmatter\":{\"title\":\"關於\",\"icon\":\"circle-info\",\"home\":true,\"heroText\":\"關於本站\",\"tagline\":\"jyutping.org\"},\"headers\":[{\"level\":2,\"title\":\"鳴謝\",\"slug\":\"鳴謝\",\"link\":\"#鳴謝\",\"children\":[]},{\"level\":2,\"title\":\"開發及貢獻\",\"slug\":\"開發及貢獻\",\"link\":\"#開發及貢獻\",\"children\":[]}],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1739592991000,\"contributors\":[{\"name\":\"AvalonC\",\"username\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":5,\"url\":\"https://github.com/AvalonC\"},{\"name\":\"laubonghaudoi\",\"username\":\"laubonghaudoi\",\"email\":\"laubonghaudoi@icloud.com\",\"commits\":1,\"url\":\"https://github.com/laubonghaudoi\"}]},\"readingTime\":{\"minutes\":1.45,\"words\":434},\"filePathRelative\":\"about.md\",\"localizedDate\":\"March 22, 2024\"}")
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
