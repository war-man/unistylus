(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{AiY8:function(n,t,o){"use strict";o.d(t,"a",function(){return C});var e=o("fXoL"),c=o("Rn8b"),s=o("ofXK");const r=["codeComponent"];function b(n,t){if(1&n){const n=e.Hb();e.Gb(0,"li"),e.Gb(1,"button",8),e.Mb("click",function(){return e.Tb(n),e.Ob(2).showLang="html"}),e.Zb(2),e.Fb(),e.Fb()}if(2&n){const n=e.Ob(2);e.tb(1),e.vb("active-html","html"===n.showLang),e.tb(1),e.ac(n.htmlLabel)}}function a(n,t){if(1&n){const n=e.Hb();e.Gb(0,"li"),e.Gb(1,"button",8),e.Mb("click",function(){return e.Tb(n),e.Ob(2).showLang="css"}),e.Zb(2),e.Fb(),e.Fb()}if(2&n){const n=e.Ob(2);e.tb(1),e.vb("active-css","css"===n.showLang),e.tb(1),e.ac(n.cssLabel)}}function i(n,t){if(1&n){const n=e.Hb();e.Gb(0,"li"),e.Gb(1,"button",8),e.Mb("click",function(){return e.Tb(n),e.Ob(2).showLang="js"}),e.Zb(2),e.Fb(),e.Fb()}if(2&n){const n=e.Ob(2);e.tb(1),e.vb("active-js","js"===n.showLang),e.tb(1),e.ac(n.jsLabel)}}function l(n,t){if(1&n&&(e.Gb(0,"div",4),e.Eb(1,"div",5),e.Gb(2,"ul",6),e.Xb(3,b,3,3,"li",7),e.Xb(4,a,3,3,"li",7),e.Xb(5,i,3,3,"li",7),e.Fb(),e.Fb()),2&n){const n=e.Ob();e.tb(1),e.Pb("innerHtml",n.title,e.Ub),e.tb(2),e.Pb("ngIf",n.htmlSource||n.htmlCode),e.tb(1),e.Pb("ngIf",n.cssCode),e.tb(1),e.Pb("ngIf",n.jsCode)}}function d(n,t){if(1&n&&(e.Gb(0,"pre"),e.Zb(1,"        "),e.Gb(2,"code",17),e.Zb(3),e.Fb(),e.Zb(4,"\n      "),e.Fb()),2&n){const n=e.Ob(2);e.tb(3),e.ac(n.codeService.extractCode(n.htmlSource))}}function g(n,t){if(1&n&&(e.Gb(0,"pre"),e.Gb(1,"code",17),e.Zb(2),e.Fb(),e.Fb()),2&n){const n=e.Ob(2);e.tb(2),e.ac(n.htmlCode)}}function p(n,t){if(1&n&&(e.Gb(0,"div",9),e.Gb(1,"div",10),e.Xb(2,d,5,1,"pre",11),e.Xb(3,g,3,1,"ng-template",null,12,e.Yb),e.Fb(),e.Gb(5,"div",13),e.Gb(6,"pre"),e.Gb(7,"code",14),e.Zb(8),e.Fb(),e.Fb(),e.Fb(),e.Gb(9,"div",15),e.Gb(10,"pre"),e.Gb(11,"code",16),e.Zb(12),e.Fb(),e.Fb(),e.Fb(),e.Fb()),2&n){const n=e.Sb(4),t=e.Ob();e.tb(1),e.vb("active","html"===t.showLang),e.tb(1),e.Pb("ngIf",t.htmlSource)("ngIfElse",n),e.tb(3),e.vb("active","css"===t.showLang),e.tb(3),e.ac(t.cssCode),e.tb(1),e.vb("active","js"===t.showLang),e.tb(3),e.ac(t.jsCode)}}let C=(()=>{class n{constructor(n){this.codeService=n,this.title="",this.htmlLabel="HTML",this.cssLabel="CSS",this.jsLabel="JS"}ngOnInit(){this.showLang||(this.showLang=this.htmlSource||this.htmlCode?"html":this.cssCode?"css":this.jsCode?"js":void 0)}ngAfterViewInit(){this.codeComponent&&this.codeComponent.nativeElement.querySelectorAll("pre code").forEach(n=>hljs.highlightBlock(n))}isMultiple(){return(this.htmlSource||this.htmlCode)&&(this.cssCode||this.jsCode)||this.cssCode&&this.jsCode}}return n.\u0275fac=function(t){return new(t||n)(e.Db(c.a))},n.\u0275cmp=e.xb({type:n,selectors:[["app-code"]],viewQuery:function(n,t){if(1&n&&e.bc(r,!0),2&n){let n;e.Rb(n=e.Nb())&&(t.codeComponent=n.first)}},inputs:{title:"title",showLang:"showLang",htmlSource:"htmlSource",htmlCode:"htmlCode",htmlLabel:"htmlLabel",cssCode:"cssCode",cssLabel:"cssLabel",jsCode:"jsCode",jsLabel:"jsLabel"},decls:4,vars:2,consts:[[1,"component-code"],["codeComponent",""],["class","head",4,"ngIf"],["class","body",4,"ngIf"],[1,"head"],[1,"title",3,"innerHtml"],[1,"togglers"],[4,"ngIf"],[1,"button-outline-medium-xs",3,"click"],[1,"body"],[1,"html"],[4,"ngIf","ngIfElse"],["htmlCodeElse",""],[1,"css"],[1,"language-css"],[1,"js"],[1,"language-js"],[1,"language-html"]],template:function(n,t){1&n&&(e.Gb(0,"div",0,1),e.Xb(2,l,6,4,"div",2),e.Xb(3,p,13,10,"div",3),e.Fb()),2&n&&(e.tb(2),e.Pb("ngIf",t.isMultiple()),e.tb(1),e.Pb("ngIf",t.showLang))},directives:[s.i],styles:[".component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{padding:.25rem .5rem;display:flex;align-items:center;background:var(--app-color-background-shade);border-radius:var(--app-size-radius) var(--app-size-radius) 0 0}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .togglers[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-wrap:nowrap}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .togglers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:.5rem}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .togglers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .togglers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active-html[_ngcontent-%COMP%]{border-color:var(--app-color-primary-shade);background:var(--app-color-primary);color:var(--app-color-primary-contrast)}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .togglers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active-css[_ngcontent-%COMP%]{border-color:var(--app-color-danger-shade);background:var(--app-color-danger);color:var(--app-color-danger-contrast)}.component-code[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .togglers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active-js[_ngcontent-%COMP%]{border-color:var(--app-color-warning-shade);background:var(--app-color-warning);color:var(--app-color-warning-contrast)}.component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:1.5rem 1.5rem .5rem;background:#f8f8f8;border-radius:0 0 var(--app-size-radius) var(--app-size-radius)}.component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .css[_ngcontent-%COMP%], .component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .html[_ngcontent-%COMP%], .component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .js[_ngcontent-%COMP%]{display:none}.component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .css.active[_ngcontent-%COMP%], .component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .html.active[_ngcontent-%COMP%], .component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .js.active[_ngcontent-%COMP%]{display:block}.component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0}.component-code[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:var(--app-font-code)!important}"]}),n})()},Rn8b:function(n,t,o){"use strict";o.d(t,"a",function(){return c});var e=o("fXoL");let c=(()=>{class n{constructor(){}extractCode(n){return n.innerHTML.replace(/( _ng).*?("")/g,"").replace(/<br>|<br \/>/g,"\n")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.zb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},UWbC:function(n,t,o){"use strict";o.d(t,"a",function(){return r});var e=o("ofXK"),c=o("Rn8b"),s=o("fXoL");let r=(()=>{class n{}return n.\u0275mod=s.Bb({type:n}),n.\u0275inj=s.Ab({factory:function(t){return new(t||n)},providers:[c.a],imports:[[e.b]]}),n})()}}]);