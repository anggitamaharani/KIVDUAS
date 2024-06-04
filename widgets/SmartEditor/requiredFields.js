// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/requiredFields.html":'\x3cdiv style\x3d"max-height: 445px;padding: 0 5px;"\x3e\r\n    \x3cdiv class\x3d"esriCTValuePickerHint"\x3e\r\n        ${nls.requiredFields.displayMsg}\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"width: 100%;" data-dojo-attach-point\x3d"fieldsDijitContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/text!./requiredFields.html dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/Popup dojo/dom-construct dojo/_base/array dojo/string dojo/dom-style dojo/on dojo/dom-class dojo/dom-attr".split(" "),function(m,n,e,p,q,r,t,k,h,u,v,w,l,x){return m([r,n,q],{baseClass:"jimu-widget-smartEditor-requiredFields",templateString:p,fieldsPopup:null,nodes:[],postCreate:function(){this.nodes=[];this._createPopupContent();this._createPopUp()},
_createPopupContent:function(){h.forEach(this.requiredFieldsInfos,e.hitch(this,function(b){var a=b.alias?b.alias:b.name,f=k.create("div",{class:"esriCTFieldContainer esriCTMarginLeft15"},this.fieldsDijitContainer),g=u.substitute(this.nls.requiredFields.foundNullRecordCount,{fieldName:a,count:this.AttributesCount[b.name]});k.create("div",{innerHTML:g,class:"esriCTFieldName"},f);var c=this.presetUtils.createPresetFieldContentNode(b);this.nodes.push(c);0<c.length&&h.forEach(c,e.hitch(this,function(d){v.set(d,
"width","100%");x.set(d,"aria-label",a);d.placeAt(k.create("div",{style:"width:90%"},f));d.startup()}));c[0].hasOwnProperty("fieldType")&&-1!==["richtext","textarea"].indexOf(c[0].fieldType)&&w(c[0],"change",e.hitch(this,function(d){""===d||null===d||void 0===d?(l.add(c[0].domNode,"ee-error"),c[0].focusNode.focus()):l.remove(c[0].domNode,"ee-error")}))}))},_createPopUp:function(){this.fieldsPopup=new t({titleLabel:this.nls.requiredFields.popupTittle,width:400,maxHeight:300,autoHeight:!0,"class":this.baseClass,
content:this,buttons:[{label:this.nls.ok,id:"okButton",onClick:e.hitch(this,function(){this._validateFieldsDijits()&&(this._getRequiredFieldsEnteredvalues(),this.fieldsPopup.close())})},{label:this.nls.cancel,id:"cancelButton",classNames:["jimu-btn-vacation"],onClick:e.hitch(this,function(){this.emit("cancelButtonClicked");this.fieldsPopup.close()})}]})},_getRequiredFieldsEnteredvalues:function(){var b={};h.forEach(this.nodes,e.hitch(this,function(a){var f=a[0].name;if(a[0].hasOwnProperty("fieldType")&&
"date"===a[0].fieldType)if(1===a.length)b[f]=(new Date(a[0].getValue())).getTime();else{var g=a[0].getValue().toDateString();a=a[1].getValue().toTimeString();b[f]=(new Date(g+" "+a)).getTime()}else a[0].hasOwnProperty("fieldType")&&-1!==["richtext","textarea"].indexOf(a[0].fieldType)?(g=this.presetUtils.getFieldInfoByFieldName(this.requiredFieldsInfos,a[0].name).length,a=a[0].getValue(),a.length>g&&(a=a.slice(0,g)),b[f]=a):b[f]=a[0].getValue()}));this.emit("providedValuesToRequiredFields",b)},_validateFieldsDijits:function(){var b=
!0;h.some(this.nodes,e.hitch(this,function(a){if(a[0].hasOwnProperty("fieldType")&&-1!==["richtext","textarea"].indexOf(a[0].fieldType)){if(""===a[0].getValue()||null===a[0].getValue()||void 0===a[0].getValue())return l.add(a[0].domNode,"ee-error"),b=!1,a[0].focusNode.focus(),!0}else{if(!a[0].isValid())return b=!1,a[0].focus(),!0;if(1<a.length&&!a[1].isValid())return b=!1,a[1].focus(),!0}}));return b}})});