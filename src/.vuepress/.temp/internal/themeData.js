export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"AvalonC\",\"url\":\"https://avalonc.github.io\"},\"logo\":\"logo.png\",\"repo\":\"avalonc/navigator-jyutping\",\"docsDir\":\"src\",\"footer\":\"Navigator Jyutping\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-TW\",\"navbarLocales\":{\"langName\":\"繁體中文\",\"selectLangAriaLabel\":\"選擇語言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"寫作日期\",\"origin\":\"原創\",\"views\":\"訪問量\",\"category\":\"分類\",\"tag\":\"標籤\",\"readingTime\":\"閱讀時間\",\"words\":\"字數\",\"toc\":\"此頁內容\",\"prev\":\"上一頁\",\"next\":\"下一頁\",\"lastUpdated\":\"上次編輯於\",\"contributors\":\"貢獻者\",\"editLink\":\"編輯此頁\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主題色\",\"darkmode\":\"主題模式\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"頁面不存在\",\"notFoundMsg\":[\"這裡什麼也沒有\",\"我們是怎麼來到這兒的？\",\"這 是 四 零 四 !\",\"看起来你訪問了一個失效的鏈結\"],\"back\":\"返回上一頁\",\"home\":\"帶我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/learning/\",\"/practice/\",\"/research/\",\"/resource/\",\"about\"],\"sidebar\":{\"/\":[{\"text\":\"粤拼学习\",\"icon\":\"book\",\"prefix\":\"learning/\",\"link\":\"learning/\",\"children\":\"structure\"},{\"text\":\"粵拼練習\",\"icon\":\"highlighter\",\"prefix\":\"practice/\",\"link\":\"practice/\",\"children\":\"structure\"},{\"text\":\"説文解字\",\"icon\":\"person-chalkboard\",\"prefix\":\"research/\",\"link\":\"research/\",\"children\":\"structure\"},{\"text\":\"資源分享\",\"icon\":\"laptop-code\",\"prefix\":\"resource/\",\"link\":\"resource/\",\"children\":\"structure\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
