"use strict";(self.webpackChunktunaphish_github_io=self.webpackChunktunaphish_github_io||[]).push([[678],{8678:function(e,t,l){var n=l(7294),a=l(1883);t.Z=e=>{let{location:t,title:l,children:r}=e;const i="/"===t.pathname;let o;return o=i?n.createElement("h1",{className:"main-heading"},n.createElement(a.Link,{to:"/"},l)):n.createElement(a.Link,{className:"header-link-home",to:"/"},l),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},o),n.createElement("main",null,r),n.createElement("footer",null,"© ",(new Date).getFullYear()))}},9357:function(e,t,l){var n=l(7294),a=l(1883);t.Z=e=>{var t;let{description:l,title:r,children:i}=e;const{site:o}=(0,a.useStaticQuery)("3000541721"),c=l||o.siteMetadata.description,s=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,s?r+" | "+s:r),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:r}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),i)}},6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return o}});var n=l(7294),a=l(1883),r=l(8678),i=l(9357);t.default=e=>{var t;let{data:l,location:i}=e;const o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=l.allMarkdownRemark.nodes;return 0===c.length?n.createElement(r.Z,{location:i,title:o},n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(r.Z,{location:i,title:o},n.createElement("ol",{style:{listStyle:"none"}},c.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const o=()=>n.createElement(i.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-7b80d953846b57ac5588.js.map