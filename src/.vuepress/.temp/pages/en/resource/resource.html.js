import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/en/resource/resource.html.vue"
const data = JSON.parse("{\"path\":\"/en/resource/resource.html\",\"title\":\"資源站點\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"資源站點\",\"icon\":\"laptop-code\",\"category\":[\"資源分享\"]},\"headers\":[{\"level\":2,\"title\":\"詞典\",\"slug\":\"詞典\",\"link\":\"#詞典\",\"children\":[]},{\"level\":2,\"title\":\"讀物\",\"slug\":\"讀物\",\"link\":\"#讀物\",\"children\":[]},{\"level\":2,\"title\":\"交互式學習\",\"slug\":\"交互式學習\",\"link\":\"#交互式學習\",\"children\":[]},{\"level\":2,\"title\":\"應用程序\",\"slug\":\"應用程序\",\"link\":\"#應用程序\",\"children\":[]},{\"level\":2,\"title\":\"音樂\",\"slug\":\"音樂\",\"link\":\"#音樂\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.85,\"words\":254},\"filePathRelative\":\"en/resource/resource.md\"}")
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
