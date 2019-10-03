(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={characterDisplay:"CharacterDisplay_characterDisplay__20O9A",header:"CharacterDisplay_header__2fx5d",emblemBackground:"CharacterDisplay_emblemBackground__2pAjE",name:"CharacterDisplay_name__2j8PA",power:"CharacterDisplay_power__1p583",details:"CharacterDisplay_details__2ZMpw",detailsRow:"CharacterDisplay_detailsRow__QQFTB",detailsLabel:"CharacterDisplay_detailsLabel__s8ZLQ",detailsInlineIcon:"CharacterDisplay_detailsInlineIcon__Wzpbv",detailsValue:"CharacterDisplay_detailsValue__3wf4f",powerBars:"CharacterDisplay_powerBars__3t0B5",powerRange:"CharacterDisplay_powerRange__1d86z",rangeLine:"CharacterDisplay_rangeLine__358zP",powerLabel:"CharacterDisplay_powerLabel__3EDmr",indicator:"CharacterDisplay_indicator__3CaQK",barWrapper:"CharacterDisplay_barWrapper__2x1f3",iconWrapper:"CharacterDisplay_iconWrapper__3hOkU",icon:"CharacterDisplay_icon__1e0L7",barContainer:"CharacterDisplay_barContainer__1OnNQ",barLine:"CharacterDisplay_barLine__2qulu",filledBar:"CharacterDisplay_filledBar__3UpB_",label:"CharacterDisplay_label__mYBsn",max:"CharacterDisplay_max__3m5Pg"}},13:function(e,t,a){e.exports={App:"App_App__15LM-",loadingContainer:"App_loadingContainer__1Pa9s",charactersContainer:"App_charactersContainer__1RSU_",characters:"App_characters__1GhrS",loadingStatus:"App_loadingStatus__3QEhd"}},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r,n,c,s=a(0),i=a.n(s),o=a(60),l=a.n(o),u=a(2),p=a.n(u),m=a(3),f=a(5),b=a(61),h=a(35),d=a(23),v=function(){var e=Object(m.a)(p.a.mark(function e(t){var a,r,n,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=x(),r={"x-api-key":j},a&&(r.Authorization="Bearer ".concat(a)),n="".concat(t.url).concat(t.params?"?"+Object.entries(t.params).map(function(e){var t=Object(f.a)(e,2),a=t[0],r=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(r))}):""),e.next=7,fetch(n,{headers:r});case 7:return c=e.sent,e.next=10,c.json();case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}(),g=["DestinyInventoryItemDefinition"],y=function(){var e=Object(m.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading manifest data from IDB"),e.next=3,Object(h.a)("MANIFEST_DATA");case 3:return t=e.sent,console.log("Finished loading manifest data from IDB"),e.abrupt("return",t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(p.a.mark(function e(t){var a,r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw Error("No manifest!");case 2:return a=t.version,console.log("Fetching fresh manifest data"),e.next=6,fetch("https://www.bungie.net".concat(t.jsonWorldContentPaths.en));case 6:return r=e.sent,e.next=9,r.json();case 9:return n=e.sent,console.log("Pruning manifest data"),Object.keys(n).forEach(function(e){g.includes(e)||delete n[e]}),console.log("Storing manifest data in IDB"),e.next=15,Object(h.b)("MANIFEST_DATA",n);case 15:return localStorage.setItem("MANIFEST_VERSION",a),e.abrupt("return",n);case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n||(n=Object(m.a)(p.a.mark(function e(){var t,a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.getDestinyManifest)(v);case 2:if(t=e.sent,a=localStorage.getItem("MANIFEST_VERSION"),!t||!t.Response||t.Response.version!==a||window.location.search.includes("updateManifest")){e.next=10;break}if(r){e.next=9;break}return e.next=8,y();case 8:r=e.sent;case 9:return e.abrupt("return",r);case 10:if(!t||!t.ErrorStatus||"Success"===t.ErrorStatus){e.next=12;break}throw Error('Error status "'.concat(t.ErrorStatus,'" returned from manifest request'));case 12:if(t&&t.Response){e.next=14;break}throw Error("No manifest received!");case 14:return r=void 0,e.next=17,_(t.Response);case 17:return n=e.sent,r=n,e.abrupt("return",n);case 20:case"end":return e.stop()}},e)}))()),e.abrupt("return",n);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(e,t){return Object(d.getProfile)(v,{components:[200,201,205,102,300],destinyMembershipId:t,membershipType:e})},j="d94be1e34632448fafdaf77c7afbb501",E=function(){localStorage.removeItem("bungieAccessToken"),localStorage.removeItem("bungieAccessTokenExpiryTime"),localStorage.removeItem("bungieMembershipId"),localStorage.removeItem("destinyMemberships"),localStorage.removeItem("destinyMembership")},S=function(){var e=Object(m.a)(p.a.mark(function e(t){var a,r,n,c,s,i,o,l=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.length>1&&void 0!==l[1]&&l[1],console.log("handleTokenResponse"),E(),200!==t.status){e.next=25;break}return e.next=6,t.json();case 6:return a=e.sent,r=a.access_token,n=a.expires_in,c=Date.now()+1e3*n,s=a.membership_id,localStorage.setItem("bungieAccessToken",r),localStorage.setItem("bungieAccessTokenExpiryTime",c.toString()),localStorage.setItem("bungieMembershipId",s),e.next=16,Object(b.getMembershipDataById)(v,{membershipId:s,membershipType:254});case 16:if((i=e.sent)&&i.Response&&(!i.ErrorStatus||"Success"===i.ErrorStatus)){e.next=19;break}return e.abrupt("return",{authSuccess:!1,error:"Status code ".concat(i.ErrorStatus," from memberships endpoint")});case 19:return o=i.Response.destinyMemberships,localStorage.setItem("destinyMemberships",JSON.stringify(o)),1===o.length&&P(o[0]),e.abrupt("return",{accessToken:r,authSuccess:!0});case 25:if(200===t.status){e.next=27;break}return e.abrupt("return",{authSuccess:!1,error:"Status code ".concat(t.status," from authentication request")});case 27:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchAuthToken",t),E(),e.next=4,fetch("https://www.bungie.net/platform/app/oauth/token/",{body:"grant_type=authorization_code&code=".concat(t,"&client_id=").concat("27213"),cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",redirect:"follow",referrer:"no-referrer"});case 4:return a=e.sent,e.next=7,S(a);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){return localStorage.getItem("bungieAccessToken")},I=function(){var e=x(),t=parseInt(localStorage.getItem("bungieAccessTokenExpiryTime")||"-1",10),a=localStorage.getItem("bungieMembershipId");return!(!e||Date.now()>=t||!a)},k=function(){var e=localStorage.getItem("destinyMemberships");try{if(e)return JSON.parse(e)}catch(t){console.error("Error loading destiny memberships",t.message)}},N=function(){var e=localStorage.getItem("destinyMembership");try{if(e)return JSON.parse(e)}catch(t){console.error("Error loading destiny membership",t.message)}},P=function(e){localStorage.setItem("destinyMembership",JSON.stringify(e))},C=function(){var e=Object(m.a)(p.a.mark(function e(){var t,a,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),!(a=t.get("code"))||I()){e.next=10;break}return console.log("Fetching access token with auth code"),e.next=6,D(a);case 6:if(!(r=e.sent)||!1!==r.authSuccess){e.next=10;break}return console.error(r.error),e.abrupt("return",!1);case 10:if(a&&window.location.replace("".concat(window.location.origin).concat(window.location.pathname)),!I()||!k()){e.next=13;break}return e.abrupt("return",!0);case 13:console.log("Redirecting to fresh authentication for missing or expired access token, or missing destiny memberships"),E(),console.log("Redirect to auth"),E(),window.location.replace("".concat("https://www.bungie.net/en/OAuth/Authorize","?response_type=code&client_id=").concat("27213"));case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),R=a(34),M=a(4),T=a(12),L=a.n(T);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var B=(c={},Object(M.a)(c,"kinetic",1498876634),Object(M.a)(c,"energy",2465295065),Object(M.a)(c,"power",953998645),Object(M.a)(c,"head",3448274439),Object(M.a)(c,"gloves",3551918588),Object(M.a)(c,"chest",14239492),Object(M.a)(c,"legs",20886954),Object(M.a)(c,"classItem",1585787867),c),W=Object.entries(B).reduce(function(e,t){var a=Object(f.a)(t,2),r=a[0],n=a[1];return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(M.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(M.a)({},n,r))},{}),z=[].concat(["kinetic","energy","power"],["head","gloves","chest","legs","classItem"]),q=2,F=3,V=["titan","hunter","warlock"],H=a(1),Q=a.n(H);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var J=function(e){var t=e.min,a=e.max,r=e.value,n=e.avgValue,c=e.label,s=e.icon,o=a-t,l=Math.floor((r-t)/o*1e3)/10,u=Math.floor((n-t)/o*1e3)/10,p="".concat(r," ").concat(c),m=i.a.createElement("span",{className:Q.a.label},i.a.createElement("span",{className:L()(Q.a.power,Object(M.a)({},Q.a.max,r>=a))},r),i.a.createElement("span",{className:Q.a.slotName},c));return i.a.createElement("div",{className:Q.a.barWrapper},i.a.createElement("div",{className:Q.a.iconWrapper},s&&i.a.createElement("img",{className:Q.a.icon,src:"https://www.bungie.net".concat(s),alt:p})),i.a.createElement("div",{className:Q.a.barContainer},i.a.createElement("div",{className:Q.a.filledBar,style:{width:"".concat(l,"%")}},m),i.a.createElement("div",{className:Q.a.barLine,style:{left:"".concat(u,"%")}})))},K=function(e){var t,a,r=e.data,n={chest:"Chest Armor",classItem:{hunter:"Hunter Cloak",titan:"Titan Mark",warlock:"Warlock Bond"}[r.className],energy:"Energy Weapon",gloves:"Gauntlets",head:"Helmet",kinetic:"Kinetic Weapon",legs:"Leg Armor",power:"Power Weapon"},c=z.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(M.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(M.a)({},t,r.topItemBySlot?r.topItemBySlot[t].instanceData.primaryStat.value:r.overallPower))},{}),s=Math.min.apply(Math,Object(R.a)(Object.values(c))),o=Math.max(50*Math.floor(s/50)-50,0),l=Math.max.apply(Math,Object(R.a)(Object.values(c))),u=r.maxItemPower||50*Math.ceil(l/50),p=Math.floor(r.overallPower),m=u-o,b=Math.floor((p-o)/m*1e3)/10,h=(r.artifactData&&((t=r.artifactData.bonusPower)>0?"+".concat(t):0===t||"".concat(t)),r.artifactData?r.artifactData.bonusPower:0);return i.a.createElement("div",{className:L()(Q.a.characterDisplay,Q.a["class_".concat(r.className)]),style:{backgroundColor:function(e){var t=e.red,a=e.green,r=e.blue;return"rgb(".concat(t,",").concat(a,",").concat(r,")")}(r.character.emblemColor)}},i.a.createElement("div",{className:Q.a.header},i.a.createElement("img",{className:Q.a.emblemBackground,src:"https://www.bungie.net".concat(r.character.emblemBackgroundPath),alt:""}),i.a.createElement("div",{className:Q.a.name},(a=r.className).substr(0,1).toUpperCase()+a.substr(1)),i.a.createElement("div",{className:Q.a.power},p+h)),i.a.createElement("div",{className:Q.a.details},i.a.createElement("div",{className:Q.a.detailsRow},i.a.createElement("div",{className:Q.a.detailsLabel},"Max equippable power:"),i.a.createElement("div",{className:Q.a.defailsValue},p)),r.artifactData?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:Q.a.detailsRow},i.a.createElement("div",{className:Q.a.detailsLabel},i.a.createElement("img",{className:Q.a.detailsInlineIcon,src:"https://www.bungie.net".concat(r.artifactData.iconPath)}),r.artifactData.name," bonus power:"),i.a.createElement("div",{className:Q.a.detailsValue},r.artifactData.bonusPower)),i.a.createElement("div",{className:Q.a.detailsRow},i.a.createElement("div",{className:Q.a.detailsLabel},"Total combined power:"),i.a.createElement("div",{className:Q.a.detailsValue},p+h))):null),i.a.createElement("div",{className:Q.a.powerBars},i.a.createElement("div",{className:Q.a.powerRange},i.a.createElement("div",{className:Q.a.minPower},o),i.a.createElement("div",{className:Q.a.rangeLine}),i.a.createElement("div",{className:Q.a.maxPower},u)),i.a.createElement("div",{className:Q.a.bars},Object.entries(c).map(function(e){var t=Object(f.a)(e,2),a=t[0],c=t[1],s=r.topItemBySlot&&r.topItemBySlot[a];return i.a.createElement(J,{key:"".concat(r.id,"_").concat(a),min:o,max:u,value:c,avgValue:p,label:n[a]||a,icon:s&&s.itemDefinition&&s.itemDefinition.displayProperties.icon})})),i.a.createElement("div",{className:Q.a.powerLabel},i.a.createElement("div",{className:Q.a.indicator,style:{left:"".concat(b,"%")}},p+h))))},G=a(9),Z=a.n(G),Y=function(e){var t=e.status;return i.a.createElement("div",{className:Z.a.loadingSpinnerContainer},i.a.createElement("div",{className:Z.a.anchor},i.a.createElement("div",{className:Z.a.spinnerLarge}),i.a.createElement("div",{className:Z.a.spinnerSmall}),i.a.createElement("div",{className:Z.a.status},t)))},$=a(24),X=a.n($),ee=function(e){var t=e.onMembershipSelect,a=k();if(!a)return null;if(0===a.length)return i.a.createElement("div",null,"No destiny memberships!");var r={1:"xbox",2:"psn",3:"steam",4:"blizzard"};return i.a.createElement("div",{className:X.a.membershipSelect},a.map(function(e){return i.a.createElement("div",{key:e.membershipId,className:L()(X.a.membership,X.a["platform_".concat(r[e.membershipType])]),onClick:function(){return t(e)}},e.displayName)}))},te=a(62),ae=a.n(te),re=a(32),ne=a.n(re),ce=a(33),se=a.n(ce),ie=a(25),oe=a.n(ie),le=a(63),ue=a.n(le);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach(function(t){Object(M.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var fe,be=function(e){return se()(e,function(e){return e.instanceData.primaryStat.value})},he=function(e){return Object.values(e).reduce(function(e,t){return e+t},0)/Object.keys(B).length},de=function(e){return Object.values(e).reduce(function(e,t){return e.concat(t.items)},[])},ve=function(e,t){return!!e.instanceData.canEquip||(16===e.instanceData.cannotEquipReason||!(e.instanceData.equipRequiredLevel>t.baseCharacterLevel)&&(3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType))},ge=function(){var e=Object(m.a)(p.a.mark(function e(t){var a,r,n,c,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if((a=e.sent)&&a.Response&&a.Response.characters){e.next=5;break}return e.abrupt("return");case 5:if(!(r=a.Response.characters.data)){e.next=11;break}return n=function(e){var t=r[e];return{character:t,className:V[t.classType],id:e,overallPower:t.light}},c=Object.keys(r),s=c.map(function(e){return n(e)}),e.abrupt("return",s);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(m.a)(p.a.mark(function e(t,a){var r,n,c,s,i,o,l,u,f,b,h,g,y,_,j,E,S,D,x=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=x.length>2&&void 0!==x[2]&&x[2],e.prev=1,e.next=4,C();case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:if(n=w(),a(!0),c=N()){e.next=12;break}return e.abrupt("return");case 12:return i=!0,r&&(I=c.membershipType,k=c.membershipId,(s=Object(d.getProfile)(v,{components:[200,205],destinyMembershipId:k,membershipType:I})).catch(function(){}),o=ge(s).catch(function(e){}),Object(m.a)(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o;case 2:(a=e.sent)&&i&&t(a);case 4:case"end":return e.stop()}},e)}))()),e.next=16,O(c.membershipType,c.membershipId);case 16:if(l=e.sent,a(!1),l&&l.Response&&l.Response.characters&&l.Response.characters.data&&l.Response.characterEquipment&&l.Response.characterEquipment.data&&l.Response.characterInventories&&l.Response.characterInventories.data&&l.Response.profileInventory&&l.Response.profileInventory.data&&l.Response.itemComponents&&l.Response.itemComponents.instances&&l.Response.itemComponents.instances.data){e.next=20;break}return e.abrupt("return");case 20:return u=l.Response.characters.data,f=l.Response.characterEquipment.data,b=l.Response.characterInventories.data,h=l.Response.profileInventory.data,g=l.Response.itemComponents.instances.data,e.next=27,n;case 27:if(y=e.sent){e.next=30;break}return e.abrupt("return");case 30:_=de(b).concat(de(f)).concat(h.items),j=_.filter(function(e){var t=e.itemHash&&y.DestinyInventoryItemDefinition[e.itemHash];return t&&t.itemType===F}),E=function(e){var t=u[e],a=V[t.classType],r=function(e){return e.map(function(e){return me({},e,{instanceData:e.itemInstanceId?g[e.itemInstanceId]:void 0,itemDefinition:y.DestinyInventoryItemDefinition[e.itemHash]})}).filter(function(e){return e.instanceData&&e.itemDefinition&&[q,F].includes(e.itemDefinition.itemType)}).map(function(e){return me({},e,{instanceData:e.instanceData,itemDefinition:e.itemDefinition})}).map(function(e){return me({},e,{slotName:W[e.itemDefinition.inventory.bucketTypeHash]})}).filter(function(e){return ve(e,t)})},n=r(b[e].items.concat(f[e].items).concat(j)),c=r(h.items).filter(function(e){return 3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType}),s=n.concat(c),i=function(e){var t=e.instanceData.primaryStat.value;return e.instanceData.isEquipped&&(t+=.1),1===e.location&&(t+=.05),t},o=function(e){return e.itemDefinition.equippingBlock.uniqueLabel},l=ne()(s,function(e){return e.slotName}),p=se()(l,function(e){return oe()(e,i)}),m=ne()(Object.values(p).filter(o),o);ae()(m,function(e){if(!(e.length<=1)){var t=[];if(e.forEach(function(a){var r=e.filter(function(e){return e!==a}),n=!0,c=me({},p);r.forEach(function(e){var t=l[e.slotName].filter(function(e){return!o(e)});t.length>0?c[e.slotName]=oe()(t,i):n=!1}),n&&t.push(c)}),t.length>0){var a=oe()(t,function(e){return ue()(Object.values(e),i)});p=a}}});var d,v=be(p),_=he(v),w=Object.values(f).flatMap(function(e){return e.items}).find(function(e){return 1387688628===e.itemHash});!!w&&w.itemInstanceId;if(w&&w.itemInstanceId){var O=y.DestinyInventoryItemDefinition[w.itemHash];d={bonusPower:g[w.itemInstanceId].primaryStat.value,iconPath:O.displayProperties.icon,name:O.displayProperties.name}}return{artifactData:d,character:t,className:a,id:e,overallPower:_,topItemBySlot:p}},S=Object.keys(u),D=S.map(function(e){return E(e)}),i=!1,t(D),e.next=44;break;case 39:return e.prev=39,e.t0=e.catch(1),console.error("Error fetching manifest and character data",e.t0),a(!1),e.abrupt("return");case 44:case"end":return e.stop()}var I,k},e,null,[[1,39]])}));return function(t,a){return e.apply(this,arguments)}}(),_e=(a(165),a(13)),we=a.n(_e),Oe=function(){var e=Object(s.useState)(I()),t=Object(f.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(!1),c=Object(f.a)(n,2),o=c[0],l=c[1],u=Object(s.useState)(!!N()),b=Object(f.a)(u,2),h=b[0],d=b[1],v=Object(s.useState)(!1),g=Object(f.a)(v,2),y=g[0],_=g[1],O=Object(s.useState)(!1),j=Object(f.a)(O,2),E=j[0],S=j[1],D=Object(s.useState)(!1),x=Object(f.a)(D,2),k=x[0],R=x[1],M=Object(s.useState)(void 0),T=Object(f.a)(M,2),L=T[0],A=T[1];Object(s.useEffect)(function(){a||function(){var e=Object(m.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:e.sent?r(!0):l(!0);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()}),Object(s.useEffect)(function(){Object(m.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:_(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message),S(!0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}))()}),Object(s.useEffect)(function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return ye(A,R,e)};a&&h&&!k&&(fe||(fe=setInterval(e,1e4),e(!0)))},[a,h,y,k]);var B=function(e){P(e),d(!0)},W="";return o?W="Authentication error, refresh page to try again!":E?W="Error fetching manifest, refresh page to try again!":a?h?y?L&&0!==L.length||(W=k?"Fetching character data...":"No character data"):W="Fetching Destiny item manifest...":W="Waiting for Destiny platform selection...":W="Authenticating...",window.characterData=L,L&&L.length>0?i.a.createElement("div",{className:we.a.App},i.a.createElement(ee,{onMembershipSelect:B}),i.a.createElement("div",{className:we.a.charactersContainer},i.a.createElement("div",{className:we.a.characters},L.map(function(e){return i.a.createElement(K,{key:e.id,data:e})}))),W&&i.a.createElement(Y,{status:W})):i.a.createElement("div",{className:we.a.App},i.a.createElement(Y,{status:W}),i.a.createElement(ee,{onMembershipSelect:B}))};a(166),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){e.exports={membershipSelect:"MembershipSelect_membershipSelect__3GbZz",membership:"MembershipSelect_membership__3vKKK",platform_xbox:"MembershipSelect_platform_xbox__1EgLN",platform_psn:"MembershipSelect_platform_psn__2ASN8",platform_steam:"MembershipSelect_platform_steam__3zG5m",platform_blizzard:"MembershipSelect_platform_blizzard__1zLDb"}},64:function(e,t,a){e.exports=a(167)},9:function(e,t,a){e.exports={anchor:"LoadingSpinner_anchor__78Pnm",spinner:"LoadingSpinner_spinner__32tWn",spin:"LoadingSpinner_spin__3FVoi",loadingSpinnerContainer:"LoadingSpinner_loadingSpinnerContainer__2QV5S",spinnerLarge:"LoadingSpinner_spinnerLarge__KooL0",spinnerSmall:"LoadingSpinner_spinnerSmall__27lWl",status:"LoadingSpinner_status__3sgCR"}}},[[64,1,2]]]);
//# sourceMappingURL=main.18829fc0.chunk.js.map