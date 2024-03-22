import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/resource/weeks.html.vue"
const data = JSON.parse("{\"path\":\"/resource/weeks.html\",\"title\":\"10周學粵拼\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"10周學粵拼\",\"icon\":\"laptop-code\",\"category\":[\"資源\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.4,\"words\":119},\"filePathRelative\":\"resource/weeks.md\"}")
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
