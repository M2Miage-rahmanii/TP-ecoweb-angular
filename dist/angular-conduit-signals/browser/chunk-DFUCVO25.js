import {
  FormErrorsComponent
} from "./chunk-2W5LSW7C.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-CYDL3RXW.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RNQ4XVA4.js";

// src/app/editor/article-form/tag-list-select/tag-list-select.component.ts
function TagListSelectComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "i", 4);
    \u0275\u0275listener("click", function TagListSelectComponent_ng_container_2_Template_i_click_2_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeTag(item_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r2, " ");
  }
}
var _TagListSelectComponent = class _TagListSelectComponent {
  constructor() {
    this.tagsSelected = signal([], ...ngDevMode ? [{ debugName: "tagsSelected" }] : []);
    this.onChange = (value) => {
    };
    this.onTouched = () => {
    };
  }
  writeValue(obj) {
    this.tagsSelected.set(obj);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  addTag() {
    if (this.tagsSelected().some((tag) => tag === this.tagInput)) {
      return;
    }
    if (!this.tagsSelected()) {
      this.tagsSelected.set([this.tagInput]);
    } else {
      this.tagsSelected.update((value) => [...value, this.tagInput]);
    }
    this.tagInput = "";
    this.onChange(this.tagsSelected());
  }
  removeTag(value) {
    if (!this.tagsSelected().some((tag) => tag === value)) {
      return;
    }
    this.tagsSelected.update((tags) => tags.filter((tag) => tag !== value));
    this.onChange(this.tagsSelected());
  }
};
_TagListSelectComponent.\u0275fac = function TagListSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TagListSelectComponent)();
};
_TagListSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TagListSelectComponent, selectors: [["app-tag-list-select"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: _TagListSelectComponent,
    multi: true
  }
])], decls: 3, vars: 2, consts: [["type", "text", "placeholder", "Enter tags", 1, "form-control", 3, "ngModelChange", "keyup.enter", "blur", "ngModel"], [1, "tag-list"], [4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill"], [1, "fa-solid", "fa-xmark", "me-1", "remove-icon", 3, "click"]], template: function TagListSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "input", 0);
    \u0275\u0275twoWayListener("ngModelChange", function TagListSelectComponent_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tagInput, $event) || (ctx.tagInput = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function TagListSelectComponent_Template_input_keyup_enter_0_listener() {
      return ctx.addTag();
    })("blur", function TagListSelectComponent_Template_input_blur_0_listener() {
      return ctx.onTouched();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, TagListSelectComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("ngModel", ctx.tagInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.tagsSelected());
  }
}, dependencies: [NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.tag-list[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  display: flex;\n  gap: 4px;\n}\n.tag-list[_ngcontent-%COMP%]   .tag-default[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  border-radius: 10rem;\n  text-decoration: none;\n  background-color: var(--gray-color);\n  color: var(--white-color);\n  width: fit-content;\n  margin-top: 2px;\n}\n.tag-list[_ngcontent-%COMP%]   .tag-default[_ngcontent-%COMP%]   .remove-icon[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=tag-list-select.component.css.map */"], changeDetection: 0 });
var TagListSelectComponent = _TagListSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagListSelectComponent, [{
    type: Component,
    args: [{ selector: "app-tag-list-select", imports: [NgForOf, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: TagListSelectComponent,
        multi: true
      }
    ], template: '<input\r\n  type="text"\r\n  [(ngModel)]="tagInput"\r\n  (keyup.enter)="addTag()"\r\n  class="form-control"\r\n  placeholder="Enter tags"\r\n  (blur)="onTouched()"\r\n/>\r\n<div class="tag-list">\r\n  <ng-container *ngFor="let item of tagsSelected()">\r\n    <div class="tag-default tag-pill">\r\n      <i class="fa-solid fa-xmark me-1 remove-icon" (click)="removeTag(item)"></i\r\n      >{{ item }}\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n', styles: ["/* src/app/editor/article-form/tag-list-select/tag-list-select.component.scss */\n.tag-list {\n  margin-top: 2px;\n  display: flex;\n  gap: 4px;\n}\n.tag-list .tag-default {\n  font-size: 0.8rem;\n  padding: 0.1rem 0.6em;\n  white-space: nowrap;\n  margin-right: 3px;\n  margin-bottom: 0.2rem;\n  border-radius: 10rem;\n  text-decoration: none;\n  background-color: var(--gray-color);\n  color: var(--white-color);\n  width: fit-content;\n  margin-top: 2px;\n}\n.tag-list .tag-default .remove-icon {\n  font-size: 0.6rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=tag-list-select.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TagListSelectComponent, { className: "TagListSelectComponent", filePath: "src/app/editor/article-form/tag-list-select/tag-list-select.component.ts", lineNumber: 20 });
})();

// src/app/editor/article-form/article-form.component.ts
var _ArticleFormComponent = class _ArticleFormComponent {
  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl("", {
        nonNullable: true
      }),
      body: new FormControl("", {
        nonNullable: true
      }),
      description: new FormControl("", {
        nonNullable: true
      }),
      tagList: new FormControl([], {
        nonNullable: true
      })
    });
    this.submit = new EventEmitter();
  }
  set article(value) {
    if (value.title) {
      this.articleForm.setValue({
        tagList: value.tagList,
        body: value.body,
        description: value.description,
        title: value.title
      });
    }
  }
};
_ArticleFormComponent.\u0275fac = function ArticleFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleFormComponent)();
};
_ArticleFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleFormComponent, selectors: [["app-article-form"]], inputs: { errorResponse: "errorResponse", article: "article" }, outputs: { submit: "submit" }, decls: 9, vars: 2, consts: [[1, "article-form", 3, "keydown.enter", "ngSubmit", "formGroup"], [3, "errorResponse"], ["type", "text", "formControlName", "title", "placeholder", "Article Title", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "description", "placeholder", "What's this article about", 1, "form-control"], ["formControlName", "body", "rows", "6", "placeholder", "Write your article (in markdown)", 1, "form-control", "form-control-lg"], [1, "form-group"], ["formControlName", "tagList"], ["type", "submit", 1, "btn", "submit-btn", "btn-lg"]], template: function ArticleFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275listener("keydown.enter", function ArticleFormComponent_Template_form_keydown_enter_0_listener($event) {
      return $event.preventDefault();
    })("ngSubmit", function ArticleFormComponent_Template_form_ngSubmit_0_listener() {
      return ctx.submit.emit(ctx.articleForm);
    });
    \u0275\u0275element(1, "app-form-errors", 1)(2, "input", 2)(3, "input", 3)(4, "textarea", 4);
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275element(6, "app-tag-list-select", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275text(8, "Publish Article");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.articleForm);
    \u0275\u0275advance();
    \u0275\u0275property("errorResponse", ctx.errorResponse);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TagListSelectComponent, FormErrorsComponent], styles: ["\n\n.article-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 920px;\n  margin: 16px auto;\n}\n.article-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.article-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=article-form.component.css.map */"], changeDetection: 0 });
