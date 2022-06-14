!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"pE/C":function(n,r,i){"use strict";i.r(r),i.d(r,"LangPageModule",(function(){return k}));var o=i("ofXK"),a=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),l=i("mrSG"),u=i("fXoL"),b=i("r28Q");function d(t,e){1&t&&u.Ib(0,"ion-icon",11)}function f(t,e){if(1&t){var n=u.Lb();u.Kb(0,"ion-item",8),u.Sb("click",(function(){u.ec(n);var t=e.$implicit;return u.Ub(2).set(t.id)})),u.Kb(1,"ion-avatar",2),u.Ib(2,"img",9),u.Jb(),u.Kb(3,"ion-label"),u.jc(4),u.Jb(),u.ic(5,d,1,0,"ion-icon",10),u.Jb()}if(2&t){var r=e.$implicit,i=u.Ub(2);u.xb(2),u.Yb("src",r.img,u.gc),u.xb(2),u.lc(" ",r.name," "),u.xb(1),u.Xb("ngIf",i.lid==r.id)}}function g(t,e){if(1&t){var n=u.Lb();u.Kb(0,"ion-content"),u.Kb(1,"div",4),u.jc(2,"\n\xa0\n"),u.Jb(),u.Kb(3,"div",5),u.Kb(4,"h1"),u.jc(5),u.Jb(),u.Ib(6,"br"),u.ic(7,f,6,3,"ion-item",6),u.Ib(8,"br"),u.Ib(9,"br"),u.Kb(10,"ion-button",7),u.Sb("click",(function(){return u.ec(n),u.Ub().setLang()})),u.jc(11),u.Jb(),u.Jb(),u.Jb()}if(2&t){var r=u.Ub();u.xb(5),u.kc(r.text.lang_title),u.xb(2),u.Xb("ngForOf",r.data),u.xb(4),u.kc(r.text.update_lang)}}var p,h,m,v=[{path:"",component:(p=function(){function n(e,r,i,o,a,c){t(this,n),this.platform=e,this.loadingController=r,this.server=i,this.nav=o,this.toastController=a,this.alertController=c,this.lid="0"}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){this.lid=localStorage.getItem("lid")&&"null"!=localStorage.getItem("lid")&&null!=localStorage.getItem("lid")?localStorage.getItem("lid"):"0"}},{key:"ionViewWillEnter",value:function(){this.loadData()}},{key:"ionViewDidEnter",value:function(){var t=this;this.subscription=this.platform.backButton.subscribe((function(){t.presentAlertConfirm()}))}},{key:"ionViewWillLeave",value:function(){this.subscription.unsubscribe()}},{key:"presentAlertConfirm",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:this.text.exit_app,message:this.text.exit_app_desc,buttons:[{text:this.text.cancel_btn,role:"cancel",cssClass:"secondary",handler:function(t){console.log("Confirm Cancel: blah")}},{text:this.text.exit_app_confirm,handler:function(){navigator.app.exitApp()}}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"loadData",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"",spinner:"bubbles"});case 2:return e=t.sent,t.next=5,e.present();case 5:this.server.getLang(this.lid).subscribe((function(t){n.data=t.data,n.text=t.text,localStorage.setItem("setting",JSON.stringify(t.setting)),e.dismiss()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"set",value:function(t){this.lid=t}},{key:"setLang",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({spinner:"bubbles"});case 2:return e=t.sent,t.next=5,e.present();case 5:this.server.getLang(this.lid).subscribe((function(t){n.data=t.data,localStorage.setItem("app_text",JSON.stringify(t.text)),localStorage.setItem("lang_data",JSON.stringify(t.data)),localStorage.setItem("lid",n.lid),localStorage.getItem("user_id")&&"null"!=localStorage.getItem("user_id")?window.location.href="/home":window.location.href="/login",e.dismiss()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"presentToast",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:t,duration:3e3,position:"top",mode:"ios",color:"dark"});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}])&&e(r.prototype,i),o&&e(r,o),n}(),p.\u0275fac=function(t){return new(t||p)(u.Hb(c.R),u.Hb(c.P),u.Hb(b.a),u.Hb(c.Q),u.Hb(c.U),u.Hb(c.a))},p.\u0275cmp=u.Bb({type:p,selectors:[["app-lang"]],decls:5,vars:1,consts:[[1,"ion-no-border"],["color","light"],["slot","start"],[4,"ngIf"],[2,"height","80px","background-color","#f4f5f8"],[1,"ion-padding",2,"height","auto","margin-top","-20%","border-radius","30px","background-color","white"],[3,"click",4,"ngFor","ngForOf"],["mode","ios","expand","block",3,"click"],[3,"click"],[3,"src"],["name","checkmark","slot","end","color","primary",4,"ngIf"],["name","checkmark","slot","end","color","primary"]],template:function(t,e){1&t&&(u.Kb(0,"ion-header",0),u.Kb(1,"ion-toolbar",1),u.Kb(2,"ion-buttons",2),u.Ib(3,"ion-back-button"),u.Jb(),u.Jb(),u.Jb(),u.ic(4,g,12,3,"ion-content",3)),2&t&&(u.xb(4),u.Xb("ngIf",e.data&&e.text))},directives:[c.q,c.M,c.i,c.e,c.f,o.i,c.p,o.h,c.h,c.t,c.d,c.u,c.r],styles:[".nonSelected[_ngcontent-%COMP%]{background-color:#e0e0e0;color:#000;padding:20px}.selected[_ngcontent-%COMP%]{background-color:#fc8019;color:#fff;padding:20px}"]}),p)}],x=((m=function e(){t(this,e)}).\u0275mod=u.Fb({type:m}),m.\u0275inj=u.Eb({factory:function(t){return new(t||m)},imports:[[s.i.forChild(v)],s.i]}),m),k=((h=function e(){t(this,e)}).\u0275mod=u.Fb({type:h}),h.\u0275inj=u.Eb({factory:function(t){return new(t||h)},imports:[[o.b,a.a,c.N,x]]}),h)}}])}();