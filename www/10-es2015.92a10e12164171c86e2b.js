(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jcJX:function(t,o,e){"use strict";e.r(o),e.d(o,"AccountPageModule",(function(){return p}));var i=e("ofXK"),n=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),s=e("mrSG"),c=e("fXoL"),b=e("r28Q");const l=["content"];function d(t,o){if(1&t&&(c.Kb(0,"ion-title"),c.jc(1),c.Jb()),2&t){const t=c.Ub();c.xb(1),c.lc(" ",t.text.d_account_title," ")}}function u(t,o){if(1&t){const t=c.Lb();c.Kb(0,"ion-card",14),c.Kb(1,"form",15,16),c.Sb("ngSubmit",(function(){c.ec(t);const o=c.dc(2);return c.Ub(2).update(o.value)})),c.Kb(3,"ion-item"),c.Kb(4,"ion-label",17),c.jc(5),c.Jb(),c.Ib(6,"ion-input",18),c.Jb(),c.Ib(7,"br"),c.Kb(8,"ion-button",19),c.jc(9),c.Jb(),c.Jb(),c.Jb()}if(2&t){const t=c.dc(2),o=c.Ub(2);c.xb(5),c.kc(o.text.d_change_pass),c.xb(3),c.Xb("disabled",!t.valid),c.xb(1),c.kc(o.text.submit_btn)}}function g(t,o){if(1&t){const t=c.Lb();c.Kb(0,"ion-content"),c.Kb(1,"div",4),c.jc(2,"\n\xa0\n"),c.Jb(),c.Kb(3,"div",5),c.Ib(4,"br"),c.Kb(5,"ion-list",6),c.Kb(6,"ion-list-header"),c.Kb(7,"ion-label",7),c.jc(8),c.Kb(9,"b"),c.jc(10),c.Jb(),c.Jb(),c.Jb(),c.Kb(11,"ion-item",8),c.Ib(12,"ion-icon",9),c.Kb(13,"ion-label"),c.jc(14),c.Jb(),c.Jb(),c.Kb(15,"ion-item",10),c.Sb("click",(function(){return c.ec(t),c.Ub().takeAction(1)})),c.Ib(16,"ion-icon",11),c.Kb(17,"ion-label"),c.jc(18),c.Jb(),c.Jb(),c.Kb(19,"ion-item",10),c.Sb("click",(function(){return c.ec(t),c.Ub().logout()})),c.Ib(20,"ion-icon",12),c.Kb(21,"ion-label"),c.jc(22),c.Jb(),c.Jb(),c.Jb(),c.ic(23,u,10,3,"ion-card",13),c.Jb(),c.Jb()}if(2&t){const t=c.Ub();c.xb(8),c.lc("",t.text.welcome," "),c.xb(2),c.kc(t.data.name),c.xb(4),c.mc("",t.text.d_my_order," (",t.order,")"),c.xb(4),c.kc(t.text.d_change_pass),c.xb(4),c.kc(t.text.logout),c.xb(1),c.Xb("ngIf",1==t.action)}}const m=[{path:"",component:(()=>{class t{constructor(t,o,e,i,n){this.route=t,this.server=o,this.toastController=e,this.nav=i,this.loadingController=n,this.text=JSON.parse(localStorage.getItem("app_text"))}ngOnInit(){}ionViewWillEnter(){localStorage.getItem("user_id")&&"null"!=localStorage.getItem("user_id")?this.loadData():(this.nav.navigateRoot("/login"),this.presentToast("Please login for access your profile"))}takeAction(t){return Object(s.a)(this,void 0,void 0,(function*(){this.action=t}))}loadData(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:"Please wait..."});yield t.present(),this.server.userInfo(localStorage.getItem("user_id")).subscribe(o=>{this.data=o.data,this.order=o.order,t.dismiss()})}))}update(t){return Object(s.a)(this,void 0,void 0,(function*(){const o=yield this.loadingController.create({message:"Please wait..."});yield o.present();var e={id:localStorage.getItem("user_id"),password:t.password};console.log(e),this.server.updateInfo(e).subscribe(t=>{this.action=0,this.data=t.data,this.presentToast("Updated Successfully"),o.dismiss()})}))}presentToast(t){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:3e3,position:"top",mode:"ios",color:"dark"})).present()}))}logout(){localStorage.setItem("user_id",null),this.nav.navigateForward("/login")}}return t.\u0275fac=function(o){return new(o||t)(c.Hb(a.a),c.Hb(b.a),c.Hb(r.U),c.Hb(r.Q),c.Hb(r.P))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-account"]],viewQuery:function(t,o){var e;1&t&&c.oc(l,!0),2&t&&c.cc(e=c.Tb())&&(o.content=e.first)},decls:6,vars:2,consts:[[1,"ion-no-border"],["color","light"],["slot","start"],[4,"ngIf"],[2,"height","80px","background-color","#f4f5f8"],[2,"height","auto","margin-top","-20%","border-radius","30px","background-color","white"],["lines","none"],[2,"font-size","22px"],["routerLink","/my","routerDirection","forward"],["slot","start","color","medium","name","cart"],[3,"click"],["slot","start","color","medium","name","build"],["slot","start","color","medium","name","log-out"],["mode","ios",4,"ngIf"],["mode","ios"],[3,"ngSubmit"],["form","ngForm"],["position","floating"],["type","password","name","password","ngModel","","required",""],["expand","block","mode","ios","type","submit",2,"width","90%","margin-left","5%",3,"disabled"]],template:function(t,o){1&t&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-buttons",2),c.Ib(3,"ion-back-button"),c.Jb(),c.ic(4,d,2,1,"ion-title",3),c.Jb(),c.Jb(),c.ic(5,g,24,7,"ion-content",3)),2&t&&(c.xb(4),c.Xb("ngIf",o.text),c.xb(1),c.Xb("ngIf",o.data&&o.text))},directives:[r.q,r.M,r.i,r.e,r.f,i.i,r.K,r.p,r.v,r.w,r.u,r.t,r.S,a.h,r.r,r.j,n.i,n.e,n.f,r.s,r.T,n.d,n.g,n.h,r.h],styles:[".accountHeader[_ngcontent-%COMP%]{background-color:var(--ion-color-light);height:305px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(o){return new(o||t)},imports:[[a.i.forChild(m)],a.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(o){return new(o||t)},imports:[[i.b,n.a,r.N,f]]}),t})()}}]);