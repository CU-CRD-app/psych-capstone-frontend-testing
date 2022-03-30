function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"uP/6":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),s=u("SVse"),a=u("iInd"),b=u("mrSG"),c=u("Xy44"),d=u("k82s"),f=u("PqYM"),g=function(){function l(n,u,e,t){_classCallCheck(this,l),this.getProgress=n,this.events=u,this.toastController=e,this.localNotifications=t}return _createClass(l,[{key:"ngOnInit",value:function(){this.localNotifications.requestPermission()}},{key:"ionViewWillEnter",value:function(){var l=this;this.localNotifications.schedule({title:"Remember to do your training!",text:"You have not done your training today, for better results we recommend you do 10 minutes of training every day!",sound:"file://assets/sounds/notification.mp3",trigger:{every:{hour:17,minute:28}}}),this.waitingForResponse=!0,Object(f.a)(1e3).subscribe((function(){l.getProgress.getData().subscribe((function(n){l.days=n.days,l.level=n.level;var u=(new Date).toLocaleDateString(),e="";for(var t in l.days)[l.days[t].nameface,l.days[t].whosnew,l.days[t].memory,l.days[t].shuffle].indexOf(-1)<0&&(e=new Date(l.days[t].date).toLocaleDateString());l.level>0&&l.level<9&&(u==e?l.progressToday=1:(l.progressToday=0,l.days[l.level-1]&&(l.days[l.level-1].nameface>=6&&l.progressToday++,l.days[l.level-1].whosnew>=6&&l.progressToday++,l.days[l.level-1].memory>=24&&l.progressToday++,l.days[l.level-1].shuffle>=12&&l.progressToday++),l.progressToday=parseFloat((l.progressToday/6).toFixed(2)))),l.progressOverall=l.level/10,l.waitingForResponse=!1}),(function(n){return b.b(l,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastController.create({message:"Something went wrong. Please try logging out and back in",color:"danger",duration:2e3});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}))}))}}]),l}(),p=e.Ab({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{font-size:150%;border-radius:10px;margin-top:3vh;height:20vh;width:95%}"]],data:{}});function y(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,2,"div",[["style","height: 90%; display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"ion-spinner",[["color","light"],["name","crescent"]],null,null,null,r.kb,r.D)),e.Bb(2,49152,null,0,i.sb,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,2,0,"light","crescent")}),null)}function m(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Pre-Assessment"]))],null,null)}function v(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(1,null,["Level ",""]))],null,(function(l,n){l(n,1,0,n.component.level)}))}function h(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Post-Assessment"]))],null,null)}function C(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Complete"]))],null,null)}function w(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,7,"div",[["style","width: 100%; display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,1,"div",[["class","subheader"],["style","width: 25%"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Today:"])),(l()(),e.Cb(3,0,null,null,4,"div",[["style","text-align: center; width: 60%; margin-top: 9%"]],null,null,null,null,null)),(l()(),e.Cb(4,0,null,null,1,"ion-progress-bar",[["style","width: 100%; margin: 0 auto"]],null,null,null,r.bb,r.u)),e.Bb(5,49152,null,0,i.Z,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Cb(6,0,null,null,1,"div",[["style","color: rgb(255,255,255); margin-top: 3%"]],null,null,null,null,null)),(l()(),e.Tb(7,null,["","%"]))],(function(l,n){l(n,5,0,e.Gb(1,"",n.component.progressToday,""))}),(function(l,n){l(n,7,0,100*n.component.progressToday)}))}function k(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,38,"div",[["style","height: 90%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(1,0,null,null,8,"div",[["style","color: rgb(255,255,255); font-size: 11vw; width: 100%; margin-left: 10%"]],null,null,null,null,null)),(l()(),e.rb(16777216,null,null,1,null,m)),e.Bb(3,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,v)),e.Bb(5,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,h)),e.Bb(7,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,C)),e.Bb(9,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,null,1,null,w)),e.Bb(11,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(12,0,null,null,7,"div",[["style","width: 100%; display: flex; justify-content: center; align-items: center"]],null,null,null,null,null)),(l()(),e.Cb(13,0,null,null,1,"div",[["class","subheader"],["style","width: 25%"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["Overall:"])),(l()(),e.Cb(15,0,null,null,4,"div",[["style","text-align: center; width: 60%; margin-top: 9%"]],null,null,null,null,null)),(l()(),e.Cb(16,0,null,null,1,"ion-progress-bar",[["style","width: 100%; margin: 0 auto"]],null,null,null,r.bb,r.u)),e.Bb(17,49152,null,0,i.Z,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Cb(18,0,null,null,1,"div",[["style","color: rgb(255,255,255); margin-top: 3%"]],null,null,null,null,null)),(l()(),e.Tb(19,null,["","%"])),(l()(),e.Cb(20,0,null,null,18,"div",[["style","text-align: center; width: 100%"]],null,null,null,null,null)),(l()(),e.Cb(21,0,null,null,8,"ion-button",[["color","success"],["routerDirection","forward"],["routerLink","/train"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ob(l,23).onClick()&&t),"click"===n&&(t=!1!==e.Ob(l,24).onClick(u)&&t),t}),r.I,r.b)),e.Bb(22,49152,null,0,i.k,[e.j,e.p,e.F],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),e.Bb(23,16384,null,0,a.n,[a.m,a.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(24,737280,null,0,i.Nb,[s.g,i.Hb,e.p,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(25,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,r.W,r.p)),e.Bb(26,49152,null,0,i.N,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Train"])),(l()(),e.Cb(28,0,null,0,1,"ion-icon",[["name","fitness"],["slot","end"]],null,null,null,r.T,r.m)),e.Bb(29,49152,null,0,i.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Cb(30,0,null,null,8,"ion-button",[["color","primary"],["routerDirection","forward"],["routerLink","/history"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ob(l,32).onClick()&&t),"click"===n&&(t=!1!==e.Ob(l,33).onClick(u)&&t),t}),r.I,r.b)),e.Bb(31,49152,null,0,i.k,[e.j,e.p,e.F],{color:[0,"color"],routerDirection:[1,"routerDirection"]},null),e.Bb(32,16384,null,0,a.n,[a.m,a.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(33,737280,null,0,i.Nb,[s.g,i.Hb,e.p,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(34,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,r.W,r.p)),e.Bb(35,49152,null,0,i.N,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["History"])),(l()(),e.Cb(37,0,null,0,1,"ion-icon",[["name","analytics"],["slot","end"]],null,null,null,r.T,r.m)),e.Bb(38,49152,null,0,i.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,0==u.level),l(n,5,0,u.level>0&&u.level<9),l(n,7,0,9==u.level),l(n,9,0,u.level>9),l(n,11,0,u.level>0&&u.level<9),l(n,17,0,e.Gb(1,"",u.progressOverall,"")),l(n,22,0,"success","forward"),l(n,23,0,"/train"),l(n,24,0,"forward"),l(n,29,0,"fitness"),l(n,31,0,"primary","forward"),l(n,32,0,"/history"),l(n,33,0,"forward"),l(n,38,0,"analytics")}),(function(l,n){l(n,19,0,100*n.component.progressOverall)}))}function j(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,16,"ion-content",[["style","--background: rgb(34,31,32);"]],null,null,null,r.Q,r.j)),e.Bb(1,49152,null,0,i.u,[e.j,e.p,e.F],{fullscreen:[0,"fullscreen"]},null),(l()(),e.Cb(2,0,null,0,10,"ion-header",[],null,null,null,r.S,r.l)),e.Bb(3,49152,null,0,i.B,[e.j,e.p,e.F],null,null),(l()(),e.Cb(4,0,null,0,8,"ion-toolbar",[["color","dark"],["style","border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: rgb(206,183,124)"]],null,null,null,r.nb,r.G)),e.Bb(5,49152,null,0,i.Cb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Cb(6,0,null,0,2,"ion-title",[],null,null,null,r.lb,r.E)),e.Bb(7,49152,null,0,i.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Dashboard"])),(l()(),e.Cb(9,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.J,r.c)),e.Bb(10,49152,null,0,i.l,[e.j,e.p,e.F],null,null),(l()(),e.Cb(11,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,r.Y,r.s)),e.Bb(12,49152,null,0,i.R,[e.j,e.p,e.F],{autoHide:[0,"autoHide"]},null),(l()(),e.rb(16777216,null,0,1,null,y)),e.Bb(14,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(16777216,null,0,1,null,k)),e.Bb(16,16384,null,0,s.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,5,0,"dark"),l(n,12,0,"false"),l(n,14,0,u.waitingForResponse),l(n,16,0,!u.waitingForResponse)}),null)}var B=e.yb("app-dashboard",g,(function(l){return e.Ub(0,[(l()(),e.Cb(0,0,null,null,1,"app-dashboard",[],null,null,null,j,p)),e.Bb(1,114688,null,0,g,[c.a,i.e,i.Qb,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),T=u("s7LF");u.d(n,"DashboardPageModuleNgFactory",(function(){return F}));var F=e.zb(t,[],(function(l){return e.Lb([e.Mb(512,e.m,e.jb,[[8,[o.a,B]],[3,e.m],e.D]),e.Mb(4608,s.l,s.k,[e.z,[2,s.w]]),e.Mb(4608,i.b,i.b,[e.F,e.g]),e.Mb(4608,i.Gb,i.Gb,[i.b,e.m,e.w]),e.Mb(4608,i.Lb,i.Lb,[i.b,e.m,e.w]),e.Mb(4608,T.n,T.n,[]),e.Mb(4608,T.b,T.b,[]),e.Mb(4608,d.a,d.a,[]),e.Mb(1073742336,s.b,s.b,[]),e.Mb(1073742336,i.Eb,i.Eb,[]),e.Mb(1073742336,T.m,T.m,[]),e.Mb(1073742336,T.e,T.e,[]),e.Mb(1073742336,T.k,T.k,[]),e.Mb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.Mb(1073742336,t,t,[]),e.Mb(1024,a.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);