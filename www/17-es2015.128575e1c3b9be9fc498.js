(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"pE/C":function(t,e,i){"use strict";i.r(e),i.d(e,"LangPageModule",(function(){return h}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),c=i("fXoL"),l=i("r28Q");function b(t,e){1&t&&c.Ib(0,"ion-icon",11)}function d(t,e){if(1&t){const t=c.Lb();c.Kb(0,"ion-item",8),c.Sb("click",(function(){c.ec(t);const i=e.$implicit;return c.Ub(2).set(i.id)})),c.Kb(1,"ion-avatar",2),c.Ib(2,"img",9),c.Jb(),c.Kb(3,"ion-label"),c.jc(4),c.Jb(),c.ic(5,b,1,0,"ion-icon",10),c.Jb()}if(2&t){const t=e.$implicit,i=c.Ub(2);c.xb(2),c.Yb("src",t.img,c.gc),c.xb(2),c.lc(" ",t.name," "),c.xb(1),c.Xb("ngIf",i.lid==t.id)}}function g(t,e){if(1&t){const t=c.Lb();c.Kb(0,"ion-content"),c.Kb(1,"div",4),c.jc(2,"\n\xa0\n"),c.Jb(),c.Kb(3,"div",5),c.Kb(4,"h1"),c.jc(5),c.Jb(),c.Ib(6,"br"),c.ic(7,d,6,3,"ion-item",6),c.Ib(8,"br"),c.Ib(9,"br"),c.Kb(10,"ion-button",7),c.Sb("click",(function(){return c.ec(t),c.Ub().setLang()})),c.jc(11),c.Jb(),c.Jb(),c.Jb()}if(2&t){const t=c.Ub();c.xb(5),c.kc(t.text.lang_title),c.xb(2),c.Xb("ngForOf",t.data),c.xb(4),c.kc(t.text.update_lang)}}const u=[{path:"",component:(()=>{class t{constructor(t,e,i,n,o,r){this.platform=t,this.loadingController=e,this.server=i,this.nav=n,this.toastController=o,this.alertController=r,this.lid="0"}ngOnInit(){this.lid=localStorage.getItem("lid")&&"null"!=localStorage.getItem("lid")&&null!=localStorage.getItem("lid")?localStorage.getItem("lid"):"0"}ionViewWillEnter(){this.loadData()}ionViewDidEnter(){this.subscription=this.platform.backButton.subscribe(()=>{this.presentAlertConfirm()})}ionViewWillLeave(){this.subscription.unsubscribe()}presentAlertConfirm(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:this.text.exit_app,message:this.text.exit_app_desc,buttons:[{text:this.text.cancel_btn,role:"cancel",cssClass:"secondary",handler:t=>{console.log("Confirm Cancel: blah")}},{text:this.text.exit_app_confirm,handler:()=>{navigator.app.exitApp()}}]});yield t.present()}))}loadData(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:"",spinner:"bubbles"});yield t.present(),this.server.getLang(this.lid).subscribe(e=>{this.data=e.data,this.text=e.text,localStorage.setItem("setting",JSON.stringify(e.setting)),t.dismiss()})}))}set(t){this.lid=t}setLang(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({spinner:"bubbles"});yield t.present(),this.server.getLang(this.lid).subscribe(e=>{this.data=e.data,localStorage.setItem("app_text",JSON.stringify(e.text)),localStorage.setItem("lang_data",JSON.stringify(e.data)),localStorage.setItem("lid",this.lid),localStorage.getItem("user_id")&&"null"!=localStorage.getItem("user_id")?window.location.href="/home":window.location.href="/login",t.dismiss()})}))}presentToast(t){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:3e3,position:"top",mode:"ios",color:"dark"})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(r.R),c.Hb(r.P),c.Hb(l.a),c.Hb(r.Q),c.Hb(r.U),c.Hb(r.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-lang"]],decls:5,vars:1,consts:[[1,"ion-no-border"],["color","light"],["slot","start"],[4,"ngIf"],[2,"height","80px","background-color","#f4f5f8"],[1,"ion-padding",2,"height","auto","margin-top","-20%","border-radius","30px","background-color","white"],[3,"click",4,"ngFor","ngForOf"],["mode","ios","expand","block",3,"click"],[3,"click"],[3,"src"],["name","checkmark","slot","end","color","primary",4,"ngIf"],["name","checkmark","slot","end","color","primary"]],template:function(t,e){1&t&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-buttons",2),c.Ib(3,"ion-back-button"),c.Jb(),c.Jb(),c.Jb(),c.ic(4,g,12,3,"ion-content",3)),2&t&&(c.xb(4),c.Xb("ngIf",e.data&&e.text))},directives:[r.q,r.M,r.i,r.e,r.f,n.i,r.p,n.h,r.h,r.t,r.d,r.u,r.r],styles:[".nonSelected[_ngcontent-%COMP%]{background-color:#e0e0e0;color:#000;padding:20px}.selected[_ngcontent-%COMP%]{background-color:#fc8019;color:#fff;padding:20px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(u)],s.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.N,p]]}),t})()}}]);