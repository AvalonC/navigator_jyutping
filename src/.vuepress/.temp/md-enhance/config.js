import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_markdown-it@14.1.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.19_vuepress@2.0.0-rc.8/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_markdown-it@14.1.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_markdown-it@14.1.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_markdown-it@14.1.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_markdown-it@14.1.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.31_markdown-it@14.1.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
