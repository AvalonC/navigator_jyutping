import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/cmn/resource/index.html.vue"
const data = JSON.parse("{\"path\":\"/cmn/resource/\",\"title\":\"資源共享\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"資源共享\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"cmn/resource/README.md\"}")
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
