import comp from "/home/avalonc/navigator-jyutping/src/.vuepress/.temp/pages/practice/game.html.vue"
const data = JSON.parse("{\"path\":\"/practice/game.html\",\"title\":\"游戲式練習\",\"lang\":\"zh-TW\",\"frontmatter\":{\"title\":\"游戲式練習\",\"icon\":\"puzzle-piece\",\"category\":[\"練習\"]},\"headers\":[{\"level\":2,\"title\":\"Let's play!!\",\"slug\":\"let-s-play\",\"link\":\"#let-s-play\",\"children\":[{\"level\":3,\"title\":\"CantoRocks\",\"slug\":\"cantorocks\",\"link\":\"#cantorocks\",\"children\":[]},{\"level\":3,\"title\":\"Zidou\",\"slug\":\"zidou\",\"link\":\"#zidou\",\"children\":[]},{\"level\":3,\"title\":\"六合Lukhap\",\"slug\":\"六合lukhap\",\"link\":\"#六合lukhap\",\"children\":[]}]}],\"git\":{\"createdTime\":1711123984000,\"updatedTime\":1711123984000,\"contributors\":[{\"name\":\"AvalonC\",\"email\":\"ugz2000@live.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.93,\"words\":279},\"filePathRelative\":\"practice/game.md\",\"localizedDate\":\"2024年3月23日\"}")
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
