(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BjQp:function(t,n,i){"use strict";i.r(n),i.d(n,"ContactPageModule",(function(){return g}));var o=i("ofXK"),e=i("3Pt+"),b=i("TEn/"),a=i("tyNb"),c=i("mrSG"),s=i("fXoL"),r=i("r28Q");function l(t,n){if(1&t&&(s.Kb(0,"ion-title"),s.jc(1),s.Jb()),2&t){const t=s.Ub();s.xb(1),s.kc(t.text.menu_contact)}}function d(t,n){1&t&&(s.Kb(0,"ion-item"),s.Kb(1,"ion-thumbnail",2),s.Ib(2,"ion-skeleton-text"),s.Jb(),s.Kb(3,"ion-label"),s.Kb(4,"h3"),s.Ib(5,"ion-skeleton-text",11),s.Jb(),s.Kb(6,"p"),s.Ib(7,"ion-skeleton-text",12),s.Jb(),s.Kb(8,"p"),s.Ib(9,"ion-skeleton-text",13),s.Jb(),s.Jb(),s.Jb())}function f(t,n){if(1&t&&(s.Kb(0,"ion-list",8),s.Kb(1,"ion-list-header"),s.Ib(2,"ion-skeleton-text",9),s.Jb(),s.ic(3,d,10,0,"ion-item",10),s.Jb()),2&t){const t=s.Ub(2);s.xb(3),s.Xb("ngForOf",t.fakeData)}}function u(t,n){if(1&t&&(s.Kb(0,"div",14),s.Ib(1,"span",15),s.Jb()),2&t){const t=s.Ub(2);s.xb(1),s.Xb("innerHTML",t.data.contact_us,s.fc)}}function p(t,n){if(1&t&&(s.Kb(0,"ion-content"),s.Kb(1,"ion-header",4),s.Kb(2,"ion-toolbar"),s.Kb(3,"ion-title",5),s.jc(4),s.Jb(),s.Jb(),s.Jb(),s.ic(5,f,4,1,"ion-list",6),s.ic(6,u,2,1,"div",7),s.Jb()),2&t){const t=s.Ub();s.xb(4),s.kc(t.text.menu_contact),s.xb(1),s.Xb("ngIf",!t.data),s.xb(1),s.Xb("ngIf",t.data)}}const h=[{path:"",component:(()=>{class t{constructor(t,n,i){this.activatedRoute=t,this.server=n,this.loadingController=i,this.fakeData=[1,2,3,4,5,6,7],this.text=JSON.parse(localStorage.getItem("app_text"))}ngOnInit(){this.loadData()}loadData(){return Object(c.a)(this,void 0,void 0,(function*(){this.server.page().subscribe(t=>{this.data=t.data})}))}}return t.\u0275fac=function(n){return new(n||t)(s.Hb(a.a),s.Hb(r.a),s.Hb(b.P))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-contact"]],decls:6,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["color","primary"],["slot","start"],[4,"ngIf"],["collapse","condense"],["size","large"],["id","skeleton",4,"ngIf"],["class","ion-padding",4,"ngIf"],["id","skeleton"],["animated","",2,"width","40%"],[4,"ngFor","ngForOf"],["animated","",2,"width","80%"],["animated","",2,"width","60%"],["animated","",2,"width","30%"],[1,"ion-padding"],[3,"innerHTML"]],template:function(t,n){1&t&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar",1),s.Kb(2,"ion-buttons",2),s.Ib(3,"ion-back-button"),s.Jb(),s.ic(4,l,2,1,"ion-title",3),s.Jb(),s.Jb(),s.ic(5,p,7,3,"ion-content",3)),2&t&&(s.Xb("translucent",!0),s.xb(4),s.Xb("ngIf",n.text),s.xb(1),s.Xb("ngIf",n.text))},directives:[b.q,b.M,b.i,b.e,b.f,o.i,b.K,b.p,b.v,b.w,b.F,o.h,b.t,b.J,b.u],styles:[""]}),t})()}];let J=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(h)],a.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[o.b,e.a,b.N,J]]}),t})()}}]);