(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,a){"use strict";a.r(t);a(49),a(22);var n=a(0),r=a.n(n),s=a(214),i=a(215),c=function(e){var t=e.siteTitle,a=e.description,n=e.headerImg,s=e.hideName,c=i.data.site.siteMetadata.homeName;return r.a.createElement("header",{style:{backgroundColor:"#86BD26",backgroundImage:"url("+n+")"},className:"site-header outer"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"site-header-content"},r.a.createElement("h1",{style:{margin:0},className:"site-title"},t),r.a.createElement("br",null),r.a.createElement("h2",{className:"site-description"},a),!s&&r.a.createElement("h2",null,c))))};c.defaultProps={siteTitle:"Sanaa’s stories",description:"Hi, I am Sanā!"};var o=c,l=a(197),m=function(e){var t=e.children,a=s.data.site;return r.a.createElement("div",{className:"home-template"},r.a.createElement("div",{className:"site-wrapper"},r.a.createElement(o,{siteTitle:a.siteMetadata.title,description:a.siteMetadata.description,headerImg:a.siteMetadata.headerImg}),r.a.createElement("main",{className:"site-main outer",id:"site-main"},t),r.a.createElement(l.a,{author:a.siteMetadata.author,name:a.siteMetadata.name,className:"site-footer outer"})))},d=a(201),u=a(194);a.d(t,"query",function(){return p}),a.d(t,"default",function(){return h}),a(216);var p="726691064";function h(e){var t=e.data.allMarkdownRemark.edges,a=e.data.allMarkdownRemark.nodes;for(var n in t)t[n]=Object.assign({},t[n],{},a[n]);var s=e.data.site.siteMetadata,i=s.author,c=s.name,o=s.photo;return r.a.createElement(m,null,r.a.createElement(d.a,{title:"Home"}),r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"post-feed"},t.map(function(e,a){var n=e.node.frontmatter,s=new Date(n.date).toDateString(),l=n.cover;return r.a.createElement("article",{className:"post-card",key:n.path},r.a.createElement(u.a,{to:n.path,className:"post-card-image-link"},r.a.createElement("div",{className:"post-card-image",style:{backgroundImage:'url("'+l+'")'}})),r.a.createElement("div",{className:"post-card-content"},r.a.createElement(u.a,{to:n.path,className:"post-card-content-link"},r.a.createElement("header",{className:"postCardHeader"},r.a.createElement("span",{className:"post-card-tags"},n.tags&&n.tags[0].length?n.tags[0]+" • ":""," ",s),r.a.createElement("h2",{className:"post-card-title"},n.title)),r.a.createElement("section",{className:"postCardExcerpt"},r.a.createElement("p",{className:"excerpt"},t[a].node.frontmatter.excerpt))),r.a.createElement("footer",{className:"post-card-meta"},r.a.createElement("ul",{className:"author-list"},r.a.createElement("li",{className:"author-list-item"},r.a.createElement("div",{className:"author-name-tooltip"},c),r.a.createElement("a",{href:"https://www.twitter.com/"+i,className:"static-avatar"},r.a.createElement("img",{src:o,className:"avatar-wrapper",alt:c})))),r.a.createElement("span",{className:"reading-time"},t[a].timeToRead," min read"))))}))))}},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(66),i=a.n(s);a.d(t,"a",function(){return i.a});a(195),a(9).default.enqueue,r.a.createContext({})},195:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},196:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),s=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null}},197:function(e,t,a){"use strict";a(22),a(49);var n=a(194),r=a(0),s=a.n(r),i=(a(198),function(e){var t=e.author,a=e.name,r=e.style;return s.a.createElement("footer",{className:"site-footer outer",style:Object.assign({},r)},s.a.createElement("div",{className:"site-footer-content inner"},s.a.createElement("section",{className:"copyright"},s.a.createElement("a",{href:"https://www.twitter.com/"+t},a)," ©"," ",(new Date).getFullYear()),s.a.createElement("nav",{className:"site-footer-nav"},s.a.createElement(n.a,{to:"/"},"Latest Posts"))))});i.defaultProps={name:"Sanā Habeeb",author:"@SanaHabeeb4"},t.a=i},201:function(e,t,a){"use strict";var n=a(202),r=a(0),s=a.n(r),i=a(203),c=a.n(i);function o(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,o=n.data.site,l=t||o.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Sana’s stories",description:"Hi,  I am Sanā!",author:"@SanaHabeeb4"}}}}},214:function(e){e.exports={data:{site:{siteMetadata:{author:"@SanaHabeeb4",description:"Hi,  I am Sanā!",headerImg:"https://images.unsplash.com/photo-1536633125620-8a3245c11ffa",name:"Sanā Habeeb",title:"Sana’s stories"}}}}},215:function(e){e.exports={data:{site:{siteMetadata:{homeName:"サナ"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-034314bad4299c15ed5a.js.map