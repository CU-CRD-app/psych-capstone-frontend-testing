function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{tvak:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=function l(){_classCallCheck(this,l)},o=e("pMnS"),r=e("oBZk"),i=e("ZZ/e"),s=e("SVse"),c=e("mrSG"),a=e("IheW"),b=e("AytR"),h=function(){function l(n,e){_classCallCheck(this,l),this.http=n,this.toastController=e,this.achievementList=[],this.base_url=b.a.backendBaseUrl,this.getHiscores_url=this.base_url+"get_achievements/"}return _createClass(l,[{key:"dangerToast",value:function(l){return c.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:l,color:"danger",duration:2e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"getAchievements",value:function(){var l=this;console.log("TEST");var n={headers:new a.g({"Content-Type":"application/json; charset=utf-8",Authorization:"Bearer "+localStorage.getItem("token")}),responseType:"text"};this.http.post(this.getHiscores_url,{},n).subscribe((function(n){var e=JSON.parse(n);l.achievementList=e.result}),(function(n){l.dangerToast("Error fetching achievements.")}))}},{key:"ngOnInit",value:function(){this.achievementList=[],this.getAchievements()}}]),l}(),d=t.Ab({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Ub(0,[(l()(),t.Cb(0,0,null,null,3,"ion-item",[["color","dark"],["style","border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: rgb(206,183,124)"]],null,null,null,r.V,r.o)),t.Bb(1,49152,null,0,i.H,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Cb(2,0,null,0,1,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),t.Tb(-1,null,["No achievements found. :("]))],(function(l,n){l(n,1,0,"dark")}),null)}function p(l){return t.Ub(0,[(l()(),t.Cb(0,0,null,null,11,"ion-card",[["color","dark"],["style"," margin: 5%; border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: rgb(206,183,124);"]],null,null,null,r.N,r.d)),t.Bb(1,49152,null,0,i.m,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Cb(2,0,null,0,9,"ion-card-header",[],null,null,null,r.L,r.f)),t.Bb(3,49152,null,0,i.o,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,1,"ion-icon",[["src","../../assets/icon/trophy-outline.svg"]],null,null,null,r.T,r.m)),t.Bb(5,49152,null,0,i.C,[t.j,t.p,t.F],{src:[0,"src"]},null),(l()(),t.Cb(6,0,null,0,2,"ion-card-title",[],null,null,null,r.M,r.g)),t.Bb(7,49152,null,0,i.q,[t.j,t.p,t.F],null,null),(l()(),t.Tb(8,0,[" "," "])),(l()(),t.Cb(9,0,null,0,2,"ion-card-content",[],null,null,null,r.K,r.e)),t.Bb(10,49152,null,0,i.n,[t.j,t.p,t.F],null,null),(l()(),t.Tb(11,0,[" "," "]))],(function(l,n){l(n,1,0,"dark"),l(n,5,0,"../../assets/icon/trophy-outline.svg")}),(function(l,n){l(n,8,0,n.context.$implicit.achievement_title),l(n,11,0,n.context.$implicit.achievement_description)}))}function f(l){return t.Ub(0,[(l()(),t.Cb(0,0,null,null,16,"ion-content",[["style","--background: rgb(34,31,32);"]],null,null,null,r.Q,r.j)),t.Bb(1,49152,null,0,i.u,[t.j,t.p,t.F],{fullscreen:[0,"fullscreen"]},null),(l()(),t.Cb(2,0,null,0,10,"ion-header",[],null,null,null,r.S,r.l)),t.Bb(3,49152,null,0,i.B,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,8,"ion-toolbar",[["color","dark"],["style","border-bottom-width: medium; border-bottom-style: solid; border-bottom-color: rgb(206,183,124)"]],null,null,null,r.nb,r.G)),t.Bb(5,49152,null,0,i.Cb,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Cb(6,0,null,0,2,"ion-title",[],null,null,null,r.lb,r.E)),t.Bb(7,49152,null,0,i.Ab,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Achievements"])),(l()(),t.Cb(9,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.J,r.c)),t.Bb(10,49152,null,0,i.l,[t.j,t.p,t.F],null,null),(l()(),t.Cb(11,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,r.Y,r.s)),t.Bb(12,49152,null,0,i.R,[t.j,t.p,t.F],{autoHide:[0,"autoHide"]},null),(l()(),t.rb(16777216,null,0,1,null,m)),t.Bb(14,16384,null,0,s.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(16777216,null,0,1,null,p)),t.Bb(16,278528,null,0,s.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,1,0,!0),l(n,5,0,"dark"),l(n,12,0,"false"),l(n,14,0,0==(null==e.achievementList?null:e.achievementList.length)),l(n,16,0,e.achievementList)}),null)}var v=t.yb("app-achievements",h,(function(l){return t.Ub(0,[(l()(),t.Cb(0,0,null,null,1,"app-achievements",[],null,null,null,f,d)),t.Bb(1,114688,null,0,h,[a.c,i.Qb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=e("s7LF"),C=e("iInd"),k=function l(){_classCallCheck(this,l)};e.d(n,"AchievementsPageModuleNgFactory",(function(){return y}));var y=t.zb(u,[],(function(l){return t.Lb([t.Mb(512,t.m,t.jb,[[8,[o.a,v]],[3,t.m],t.D]),t.Mb(4608,s.l,s.k,[t.z,[2,s.w]]),t.Mb(4608,g.n,g.n,[]),t.Mb(4608,i.b,i.b,[t.F,t.g]),t.Mb(4608,i.Gb,i.Gb,[i.b,t.m,t.w]),t.Mb(4608,i.Lb,i.Lb,[i.b,t.m,t.w]),t.Mb(1073742336,s.b,s.b,[]),t.Mb(1073742336,g.m,g.m,[]),t.Mb(1073742336,g.e,g.e,[]),t.Mb(1073742336,i.Eb,i.Eb,[]),t.Mb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),t.Mb(1073742336,k,k,[]),t.Mb(1073742336,u,u,[]),t.Mb(1024,C.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);