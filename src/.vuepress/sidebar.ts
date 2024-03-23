import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "粵拼學習",
      icon: "book",
      prefix: "learning/",
      link: "learning/",
      children: "structure",
    },
    {
      text: "粵拼練習",
      icon: "highlighter",
      prefix: "practice/",
      link: "practice/",
      children: "structure",
    },
    {
      text: "説文解字",
      icon: "person-chalkboard",
      prefix: "research/",
      link: "research/",
      children: "structure",
    },
    {
      text: "資源分享",
      icon: "laptop-code",
      prefix: "resource/",
      link: "resource/",
      children: "structure",
    },
  ],
});
