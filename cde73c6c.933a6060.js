(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1006:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(r),s=a,j=p["".concat(b,".").concat(s)]||p[s]||O[s]||l;return r?n.a.createElement(j,c(c({ref:t},i),{},{components:r})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,b=new Array(l);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=r[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},819:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(7),l=(r(0),r(1006)),b={id:"refreshcontrol",title:"RefreshControl"},c={unversionedId:"refreshcontrol",id:"version-0.61/refreshcontrol",isDocsHomePage:!1,title:"RefreshControl",description:"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.",source:"@site/versioned_docs/version-0.61/refreshcontrol.md",slug:"/refreshcontrol",permalink:"/docs/0.61/refreshcontrol",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/refreshcontrol.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"\ud83d\udea7 ProgressViewIOS",permalink:"/docs/0.61/progressviewios"},next:{title:"SafeAreaView",permalink:"/docs/0.61/safeareaview"}},o=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>refreshing</code>",id:"refreshing",children:[]},{value:"<code>onRefresh</code>",id:"onrefresh",children:[]},{value:"<code>colors</code>",id:"colors",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>progressBackgroundColor</code>",id:"progressbackgroundcolor",children:[]},{value:"<code>progressViewOffset</code>",id:"progressviewoffset",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>tintColor</code>",id:"tintcolor",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleColor</code>",id:"titlecolor",children:[]}]}],i={rightToc:o};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at ",Object(l.b)("inlineCode",{parentName:"p"},"scrollY: 0"),", swiping down triggers an ",Object(l.b)("inlineCode",{parentName:"p"},"onRefresh")," event."),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20ScrollView%2C%0A%20%20RefreshControl%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20SafeAreaView%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20Constants%20from%20'expo-constants'%3B%0A%0Afunction%20wait(timeout)%20%7B%0A%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(resolve%2C%20timeout)%3B%0A%20%20%7D)%3B%0A%7D%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%2C%20%5Brefreshing%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%0A%20%20%20%20%20%20%20%20refreshControl%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%20refreshing%3D%7Brefreshing%7D%20onRefresh%3D%7BonRefresh%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20marginTop%3A%20Constants.statusBarHeight%2C%0A%20%20%7D%2C%0A%20%20scrollView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'pink'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," ",Object(l.b)("inlineCode",{parentName:"p"},"refreshing")," is a controlled prop, this is why it needs to be set to true in the ",Object(l.b)("inlineCode",{parentName:"p"},"onRefresh")," function otherwise the refresh indicator will stop immediately."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),Object(l.b)("h3",{id:"refreshing"},Object(l.b)("inlineCode",{parentName:"h3"},"refreshing")),Object(l.b)("p",null,"Whether the view should be indicating an active refresh."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onrefresh"},Object(l.b)("inlineCode",{parentName:"h3"},"onRefresh")),Object(l.b)("p",null,"Called when the view starts refreshing."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"colors"},Object(l.b)("inlineCode",{parentName:"h3"},"colors")),Object(l.b)("p",null,"The colors (at least one) that will be used to draw the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array of ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"enabled"},Object(l.b)("inlineCode",{parentName:"h3"},"enabled")),Object(l.b)("p",null,"Whether the pull to refresh functionality is enabled."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progressbackgroundcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"progressBackgroundColor")),Object(l.b)("p",null,"The background color of the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progressviewoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"progressViewOffset")),Object(l.b)("p",null,"Progress view top offset"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"size"},Object(l.b)("inlineCode",{parentName:"h3"},"size")),Object(l.b)("p",null,"Size of the refresh indicator, see RefreshControl.SIZE."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"tintcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"tintColor")),Object(l.b)("p",null,"The color of the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"title"},Object(l.b)("inlineCode",{parentName:"h3"},"title")),Object(l.b)("p",null,"The title displayed under the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"titlecolor"},Object(l.b)("inlineCode",{parentName:"h3"},"titleColor")),Object(l.b)("p",null,"Title color."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))))}d.isMDXComponent=!0}}]);