export const siteData = JSON.parse("{\"base\":\"/navigator_jyutping/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"script\",{\"src\":\"/navigator_jyutping/js/soundplay.js\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;900&display=swap\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/navigator_jyutping/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"zh-TW\",\"title\":\"Navigator Jyutping\",\"description\":\"Navigator粵拼\"},\"/cmn/\":{\"lang\":\"zh-CN\",\"title\":\"Navigator Jyutping\",\"description\":\"Navigator粵拼\"},\"/wuu/\":{\"lang\":\"ja-JP\",\"title\":\"Navigator Jyutping\",\"description\":\"Navigator粵拼\"},\"/nan/\":{\"lang\":\"ko-KR\",\"title\":\"Navigator Jyutping\",\"description\":\"Navigator粵拼\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Navigator Jyutping\",\"description\":\"Navigator Jyutping\"},\"/vi/\":{\"lang\":\"vi-VN\",\"title\":\"Navigator Jyutping\",\"description\":\"Điều hướng Việt bính\"}}}")

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
