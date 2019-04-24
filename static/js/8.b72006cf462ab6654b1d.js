webpackJsonp([8],{"/UmV":function(e,a){},tXSO:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Xxa5"),n=t.n(i),s=t("exGp"),r=t.n(s),l=t("K7jp"),o=t("eqMh"),c=t("RA0d"),u=t("5wXm"),d=t("lZmn"),m=t("TgKm"),g=t("CFpQ"),v=t("aCEB"),h={name:"HealthyToday",components:{ElMap:l.a,ElLine:c.a,Matts:d.a,Pie:m.a,Live:o.a,Bar:u.a},data:function(){return{provinceId:localStorage.getItem("provinceId"),cityId:localStorage.getItem("cityId"),districtId:localStorage.getItem("districtId"),gardenName:localStorage.getItem("gardenName"),gardenId:localStorage.getItem("gardenId"),mapView:!0,gardenRecord:{name:"",location:""},averageSleep:{xData:[],data:[],maxVal:20,linearGradient:["#ff9786","#ffe98f"],hasLine:!1,yName:"时间（分）",grid:{top:"20%",left:"0%",right:"0%",bottom:"0%",containLabel:!0}},averageExercise:{xData:[],data:[],maxVal:20,linearGradient:["#ff9786","#ffe98f"],hasLine:!1,yName:"动量",grid:{top:"20%",left:"0%",right:"0%",bottom:"0%",containLabel:!0}},sleepQuality:{data:[{value:12,name:"基本没睡"},{value:15,name:"睡眠较少"},{value:14,name:"睡眠正常"},{value:16,name:"睡眠充足"}],color:["#00bbf4","#2dcfea","#cdffc2","#2dcfea"],title:"睡眠",pieSize:{radius:"55%",center:["50%","42%"],title:{top:62,fontSize:18}}},sportQuality:{data:[{value:12,name:"基本没睡"},{value:15,name:"睡眠较少"},{value:14,name:"睡眠正常"},{value:16,name:"睡眠充足"}],color:["#00bbf4","#2dcfea","#cdffc2","#2dcfea"],title:"运动",pieSize:{radius:"55%",center:["50%","42%"],title:{top:62,fontSize:18}}},KindergartenData:[{unit:"家",subText:"园所总数",sum:0},{unit:"人",subText:"园长总数",sum:0},{unit:"人",subText:"在职教师总数",sum:0},{unit:"人",subText:"在园儿童总数",sum:0}],jobData:{data:[{value:120,name:"正高级"},{value:200,name:"高级"},{value:260,name:"一级"},{value:200,name:"二级"},{value:80,name:"三级"}],color:["#ffbc00","#57d0ff","#4d6bff","#ff6562","#9d70ff"],title:"职称分布",pieSize:{radius:["35%","45%"],center:["50%","35%"],title:{top:52,fontSize:12}}},ageData:{data:[{value:225,name:"00后"},{value:210,name:"90后"},{value:222,name:"80后"},{value:125,name:"70后"}],color:["#1683fb","#61ffe1","#24cbff","#7189ff"],title:"年龄分布",pieSize:{radius:["35%","45%"],center:["50%","35%"],title:{top:52,fontSize:12}}}}},methods:{refresh:function(){window.$(".refresh").find("i").addClass("loading"),this.overview(),this.getGardenInfos(),this.getAttendRage()},getGardenInfos:function(){var e=r()(n.a.mark(function e(){var a,t,i,s,r,l,o,c,u=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(v.a.getGardenInfos,{gardenId:this.gardenId});case 2:if(a=e.sent,t=a.data.data,this.KindergartenData[0].sum=t.gardenCount,this.KindergartenData[1].sum=t.kindergartenCount,this.KindergartenData[2].sum=t.teacherCount,this.KindergartenData[3].sum=t.totalCount,i=["00","90","80","70"],s=["正高级","高级","一级","二级","三级"],this.jobData.data=[{value:0,name:"正高级"},{value:0,name:"高级"},{value:0,name:"一级"},{value:0,name:"二级"},{value:0,name:"三级"}],this.ageData.data=[{value:0,name:"00后"},{value:0,name:"90后"},{value:0,name:"80后"},{value:0,name:"70后"}],t.jobs.length)for(r=function(e,a){var i=t.jobs.filter(function(a){return a.item1===s[e]});i.length?u.jobData.data[e].value=i[0].item2:u.jobData.data[e].value=0},l=0,o=s.length;l<o;l++)r(l,o);else this.jobData.data=[{name:"暂无数据",value:0}];if(t.ages.length)for(c=function(e,a){var n=t.ages.filter(function(a){return a.item1.substring(0,1)===i[e].substring(0,1)});n.length?u.ageData.data[e].value=n.length:u.ageData.data[e].value=0},l=0,o=i.length;l<o;l++)c(l,o);else this.ageData.data=[{name:"暂无数据",value:0}];case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getAttendRage:function(){var e=r()(n.a.mark(function e(){var a,t,i,s,r,l,o,c,u,d,m,h,f,p,x,S,_,b;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(v.a.getAverageSleepRange,{gardenId:this.gardenId});case 2:if(a=e.sent,(t=a.data.data).gardenSleep.length){for(i=t.gardenSleep,s=0,r=i.length;s<r;s++)1===i[s].gradeNum?i[s].name="托班":2===i[s].gradeNum?i[s].name="小班":3===i[s].gradeNum?i[s].name="中班":4===i[s].gradeNum&&(i[s].name="大班");if((l=i.filter(function(e){return e.name&&0!==e.averageSleepTime})).length){for(l.sort(function(e,a){return a.averageSleepTime-e.averageSleepTime}),console.log(l),o=[],c=[],u=0,d=l.length;u<d;u++)o.push(l[u].name),c.push(60*l[u].averageSleepTime);console.log(o,c),this.averageSleep.xData=o,this.averageSleep.data=c,this.averageSleep.maxVal=Math.max.apply(Math,c)+20,console.log(this.averageSleep.xData,this.averageSleep.data)}else this.averageSleep.xData=["暂无数据"],this.averageSleep.data=[0],this.averageSleep.maxVal=0}else this.averageSleep.xData=["暂无数据"],this.averageSleep.data=[0],this.averageSleep.maxVal=0;if(t.gardenSport.length){for(m=t.gardenSport,h=0,f=m.length;h<f;h++)1===m[h].gradeNum?m[h].name="托班":2===m[h].gradeNum?m[h].name="小班":3===m[h].gradeNum?m[h].name="中班":4===m[h].gradeNum&&(m[h].name="大班");if((p=m.filter(function(e){return e.name&&0!==e.averageSport})).length){for(p.sort(function(e,a){return a.averageSport-e.averageSport}),console.log(p),x=[],S=[],_=0,b=p.length;_<b;_++)x.push(p[_].name),S.push(p[_].averageSport);console.log(x,S),this.averageExercise.xData=x,this.averageExercise.data=S,this.averageExercise.maxVal=Math.max.apply(Math,S)+20,console.log(this.averageExercise.xData,this.averageExercise.data)}else this.averageExercise.xData=["暂无数据"],this.averageExercise.data=[0],this.averageExercise.maxVal=0}else this.averageExercise.xData=["暂无数据"],this.averageExercise.data=[0],this.averageExercise.maxVal=0;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),overview:function(){var e=r()(n.a.mark(function e(){var a,t,i,s,r,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(v.a.getSleepQuality,{gardenId:this.gardenId});case 2:if((a=e.sent).data)if(window.$(".refresh").find("i").removeClass("loading"),(t=a.data.data).length){for(this.sleepQuality.data=[],i=0,s=t.sleep.length;i<s;i++)this.sleepQuality.data.push({name:t.sleep[i].item1,value:t.sleep[i].item2});for(this.sportQuality.data=[],r=0,l=t.sport.length;r<l;r++)this.sportQuality.data.push({name:t.sport[r].item1,value:t.sport[r].item2})}else this.sleepQuality.data=[{name:"暂无数据",value:0}],this.sportQuality.data=[{name:"暂无数据",value:0}];case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),gardenView:function(e){this.mapView=!this.mapView,this.gardenRecord={name:e.name,location:e.location}},toMapView:function(){this.mapView=!this.mapView}},mounted:function(){this.$common.border(window.$(".bottom .content")),this.getAttendRage(),this.overview(),this.getGardenInfos()}},f={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"main-box activity"},[t("div",{staticClass:"main"},[t("div",{staticClass:"middle"},[t("div",{staticClass:"left"},[t("live",{attrs:{name:e.gardenRecord.name},on:{toMapView:e.toMapView}})],1),e._v(" "),t("div",{staticClass:"right"},[t("p",{staticClass:"refresh"},[e._v("数据每隔五分钟自动刷新\n          "),t("button",{staticClass:"btn1",on:{click:e.refresh}},[t("i",{staticClass:"iconfont"},[e._v("")]),e._v("刷新")])]),e._v(" "),t("ul",{staticClass:"ranking"},[t("li",[e._m(0),e._v(" "),t("div",{staticClass:"content"},["暂无数据"!==e.averageSleep.xData[0]?t("bar",{attrs:{settings:e.averageSleep}}):t("no-data",{attrs:{item:"平均睡眠"}})],1)]),e._v(" "),t("li",[e._m(1),e._v(" "),t("div",{staticClass:"content"},["暂无数据"!==e.averageExercise.xData[0]?t("bar",{attrs:{settings:e.averageExercise}}):t("no-data",{attrs:{item:"平均运动强度"}})],1)])])])]),e._v(" "),t("div",{staticClass:"line"}),e._v(" "),t("div",{staticClass:"bottom"},[t("ul",{staticClass:"statistics"},[t("li",[e._m(2),e._v(" "),t("div",{staticClass:"content"},["暂无数据"!==e.sleepQuality.data[0].name?t("pie",{attrs:{data:e.sleepQuality.data,color:e.sleepQuality.color,title:e.sleepQuality.title,pieSize:e.sleepQuality.pieSize}}):t("no-data",{attrs:{item:"睡眠情况"}})],1)]),e._v(" "),t("li",[e._m(3),e._v(" "),t("ul",{staticClass:"content"},["暂无数据"!==e.sleepQuality.data[0].name?t("pie",{attrs:{data:e.sportQuality.data,color:e.sportQuality.color,title:e.sportQuality.title,pieSize:e.sportQuality.pieSize}}):t("no-data",{attrs:{item:"运动情况"}})],1)]),e._v(" "),t("li",[e._m(4),e._v(" "),t("div",{staticClass:"content"},[t("matts",{attrs:{data:e.KindergartenData}})],1)]),e._v(" "),t("li",[e._m(5),e._v(" "),t("ul",{staticClass:"content"},[t("li",["暂无数据"!==e.jobData.data[0].name?t("pie",{attrs:{data:e.jobData.data,color:e.jobData.color,title:e.jobData.title,pieSize:e.jobData.pieSize}}):t("no-data",{attrs:{item:"职称"}})],1),e._v(" "),t("li",["暂无数据"!==e.ageData.data[0].name?t("pie",{attrs:{data:e.ageData.data,color:e.ageData.color,title:e.ageData.title,pieSize:e.ageData.pieSize}}):t("no-data",{attrs:{item:"年龄"}})],1)])])])])])])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{staticClass:"title"},[a("em"),this._v("以平均睡眠时长排名")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{staticClass:"title"},[a("em"),this._v("以平均运动强度排名")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{staticClass:"title"},[a("em"),this._v("睡眠情况分布")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{staticClass:"title"},[a("em"),this._v("运动情况分布")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{staticClass:"title"},[a("em"),this._v("幼儿园信息")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{staticClass:"title"},[a("em"),this._v("教师信息")])}]};var p=t("VU/8")(h,f,!1,function(e){t("/UmV")},"data-v-8e2d15b8",null);a.default=p.exports}});
//# sourceMappingURL=8.b72006cf462ab6654b1d.js.map