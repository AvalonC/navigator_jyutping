import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/nan/resource/index.html.vue"
const data = JSON.parse("{\"path\":\"/nan/resource/\",\"title\":\"資源共享\",\"lang\":\"zh-nan\",\"frontmatter\":{\"title\":\"資源共享\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"nan/resource/README.md\"}")
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
