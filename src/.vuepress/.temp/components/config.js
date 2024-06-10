import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.34_vuepress@2.0.0-rc.13/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/@vueuse+core@10.10.0_vue@3.4.27/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.48_vidstack@1.11.22_vuepress@2.0.0-rc.13/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.48_vidstack@1.11.22_vuepress@2.0.0-rc.13/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.48_vidstack@1.11.22_vuepress@2.0.0-rc.13/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import SiteInfo from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.48_vidstack@1.11.22_vuepress@2.0.0-rc.13/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import VidStack from "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.48_vidstack@1.11.22_vuepress@2.0.0-rc.13/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "/home/avalonc/navigator-jyutping/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.48_vidstack@1.11.22_vuepress@2.0.0-rc.13/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
