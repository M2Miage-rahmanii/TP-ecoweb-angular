import {
  ArticleListComponent,
  PaginationComponent
} from "./chunk-6LUDX2OX.js";
import {
  AuthStore
} from "./chunk-WNSVKIK7.js";
import {
  ArticleService,
  DEFAULT_LIMIT,
  HttpClient,
  tapResponse
} from "./chunk-PNMNZQ7M.js";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentStoreWithSelectors,
  EventEmitter,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  ViewportScroller,
  computed,
  defer,
  exhaustMap,
  inject,
  provideComponentStore,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RNQ4XVA4.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/shared/services/tag.service.ts
var _httpClient;
var _TagService = class _TagService {
  constructor() {
    __privateAdd(this, _httpClient, inject(HttpClient));
  }
  getTags() {
    return __privateGet(this, _httpClient).get("/tags");
  }
};
_httpClient = new WeakMap();
_TagService.\u0275fac = function TagService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagService)();
};
_TagService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TagService, factory: _TagService.\u0275fac, providedIn: "root" });
var TagService = _TagService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/home/home.store.ts
var FEED_TYPE = {
  yourFeed: "Your Feed",
  globalFeed: "Global Feed",
  tagFeed: "Tag Feed"
};
var _articleService, _tagService, _viewPort, _refreshPage, _HomeStore_instances, loadArticle_fn;
var _HomeStore = class _HomeStore extends ComponentStoreWithSelectors {
  constructor() {
    super(...arguments);
    __privateAdd(this, _HomeStore_instances);
    __privateAdd(this, _articleService);
    __privateAdd(this, _tagService);
    __privateAdd(this, _viewPort);
    __privateAdd(this, _refreshPage);
    __privateSet(this, _articleService, inject(ArticleService));
    __privateSet(this, _tagService, inject(TagService));
    __privateSet(this, _viewPort, inject(ViewportScroller));
    this.getTags = this.effect(switchMap(() => __privateGet(this, _tagService).getTags().pipe(tapResponse((res) => {
      this.patchState({
        tags: res.tags
      });
    }, (error) => {
      console.error("Get Tags Failed", error);
    }))));
    this.queryArticle = this.effect(tap((request) => {
      this.patchState({
        currentOffset: request.params.offset,
        feedTypeSelected: request.feedType,
        tagSelected: request.feedType === FEED_TYPE.tagFeed ? request.params.tag : null,
        currentLimit: request.params.limit
      });
      __privateGet(this, _refreshPage).call(this);
    }));
    this.onOffsetChange = this.effect(tap((offset) => {
      this.patchState({
        currentOffset: offset
      });
      __privateGet(this, _viewPort).scrollToPosition([0, 0]);
      __privateGet(this, _refreshPage).call(this);
    }));
    this.toggleFavorite = this.effect(exhaustMap((article) => defer(() => {
      if (article.favorited) {
        return __privateGet(this, _articleService).unfavoriteArticle(article.slug);
      } else {
        return __privateGet(this, _articleService).favoriteArticle(article.slug);
      }
    }).pipe(tapResponse(() => {
      __privateGet(this, _refreshPage).call(this);
    }, (error) => {
      console.error("Toggle Favorite Failed", error);
    }))));
    __privateSet(this, _refreshPage, this.effect(switchMap(() => {
      return __privateMethod(this, _HomeStore_instances, loadArticle_fn).call(this).pipe(tapResponse((response) => {
        this.patchState({
          articleList: response.articles,
          articleCount: response.articlesCount
        });
      }, (error) => {
        console.error("Get Article Failed", error);
      }));
    })));
  }
  ngrxOnStoreInit() {
    this.setState({
      articleList: [],
      tags: [],
      articleCount: 0,
      feedTypeSelected: null,
      tagSelected: null,
      currentOffset: 0,
      currentLimit: DEFAULT_LIMIT
    });
  }
};
_articleService = new WeakMap();
_tagService = new WeakMap();
_viewPort = new WeakMap();
_refreshPage = new WeakMap();
_HomeStore_instances = new WeakSet();
loadArticle_fn = function() {
  switch (this.selectors.feedTypeSelected()) {
    case FEED_TYPE.tagFeed:
      return __privateGet(this, _articleService).getArticleGlobal({
        limit: this.selectors.currentLimit(),
        offset: this.selectors.currentOffset(),
        tag: this.selectors.tagSelected()
      });
    case FEED_TYPE.globalFeed:
      return __privateGet(this, _articleService).getArticleGlobal({
        limit: this.selectors.currentLimit(),
        offset: this.selectors.currentOffset()
      });
    default:
      return __privateGet(this, _articleService).getFeed({
        limit: this.selectors.currentLimit(),
        offset: this.selectors.currentOffset()
      });
  }
};
_HomeStore.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275HomeStore_BaseFactory;
  return function HomeStore_Factory(__ngFactoryType__) {
    return (\u0275HomeStore_BaseFactory || (\u0275HomeStore_BaseFactory = \u0275\u0275getInheritedFactory(_HomeStore)))(__ngFactoryType__ || _HomeStore);
  };
})();
_HomeStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeStore, factory: _HomeStore.\u0275fac });
var HomeStore = _HomeStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeStore, [{
    type: Injectable
  }], null, null);
})();

