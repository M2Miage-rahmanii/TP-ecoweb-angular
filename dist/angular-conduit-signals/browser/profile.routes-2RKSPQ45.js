import {
  ARTICLE_TYPE,
  provideArticleType
} from "./chunk-LCFP7DDB.js";
import "./chunk-RNQ4XVA4.js";
import "./chunk-GDGJH4RA.js";

// src/app/profile/profile.routes.ts
var profileRoutes = [
  {
    path: "",
    loadComponent: () => import("./profile-article-list.component-B5YW2G2Y.js"),
    providers: [provideArticleType(ARTICLE_TYPE.MyArticle)]
  },
  {
    path: "favorites",
    loadComponent: () => import("./profile-article-list.component-B5YW2G2Y.js"),
    providers: [provideArticleType(ARTICLE_TYPE.FavoritedArticle)]
  }
];
var profile_routes_default = profileRoutes;
export {
  profile_routes_default as default
};
//# sourceMappingURL=profile.routes-2RKSPQ45.js.map
