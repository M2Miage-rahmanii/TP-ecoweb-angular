import {
  AuthStore
} from "./chunk-WNSVKIK7.js";
import {
  AUTH_MENU,
  NON_AUTH_MENU,
  PreloadAllModules,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  TitleStrategy,
  TitleStrategyService,
  UrlSegment,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withInterceptors,
  withPreloading
} from "./chunk-PNMNZQ7M.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgForOf,
  NgIf,
  computed,
  createInjectionToken,
  inject,
  map,
  provideComponentStore,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RNQ4XVA4.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/layout/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [["href", "https://github.com/AndyT2503/angular-conduit-signals", "target", "_blank"], [1, "fa-brands", "fa-github", "me-2"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "footer")(1, "a", 0);
    \u0275\u0275domElement(2, "i", 1);
    \u0275\u0275text(3, "Fork on Github");
    \u0275\u0275domElementEnd()();
  }
}, styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  height: 66px;\n  background-color: var(--blue-black-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white-color);\n  text-decoration: none;\n  font-size: 1.5rem;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=footer.component.css.map */"], changeDetection: 0 });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<footer>\r\n  <a href="https://github.com/AndyT2503/angular-conduit-signals" target="_blank"\r\n    ><i class="fa-brands fa-github me-2"></i>Fork on Github</a\r\n  >\r\n</footer>\r\n', styles: ["/* src/app/layout/footer/footer.component.scss */\nfooter {\n  height: 66px;\n  background-color: var(--blue-black-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter a {\n  color: var(--white-color);\n  text-decoration: none;\n  font-size: 1.5rem;\n}\nfooter a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer/footer.component.ts", lineNumber: 10 });
})();

