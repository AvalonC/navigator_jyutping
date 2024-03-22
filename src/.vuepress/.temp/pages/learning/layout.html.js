import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/learning/layout.html.vue"
const data = JSON.parse("{\"path\":\"/learning/layout.html\",\"title\":\"布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"布局\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"指南\"],\"tag\":[\"布局\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.53,\"words\":159},\"filePathRelative\":\"learning/layout.md\"}")
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