// src/app/home/ui/feed-toggle/feed-toggle.component.ts
var _c0 = (a0) => ({ active: a0 });
function FeedToggleComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 3)(2, "span", 4);
    \u0275\u0275listener("click", function FeedToggleComponent_ng_container_2_Template_span_click_2_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onToggleFeed(tab_r2.feedType));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, tab_r2.feedType === ctx_r2.feedTypeSelected()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.title);
  }
}
var _authStore, _homeStore;
var _FeedToggleComponent = class _FeedToggleComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateAdd(this, _homeStore);
    __privateSet(this, _authStore, inject(AuthStore));
    __privateSet(this, _homeStore, inject(HomeStore));
    this.feedTypeSelected = __privateGet(this, _homeStore).selectors.feedTypeSelected;
    this.tabList = computed(() => {
      if (!__privateGet(this, _authStore).selectors.isAuthenticated()) {
        return [
          {
            title: "Global Feed",
            feedType: FEED_TYPE.globalFeed
          }
        ];
      }
      const authTabList = [
        {
          title: "Your Feed",
          feedType: FEED_TYPE.yourFeed
        },
        {
          title: "Global Feed",
          feedType: FEED_TYPE.globalFeed
        }
      ];
      return this.feedTypeSelected() && this.feedTypeSelected() !== FEED_TYPE.globalFeed && this.feedTypeSelected() !== FEED_TYPE.yourFeed ? [
        ...authTabList,
        {
          title: `#${__privateGet(this, _homeStore).selectors.tagSelected()}`,
          feedType: FEED_TYPE.tagFeed
        }
      ] : authTabList;
    }, ...ngDevMode ? [{ debugName: "tabList" }] : []);
    this.toggleFeed = new EventEmitter();
  }
  onToggleFeed(value) {
    if (this.feedTypeSelected() === value) {
      return;
    }
    this.toggleFeed.emit(value);
  }
};
_authStore = new WeakMap();
_homeStore = new WeakMap();
_FeedToggleComponent.\u0275fac = function FeedToggleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeedToggleComponent)();
};
_FeedToggleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedToggleComponent, selectors: [["app-feed-toggle"]], outputs: { toggleFeed: "toggleFeed" }, decls: 3, vars: 1, consts: [[1, "toggle"], [1, "nav", "nav-pills", "outline-active"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "click", "ngClass"]], template: function FeedToggleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1);
    \u0275\u0275template(2, FeedToggleComponent_ng_container_2_Template, 4, 4, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.tabList());
  }
}, dependencies: [NgForOf, NgClass], styles: ["\n\n.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-left: 0.2rem;\n}\n.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--extra-gray-color);\n  border-radius: 0;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  background: var(--white-color) !important;\n  border-bottom: 2px solid var(--green-color) !important;\n  color: var(--green-color) !important;\n}\n/*# sourceMappingURL=feed-toggle.component.css.map */"], changeDetection: 0 });
var FeedToggleComponent = _FeedToggleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedToggleComponent, [{
    type: Component,
    args: [{ selector: "app-feed-toggle", imports: [NgForOf, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="toggle">\r\n  <ul class="nav nav-pills outline-active">\r\n    <ng-container *ngFor="let tab of tabList()">\r\n      <li class="nav-item">\r\n        <span\r\n          class="nav-link"\r\n          [ngClass]="{ active: tab.feedType === feedTypeSelected() }"\r\n          (click)="onToggleFeed(tab.feedType)"\r\n          >{{ tab.title }}</span\r\n        >\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n</div>\r\n', styles: ["/* src/app/home/ui/feed-toggle/feed-toggle.component.scss */\n.toggle .nav .nav-item {\n  margin-left: 0.2rem;\n}\n.toggle .nav .nav-item .nav-link {\n  color: var(--extra-gray-color);\n  border-radius: 0;\n  cursor: pointer;\n}\n.active {\n  background: var(--white-color) !important;\n  border-bottom: 2px solid var(--green-color) !important;\n  color: var(--green-color) !important;\n}\n/*# sourceMappingURL=feed-toggle.component.css.map */\n"] }]
  }], null, { toggleFeed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedToggleComponent, { className: "FeedToggleComponent", filePath: "src/app/home/ui/feed-toggle/feed-toggle.component.ts", lineNumber: 26 });
})();

// src/app/home/ui/tags/tags.component.ts
function TagsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275listener("click", function TagsComponent_ng_container_4_Template_span_click_1_listener() {
      const tag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTag.emit(tag_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r2);
  }
}
var _homeStore2;
var _TagsComponent = class _TagsComponent {
  constructor() {
    __privateAdd(this, _homeStore2);
    __privateSet(this, _homeStore2, inject(HomeStore));
    this.tags = __privateGet(this, _homeStore2).selectors.tags;
    this.selectTag = new EventEmitter();
  }
  ngOnInit() {
    __privateGet(this, _homeStore2).getTags();
  }
};
_homeStore2 = new WeakMap();
_TagsComponent.\u0275fac = function TagsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagsComponent)();
};
_TagsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TagsComponent, selectors: [["app-tags"]], outputs: { selectTag: "selectTag" }, decls: 5, vars: 1, consts: [[1, "side-bar"], [4, "ngFor", "ngForOf"], [1, "tag-default", "trending-tag", 3, "click"]], template: function TagsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p");
    \u0275\u0275text(2, "Popular Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, TagsComponent_ng_container_4_Template, 3, 1, "ng-container", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.tags());
  }
}, dependencies: [NgForOf], styles: ["\n\n.tag-default[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n.trending-tag[_ngcontent-%COMP%] {\n  background-color: var(--gray-color);\n  color: var(--white-color) !important;\n}\n.trending-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-gray-color);\n}\n/*# sourceMappingURL=tags.component.css.map */"], changeDetection: 0 });
var TagsComponent = _TagsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagsComponent, [{
    type: Component,
    args: [{ selector: "app-tags", imports: [NgForOf], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="side-bar">\r\n  <p>Popular Tags</p>\r\n  <div>\r\n    <ng-container *ngFor="let tag of tags()">\r\n      <span (click)="selectTag.emit(tag)" class="tag-default trending-tag">{{\r\n        tag\r\n      }}</span>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/home/ui/tags/tags.component.scss */\n.tag-default {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n.trending-tag {\n  background-color: var(--gray-color);\n  color: var(--white-color) !important;\n}\n.trending-tag:hover {\n  background-color: var(--extra-gray-color);\n}\n/*# sourceMappingURL=tags.component.css.map */\n"] }]
  }], null, { selectTag: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TagsComponent, { className: "TagsComponent", filePath: "src/app/home/ui/tags/tags.component.ts", lineNumber: 19 });
})();

// src/app/home/home.component.ts
function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h1", 9);
    \u0275\u0275text(2, "conduit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 10);
    \u0275\u0275text(4, "A place to share your knowledge");
    \u0275\u0275elementEnd()();
  }
}
var _homeStore3, _authStore2;
var _HomeComponent = class _HomeComponent {
  constructor() {
    __privateAdd(this, _homeStore3);
    __privateAdd(this, _authStore2);
    __privateSet(this, _homeStore3, inject(HomeStore));
    __privateSet(this, _authStore2, inject(AuthStore));
    this.articleCount = __privateGet(this, _homeStore3).selectors.articleCount;
    this.currentOffset = __privateGet(this, _homeStore3).selectors.currentOffset;
    this.isAuthenticated = __privateGet(this, _authStore2).selectors.isAuthenticated;
    this.articleList = __privateGet(this, _homeStore3).selectors.articleList;
  }
  ngOnInit() {
    if (this.isAuthenticated()) {
      this.toggleFeed(FEED_TYPE.yourFeed);
    } else {
      this.toggleFeed(FEED_TYPE.globalFeed);
    }
  }
  selectTag(tag) {
    __privateGet(this, _homeStore3).queryArticle({
      feedType: FEED_TYPE.tagFeed,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0,
        tag
      }
    });
  }
  toggleFeed(feedType) {
    __privateGet(this, _homeStore3).queryArticle({
      feedType,
      params: {
        limit: DEFAULT_LIMIT,
        offset: 0
      }
    });
  }
  onPageOffsetChange(offset) {
    __privateGet(this, _homeStore3).onOffsetChange(offset);
  }
  toggleFavorite(article) {
    __privateGet(this, _homeStore3).toggleFavorite(article);
  }
};
_homeStore3 = new WeakMap();
_authStore2 = new WeakMap();
_HomeComponent.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], features: [\u0275\u0275ProvidersFeature([provideComponentStore(HomeStore)])], decls: 8, vars: 6, consts: [["class", "banner", 4, "ngIf"], [1, "news-feed", "row"], [1, "col-9"], [3, "toggleFeed"], [3, "toggleFavorite", "articleList"], [3, "offsetChange", "totalCount", "offset"], [1, "col-3"], [3, "selectTag"], [1, "banner"], [1, "title"], [1, "description"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_div_0_Template, 5, 0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "app-feed-toggle", 3);
    \u0275\u0275listener("toggleFeed", function HomeComponent_Template_app_feed_toggle_toggleFeed_3_listener($event) {
      return ctx.toggleFeed($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-article-list", 4);
    \u0275\u0275listener("toggleFavorite", function HomeComponent_Template_app_article_list_toggleFavorite_4_listener($event) {
      return ctx.toggleFavorite($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-pagination", 5);
    \u0275\u0275listener("offsetChange", function HomeComponent_Template_app_pagination_offsetChange_5_listener($event) {
      return ctx.onPageOffsetChange($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "app-tags", 7);
    \u0275\u0275listener("selectTag", function HomeComponent_Template_app_tags_selectTag_7_listener($event) {
      return ctx.selectTag($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.isAuthenticated());
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-top", !ctx.isAuthenticated() ? "232px" : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("articleList", ctx.articleList);
    \u0275\u0275advance();
    \u0275\u0275property("totalCount", ctx.articleCount)("offset", ctx.currentOffset);
  }
}, dependencies: [
  TagsComponent,
  FeedToggleComponent,
  NgIf,
  ArticleListComponent,
  PaginationComponent
], styles: ["\n\n.banner[_ngcontent-%COMP%] {\n  background-color: var(--green-color);\n  text-align: center;\n  color: #fff;\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n}\n.banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: var(--font-titillium);\n  font-size: 3.5rem;\n  padding-bottom: 0.5rem;\n}\n.banner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 300 !important;\n}\n/*# sourceMappingURL=home.component.css.map */"], changeDetection: 0 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
      TagsComponent,
      FeedToggleComponent,
      NgIf,
      ArticleListComponent,
      PaginationComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [provideComponentStore(HomeStore)], template: `<div class="banner" *ngIf="!isAuthenticated()">\r
  <h1 class="title">conduit</h1>\r
  <p class="description">A place to share your knowledge</p>\r
</div>\r
<div\r
  class="news-feed row"\r
  [style.marginTop]="!isAuthenticated() ? '232px' : ''"\r
>\r
  <div class="col-9">\r
    <app-feed-toggle (toggleFeed)="toggleFeed($event)"></app-feed-toggle>\r
    <app-article-list (toggleFavorite)="toggleFavorite($event)" [articleList]="articleList"></app-article-list>\r
    <app-pagination\r
      [totalCount]="articleCount"\r
      [offset]="currentOffset"\r
      (offsetChange)="onPageOffsetChange($event)"\r
    ></app-pagination>\r
  </div>\r
  <div class="col-3">\r
    <app-tags (selectTag)="selectTag($event)"></app-tags>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/home/home.component.scss */\n.banner {\n  background-color: var(--green-color);\n  text-align: center;\n  color: #fff;\n  padding: 2rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 58px;\n}\n.banner .title {\n  font-family: var(--font-titillium);\n  font-size: 3.5rem;\n  padding-bottom: 0.5rem;\n}\n.banner .description {\n  font-size: 1.5rem;\n  font-weight: 300 !important;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 32 });
})();
export {
  HomeComponent as default
};
//# sourceMappingURL=home.component-4F3E46YJ.js.map
