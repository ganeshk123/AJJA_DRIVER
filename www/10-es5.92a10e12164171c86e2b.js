!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jcJX:function(n,o,r){"use strict";r.r(o),r.d(o,"AccountPageModule",(function(){return k}));var i=r("ofXK"),a=r("3Pt+"),c=r("TEn/"),s=r("tyNb"),u=r("mrSG"),b=r("fXoL"),l=r("r28Q"),d=["content"];function f(t,e){if(1&t&&(b.Kb(0,"ion-title"),b.jc(1),b.Jb()),2&t){var n=b.Ub();b.xb(1),b.lc(" ",n.text.d_account_title," ")}}function m(t,e){if(1&t){var n=b.Lb();b.Kb(0,"ion-card",14),b.Kb(1,"form",15,16),b.Sb("ngSubmit",(function(){b.ec(n);var t=b.dc(2);return b.Ub(2).update(t.value)})),b.Kb(3,"ion-item"),b.Kb(4,"ion-label",17),b.jc(5),b.Jb(),b.Ib(6,"ion-input",18),b.Jb(),b.Ib(7,"br"),b.Kb(8,"ion-button",19),b.jc(9),b.Jb(),b.Jb(),b.Jb()}if(2&t){var o=b.dc(2),r=b.Ub(2);b.xb(5),b.kc(r.text.d_change_pass),b.xb(3),b.Xb("disabled",!o.valid),b.xb(1),b.kc(r.text.submit_btn)}}function p(t,e){if(1&t){var n=b.Lb();b.Kb(0,"ion-content"),b.Kb(1,"div",4),b.jc(2,"\n\xa0\n"),b.Jb(),b.Kb(3,"div",5),b.Ib(4,"br"),b.Kb(5,"ion-list",6),b.Kb(6,"ion-list-header"),b.Kb(7,"ion-label",7),b.jc(8),b.Kb(9,"b"),b.jc(10),b.Jb(),b.Jb(),b.Jb(),b.Kb(11,"ion-item",8),b.Ib(12,"ion-icon",9),b.Kb(13,"ion-label"),b.jc(14),b.Jb(),b.Jb(),b.Kb(15,"ion-item",10),b.Sb("click",(function(){return b.ec(n),b.Ub().takeAction(1)})),b.Ib(16,"ion-icon",11),b.Kb(17,"ion-label"),b.jc(18),b.Jb(),b.Jb(),b.Kb(19,"ion-item",10),b.Sb("click",(function(){return b.ec(n),b.Ub().logout()})),b.Ib(20,"ion-icon",12),b.Kb(21,"ion-label"),b.jc(22),b.Jb(),b.Jb(),b.Jb(),b.ic(23,m,10,3,"ion-card",13),b.Jb(),b.Jb()}if(2&t){var o=b.Ub();b.xb(8),b.lc("",o.text.welcome," "),b.xb(2),b.kc(o.data.name),b.xb(4),b.mc("",o.text.d_my_order," (",o.order,")"),b.xb(4),b.kc(o.text.d_change_pass),b.xb(4),b.kc(o.text.logout),b.xb(1),b.Xb("ngIf",1==o.action)}}var g,h,v,x=[{path:"",component:(g=function(){function n(e,o,r,i,a){t(this,n),this.route=e,this.server=o,this.toastController=r,this.nav=i,this.loadingController=a,this.text=JSON.parse(localStorage.getItem("app_text"))}var o,r,i;return o=n,(r=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){localStorage.getItem("user_id")&&"null"!=localStorage.getItem("user_id")?this.loadData():(this.nav.navigateRoot("/login"),this.presentToast("Please login for access your profile"))}},{key:"takeAction",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.action=t;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"Please wait..."});case 2:return e=t.sent,t.next=5,e.present();case 5:this.server.userInfo(localStorage.getItem("user_id")).subscribe((function(t){n.data=t.data,n.order=t.order,e.dismiss()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"update",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"Please wait..."});case 2:return n=e.sent,e.next=5,n.present();case 5:o={id:localStorage.getItem("user_id"),password:t.password},console.log(o),this.server.updateInfo(o).subscribe((function(t){r.action=0,r.data=t.data,r.presentToast("Updated Successfully"),n.dismiss()}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"presentToast",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:t,duration:3e3,position:"top",mode:"ios",color:"dark"});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"logout",value:function(){localStorage.setItem("user_id",null),this.nav.navigateForward("/login")}}])&&e(o.prototype,r),i&&e(o,i),n}(),g.\u0275fac=function(t){return new(t||g)(b.Hb(s.a),b.Hb(l.a),b.Hb(c.U),b.Hb(c.Q),b.Hb(c.P))},g.\u0275cmp=b.Bb({type:g,selectors:[["app-account"]],viewQuery:function(t,e){var n;1&t&&b.oc(d,!0),2&t&&b.cc(n=b.Tb())&&(e.content=n.first)},decls:6,vars:2,consts:[[1,"ion-no-border"],["color","light"],["slot","start"],[4,"ngIf"],[2,"height","80px","background-color","#f4f5f8"],[2,"height","auto","margin-top","-20%","border-radius","30px","background-color","white"],["lines","none"],[2,"font-size","22px"],["routerLink","/my","routerDirection","forward"],["slot","start","color","medium","name","cart"],[3,"click"],["slot","start","color","medium","name","build"],["slot","start","color","medium","name","log-out"],["mode","ios",4,"ngIf"],["mode","ios"],[3,"ngSubmit"],["form","ngForm"],["position","floating"],["type","password","name","password","ngModel","","required",""],["expand","block","mode","ios","type","submit",2,"width","90%","margin-left","5%",3,"disabled"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header",0),b.Kb(1,"ion-toolbar",1),b.Kb(2,"ion-buttons",2),b.Ib(3,"ion-back-button"),b.Jb(),b.ic(4,f,2,1,"ion-title",3),b.Jb(),b.Jb(),b.ic(5,p,24,7,"ion-content",3)),2&t&&(b.xb(4),b.Xb("ngIf",e.text),b.xb(1),b.Xb("ngIf",e.data&&e.text))},directives:[c.q,c.M,c.i,c.e,c.f,i.i,c.K,c.p,c.v,c.w,c.u,c.t,c.S,s.h,c.r,c.j,a.i,a.e,a.f,c.s,c.T,a.d,a.g,a.h,c.h],styles:[".accountHeader[_ngcontent-%COMP%]{background-color:var(--ion-color-light);height:305px}"]}),g)}],w=((v=function e(){t(this,e)}).\u0275mod=b.Fb({type:v}),v.\u0275inj=b.Eb({factory:function(t){return new(t||v)},imports:[[s.i.forChild(x)],s.i]}),v),k=((h=function e(){t(this,e)}).\u0275mod=b.Fb({type:h}),h.\u0275inj=b.Eb({factory:function(t){return new(t||h)},imports:[[i.b,a.a,c.N,w]]}),h)}}])}();