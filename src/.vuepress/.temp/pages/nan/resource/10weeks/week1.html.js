import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/nan/resource/10weeks/week1.html.vue"
const data = JSON.parse("{\"path\":\"/nan/resource/10weeks/week1.html\",\"title\":\"Week01 - Lesson1\",\"lang\":\"zh-nan\",\"frontmatter\":{\"title\":\"Week01 - Lesson1\",\"icon\":\"laptop-code\",\"category\":[\"資源\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"nan/resource/10weeks/week1.md\"}")
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
