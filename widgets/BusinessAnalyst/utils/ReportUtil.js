// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Deferred dojo/promise/all dojo/when dojo/_base/array esri/request ./GEUtil jimu/portalUtils dojo/i18n!../nls/strings".split(" "),function(u,y,w,l,x,p,z,t){STANDARD_INFOGRAPHIC_TYPEKEYWORD="esriReportPlayerStandardInfographic";return{_ownedCachedCustomReports:null,_sharedCachedCustomReports:null,_cachedCountryClassicReports:[],_cachedInfographicReports:null,_countryInitDfds:[],getAvailableClassicReports:function(b,e){var a=this,c=[],h=new u,d;e&&l.forEach(e.countryConfig,function(n){b==
n.countryID&&(d=n)});d||(d={countryID:b,allowEsriReports:!0,allowAllEsriReports:!0,allowEsriInfographics:!0,allowAllEsriInfographics:!0,allowMyReports:!0,allowMyInfographics:!0,allowSharedReports:!0,allowSharedInfographics:!0,allowAllOrgReports:!0,allowAllOrgInfographics:!0,defaultInfographicID:"",defaultReportID:"",enabledEsriReports:[],enabledOrgReports:[],enabledEsriInfographics:[],enabledOrgInfographics:[]});var k=null,q=null,r=null;w(this._initReports(b),function(){if(!e||d.allowAllEsriReports||
a._hasEnabledReports(a._cachedCountryClassicReports[b],d.enabledEsriReports))k=c.length,c.push({value:"esriReports",label:t.esriReports,children:[]});if(!e||d.allowAllOrgReports&&a._hasReportsForCountry(a._ownedCachedCustomReports,b)||a._hasEnabledReportsForCountry(a._ownedCachedCustomReports,b,d.enabledOrgReports))q=c.length,c.push({value:"myReports",label:t.myReports,children:[]});if(!e||d.allowAllOrgReports&&a._hasReportsForCountry(a._sharedCachedCustomReports,b)||a._hasEnabledReportsForCountry(a._sharedCachedCustomReports,
b,d.enabledOrgReports))r=c.length,c.push({value:"sharedReports",label:t.sharedReports,children:[]});(d.allowAllEsriReports||a._hasEnabledReports(a._cachedCountryClassicReports[b],d.enabledEsriReports))&&a._cachedCountryClassicReports[b]&&0<a._cachedCountryClassicReports[b].length&&l.forEach(a._cachedCountryClassicReports[b],function(g){(d.allowAllEsriReports||d.enabledEsriReports.includes(g.reportID))&&c[k].children.push(a._formatClassicReportsForDropDown(g))});var n=["esriWebInfographicReport","esriWebSingleInfographic",
"esriWebBlankInfographic","esriWebHiddenInfographic","esriWebComparisonReport"];(d.allowAllOrgReports&&a._hasReportsForCountry(a._ownedCachedCustomReports,b)||a._hasEnabledReportsForCountry(a._ownedCachedCustomReports,b,d.enabledOrgReports))&&l.forEach(a._ownedCachedCustomReports,function(g){g.properties.countries.includes(b)&&(d.allowAllOrgReports||d.enabledOrgReports.includes(g.id))&&(g.typeKeywords.some(function(m){return 0<=n.indexOf(m)})||(p.getCountryDisableMultiHierarchySupport()[b]?g.properties.hierarchy===
p.getCountryHierarchies()[b]&&c[q].children.push(a._formatClassicReportsForDropDown(g)):c[q].children.push(a._formatClassicReportsForDropDown(g))))});(d.allowAllOrgReports&&a._hasReportsForCountry(a._sharedCachedCustomReports,b)||a._hasEnabledReportsForCountry(a._sharedCachedCustomReports,b,d.enabledOrgReports))&&l.forEach(a._sharedCachedCustomReports,function(g){g.properties.countries.includes(b)&&(d.allowAllOrgReports||d.enabledOrgReports.includes(g.id))&&(g.typeKeywords.some(function(m){return 0<=
n.indexOf(m)})||(p.getCountryDisableMultiHierarchySupport()[b]?g.properties.hierarchy===p.getCountryHierarchies()[b]&&c[r].children.push(a._formatClassicReportsForDropDown(g)):c[r].children.push(a._formatClassicReportsForDropDown(g))))});var f=function(g,m){g=g.label.toUpperCase();m=m.label.toUpperCase();var v=0;g>m?v=1:g<m&&(v=-1);return v};0<c.length&&c[0].children.sort(f);1<c.length&&c[1].children.sort(f);2<c.length&&c[2].children.sort(f);h.resolve(c)});return h},_hasEnabledReports:function(b,
e){return b&&e?l.some(b,function(a){return e.includes(a.reportID)}):!1},_hasReportsForCountry:function(b,e){return b&&e?l.some(b,function(a){return a.properties.countries.includes(e)}):!1},_hasEnabledReportsForCountry:function(b,e,a){return b&&e&&a?l.some(b,function(c){return c.properties.countries.includes(e)?a.includes(c.id):!1}):!1},_formatClassicReportsForDropDown:function(b){return b.metadata?{label:b.metadata.title,value:b.reportID,reportType:b.metadata.type}:{label:b.title,value:b.id,reportType:b.properties.type,
item:{itemid:b.id,url:portalUrl,token:esri.id.credentials[0].token}}},getAvailableInfographicReports:function(b,e){var a=this,c=[],h=new u,d;e&&l.forEach(e.countryConfig,function(n){b==n.countryID&&(d=n)});d||(d={countryID:b,allowEsriReports:!0,allowAllEsriReports:!0,allowEsriInfographics:!0,allowAllEsriInfographics:!0,allowMyReports:!0,allowMyInfographics:!0,allowSharedReports:!0,allowSharedInfographics:!0,allowAllOrgReports:!0,allowAllOrgInfographics:!0,defaultInfographicID:"",defaultReportID:"",
enabledEsriReports:[],enabledOrgReports:[],enabledEsriInfographics:[],enabledOrgInfographics:[]});var k=null,q=null,r=null;w(this._initReports(b),function(){if(!e||d.allowAllEsriInfographics||a._hasEnabledInfographics(a._cachedInfographicReports,d.enabledEsriInfographics))k=c.length,c.push({value:"esriReports",label:t.esriInfographics,children:[]});if(!e||d.allowAllOrgInfographics&&0<a._ownedCachedCustomReports.length||a._hasEnabledInfographics(a._ownedCachedCustomReports,d.enabledOrgInfographics))q=
c.length,c.push({value:"myReports",label:t.myInfographics,children:[]});if(!e||d.allowAllOrgInfographics&&0<a._sharedCachedCustomReports.length||a._hasEnabledInfographics(a._sharedCachedCustomReports,d.enabledOrgInfographics))r=c.length,c.push({value:"sharedReports",label:t.sharedInfographics,children:[]});(d.allowAllEsriInfographics||a._hasEnabledInfographics(a._cachedInfographicReports,d.enabledEsriInfographics))&&l.forEach(a._cachedInfographicReports,function(f){if(f.properties.countries.includes(b)&&
(d.allowAllEsriInfographics||d.enabledEsriInfographics.includes(f.id))){var g=a._getIndexOfInfographicByTitle(f.title,c[k].children);if(-1===g)c[k].children.push(a._formatInfographicReportsForDropDown(f));else{var m=p.getCountryHierarchies()[b];f.properties.hierarchy===m&&(c[k].children[g]=a._formatInfographicReportsForDropDown(f))}}});(d.allowAllOrgInfographics&&0<a._ownedCachedCustomReports.length||a._hasEnabledInfographics(a._ownedCachedCustomReports,d.enabledOrgInfographics))&&l.forEach(a._ownedCachedCustomReports,
function(f){f.properties.countries.includes(b)&&(d.allowAllOrgInfographics||d.enabledOrgInfographics.includes(f.id))&&(f.typeKeywords.includes("esriWebInfographicReport")||a._isOldPortalInfographic(f))&&(p.getCountryDisableMultiHierarchySupport()[b]?f.properties.hierarchy===p.getCountryHierarchies()[b]&&c[q].children.push(a._formatInfographicReportsForDropDown(f)):c[q].children.push(a._formatInfographicReportsForDropDown(f)))});(d.allowAllOrgInfographics&&0<a._sharedCachedCustomReports.length||a._hasEnabledInfographics(a._sharedCachedCustomReports,
d.enabledOrgInfographics))&&l.forEach(a._sharedCachedCustomReports,function(f){f.properties.countries.includes(b)&&(d.allowAllOrgInfographics||d.enabledOrgInfographics.includes(f.id))&&(f.typeKeywords.includes("esriWebInfographicReport")||a._isOldPortalInfographic(f))&&(p.getCountryDisableMultiHierarchySupport()[b]?f.properties.hierarchy===p.getCountryHierarchies()[b]&&c[r].children.push(a._formatInfographicReportsForDropDown(f)):c[r].children.push(a._formatInfographicReportsForDropDown(f)))});var n=
function(f,g){f=f.label.toUpperCase();g=g.label.toUpperCase();var m=0;f>g?m=1:f<g&&(m=-1);return m};0<c.length&&c[0].children.sort(n);1<c.length&&c[1].children.sort(n);2<c.length&&c[2].children.sort(n);h.resolve(c)});return h},_hasEnabledInfographics:function(b,e){return l.some(b,function(a){return e.includes(a.id)})},_isOldPortalInfographic:function(b){return b.properties&&b.properties.isHidden&&"true"===b.properties.isHidden?!1:b.properties&&b.properties.isGraphicReport&&"true"===b.properties.isGraphicReport?
!0:!1},_formatInfographicReportsForDropDown:function(b){return{label:b.title,value:b.id}},_getIndexOfInfographicByTitle:function(b,e){var a=-1;l.some(e,function(c,h){if(c.label===b)return a=h,!1});return a},_initReports:function(b){var e=[],a=this;if(this._countryInitDfds[b])return this._countryInitDfds[b];this._countryInitDfds[b]=new u;var c=function(h,d){return x(h).then(function(k){l.forEach(k.results,function(q){d.push(q)});if(-1!=k.nextStart)return h.content.start=k.nextStart,c(h,d)},function(k){alert(k)})};
z.getPortal(portalUrl).loadSelfInfo().then(function(h){var d=h&&h.helperServices&&h.helperServices.geoenrichment&&h.helperServices.geoenrichment.url?h.helperServices.geoenrichment.url:"https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver";a._cachedCountryClassicReports[b]||e.push(x({url:d+"/Geoenrichment/reports/"+b,content:{appID:"webappbuilder",f:"json",langCode:"en-us"}}).then(function(k){a._cachedCountryClassicReports[b]=k.reports},function(k){alert(k)}));a._cachedInfographicReports||
(a._cachedInfographicReports=[],e.push(c({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:"typekeywords:(esriWebStandardInfographicReport)"}},a._cachedInfographicReports)));a._ownedCachedCustomReports||(a._ownedCachedCustomReports=[],e.push(c({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:'type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) owner:'+
esri.id.credentials[0].userId}},a._ownedCachedCustomReports)));a._sharedCachedCustomReports||(a._sharedCachedCustomReports=[],e.push(c({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:'access:shared type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) NOT owner:'+esri.id.credentials[0].userId}},a._sharedCachedCustomReports)),e.push(c({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",
f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:'access:org type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) NOT owner:'+esri.id.credentials[0].userId}},a._sharedCachedCustomReports)),h&&h.appInfo&&h.appInfo.orgId&&e.push(c({url:portalUrl+"/sharing/rest/search",content:{appID:"webappbuilder",f:"json",start:1,num:100,sortField:"modified",sortOrder:"desc",q:'access:public type:"Report Template" typekeywords:(esriWebReport NOT esriWebSingleInfographic) NOT owner:'+
esri.id.credentials[0].userId+" orgid: "+h.id}},a._sharedCachedCustomReports)));0===e.length?a._countryInitDfds[b].resolve():y(e).then(function(){a._countryInitDfds[b].resolve()})});return this._countryInitDfds[b]}}});