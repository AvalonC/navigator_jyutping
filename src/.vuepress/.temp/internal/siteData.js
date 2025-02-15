export const siteData = JSON.parse("{\"base\":\"/navigator_jyutping/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"script\",{\"src\":\"/navigator_jyutping/js/soundplay.js\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;900&display=swap\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/navigator_jyutping/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"yue\",\"title\":\"粵拼\",\"description\":\"粵拼參考網，香港語言學學會認證網站\"},\"/cmn/\":{\"lang\":\"cmn\",\"title\":\"粵拼\",\"description\":\"粵拼參考網，香港語言學學會認證網站\"},\"/wuu/\":{\"lang\":\"wuu\",\"title\":\"粵拼\",\"description\":\"粵拼參考網，香港語言學學會認證網站\"},\"/nan/\":{\"lang\":\"nan\",\"title\":\"粵拼\",\"description\":\"粵拼參考網，香港語言學學會認證網站\"},\"/en/\":{\"lang\":\"en\",\"title\":\"粵拼\",\"description\":\"粵拼\"},\"/vi/\":{\"lang\":\"vi\",\"title\":\"粵拼\",\"description\":\"Điều hướng Việt bính\"}}}")

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
