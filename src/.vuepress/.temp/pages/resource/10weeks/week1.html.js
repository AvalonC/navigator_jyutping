import comp from "/Users/laufei/Documents/GitHub/navigator_jyutping/src/.vuepress/.temp/pages/resource/10weeks/week1.html.vue"
const data = JSON.parse("{\"path\":\"/resource/10weeks/week1.html\",\"title\":\"Week01 - Lesson1\",\"lang\":\"yue\",\"frontmatter\":{\"title\":\"Week01 - Lesson1\",\"icon\":\"laptop-code\",\"category\":[\"資源\"]},\"headers\":[],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1739540176000,\"contributors\":[{\"name\":\"AvalonC\",\"username\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":2,\"url\":\"https://github.com/AvalonC\"}]},\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"resource/10weeks/week1.md\",\"localizedDate\":\"March 22, 2024\"}")
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
