import { hasGlobalComponent } from "/Users/laufei/Documents/GitHub/navigator_jyutping/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/laufei/Documents/GitHub/navigator_jyutping/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/laufei/Documents/GitHub/navigator_jyutping/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import SiteInfo from "/Users/laufei/Documents/GitHub/navigator_jyutping/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import BiliBili from "/Users/laufei/Documents/GitHub/navigator_jyutping/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";

import "/Users/laufei/Documents/GitHub/navigator_jyutping/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
