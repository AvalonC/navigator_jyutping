export const siteData = JSON.parse("{\"base\":\"/navigator-jyutping/\",\"lang\":\"zh-TW\",\"title\":\"Navigator Jyutping\",\"description\":\"Navigator粵拼\",\"head\":[[\"script\",{\"src\":\"/navigator-jyutping/js/soundplay.js\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/navigator-jyutping/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
