(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4M6O":function(e,t,a){"use strict";a("rE2o"),a("ioFf"),a("RW0V"),a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("T39b");var n=a("TqRt");t.__esModule=!0,t.insertScript=function(e,t,a){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,a.appendChild(n),n},t.removeScript=function(e,t){var a=window.document.getElementById(e);a&&t.removeChild(a)},t.debounce=function(e,t,a){var n;return function(){var r=this,s=arguments,o=function(){n=null,a||e.apply(r,s)},i=a&&!n;window.clearTimeout(n),n=setTimeout(o,t),i&&e.apply(r,s)}},t.isReactElement=s,t.shallowComparison=function(e,t){var a=new Set(Object.keys(e),Object.keys(t)),n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var o;if(n){if(r>=a.length)break;o=a[r++]}else{if((r=a.next()).done)break;o=r.value}var i=o;if(e[i]!==t[i]&&!s(e[i]))return!0}return!1};var r=n(a("q1tI"));function s(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return r.default.isValidElement(e)}))}},"5m6F":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"homeName":"サナ","siteUrl":"https://sana137.in"}}}}')},ORnI:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("VUT9"));t.Disqus=r.default;var s=n(a("qASQ"));t.CommentCount=s.default;var o=r.default;t.default=o},VUT9:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),s=n(a("8OQS")),o=n(a("VbXa")),i=n(a("q1tI")),l=n(a("17x9")),c=a("4M6O"),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="sana137",t.config?a.config=t.config:a.config={identifier:t.identifier,url:t.url,title:t.title},a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,c.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},a.cleanInstance=function(){(0,c.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},a.render=function(){var e=this.props,t=(e.config,(0,s.default)(e,["config"]));return i.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(i.default.Component);t.default=m,m.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),identifier:l.default.string,title:l.default.string,url:l.default.string}},VaxT:function(e,t,a){"use strict";var n=a("5m6F"),r=a("q1tI"),s=a.n(r),o=a("Wbzz");t.a=function(){var e=n.data.site.siteMetadata,t=e.homeName,a=e.siteUrl;return s.a.createElement("header",{className:"site-header outer"},s.a.createElement("div",{className:"inner"},s.a.createElement("nav",{className:"site-nav"},s.a.createElement("div",{className:"site-nav-left"},s.a.createElement(o.Link,{to:"/",className:"site-nav-logo"},t),s.a.createElement("ul",{className:"nav",role:"menu"},s.a.createElement("li",{className:"nav-weblog",role:"menuitem"},s.a.createElement(o.Link,{to:"/tags",style:{textTransform:"upper"}},"#tags")))),s.a.createElement("div",{className:"site-nav-right"},s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{className:"rss-button",href:"https://feedly.com/i/subscription/feed/"+a+"/rss.xml",rel:"noopener noreferrer",target:"_blank",title:"RSS"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},s.a.createElement("circle",{cx:"6.18",cy:"17.82",r:"2.18"}),s.a.createElement("path",{d:"M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"}))))))))}},qASQ:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),s=n(a("8OQS")),o=n(a("VbXa")),i=n(a("q1tI")),l=n(a("17x9")),c=a("4M6O"),m=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="sana137",a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){window.document.getElementById("dsq-count-scr")?m():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},a.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},a.render=function(){var e=this.props,t=e.config,a=e.placeholder,n=(0,s.default)(e,["config","placeholder"]);return i.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},n,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),a)},t}(i.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},yihx:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("rE2o"),a("ioFf"),a("rGqo"),a("f3/d");var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),o=a("W/9C"),i=a("VaxT"),l=a("wd/R"),c=a.n(l),m=a("ORnI");a("vg9a");function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u="2196781737";t.default=function(e){for(var t=e.data,a=e.pageContext,n=a.author,l=a.cover,u=a.date,h=a.description,v=a.name,E=a.next,g=a.photo,w=a.prev,N=d(a.tags),y=[];N.length>1;){var b=N.shift().toLowerCase();y.push(r.a.createElement(s.Link,{to:"/tags/"+b,style:{textTransform:"capitalize"},key:b},b)),y.push(" • ")}var S=N.shift().toLowerCase();y.push(r.a.createElement(s.Link,{to:"/tags/"+S,style:{textTransform:"capitalize"},key:S},S));var k=t.markdownRemark.frontmatter,I=k.path,q=k.title,x=t.site.siteMetadata.siteUrl,T=t.markdownRemark.html,_={url:x+" + "+I,identifier:I,title:q};return r.a.createElement("div",{className:"post-template"},r.a.createElement("div",{className:"site-wrapper"},r.a.createElement(i.a,null),r.a.createElement("main",{id:"site-main",className:"site-main outer"},r.a.createElement("div",{className:"inner"},r.a.createElement("article",{className:"post-full post"},r.a.createElement("header",{className:"post-full-header"},r.a.createElement("section",{className:"post-full-meta"},r.a.createElement("time",{className:"post-full-meta-date",dateTime:u},new Date(u).toDateString())),r.a.createElement("h1",{className:"post-full-title"},q),r.a.createElement("span",null,y)),l&&r.a.createElement("figure",{className:"post-full-image",style:{backgroundImage:"url("+l+")"}}),r.a.createElement("section",{className:"post-full-content"},r.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:T}})),r.a.createElement("footer",{className:"post-full-footer"},r.a.createElement("section",{className:"author-card"},r.a.createElement("a",{href:"https://www.twitter.com/"+n,className:"author-profile-image"},r.a.createElement("img",{src:g,className:"avatar-wrapper",alt:v})),r.a.createElement(p,{name:v,description:h})),r.a.createElement(f,null)),r.a.createElement("section",{className:"post-full-comments"},r.a.createElement(m.Disqus,{config:_}))))),r.a.createElement("aside",{className:"read-next outer"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"read-next-feed"},E&&r.a.createElement("article",{className:"post-card post"},r.a.createElement(s.Link,{className:"post-card-image-link",to:E.frontmatter.path},r.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+E.frontmatter.cover+")"}})),r.a.createElement("div",{className:"post-card-content"},r.a.createElement(s.Link,{className:"post-card-content-link",to:E.frontmatter.path},r.a.createElement("header",{className:"post-card-header"},r.a.createElement("span",{className:"post-card-tags"},E.frontmatter.tags?E.frontmatter.tags[0]+" • ":"",c()(E.frontmatter.date).fromNow()),r.a.createElement("h2",{className:"post-card-title"},E.frontmatter.title)),r.a.createElement("section",{className:"post-card-excerpt"},r.a.createElement("p",null,E.frontmatter.excerpt))))),w&&r.a.createElement("article",{className:"post-card post"},r.a.createElement(s.Link,{className:"post-card-image-link",to:w.frontmatter.path},r.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+w.frontmatter.cover+")"}})),r.a.createElement("div",{className:"post-card-content"},r.a.createElement(s.Link,{className:"post-card-content-link",to:w.frontmatter.path},r.a.createElement("header",{className:"post-card-header"},r.a.createElement("span",{className:"post-card-tags"},w.frontmatter.tags?w.frontmatter.tags[0]+" • ":"",c()(w.frontmatter.date).fromNow()),r.a.createElement("h2",{className:"post-card-title"},w.frontmatter.title)),r.a.createElement("section",{className:"post-card-excerpt"},r.a.createElement("p",null,w.frontmatter.excerpt)))))))),r.a.createElement(o.a,null)))};var f=function(){return r.a.createElement("div",{className:"post-full-footer-right"},r.a.createElement(s.Link,{to:"/",className:"author-card-button"},"Read More"))},p=function(e){var t=e.name,a=e.description;return r.a.createElement("section",{className:"author-card-content"},r.a.createElement("h4",{className:"author-card-name"},t),r.a.createElement("p",null,a))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-97f1321a7ee2770e0c12.js.map