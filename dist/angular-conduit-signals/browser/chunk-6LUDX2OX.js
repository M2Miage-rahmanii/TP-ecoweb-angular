import {
  DEFAULT_LIMIT,
  RouterLink
} from "./chunk-PNMNZQ7M.js";
import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RNQ4XVA4.js";

// src/app/shared/ui/article/article.component.ts
var _c0 = (a0) => ["/article", a0];
function ArticleComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r1);
  }
}
var _ArticleComponent = class _ArticleComponent {
  constructor() {
    this.toggleFavorite = new EventEmitter();
  }
};
_ArticleComponent.\u0275fac = function ArticleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleComponent)();
};
_ArticleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleComponent, selectors: [["app-article"]], inputs: { article: "article" }, outputs: { toggleFavorite: "toggleFavorite" }, decls: 22, vars: 15, consts: [[1, "article-preview"], [1, "article-meta"], ["alt", "avatar", 1, "avatar", 3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"], [1, "btn", "btn-sm", "ms-auto", 3, "click", "ngClass"], [1, "fa-solid", "fa-heart"], [1, "preview-link", 3, "routerLink"], [1, "title"], [1, "description"], [1, "footer"], [1, "read-more"], [1, "tags"], [4, "ngFor", "ngForOf"], [1, "tag-default"]], template: function ArticleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "a", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function ArticleComponent_Template_button_click_9_listener() {
      return ctx.toggleFavorite.emit(ctx.article);
    });
    \u0275\u0275element(10, "i", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "h1", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "span", 12);
    \u0275\u0275text(19, "Read more...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275template(21, ArticleComponent_ng_container_21_Template, 3, 1, "ng-container", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.article.author.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/@" + ctx.article.author.username);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.article.author.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 10, ctx.article.createdAt, "MMMM d, y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx.article.favorited ? "unfavorite-btn" : "favorite-btn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.article.favoritesCount, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, ctx.article.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.article.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.article.description, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.article.tagList);
  }
}, dependencies: [NgForOf, RouterLink, NgClass, DatePipe], styles: ["\n\n.article-preview[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 1.5rem 0;\n}\n.article-preview[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.article-preview[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.article-preview[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  line-height: 1rem;\n}\n.article-preview[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  color: #3d8b3d;\n  text-decoration: none;\n}\n.article-preview[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.article-preview[_ngcontent-%COMP%]   .article-meta[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: rgb(187, 187, 187);\n  margin-bottom: 0;\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  cursor: pointer;\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.3rem;\n  color: var(--gray-color);\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--extra-white-gray-color);\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  margin-left: auto;\n}\n.article-preview[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag-default[_ngcontent-%COMP%] {\n  border: 1px solid var(--extra-white-gray-color);\n  color: var(--gray-color) !important;\n  background: none !important;\n}\n.tag-default[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=article.component.css.map */"], changeDetection: 0 });
var ArticleComponent = _ArticleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleComponent, [{
    type: Component,
    args: [{ selector: "app-article", imports: [NgIf, NgForOf, DatePipe, RouterLink, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="article-preview">\r
  <div class="article-meta">\r
    <img alt="avatar" class="avatar" [src]="article.author.image" />\r
    <div class="info">\r
      <a [routerLink]="'/@' + article.author.username" class="author">{{\r
        article.author.username\r
      }}</a>\r
      <p class="date">{{ article.createdAt | date : "MMMM d, y" }}</p>\r
    </div>\r
    <button\r
      class="btn btn-sm ms-auto"\r
      [ngClass]="article.favorited ? 'unfavorite-btn' : 'favorite-btn'"\r
      (click)="toggleFavorite.emit(article)"\r
    >\r
      <i class="fa-solid fa-heart"></i> {{ article.favoritesCount }}\r
    </button>\r
  </div>\r
  <div [routerLink]="['/article', article.slug]" class="preview-link">\r
    <h1 class="title">\r
      {{ article.title }}\r
    </h1>\r
    <p class="description">\r
      {{ article.description }}\r
    </p>\r
    <div class="footer">\r
      <span class="read-more">Read more...</span>\r
      <div class="tags">\r
        <ng-container *ngFor="let tag of article.tagList"\r
          ><span class="tag-default">{{ tag }}</span>\r
        </ng-container>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/ui/article/article.component.scss */\n.article-preview {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 1.5rem 0;\n}\n.article-preview .article-meta {\n  display: flex;\n  align-items: center;\n}\n.article-preview .article-meta .avatar {\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.article-preview .article-meta .info {\n  line-height: 1rem;\n}\n.article-preview .article-meta .info .author {\n  color: #3d8b3d;\n  text-decoration: none;\n}\n.article-preview .article-meta .info .author:hover {\n  text-decoration: underline;\n}\n.article-preview .article-meta .info .date {\n  font-size: 12.8px;\n  color: rgb(187, 187, 187);\n  margin-bottom: 0;\n}\n.article-preview .preview-link {\n  margin-top: 16px;\n  cursor: pointer;\n}\n.article-preview .preview-link .title {\n  font-size: 24px;\n}\n.article-preview .preview-link .description {\n  font-size: 1rem;\n  line-height: 1.3rem;\n  color: var(--gray-color);\n}\n.article-preview .preview-link .footer {\n  display: flex;\n  align-items: center;\n}\n.article-preview .preview-link .footer .read-more {\n  font-size: 12.8px;\n  color: var(--extra-white-gray-color);\n}\n.article-preview .preview-link .footer .tags {\n  display: flex;\n  gap: 3px;\n  margin-left: auto;\n}\n.article-preview .preview-link .footer .tags .tag-default {\n  border: 1px solid var(--extra-white-gray-color);\n  color: var(--gray-color) !important;\n  background: none !important;\n}\n.tag-default {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  display: inline-block;\n  border-radius: 10rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=article.component.css.map */\n"] }]
  }], null, { article: [{
    type: Input,
    args: [{ required: true }]
  }], toggleFavorite: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleComponent, { className: "ArticleComponent", filePath: "src/app/shared/ui/article/article.component.ts", lineNumber: 19 });
})();

// src/app/shared/ui/article-list/article-list.component.ts
function ArticleListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-article", 3);
    \u0275\u0275listener("toggleFavorite", function ArticleListComponent_ng_container_0_ng_container_1_Template_app_article_toggleFavorite_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavorite.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const article_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("article", article_r3);
  }
}
function ArticleListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ArticleListComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.articleList());
  }
}
function ArticleListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No articles are here... yet.");
    \u0275\u0275elementEnd();
  }
}
var _ArticleListComponent = class _ArticleListComponent {
  constructor() {
    this.toggleFavorite = new EventEmitter();
  }
};
_ArticleListComponent.\u0275fac = function ArticleListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleListComponent)();
};
_ArticleListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleListComponent, selectors: [["app-article-list"]], inputs: { articleList: "articleList" }, outputs: { toggleFavorite: "toggleFavorite" }, decls: 3, vars: 2, consts: [["noArticle", ""], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "toggleFavorite", "article"], ["id", "no-article", 1, "py-4"]], template: function ArticleListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ArticleListComponent_ng_container_0_Template, 2, 1, "ng-container", 1)(1, ArticleListComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noArticle_r4 = \u0275\u0275reference(2);
    \u0275\u0275property("ngIf", ctx.articleList().length !== 0)("ngIfElse", noArticle_r4);
  }
}, dependencies: [NgForOf, ArticleComponent, NgIf], encapsulation: 2, changeDetection: 0 });
var ArticleListComponent = _ArticleListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleListComponent, [{
    type: Component,
    args: [{ selector: "app-article-list", imports: [NgForOf, ArticleComponent, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-container *ngIf="articleList().length !== 0; else noArticle">\r\n  <ng-container *ngFor="let article of articleList()">\r\n    <app-article [article]="article" (toggleFavorite)="toggleFavorite.emit($event)"></app-article>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-template #noArticle>\r\n  <div id="no-article" class="py-4">No articles are here... yet.</div>\r\n</ng-template>\r\n' }]
  }], null, { articleList: [{
    type: Input,
    args: [{ required: true }]
  }], toggleFavorite: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleListComponent, { className: "ArticleListComponent", filePath: "src/app/shared/ui/article-list/article-list.component.ts", lineNumber: 13 });
})();

// src/app/shared/ui/pagination/pagination.component.ts
var _c02 = () => [];
var _c1 = (a0) => ({ active: a0 });
function PaginationComponent_ul_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 3);
    \u0275\u0275listener("click", function PaginationComponent_ul_0_ng_container_1_Template_li_click_1_listener() {
      const idx_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.offsetChange.emit(idx_r2 * ctx_r2.limit()));
    });
    \u0275\u0275elementStart(2, "a", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const idx_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c1, ctx_r2.currentPageIndex() === idx_r2 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(idx_r2 + 1);
  }
}
function PaginationComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 1);
    \u0275\u0275template(1, PaginationComponent_ul_0_ng_container_1_Template, 4, 4, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c02).constructor(ctx_r2.totalPage()));
  }
}
var _PaginationComponent = class _PaginationComponent {
  constructor() {
    this.limit = signal(DEFAULT_LIMIT).asReadonly();
    this.totalPage = computed(() => Math.ceil(this.totalCount() / this.limit()), ...ngDevMode ? [{ debugName: "totalPage" }] : []);
    this.currentPageIndex = computed(() => this.offset() / this.limit() + 1, ...ngDevMode ? [{ debugName: "currentPageIndex" }] : []);
    this.hasPagination = computed(() => this.totalCount() > this.limit(), ...ngDevMode ? [{ debugName: "hasPagination" }] : []);
    this.offsetChange = new EventEmitter();
  }
};
_PaginationComponent.\u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaginationComponent)();
};
_PaginationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { totalCount: "totalCount", limit: "limit", offset: "offset" }, outputs: { offsetChange: "offsetChange" }, decls: 1, vars: 1, consts: [["class", "pagination", 4, "ngIf"], [1, "pagination"], [4, "ngFor", "ngForOf"], [1, "page-item", 3, "click", "ngClass"], [1, "page-link"]], template: function PaginationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationComponent_ul_0_Template, 2, 2, "ul", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.hasPagination());
  }
}, dependencies: [NgForOf, NgIf, NgClass], styles: ["\n\n.pagination[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: var(--green-color);\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:focus {\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:hover   .page-link[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:focus   .page-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border: var(--green-color);\n  background-color: var(--green-color);\n  color: var(--white-color);\n}\n/*# sourceMappingURL=pagination.component.css.map */"], changeDetection: 0 });
var PaginationComponent = _PaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "app-pagination", imports: [NgForOf, NgIf, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ul class="pagination" *ngIf="hasPagination()">\r\n  <ng-container\r\n    *ngFor="let item of [].constructor(totalPage()); let idx = index"\r\n  >\r\n    <li\r\n      (click)="offsetChange.emit(idx * limit())"\r\n      class="page-item"\r\n      [ngClass]="{ active: currentPageIndex() === idx + 1 }"\r\n    >\r\n      <a class="page-link">{{ idx + 1 }}</a>\r\n    </li></ng-container\r\n  >\r\n</ul>\r\n', styles: ["/* src/app/shared/ui/pagination/pagination.component.scss */\n.pagination {\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem;\n}\n.pagination .page-item {\n  display: inline-block;\n}\n.pagination .page-item .page-link {\n  color: var(--green-color);\n}\n.pagination .page-item:hover,\n.pagination .page-item:focus {\n  cursor: pointer;\n}\n.pagination .page-item:hover .page-link,\n.pagination .page-item:focus .page-link {\n  text-decoration: underline;\n}\n.pagination .page-item.active .page-link {\n  border: var(--green-color);\n  background-color: var(--green-color);\n  color: var(--white-color);\n}\n/*# sourceMappingURL=pagination.component.css.map */\n"] }]
  }], null, { totalCount: [{
    type: Input,
    args: [{ required: true }]
  }], limit: [{
    type: Input
  }], offset: [{
    type: Input,
    args: [{ required: true }]
  }], offsetChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/ui/pagination/pagination.component.ts", lineNumber: 21 });
})();

export {
  ArticleListComponent,
  PaginationComponent
};
//# sourceMappingURL=chunk-6LUDX2OX.js.map
