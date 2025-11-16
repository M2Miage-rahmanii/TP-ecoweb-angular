import {
  FormErrorsComponent
} from "./chunk-2W5LSW7C.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CYDL3RXW.js";
import {
  AuthStore
} from "./chunk-WNSVKIK7.js";
import {
  RouterLink
} from "./chunk-PNMNZQ7M.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-RNQ4XVA4.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-GDGJH4RA.js";

// src/app/register/register.component.ts
var _authStore;
var _RegisterComponent = class _RegisterComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateSet(this, _authStore, inject(AuthStore));
    this.errorResponse = __privateGet(this, _authStore).selectors.errorResponse;
    this.registerForm = new FormGroup({
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.email]
      }),
      password: new FormControl("", {
        nonNullable: true
      }),
      username: new FormControl("", {
        nonNullable: true
      })
    });
  }
  register() {
    __privateGet(this, _authStore).register(this.registerForm);
  }
  ngOnDestroy() {
    __privateGet(this, _authStore).resetErrorResponse();
  }
};
_authStore = new WeakMap();
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterComponent)();
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 12, vars: 2, consts: [[1, "register"], ["routerLink", "/login", 1, "login"], [1, "register-form", 3, "ngSubmit", "formGroup"], [3, "errorResponse"], ["type", "text", "formControlName", "username", "autocomplete", "new-username", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "email", "formControlName", "email", "autocomplete", "new-email", "placeholder", "Email", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "sign-up-btn", "btn-lg"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "Sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 1);
    \u0275\u0275text(4, "Have an account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 2);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() {
      return ctx.register();
    });
    \u0275\u0275element(6, "app-form-errors", 3)(7, "input", 4)(8, "input", 5)(9, "input", 6);
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275text(11, " Sign up ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx.registerForm);
    \u0275\u0275advance();
    \u0275\u0275property("errorResponse", ctx.errorResponse);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormErrorsComponent, RouterLink], styles: ["\n\n.register[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.register[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  color: var(--green-color);\n  text-decoration: none;\n}\n.register[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\n  color: var(--extra-green-color);\n  text-decoration: underline;\n}\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 620px;\n  margin: 16px auto;\n}\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]:hover {\n  color: var(--white-color);\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=register.component.css.map */"], changeDetection: 0 });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", imports: [ReactiveFormsModule, FormErrorsComponent, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="register">\r\n  <h1>Sign up</h1>\r\n  <a routerLink="/login" class="login">Have an account?</a>\r\n\r\n  <form [formGroup]="registerForm" (ngSubmit)="register()" class="register-form">\r\n    <app-form-errors [errorResponse]="errorResponse"></app-form-errors>\r\n    <input\r\n      type="text"\r\n      formControlName="username"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-username"\r\n      placeholder="Username"\r\n    />\r\n    <input\r\n      type="email"\r\n      formControlName="email"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-email"\r\n      placeholder="Email"\r\n    />\r\n    <input\r\n      type="password"\r\n      formControlName="password"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-password"\r\n      placeholder="Password"\r\n    />\r\n    <button type="submit" class="btn sign-up-btn btn-lg">\r\n      Sign up\r\n    </button>\r\n  </form>\r\n</div>\r\n', styles: ["/* src/app/register/register.component.scss */\n.register {\n  text-align: center;\n}\n.register .login {\n  color: var(--green-color);\n  text-decoration: none;\n}\n.register .login:hover {\n  color: var(--extra-green-color);\n  text-decoration: underline;\n}\n.register .register-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 620px;\n  margin: 16px auto;\n}\n.register .register-form .sign-up-btn {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.register .register-form .sign-up-btn:hover {\n  color: var(--white-color);\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/register/register.component.ts", lineNumber: 26 });
})();
export {
  RegisterComponent as default
};
//# sourceMappingURL=register.component-O7VJA6JH.js.map
