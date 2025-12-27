import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{c as G}from"./index-B64kcLyW.js";import{I as P}from"./image-BX8cwRsH.js";import{H as E}from"./heading-4hneTzQK.js";import{B as d}from"./button-dP6pKN74.js";import{B as c}from"./badge-hGNvQ4Xu.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";import"./link-CdhBFSX1.js";const L="_card_d4g5h_1",M="_interactive_d4g5h_14",U="_glass_d4g5h_26",z="_imageWrapper_d4g5h_34",V="_header_d4g5h_47",H="_content_d4g5h_54",O="_title_d4g5h_63",J="_footer_d4g5h_68",K="_compact_d4g5h_75",a={card:L,interactive:M,glass:U,imageWrapper:z,header:V,content:H,title:O,footer:J,compact:K};function T({children:n,title:l,header:m,footer:p,image:u,imageAlt:R,variant:W="default",interactive:h=!1,className:I,onClick:A,style:D,...F}){return e.jsxs("div",{className:G(a.card,a[W],h&&a.interactive,I),onClick:h?A:void 0,style:D,...F,children:[u&&e.jsx("div",{className:a.imageWrapper,children:e.jsx(P,{src:u,alt:R||"",width:"100%"})}),m&&e.jsx("div",{className:a.header,children:m}),e.jsxs("div",{className:a.content,children:[l&&e.jsx(E,{level:"h4",className:a.title,children:l}),n]}),p&&e.jsx("div",{className:a.footer,children:p})]})}T.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Main content of the card."},title:{required:!1,tsType:{name:"string"},description:"Optional title displayed at the top of the content area."},header:{required:!1,tsType:{name:"ReactNode"},description:"Content to render in the header section."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Content to render in the footer section."},image:{required:!1,tsType:{name:"string"},description:"URL of the image to display at the top of the card."},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the image."},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'glass' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'compact'"}]},description:`Visual style variant of the card.\r
'default': Clean, white, elevated card.\r
'glass': Frosted glass effect with border.\r
'compact': Smaller padding and radius for grid items.\r
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:`Enables interactive states (hover, active) and pointer cursor.\r
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the root element."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the card."}}};const se={title:"Data Display/Card",component:T,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","glass","compact"]},interactive:{control:"boolean"},onClick:{action:"clicked"}},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px",margin:"0 auto"},children:e.jsx(n,{})})]},t={args:{title:"Minimal Design",children:"นี่คือตัวอย่างการใช้งาน Card พื้นฐานที่มาพร้อมกับ Shadow และ Border Radius ที่พี่ตั้งค่าไว้ใน tokens",variant:"default"}},r={args:{image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999",imageAlt:"Product Image",title:"Premium Watch",children:"สัมผัสประสบการณ์ใหม่กับนาฬิกาดีไซน์หรูหราที่ตอบโจทย์ทุกไลฟ์สไตล์ของคุณ",footer:e.jsx(d,{fullWidth:!0,children:"Add to Cart"}),interactive:!0}},s={parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"}]}},args:{variant:"glass",title:"Glassmorphism",children:"ตัวแปรแบบ glass จะใช้ backdrop-filter blur เพื่อสร้างเอฟเฟกต์กระจกฝ้าที่ทันสมัย",footer:e.jsx(c,{variant:"success",content:"Active Now"})}},o={args:{variant:"compact",header:e.jsx(c,{content:"Featured"}),title:"Compact Card",children:"เหมาะสำหรับใช้ใน Grid หรือรายการที่ต้องการประหยัดพื้นที่",footer:e.jsx("small",{children:"Updated 2 mins ago"})}},i={args:{interactive:!0,header:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{children:"Category"}),e.jsx(c,{isDot:!0,variant:"success"})]}),image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",title:"Learning Storybook",children:"การทำ UI Library จะง่ายขึ้นมากเมื่อเรามีระบบ Card ที่ดีแบบนี้ครับพี่",footer:e.jsxs("div",{style:{display:"flex",gap:"8px",width:"100%"},children:[e.jsx(d,{appearance:"secondary",size:"sm",children:"Share"}),e.jsx(d,{appearance:"primary",size:"sm",children:"Read More"})]})}};var f,g,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Minimal Design',
    children: 'นี่คือตัวอย่างการใช้งาน Card พื้นฐานที่มาพร้อมกับ Shadow และ Border Radius ที่พี่ตั้งค่าไว้ใน tokens',
    variant: 'default'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999',
    imageAlt: 'Product Image',
    title: 'Premium Watch',
    children: 'สัมผัสประสบการณ์ใหม่กับนาฬิกาดีไซน์หรูหราที่ตอบโจทย์ทุกไลฟ์สไตล์ของคุณ',
    footer: <Button fullWidth>Add to Cart</Button>,
    interactive: true
  }
}`,...(_=(x=r.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var C,j,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    // ใส่พื้นหลังสีๆ เพื่อให้เห็นเอฟเฟกต์ Glass Blur ชัดขึ้น
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: '#1a1a1a'
      }]
    }
  },
  args: {
    variant: 'glass',
    title: 'Glassmorphism',
    children: 'ตัวแปรแบบ glass จะใช้ backdrop-filter blur เพื่อสร้างเอฟเฟกต์กระจกฝ้าที่ทันสมัย',
    footer: <Badge variant="success" content="Active Now" />
  }
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,k,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    header: <Badge content="Featured" />,
    title: 'Compact Card',
    children: 'เหมาะสำหรับใช้ใน Grid หรือรายการที่ต้องการประหยัดพื้นที่',
    footer: <small>Updated 2 mins ago</small>
  }
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,q,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    interactive: true,
    header: <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }}>\r
        <span>Category</span>\r
        <Badge isDot variant="success" />\r
      </div>,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
    title: 'Learning Storybook',
    children: 'การทำ UI Library จะง่ายขึ้นมากเมื่อเรามีระบบ Card ที่ดีแบบนี้ครับพี่',
    footer: <div style={{
      display: 'flex',
      gap: '8px',
      width: '100%'
    }}>\r
        <Button appearance="secondary" size="sm">Share</Button>\r
        <Button appearance="primary" size="sm">Read More</Button>\r
      </div>
  }
}`,...(N=(q=i.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const oe=["Default","WithImage","GlassEffect","Compact","FullFeatured"];export{o as Compact,t as Default,i as FullFeatured,s as GlassEffect,r as WithImage,oe as __namedExportsOrder,se as default};
