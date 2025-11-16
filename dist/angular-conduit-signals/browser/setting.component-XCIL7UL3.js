import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-CYDL3RXW.js";
import {
  AuthStore
} from "./chunk-WNSVKIK7.js";
import "./chunk-PNMNZQ7M.js";
import {
  ChangeDetectionStrategy,
  Component,
  effect,
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

// src/app/setting/setting.component.ts
var _authStore;
var _SettingComponent = class _SettingComponent {
  constructor() {
    __privateAdd(this, _authStore);
    __privateSet(this, _authStore, inject(AuthStore));
    this.settingForm = new FormGroup({
      bio: new FormControl("", {
        nonNullable: true
      }),
      email: new FormControl("", {
        nonNullable: true
      }),
      password: new FormControl("", {
        nonNullable: true
      }),
      username: new FormControl("", {
        nonNullable: true
      }),
      image: new FormControl("", {
        nonNullable: true
      })
    });
    effect(() => {
      const user = __privateGet(this, _authStore).selectors.user();
      if (user) {
        this.settingForm.patchValue(user);
      }
    });
  }
  ngOnInit() {
    __privateGet(this, _authStore).getCurrentUser();
  }
  submit() {
    __privateGet(this, _authStore).updateCurrentUser(this.settingForm);
  }
  logout() {
    __privateGet(this, _authStore).logout();
  }
};
_authStore = new WeakMap();
_SettingComponent.\u0275fac = function SettingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingComponent)();
};
_SettingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingComponent, selectors: [["app-setting"]], decls: 14, vars: 1, consts: [[1, "setting"], [1, "setting-form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "image", "autocomplete", "new-username", "placeholder", "Url of profile picture", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "username", "autocomplete", "new-username", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["formControlName", "bio", "rows", "6", "placeholder", "Short bio about you", 1, "form-control", "form-control-lg"], ["type", "email", "formControlName", "email", "autocomplete", "new-email", "placeholder", "Email", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "New Password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "update-btn", "btn-lg"], ["type", "button", 1, "btn", "logout-btn", "btn-outline-danger", 3, "click"]], template: function SettingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "Your Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275listener("ngSubmit", function SettingComponent_Template_form_ngSubmit_3_listener() {
      return ctx.submit();
    });
    \u0275\u0275element(4, "input", 2)(5, "input", 3)(6, "textarea", 4)(7, "input", 5)(8, "input", 6);
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275text(10, "Update Setting");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function SettingComponent_Template_button_click_12_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(13, " Or click here to logout ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.settingForm);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.setting[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.setting[_ngcontent-%COMP%]   .setting-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 620px;\n  margin: 16px auto;\n}\n.setting[_ngcontent-%COMP%]   .setting-form[_ngcontent-%COMP%]   .update-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.setting[_ngcontent-%COMP%]   .setting-form[_ngcontent-%COMP%]   .update-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n.setting[_ngcontent-%COMP%]   .setting-form[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n/*# sourceMappingURL=setting.component.css.map */"], changeDetection: 0 });
var SettingComponent = _SettingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingComponent, [{
    type: Component,
    args: [{ selector: "app-setting", imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="setting">\r\n  <h1>Your Settings</h1>\r\n\r\n  <form [formGroup]="settingForm" (ngSubmit)="submit()" class="setting-form">\r\n    <input\r\n      type="text"\r\n      formControlName="image"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-username"\r\n      placeholder="Url of profile picture"\r\n    />\r\n    <input\r\n      type="text"\r\n      formControlName="username"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-username"\r\n      placeholder="Username"\r\n    />\r\n    <textarea\r\n      formControlName="bio"\r\n      rows="6"\r\n      class="form-control form-control-lg"\r\n      placeholder="Short bio about you"\r\n    ></textarea>\r\n    <input\r\n      type="email"\r\n      formControlName="email"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-email"\r\n      placeholder="Email"\r\n    />\r\n    <input\r\n      type="password"\r\n      formControlName="password"\r\n      class="form-control form-control-lg"\r\n      autocomplete="new-password"\r\n      placeholder="New Password"\r\n    />\r\n    <button type="submit" class="btn update-btn btn-lg">Update Setting</button>\r\n    <hr />\r\n    <button\r\n      type="button"\r\n      class="btn logout-btn btn-outline-danger"\r\n      (click)="logout()"\r\n    >\r\n      Or click here to logout\r\n    </button>\r\n  </form>\r\n</div>\r\n', styles: ["/* src/app/setting/setting.component.scss */\n.setting {\n  text-align: center;\n}\n.setting .setting-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 620px;\n  margin: 16px auto;\n}\n.setting .setting-form .update-btn {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.setting .setting-form .update-btn:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n.setting .setting-form .logout-btn {\n  margin-right: auto;\n}\n/*# sourceMappingURL=setting.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingComponent, { className: "SettingComponent", filePath: "src/app/setting/setting.component.ts", lineNumber: 16 });
})();
export {
  SettingComponent as default
};
//# sourceMappingURL=setting.component-XCIL7UL3.js.map
