(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ALb8:function(n,o,t){"use strict";t.r(o),t.d(o,"EditorModule",(function(){return f}));var i=t("rWMW"),e=t("sEIs"),d=t("2kYt"),u=t("EM62");function c(n,o){if(1&n&&(u.Gb(0),u.Ib(1,"div",6),u.Wb(2),u.Hb(),u.Fb()),2&n){const n=o.$implicit;u.ub(1),u.Rb("id",n.id),u.ub(1),u.Xb(n.name)}}function p(n,o){if(1&n&&(u.Gb(0),u.Ib(1,"div",6),u.Wb(2),u.Hb(),u.Fb()),2&n){const n=o.$implicit;u.ub(1),u.Rb("id",n.id),u.ub(1),u.Xb(n.name)}}function r(n,o){if(1&n&&(u.Ib(0,"div",1),u.Ib(1,"div",2),u.Vb(2,c,3,2,"ng-container",3),u.Hb(),u.Ib(3,"div",4),u.Ib(4,"p"),u.Wb(5),u.Hb(),u.Hb(),u.Ib(6,"div",5),u.Vb(7,p,3,2,"ng-container",3),u.Hb(),u.Hb()),2&n){const n=u.Qb();u.ub(2),u.Rb("ngForOf",n.configuration.inputs),u.ub(1),u.Rb("id",n.configuration.id),u.ub(2),u.Xb(n.configuration.name),u.ub(2),u.Rb("ngForOf",n.configuration.outputs)}}let b=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=u.xb({type:n,selectors:[["opui-node"]],inputs:{configuration:"configuration"},decls:1,vars:1,consts:[["class","op-node",4,"ngIf"],[1,"op-node"],[1,"op-node-inputs"],[4,"ngFor","ngForOf"],[1,"op-node-title",3,"id"],[1,"op-node-outputs"],[1,"op-node-endpoint",3,"id"]],template:function(n,o){1&n&&u.Vb(0,r,8,4,"div",0),2&n&&u.Rb("ngIf",o.configuration)},directives:[d.i,d.h],styles:["[_nghost-%COMP%]{display:inline-block}.op-node[_ngcontent-%COMP%]{background-color:var(--light-blue,#1db9ff);border-radius:16px;color:var(--white,#fff);display:flex;flex-direction:row}.op-node[_ngcontent-%COMP%] > .op-node-title[_ngcontent-%COMP%]{text-align:center;padding:16px;font-size:1rem;font-weight:700}.op-node[_ngcontent-%COMP%] > .op-node-inputs[_ngcontent-%COMP%], .op-node[_ngcontent-%COMP%] > .op-node-outputs[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}.op-node[_ngcontent-%COMP%]   .op-node-endpoint[_ngcontent-%COMP%]{padding:8px;font-size:.8rem}"]}),n})();function s(n,o){if(1&n&&(u.Gb(0),u.Eb(1,"opui-node",2),u.Fb()),2&n){const n=o.$implicit;u.ub(1),u.Rb("configuration",n)}}let a=(()=>{class n{constructor(){this.nodeConfigurations=[{id:"node1",name:"Node 1",inputs:[{id:"node1_input1",name:"Input 1"}],outputs:[{id:"node1_output1",name:"Output 1"}]},{id:"node2",name:"Node 2",inputs:[{id:"node2_input1",name:"Input 1"}],outputs:[{id:"node2_output1",name:"Output 1"}]}]}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=u.xb({type:n,selectors:[["app-editor-page"]],decls:2,vars:1,consts:[[1,"op-editor-page"],[4,"ngFor","ngForOf"],[3,"configuration"]],template:function(n,o){1&n&&(u.Ib(0,"div",0),u.Vb(1,s,2,1,"ng-container",1),u.Hb()),2&n&&(u.ub(1),u.Rb("ngForOf",o.nodeConfigurations))},directives:[d.h,b],styles:[".op-editor-page[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.op-editor-page[_ngcontent-%COMP%]{display:block}"]}),n})(),f=(()=>{class n{}return n.\u0275mod=u.Bb({type:n}),n.\u0275inj=u.Ab({factory:function(o){return new(o||n)},imports:[[d.b,i.a,e.a.forChild([{path:"",component:a}])]]}),n})()}}]);