var ArticleFormComponent = _ArticleFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleFormComponent, [{
    type: Component,
    args: [{ selector: "app-article-form", imports: [ReactiveFormsModule, TagListSelectComponent, FormErrorsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<form\r
  [formGroup]="articleForm"\r
  class="article-form"\r
  (keydown.enter)="$event.preventDefault()"\r
  (ngSubmit)="submit.emit(articleForm)"\r
>\r
  <app-form-errors [errorResponse]="errorResponse"></app-form-errors>\r
  <input\r
    type="text"\r
    formControlName="title"\r
    class="form-control form-control-lg"\r
    placeholder="Article Title"\r
  />\r
  <input\r
    type="text"\r
    formControlName="description"\r
    class="form-control"\r
    placeholder="What's this article about"\r
  />\r
  <textarea\r
    formControlName="body"\r
    rows="6"\r
    class="form-control form-control-lg"\r
    placeholder="Write your article (in markdown)"\r
  ></textarea>\r
  <div class="form-group">\r
    <app-tag-list-select formControlName="tagList"></app-tag-list-select>\r
  </div>\r
  <button type="submit" class="btn submit-btn btn-lg">Publish Article</button>\r
</form>\r
`, styles: ["/* src/app/editor/article-form/article-form.component.scss */\n.article-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 920px;\n  margin: 16px auto;\n}\n.article-form .submit-btn {\n  margin-left: auto;\n  color: var(--white-color);\n  background-color: var(--green-color);\n  border-color: var(--green-color);\n}\n.article-form .submit-btn:hover {\n  background-color: var(--extra-green-color);\n  border-color: var(--extra-green-color);\n}\n/*# sourceMappingURL=article-form.component.css.map */\n"] }]
  }], null, { errorResponse: [{
    type: Input,
    args: [{ required: true }]
  }], article: [{
    type: Input
  }], submit: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleFormComponent, { className: "ArticleFormComponent", filePath: "src/app/editor/article-form/article-form.component.ts", lineNumber: 23 });
})();

export {
  ArticleFormComponent
};
//# sourceMappingURL=chunk-DFUCVO25.js.map
