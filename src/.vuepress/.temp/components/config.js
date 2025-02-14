import { hasGlobalComponent } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.71_sass-embedded@1.85.0_vidstack@1.12.12_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.71_sass-embedded@1.85.0_vidstack@1.12.12_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import SiteInfo from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.71_sass-embedded@1.85.0_vidstack@1.12.12_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import BiliBili from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.71_sass-embedded@1.85.0_vidstack@1.12.12_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";

import "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

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
