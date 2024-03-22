import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/10weeks/week1.html.vue"
const data = JSON.parse("{\"path\":\"/resource/10weeks/week1.html\",\"title\":\"Week01 - Lesson1\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"Week01 - Lesson1\",\"icon\":\"laptop-code\",\"category\":[\"資源\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.1,\"words\":31},\"filePathRelative\":\"resource/10weeks/week1.md\"}")
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
