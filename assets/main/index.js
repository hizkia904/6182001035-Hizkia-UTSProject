System.register("chunks:///_virtual/Ball.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Vec3,c=t.Component}],execute:function(){var a;e._RF.push({},"879f5Pj0JhC5Ki8H7rWb3MX","Ball",void 0);var i=o.ccclass;o.property,t("Ball",i("Ball")(a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.onLoad=function(){},o.start=function(){},o.update=function(t){this.node.translate(new r(500*t,0,0))},e}(c))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,o,a,n,s,c,l,u,h,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,n=t._decorator,s=t.Node,c=t.input,l=t.Input,u=t.Vec2,h=t.misc,p=t.Component}],execute:function(){var d,k,y,v,f;a._RF.push({},"dec9bydsidAnrlITGE2B5HY","Game",void 0);var g=n.ccclass,P=n.property;t("Game",(d=g("Game"),k=P({type:s}),d((f=e((v=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return e=t.call.apply(t,[this].concat(a))||this,r(e,"karakter",f,o(e)),e.karakterPosition=void 0,e.degree=void 0,e.lastClickPosition=void 0,e}i(e,t);var a=e.prototype;return a.onLoad=function(){c.on(l.EventType.TOUCH_START,this.touchStart,this),c.on(l.EventType.TOUCH_MOVE,this.touchStart,this),this.karakterPosition=new u(this.karakter.getWorldPosition().x,this.karakter.getWorldPosition().y),this.degree=0,this.lastClickPosition=new u(513,438)},a.touchStart=function(t){var e=t.getUILocation();this.lastClickPosition=e;var i=Math.atan2(e.y-this.karakterPosition.y,e.x-this.karakterPosition.x),r=h.radiansToDegrees(i);r<0&&(r+=360),this.degree=r},a.update=function(t){},e}(p)).prototype,"karakter",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=v))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameAudioCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,o,n,u,a,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,u=e._decorator,a=e.AudioClip,c=e.AudioSource,l=e.Component}],execute:function(){var p,s,d,f,y,h,A;n._RF.push({},"9c8faDAo9VPgZn+U2BEyVHD","GameAudioCtrl",void 0);var m=u.ccclass,v=u.property;e("GameAudioCtrl",(p=m("GameAudioCtrl"),s=v({type:[a]}),d=v({type:c}),p((h=t((y=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];return t=e.call.apply(e,[this].concat(n))||this,r(t,"clips",h,o(t)),r(t,"audioSource",A,o(t)),t}i(t,e);var n=t.prototype;return n.onAudioQueue=function(e){var t=this.clips[e];this.audioSource.playOneShot(t)},n.start=function(){},n.update=function(e){},t}(l)).prototype,"clips",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=t(y.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/Karakter.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameAudioCtrl.ts","./ProgressBarWeapon.ts"],(function(e){var t,i,r,o,n,s,a,h,l,u,c,d,g,p,f,m,b,P,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,a=e.SpriteFrame,h=e.Prefab,l=e.Node,u=e.find,c=e.Sprite,d=e.UITransform,g=e.misc,p=e.instantiate,f=e.Vec3,m=e.Animation,b=e.Component},function(e){P=e.GameAudioCtrl},function(e){C=e.ProgressBarWeapon}],execute:function(){var S,w,B,v,y,F,R,W,A,k,G,I,H,T,z,O,x;n._RF.push({},"a4d32oePJlCc7G5C0K8F2Oz","Karakter",void 0);var _=s.ccclass,D=s.property;e("Karakter",(S=_("Karakter"),w=D([a]),B=D({type:h}),v=D({type:l}),y=D({type:P}),F=D({type:C}),R=D({type:C}),W=D({type:C}),S((G=t((k=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).Game=void 0,r(t,"characterWithWeapon",G,o(t)),t.SpriteComponent=void 0,r(t,"ball",I,o(t)),t.weapon=void 0,t.direction=void 0,r(t,"locationFrontOfGun",H,o(t)),r(t,"gameAudioCtrl",T,o(t)),t.UITransformComponent=void 0,r(t,"handgunProgressBar",z,o(t)),r(t,"shotgunProgressBar",O,o(t)),r(t,"rifleProgressBar",x,o(t)),t}i(t,e);var n=t.prototype;return n.onLoad=function(){this.Game=u("GameCtrl").getComponent("Game"),this.SpriteComponent=this.node.getComponent(c),this.weapon=1,this.direction="east",this.UITransformComponent=this.node.getComponent(d)},n.start=function(){this.schedule(this.fireHandgun,.5)},n.countAngle=function(e){var t=Math.atan2(e.y-this.locationFrontOfGun.worldPosition.y,e.x-this.locationFrontOfGun.worldPosition.x),i=g.radiansToDegrees(t);return i<0&&(i+=360),i},n.fireHandgun=function(){if(this.handgunProgressBar.progress>1e-5){var e=this.Game.lastClickPosition,t=p(this.ball);t.setParent(this.node.parent),t.setSiblingIndex(2);var i=this.countAngle(e);t.setWorldPosition(this.locationFrontOfGun.getWorldPosition()),t.setRotationFromEuler(new f(0,0,i)),this.node.getComponent(m).play("anim1"),this.gameAudioCtrl.onAudioQueue(0),this.handgunProgressBar.reduceProgressBar()}else this.gameAudioCtrl.onAudioQueue(3),this.unschedule(this.fireHandgun),this.node.getComponent(m).play("reloadHandgun")},n.reloadiconinvisibleHandgun=function(){this.handgunProgressBar.makeReloadIconInvisible()},n.reloadiconvisibleHandgun=function(){this.handgunProgressBar.makeReloadIconVisible()},n.reloadiconinvisibleShotgun=function(){this.shotgunProgressBar.makeReloadIconInvisible()},n.reloadiconvisibleShotgun=function(){this.shotgunProgressBar.makeReloadIconVisible()},n.reloadiconinvisibleRifle=function(){this.rifleProgressBar.makeReloadIconInvisible()},n.reloadiconvisibleRifle=function(){this.rifleProgressBar.makeReloadIconVisible()},n.resetHandgun=function(){this.handgunProgressBar.resetProgressBarToFull(),this.schedule(this.fireHandgun,.5)},n.fireRifle=function(){if(this.rifleProgressBar.progress>1e-5){var e=this.Game.lastClickPosition,t=p(this.ball);t.setParent(this.node.parent),t.setSiblingIndex(2);var i=this.countAngle(e);t.setWorldPosition(this.locationFrontOfGun.getWorldPosition()),t.setRotationFromEuler(new f(0,0,i)),this.node.getComponent(m).play("anim2"),this.gameAudioCtrl.onAudioQueue(1),this.rifleProgressBar.reduceProgressBar()}else this.gameAudioCtrl.onAudioQueue(4),this.unschedule(this.fireRifle),this.node.getComponent(m).play("reloadRifle")},n.resetRifle=function(){this.schedule(this.fireRifle,.1),this.rifleProgressBar.resetProgressBarToFull()},n.fireShotgun=function(){if(this.shotgunProgressBar.progress>1e-5){var e=this.Game.lastClickPosition,t=p(this.ball),i=p(this.ball),r=p(this.ball);t.setParent(this.node.parent),i.setParent(this.node.parent),r.setParent(this.node.parent),t.setSiblingIndex(2),i.setSiblingIndex(2),r.setSiblingIndex(2);var o=this.countAngle(e);t.setWorldPosition(this.locationFrontOfGun.getWorldPosition()),i.setWorldPosition(this.locationFrontOfGun.getWorldPosition()),r.setWorldPosition(this.locationFrontOfGun.getWorldPosition()),t.setRotationFromEuler(new f(0,0,o)),i.setRotationFromEuler(new f(0,0,o+10)),r.setRotationFromEuler(new f(0,0,o-10)),this.node.getComponent(m).play("anim3"),this.gameAudioCtrl.onAudioQueue(2),this.shotgunProgressBar.reduceProgressBar()}else this.gameAudioCtrl.onAudioQueue(5),this.unschedule(this.fireShotgun),this.node.getComponent(m).play("reloadShotgun")},n.resetShotgun=function(){this.schedule(this.fireShotgun,.6),this.shotgunProgressBar.resetProgressBarToFull()},n.rotateCharacterSprite=function(e){this.node.setRotationFromEuler(new f(0,0,e))},n.changeWeaponToHandgun=function(){2==this.weapon?this.unschedule(this.fireRifle):3==this.weapon&&this.unschedule(this.fireShotgun),this.schedule(this.fireHandgun,.5),this.weapon=1,this.SpriteComponent.spriteFrame=this.characterWithWeapon[0]},n.changeWeaponToRifle=function(){1==this.weapon?this.unschedule(this.fireHandgun):3==this.weapon&&this.unschedule(this.fireShotgun),this.schedule(this.fireRifle,.1),this.weapon=2,this.SpriteComponent.spriteFrame=this.characterWithWeapon[1]},n.changeWeaponToShotgun=function(){1==this.weapon?this.unschedule(this.fireHandgun):2==this.weapon&&this.unschedule(this.fireRifle),this.schedule(this.fireShotgun,.6),this.weapon=3,this.SpriteComponent.spriteFrame=this.characterWithWeapon[2]},n.decideCharacterDirection=function(e){switch(!0){case e>=0&&e<=22.5||e>=337.5&&e<=360:this.rotateCharacterSprite(0),this.direction="east";break;case e<337.5&&e>=292.5:this.direction="south_east",this.rotateCharacterSprite(315);break;case e<292.5&&e>=247.5:this.direction="south",this.rotateCharacterSprite(270);break;case e<247.5&&e>=202.5:this.direction="south_west",this.rotateCharacterSprite(225);break;case e<202.5&&e>=157.5:this.direction="west",this.rotateCharacterSprite(180);break;case e<157.5&&e>=112.5:this.direction="north_west",this.rotateCharacterSprite(135);break;case e<112.5&&e>=67.5:this.direction="north",this.rotateCharacterSprite(90);break;case e<67.5&&e>22.5:this.direction="north_east",this.rotateCharacterSprite(45)}},n.update=function(e){var t=this.Game.degree;this.decideCharacterDirection(t)},t}(b)).prototype,"characterWithWeapon",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),I=t(k.prototype,"ball",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=t(k.prototype,"locationFrontOfGun",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(k.prototype,"gameAudioCtrl",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(k.prototype,"handgunProgressBar",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=t(k.prototype,"shotgunProgressBar",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(k.prototype,"rifleProgressBar",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=k))||A));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Ball.ts","./Game.ts","./GameAudioCtrl.ts","./Karakter.ts","./MainMenu.ts","./ProgressBarWeapon.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainMenu.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,t,o,r,i;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,o=n._decorator,r=n.director,i=n.Component}],execute:function(){var c;t._RF.push({},"26eb39mfQVDPaIGmelm5Msa","MainMenu",void 0);var u=o.ccclass;o.property,n("MainMenu",u("MainMenu")(c=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var o=t.prototype;return o.start=function(){},o.onClickPlay=function(){r.loadScene("MainGame")},o.update=function(n){},t}(i))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/ProgressBarWeapon.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,o,t,s,n,i,a,p,l,c,u,g;return{setters:[function(r){e=r.applyDecoratedDescriptor,o=r.inheritsLoose,t=r.initializerDefineProperty,s=r.assertThisInitialized},function(r){n=r.cclegacy,i=r._decorator,a=r.ProgressBar,p=r.Node,l=r.Sprite,c=r.math,u=r.tween,g=r.Component}],execute:function(){var h,b,f,d,m,y,v,B,P;n._RF.push({},"9baa7xVmx1B9oS4BbOcFfTo","ProgressBarWeapon",void 0);var I=i.ccclass,C=i.property;r("ProgressBarWeapon",(h=I("ProgressBarWeapon"),b=C({type:a}),f=C({type:Number}),d=C({type:p}),h((v=e((y=function(r){function e(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return e=r.call.apply(r,[this].concat(n))||this,t(e,"bar",v,s(e)),e.progress=void 0,t(e,"pengurangan",B,s(e)),t(e,"reloadIcon",P,s(e)),e.spriteComponent=void 0,e}o(e,r);var n=e.prototype;return n.onLoad=function(){this.progress=this.bar.progress,this.spriteComponent=this.bar.getComponent(l)},n.reduceProgressBar=function(){console.log("before"+this.progress),this.progress=this.progress-this.pengurangan,this.progress<=.4?this.spriteComponent.color=c.color(230,35,21,255):this.progress<=.6&&(this.spriteComponent.color=c.color(242,223,15,255)),u(this.bar).to(.1,{progress:this.progress}).start(),console.log("after"+this.progress)},n.resetProgressBarToFull=function(){this.spriteComponent.color=c.color(91,224,28,255),this.progress=1,u(this.bar).to(.1,{progress:1}).start()},n.makeReloadIconVisible=function(){this.reloadIcon.active=!0},n.makeReloadIconInvisible=function(){this.reloadIcon.active=!1},n.start=function(){},n.update=function(r){},e}(g)).prototype,"bar",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=e(y.prototype,"pengurangan",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=e(y.prototype,"reloadIcon",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y))||m));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});