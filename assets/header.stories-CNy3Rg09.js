import{j as e}from"./jsx-runtime-D7NN_m21.js";import{c as A}from"./index-DLipHefI.js";import{L as M}from"./logo-C0wrUB3E.js";import{L as R}from"./link-CgLy0FMO.js";import{I as x}from"./icon-button-Drrnnhrn.js";import{B as i}from"./button-BRYyhyxi.js";import{I as S}from"./icon-Db4SmMDS.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./iconify-CZpI7N4b.js";function _(a){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"M12 19l-7-7 7-7"})]})}_.__docgenInfo={description:"",methods:[],displayName:"ArrowLeftIcon"};const H="_header_10ste_1",V="_container_10ste_10",W="_website_10ste_20",z="_nav_10ste_31",K="_navLink_10ste_41",X="_actions_10ste_52",D="_app_10ste_59",F="_left_10ste_75",P="_center_10ste_79",U="_right_10ste_86",E="_appTitle_10ste_91",t={header:H,container:V,website:W,nav:z,navLink:K,actions:X,app:D,left:F,center:P,right:U,appTitle:E};function k({variant:a="website",title:o,navItems:j=[],action:L,onBack:l,rightContent:N,logoName:T="LOOKMIX",logoHref:I="/",customLogo:B,className:C,style:O}){const c=a==="website",p=a==="app";return e.jsx("header",{className:A(t.header,{[t.website]:c,[t.app]:p},C),style:O,children:e.jsxs("div",{className:t.container,children:[c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t.left,children:B||e.jsx(M,{name:T,href:I})}),e.jsx("nav",{className:t.nav,children:j.map((d,q)=>e.jsx(R,{href:d.href,className:t.navLink,children:d.label},q))}),e.jsx("div",{className:t.actions,children:L})]}),p&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t.left,children:l&&e.jsx(x,{onClick:l,icon:e.jsx(_,{}),variant:"ghost",size:"sm",shape:"circle","aria-label":"Go back"})}),e.jsx("div",{className:t.center,children:o&&e.jsx("h1",{className:t.appTitle,children:o})}),e.jsx("div",{className:t.right,children:N})]})]})})}k.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:"'website' | 'app'",elements:[{name:"literal",value:"'website'"},{name:"literal",value:"'app'"}]},description:`Defines the visual style and layout of the header.\r
'website' renders a standard navbar with logo and links.\r
'app' renders a mobile-style app bar with back button and title.\r
@default 'website'`,defaultValue:{value:"'website'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:`Title text to display in the center of the App header.\r
Only applicable when variant is 'app'.`},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  /**\r
   * The text label to display for the navigation item.\r
   */\r
  label: string;\r
\r
  /**\r
   * The URL the navigation item points to.\r
   */\r
  href: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"The text label to display for the navigation item."},{key:"href",value:{name:"string",required:!0},description:"The URL the navigation item points to."}]}}],raw:"HeaderNavItem[]"},description:`Navigation links to display in the Website header.\r
Only applicable when variant is 'website'.`,defaultValue:{value:"[]",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:`Main action button to display on the right side of the Website header.\r
@example <Button>Download</Button>`},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback function for the back button in the App header.\r
If provided, a back arrow icon will be rendered on the left.\r
Only applicable when variant is 'app'.`},rightContent:{required:!1,tsType:{name:"ReactNode"},description:`Additional content or icons to display on the right side of the App header.\r
Only applicable when variant is 'app'.`},logoName:{required:!1,tsType:{name:"string"},description:`Name of the brand to pass to the Logo component.\r
@default 'LOOKMIX'`,defaultValue:{value:"'LOOKMIX'",computed:!1}},logoHref:{required:!1,tsType:{name:"string"},description:`URL for the logo link.\r
@default '/'`,defaultValue:{value:"'/'",computed:!1}},customLogo:{required:!1,tsType:{name:"ReactNode"},description:"Custom logo element to override the default text logo."},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."}}};const ne={title:"Layout/Header",component:k,parameters:{layout:"fullscreen",router:!0},tags:["autodocs"]},r={args:{variant:"website",logoName:"LOOKMIX",navItems:[{label:"Shop",href:"/shop"},{label:"Collection",href:"/collection"},{label:"Trends",href:"/trends"},{label:"About",href:"/about"}],action:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{appearance:"tertiary",children:"Log in"}),e.jsx(i,{appearance:"primary",children:"Sign up"})]})}},n={args:{variant:"app",title:"Product Details",onBack:()=>alert("Back clicked"),rightContent:e.jsx(x,{icon:e.jsx(S,{icon:"mingcute:share-forward-line"}),variant:"ghost",size:"sm"})},parameters:{router:!0,viewport:{defaultViewport:"mobile1"}}},s={args:{variant:"app",title:"Filters",onBack:()=>alert("Close clicked"),rightContent:e.jsx(i,{appearance:"tertiary",size:"sm",children:"Reset"})}};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'website',
    logoName: 'LOOKMIX',
    navItems: [{
      label: 'Shop',
      href: '/shop'
    }, {
      label: 'Collection',
      href: '/collection'
    }, {
      label: 'Trends',
      href: '/trends'
    }, {
      label: 'About',
      href: '/about'
    }],
    action: <div style={{
      display: 'flex',
      gap: '8px'
    }}>\r
        <Button appearance="tertiary">Log in</Button>\r
        <Button appearance="primary">Sign up</Button>\r
      </div>
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'app',
    title: 'Product Details',
    onBack: () => alert('Back clicked'),
    rightContent: <IconButton icon={<Icon icon="mingcute:share-forward-line" />} variant="ghost" size="sm" />
  },
  parameters: {
    router: true,
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'app',
    title: 'Filters',
    onBack: () => alert('Close clicked'),
    // เราสามารถใช้ custom back icon เป็นกากบาทได้ถ้าต้องการ
    rightContent: <Button appearance="tertiary" size="sm">Reset</Button>
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const se=["Website","MobileApp","ModalHeader"];export{n as MobileApp,s as ModalHeader,r as Website,se as __namedExportsOrder,ne as default};
