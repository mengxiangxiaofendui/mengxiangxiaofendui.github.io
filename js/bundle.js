!function(){"use strict";class n extends Laya.View{constructor(){super()}onAwake(){var n=this;this.init(),Laya.timer.once(1e3,this,function(){n.openUI("登录")})}init(){var n=this;this.openUI("加载"),this.登录注册.on(Laya.Event.CLICK,this,function(){n.openUI("注册")}),this.登录开始.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.注册登录.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.注册注册.on(Laya.Event.CLICK,this,function(){n.openUI("登录")}),this.注册关闭.on(Laya.Event.CLICK,this,function(){n.openUI("登录")}),this.主界面个人信息.on(Laya.Event.CLICK,this,function(){n.openUI("个人信息")}),this.个人信息修改.on(Laya.Event.CLICK,this,function(){n.openUI("个人昵称")}),this.个人信息确定.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.个人昵称关闭.on(Laya.Event.CLICK,this,function(){n.openUI("个人信息")}),this.个人昵称确定.on(Laya.Event.CLICK,this,function(){n.openUI("个人信息")}),this.主界面体力购买.on(Laya.Event.CLICK,this,function(){n.openUI("体力购买")}),this.体力购买关闭.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面钻石购买.on(Laya.Event.CLICK,this,function(){n.openUI("钻石购买")}),this.钻石购买关闭.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面金币购买.on(Laya.Event.CLICK,this,function(){n.openUI("金币购买")}),this.金币购买关闭.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面设置.on(Laya.Event.CLICK,this,function(){n.openUI("设置")}),this.设置关闭.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面邮件.on(Laya.Event.CLICK,this,function(){n.openUI("邮件")}),this.邮件关闭.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面公告.on(Laya.Event.CLICK,this,function(){n.openUI("公告")}),this.公告关闭.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面开始战斗.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面商店.on(Laya.Event.CLICK,this,function(){n.openUI("商店")}),this.主界面装备.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.装备时装.on(Laya.Event.CLICK,this,function(){n.openUI("时装")}),this.时装关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.时装技能按钮.on(Laya.Event.CLICK,this,function(){n.openUI("时装技能")}),this.时装技能关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.时装技能时装.on(Laya.Event.CLICK,this,function(){n.openUI("时装")}),this.时装提示按钮.on(Laya.Event.CLICK,this,function(){n.openUI("时装提示")}),this.时装提示关闭.on(Laya.Event.CLICK,this,function(){n.openUI("时装")}),this.装备天赋.on(Laya.Event.CLICK,this,function(){n.openUI("天赋")}),this.天赋关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.天赋升级按钮.on(Laya.Event.CLICK,this,function(){n.openUI("天赋升级")}),this.天赋升级关闭.on(Laya.Event.CLICK,this,function(){n.openUI("天赋")}),this.天赋升级返回.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.装备宝石总览.on(Laya.Event.CLICK,this,function(){n.openUI("宝石详情")}),this.宝石详情关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.装备顾客.on(Laya.Event.CLICK,this,function(){n.openUI("顾客")}),this.装备商店.on(Laya.Event.CLICK,this,function(){n.openUI("商店")}),this.装备装备.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.装备战斗.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.装备角色.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.装备建设.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.装备宝石页签按钮.on(Laya.Event.CLICK,this,function(){n.装备宝石页签.visible=!0,n.装备装备页签.visible=!1}),this.宝石页签点击.on(Laya.Event.CLICK,this,function(){n.openUI("宝石选中")}),this.宝石选中关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.宝石页签按钮.on(Laya.Event.CLICK,this,function(){}),this.装备装备页签按钮.on(Laya.Event.CLICK,this,function(){n.装备宝石页签.visible=!1,n.装备装备页签.visible=!0}),this.装备页签点击.on(Laya.Event.CLICK,this,function(){n.openUI("装备对比")}),this.装备页签按钮.on(Laya.Event.CLICK,this,function(){n.openUI("装备锻造")}),this.装备对比关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.装备对比锻造.on(Laya.Event.CLICK,this,function(){n.openUI("装备锻造")}),this.装备装备信息按钮.on(Laya.Event.CLICK,this,function(){n.openUI("装备信息")}),this.装备信息关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.装备信息装备锻造.on(Laya.Event.CLICK,this,function(){n.openUI("装备锻造")}),this.装备锻造关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.顾客选中.on(Laya.Event.CLICK,this,function(){n.openUI("顾客详情")}),this.顾客关闭.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.顾客详情关闭.on(Laya.Event.CLICK,this,function(){n.openUI("顾客")}),this.主界面战斗.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.主界面角色.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.主界面建设.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.商店商店.on(Laya.Event.CLICK,this,function(){n.openUI("商店")}),this.商店装备.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.商店战斗.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.商店角色.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.角色选中关闭.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.角色选中按钮.on(Laya.Event.CLICK,this,function(){n.openUI("角色选中")}),this.商店建设.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.角色商店.on(Laya.Event.CLICK,this,function(){n.openUI("商店")}),this.角色装备.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.角色战斗.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.角色角色.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.角色建设.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.角色幻形按钮.on(Laya.Event.CLICK,this,function(){n.openUI("角色幻形")}),this.角色幻技按钮.on(Laya.Event.CLICK,this,function(){n.openUI("角色幻技")}),this.角色幻形点击.on(Laya.Event.CLICK,this,function(){n.openUI("角色幻形")}),this.角色幻技升星按钮.on(Laya.Event.CLICK,this,function(){n.openUI("核心升星")}),this.核心升星关闭.on(Laya.Event.CLICK,this,function(){n.openUI("角色幻形")}),this.角色幻形关闭.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.角色幻技关闭.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.建设商店.on(Laya.Event.CLICK,this,function(){n.openUI("商店")}),this.建设装备.on(Laya.Event.CLICK,this,function(){n.openUI("装备")}),this.建设战斗.on(Laya.Event.CLICK,this,function(){n.openUI("主界面")}),this.建设角色.on(Laya.Event.CLICK,this,function(){n.openUI("角色")}),this.建设建设.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.建设食堂按钮.on(Laya.Event.CLICK,this,function(){n.openUI("建设食堂")}),this.建设食堂关闭.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.建设排行榜按钮.on(Laya.Event.CLICK,this,function(){n.openUI("建设排行榜")}),this.建设排行榜关闭.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.建设历练大厅按钮.on(Laya.Event.CLICK,this,function(){n.openUI("建设历练大厅")}),this.建设历练大厅关闭.on(Laya.Event.CLICK,this,function(){n.openUI("建设")}),this.建设研究所按钮.on(Laya.Event.CLICK,this,function(){n.openUI("建设研究所")}),this.建设研究所关闭.on(Laya.Event.CLICK,this,function(){n.openUI("建设")})}openUI(n){this.加载.visible="加载"==n,this.登录.visible="登录"==n,this.注册.visible="注册"==n,this.主界面.visible="主界面"==n,this.个人信息.visible="个人信息"==n,this.个人昵称.visible="个人昵称"==n,this.体力购买.visible="体力购买"==n,this.钻石购买.visible="钻石购买"==n,this.金币购买.visible="金币购买"==n,this.设置.visible="设置"==n,this.邮件.visible="邮件"==n,this.公告.visible="公告"==n,this.装备.visible="装备"==n,this.顾客.visible="顾客"==n,this.商店.visible="商店"==n,this.顾客详情.visible="顾客详情"==n,this.时装.visible="时装"==n,this.时装提示.visible="时装提示"==n,this.时装技能.visible="时装技能"==n,this.天赋.visible="天赋"==n,this.天赋升级.visible="天赋升级"==n,this.宝石详情.visible="宝石详情"==n,this.装备信息.visible="装备信息"==n,this.装备锻造.visible="装备锻造"==n,this.装备对比.visible="装备对比"==n,this.宝石选中.visible="宝石选中"==n,this.角色.visible="角色"==n,this.角色选中.visible="角色选中"==n,this.建设.visible="建设"==n,this.建设食堂.visible="建设食堂"==n,this.建设排行榜.visible="建设排行榜"==n,this.建设历练大厅.visible="建设历练大厅"==n,this.建设研究所.visible="建设研究所"==n,this.角色幻形.visible="角色幻形"==n,this.角色幻技.visible="角色幻技"==n,this.核心升星.visible="核心升星"==n}}class t{static init(){(0,Laya.ClassUtils.regClass)("gameView.js",n)}}t.width=1080,t.height=1920,t.scaleMode="showall",t.screenMode="none",t.alignV="middle",t.alignH="center",t.startScene="my_root.scene",t.sceneRoot="",t.debug=!1,t.stat=!1,t.physicsDebug=!1,t.exportSceneToJson=!0,t.init();new class{constructor(){window.Laya3D?Laya3D.init(t.width,t.height):Laya.init(t.width,t.height,Laya.WebGL),Laya.Physics&&Laya.Physics.enable(),Laya.DebugPanel&&Laya.DebugPanel.enable(),Laya.stage.scaleMode=t.scaleMode,Laya.stage.screenMode=t.screenMode,Laya.stage.alignV=t.alignV,Laya.stage.alignH=t.alignH,Laya.stage.bgColor="#000000",Laya.URL.exportSceneToJson=t.exportSceneToJson,(t.debug||"true"==Laya.Utils.getQueryString("debug"))&&Laya.enableDebugPanel(),t.physicsDebug&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable(),t.stat&&Laya.Stat.show(),Laya.alertGlobalError(!0),Laya.ResourceVersion.enable("version.json",Laya.Handler.create(this,this.onVersionLoaded),Laya.ResourceVersion.FILENAME_VERSION)}onVersionLoaded(){Laya.AtlasInfoManager.enable("fileconfig.json",Laya.Handler.create(this,this.onConfigLoaded))}onConfigLoaded(){t.startScene&&Laya.Scene.open(t.startScene)}}}();