import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{L as P}from"./link-CdhBFSX1.js";import{c as b}from"./index-B64kcLyW.js";import{I as u}from"./icon-B3uvnss4.js";import{B as V}from"./iframe-DG-dEiUR.js";import"./iconify-CFZmQpD_.js";import"./preload-helper-C1FmrZbK.js";const R="_tabBar_w5939_1",W="_tab_w5939_1",L="_active_w5939_59",A="_icon_w5939_68",l={tabBar:R,tab:W,active:L,icon:A};function q({items:n,selectedValue:w,onTabChange:i,fullWidth:C=!1,className:N,style:B}){return e.jsx("nav",{className:b(l.tabBar,{[l.fullWidth]:C},N),style:B,role:"tablist",children:n.map(a=>{const c=w===a.value,d=()=>{i==null||i(a.value)},m=e.jsxs(e.Fragment,{children:[a.icon&&e.jsx("span",{className:l.icon,children:a.icon}),e.jsx("span",{className:l.label,children:a.label})]}),p=b(l.tab,{[l.active]:c});return a.href?e.jsx(P,{href:a.href,onClick:d,className:p,role:"tab","aria-selected":c,noStyles:!0,children:m},a.value):e.jsx("button",{type:"button",onClick:d,className:p,role:"tab","aria-selected":c,children:m},a.value)})})}q.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  /**\r
   * The text label for the tab.\r
   */\r
  label: string;\r
  /**\r
   * Unique identifier for the tab.\r
   */\r
  value: string;\r
  /**\r
   * Icon to display alongside the label.\r
   */\r
  icon?: ReactNode;\r
  /**\r
   * Optional URL if the tab should act as a link.\r
   */\r
  href?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"The text label for the tab."},{key:"value",value:{name:"string",required:!0},description:"Unique identifier for the tab."},{key:"icon",value:{name:"ReactNode",required:!1},description:"Icon to display alongside the label."},{key:"href",value:{name:"string",required:!1},description:"Optional URL if the tab should act as a link."}]}}],raw:"TabBarItem[]"},description:"List of tab items to render."},selectedValue:{required:!1,tsType:{name:"string"},description:"The currently selected tab value."},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback function when a tab is clicked/selected."},fullWidth:{required:!1,tsType:{name:"boolean"},description:`✅ If true, tabs will expand to fill the available width equally.\r
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the container."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the container."}}};const z={title:"Navigation/TabBar",component:q,tags:["autodocs"],decorators:[n=>e.jsx(V,{children:e.jsx("div",{style:{padding:"2rem",backgroundColor:"var(--colors-surface-background)"},children:e.jsx(n,{})})})]},s={args:{selectedValue:"all",items:[{label:"All Items",value:"all"},{label:"Pending",value:"pending"},{label:"Completed",value:"completed"},{label:"Cancelled",value:"cancelled"}],onTabChange:n=>console.log("Selected Tab:",n)}},r={args:{selectedValue:"home",items:[{label:"Home",value:"home",icon:e.jsx(u,{icon:"mingcute:home-6-line"})},{label:"Messages",value:"messages",icon:e.jsx(u,{icon:"mingcute:message-3-line"})},{label:"Settings",value:"settings",icon:e.jsx(u,{icon:"mingcute:settings-3-line"})}]}},t={args:{selectedValue:"profile",items:[{label:"Profile",value:"profile",href:"/profile"},{label:"Orders",value:"orders",href:"/orders"},{label:"Payments",value:"payments",href:"/payments"}]}},o={args:{fullWidth:!0,selectedValue:"feed",items:[{label:"Feed",value:"feed"},{label:"Explore",value:"explore"},{label:"Personal",value:"personal"}]}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    selectedValue: 'all',
    items: [{
      label: 'All Items',
      value: 'all'
    }, {
      label: 'Pending',
      value: 'pending'
    }, {
      label: 'Completed',
      value: 'completed'
    }, {
      label: 'Cancelled',
      value: 'cancelled'
    }],
    onTabChange: val => console.log('Selected Tab:', val)
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,y,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    selectedValue: 'home',
    items: [{
      label: 'Home',
      value: 'home',
      icon: <Icon icon="mingcute:home-6-line" />
    }, {
      label: 'Messages',
      value: 'messages',
      icon: <Icon icon="mingcute:message-3-line" />
    }, {
      label: 'Settings',
      value: 'settings',
      icon: <Icon icon="mingcute:settings-3-line" />
    }]
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var k,_,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    selectedValue: 'profile',
    items: [{
      label: 'Profile',
      value: 'profile',
      href: '/profile'
    }, {
      label: 'Orders',
      value: 'orders',
      href: '/orders'
    }, {
      label: 'Payments',
      value: 'payments',
      href: '/payments'
    }]
  }
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var I,S,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    selectedValue: 'feed',
    items: [{
      label: 'Feed',
      value: 'feed'
    }, {
      label: 'Explore',
      value: 'explore'
    }, {
      label: 'Personal',
      value: 'personal'
    }]
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const G=["Default","WithIcons","AsLinks","FullWidth"];export{t as AsLinks,s as Default,o as FullWidth,r as WithIcons,G as __namedExportsOrder,z as default};