// src/app/layout/header/header.component.ts
var _c0 = () => ({ exact: true });
var _c1 = (a0) => [a0];
function HeaderComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 4);
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.url)("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r1.icon + " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r1.title, " ");
  }
}
function HeaderComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, "@" + user_r2.username))("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.username, " ");
  }
}
var _authStore;
var _HeaderComponent = class _HeaderComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateSet(this, _authStore, inject(AuthStore));
    this.menu = computed(() => {
      if (__privateGet(this, _authStore).selectors.isAuthenticated()) {
        return AUTH_MENU;
      } else {
        return NON_AUTH_MENU;
      }
    }, ...ngDevMode ? [{ debugName: "menu" }] : []);
    this.currentUser = __privateGet(this, _authStore).selectors.user;
  }
};
_authStore = new WeakMap();
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 2, consts: [["routerLink", "", 1, "logo"], [1, "nav-bar"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["alt", "user.username", 1, "user-avatar", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "a", 0);
    \u0275\u0275text(2, "conduit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 1);
    \u0275\u0275template(4, HeaderComponent_ng_container_4_Template, 4, 6, "ng-container", 2)(5, HeaderComponent_ng_container_5_Template, 4, 7, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.menu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentUser());
  }
}, dependencies: [RouterLink, NgForOf, RouterLinkActive, NgIf], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1176px;\n  margin: 8px auto;\n  align-items: baseline;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-family: var(--font-titillium);\n  font-size: 1.5rem;\n  padding-top: 0rem;\n  margin-right: 2rem;\n  color: var(--green-color);\n  text-decoration: none;\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-left: auto;\n  list-style-type: none;\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, \nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.8);\n}\nheader[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  height: 26px;\n  border-radius: 50px;\n  float: left;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=header.component.css.map */"], changeDetection: 0 });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [RouterLink, NgForOf, RouterLinkActive, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, template: `<header>\r
  <a routerLink="" class="logo">conduit</a>\r
  <ul class="nav-bar">\r
    <ng-container *ngFor="let item of menu(); let idx = index">\r
      <li\r
        [routerLink]="item.url"\r
        routerLinkActive="active"\r
        [routerLinkActiveOptions]="{ exact: true }"\r
      >\r
        <i [class]="item.icon + ' me-1'"></i>{{ item.title }}\r
      </li>\r
    </ng-container>\r
    <ng-container *ngIf="currentUser() as user">\r
      <li\r
        [routerLink]="['@' + user.username]"\r
        routerLinkActive="active"\r
        [routerLinkActiveOptions]="{ exact: true }"\r
      >\r
        <img class="user-avatar" [src]="user.image" alt="user.username">\r
        {{ user.username }}\r
      </li>\r
    </ng-container>\r
  </ul>\r
</header>\r
`, styles: ["/* src/app/layout/header/header.component.scss */\nheader {\n  display: flex;\n  max-width: 1176px;\n  margin: 8px auto;\n  align-items: baseline;\n}\nheader .logo {\n  font-family: var(--font-titillium);\n  font-size: 1.5rem;\n  padding-top: 0rem;\n  margin-right: 2rem;\n  color: var(--green-color);\n  text-decoration: none;\n}\nheader .nav-bar {\n  display: flex;\n  gap: 16px;\n  margin-left: auto;\n  list-style-type: none;\n}\nheader .nav-bar li {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\nheader .nav-bar li:hover,\nheader .nav-bar li.active {\n  color: rgba(0, 0, 0, 0.8);\n}\nheader .nav-bar li .user-avatar {\n  height: 26px;\n  border-radius: 50px;\n  float: left;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layout/header/header.component.ts", lineNumber: 19 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer");
  }
}, dependencies: [RouterOutlet, FooterComponent, HeaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  min-height: calc(100vh - 149px);\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, FooterComponent, HeaderComponent], template: '<app-header></app-header>\r\n<div class="container">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n', styles: ["/* src/app/app.component.scss */\n.container {\n  max-width: 1200px;\n  min-height: calc(100vh - 149px);\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/app/shared/guards/auth.guard.ts
var authGuard = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  return authStore.select((x) => x.isAuthenticated).pipe(map((isAuth) => isAuth || router.createUrlTree(["/login"])), take(1));
};

// src/app/shared/guards/non-auth.guard.ts
var nonAuthGuard = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  return authStore.select((x) => x.isAuthenticated).pipe(map((isAuth) => !isAuth || router.createUrlTree(["/"])), take(1));
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-XVNFRACL.js"),
    title: "Sign in",
    canMatch: [nonAuthGuard]
  },
  {
    path: "register",
    loadComponent: () => import("./register.component-O7VJA6JH.js"),
    title: "Sign up",
    canMatch: [nonAuthGuard]
  },
  {
    path: "editor",
    loadChildren: () => import("./editor.routes-2XUHTXMW.js"),
    canMatch: [authGuard],
    title: "Editor"
  },
  {
    path: "settings",
    loadComponent: () => import("./setting.component-XCIL7UL3.js"),
    canMatch: [authGuard],
    title: "Settings"
  },
  {
    path: "article/:slug",
    loadComponent: () => import("./article-detail.component-2CL66KA7.js")
  },
  {
    matcher: (url) => {
      if (url.length >= 1 && url[0].path.startsWith("@")) {
        return {
          consumed: [url[0]],
          posParams: {
            username: new UrlSegment(url[0].path.slice(1), {})
          }
        };
      }
      return null;
    },
    loadComponent: () => import("./profile.component-A6BKLD2T.js"),
    loadChildren: () => import("./profile.routes-2RKSPQ45.js")
  },
  {
    path: "",
    loadComponent: () => import("./home.component-4F3E46YJ.js"),
    title: "Home"
  }
];

// src/app/shared/interceptors/api-prefix.interceptor.ts
var apiPrefixInterceptor = (req, next) => {
  const env = injectEnvironmentConfig();
  if (!req.url.includes("http")) {
    const reqClone = req.clone({
      url: `${env.apiUrl}${req.url}`
    });
    return next(reqClone);
  }
  return next(req);
};

// src/app/shared/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = inject(AuthStore).selectors.user()?.token;
  if (req.url.includes("/api/") && !req.headers.has("Authorization") && token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${token}`
      }
    });
  }
  return next(req);
};

// src/app/app.config.ts
var [injectEnvironmentConfig, provideEnvironmentConfig] = createInjectionToken("EnvironmentConfig");
var initAppConfig = (config) => {
  return {
    providers: [
      {
        provide: TitleStrategy,
        useClass: TitleStrategyService
      },
      provideComponentStore(AuthStore),
      provideRouter(routes, withComponentInputBinding(), withHashLocation(), withPreloading(PreloadAllModules)),
      provideEnvironmentConfig(config),
      provideHttpClient(withInterceptors([apiPrefixInterceptor, authInterceptor]))
    ]
  };
};

// src/main.ts
fetch("assets/config/app-config.json").then((res) => res.json()).then((config) => bootstrapApplication(AppComponent, initAppConfig(config)).catch((err) => console.error(err)));
//# sourceMappingURL=main.js.map
