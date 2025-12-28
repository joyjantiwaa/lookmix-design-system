import{j as e}from"./jsx-runtime-D7NN_m21.js";import{B as a}from"./button-BRYyhyxi.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./index-DLipHefI.js";import"./link-CgLy0FMO.js";const G={title:"Forms/Button",component:a,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["primary","secondary","tertiary","danger","outline"]},size:{control:"select",options:["sm","md","lg"]},onClick:{action:"clicked"}}},t={render:r=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{...r,appearance:"primary",children:"Primary"}),e.jsx(a,{...r,appearance:"secondary",children:"Secondary"}),e.jsx(a,{...r,appearance:"tertiary",children:"Tertiary"}),e.jsx(a,{...r,appearance:"danger",children:"Danger"}),e.jsx(a,{...r,appearance:"outline",children:"outline"})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(a,{...r,size:"sm",children:"Small"}),e.jsx(a,{...r,size:"md",children:"Medium"}),e.jsx(a,{...r,size:"lg",children:"Large"})]})},s={args:{children:"Processing",loading:!0,appearance:"primary"}},o={args:{children:"Go to Google",href:"https://google.com",external:!0,appearance:"secondary"}},c={args:{children:"Checkout Now",fullWidth:!0,appearance:"primary"},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]};var i,p,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} appearance="primary">Primary</Button>\r
      <Button {...args} appearance="secondary">Secondary</Button>\r
      <Button {...args} appearance="tertiary">Tertiary</Button>\r
      <Button {...args} appearance="danger">Danger</Button>\r
      <Button {...args} appearance="outline">outline</Button>\r
    </div>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>\r
      <Button {...args} size="sm">Small</Button>\r
      <Button {...args} size="md">Medium</Button>\r
      <Button {...args} size="lg">Large</Button>\r
    </div>
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Processing',
    loading: true,
    appearance: 'primary'
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,B,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Go to Google',
    href: 'https://google.com',
    external: true,
    appearance: 'secondary'
  }
}`,...(j=(B=o.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var f,S,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Checkout Now',
    fullWidth: true,
    appearance: 'primary'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}><Story /></div>]
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const P=["AllAppearances","AllSizes","Loading","AsLink","FullWidth"];export{t as AllAppearances,n as AllSizes,o as AsLink,c as FullWidth,s as Loading,P as __namedExportsOrder,G as default};
