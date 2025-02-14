import { CodeTabs } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
