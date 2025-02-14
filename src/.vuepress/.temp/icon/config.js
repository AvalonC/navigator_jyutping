import { hasGlobalComponent } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vueuse+core@12.6.1/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "fontawesome",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/regular.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
}
