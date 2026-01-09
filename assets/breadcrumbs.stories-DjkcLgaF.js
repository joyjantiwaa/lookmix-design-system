import{j as e}from"./jsx-runtime-DGop6S_Y.js";import{L as j}from"./link-CexCEl2p.js";import{I as x}from"./icon-B1d87mFR.js";import"./index-C3JiJ1qr.js";import"./index-DdzbqoOO.js";import"./chunk-EPOLDU6W-CUVKY8ij.js";import"./iconify-BsDr7Yem.js";const S="_list_onyrb_1",N="_item_onyrb_11",k="_link_onyrb_18",L="_current_onyrb_27",C="_separator_onyrb_32",r={list:S,item:N,link:k,current:L,separator:C};function _({items:l,className:y}){return e.jsx("nav",{"aria-label":"Breadcrumb",className:y,children:e.jsx("ol",{className:r.list,children:l.map((a,o)=>{const i=o===l.length-1;return e.jsxs("li",{className:r.item,children:[!i&&a.href?e.jsx(j,{href:a.href,className:r.link,children:a.label}):e.jsx("span",{className:r.current,"aria-current":"page",children:a.label}),!i&&e.jsx(x,{icon:"mingcute:right-line",size:14,className:r.separator})]},o)})})})}_.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  href?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Navigation/Breadcrumbs",component:_,parameters:{layout:"centered",router:!0}},s={args:{items:[{label:"หน้าแรก",href:"/"},{label:"สินค้าทั้งหมด",href:"/products"},{label:"เสื้อผ้าผู้ชาย"}]}},t={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/cat"},{label:"Sub Category",href:"/sub"},{label:"Product List",href:"/list"},{label:"Current Item"}]}},n={args:{items:[{label:"Dashboard",href:"/dashboard"},{label:"Settings"}]}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'หน้าแรก',
      href: '/'
    }, {
      label: 'สินค้าทั้งหมด',
      href: '/products'
    }, {
      label: 'เสื้อผ้าผู้ชาย'
    } // ตัวสุดท้ายไม่ต้องใส่ href เพราะเป็นหน้าปัจจุบัน
    ]
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Category',
      href: '/cat'
    }, {
      label: 'Sub Category',
      href: '/sub'
    }, {
      label: 'Product List',
      href: '/list'
    }, {
      label: 'Current Item'
    }]
  }
}`,...(d=(b=t.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/dashboard'
    }, {
      label: 'Settings'
    }]
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Default","LongPath","Simple"];export{s as Default,t as LongPath,n as Simple,H as __namedExportsOrder,E as default};
