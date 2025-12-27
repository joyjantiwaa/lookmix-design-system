import{j as r}from"./jsx-runtime-Clm7cEE4.js";import{B as a}from"./button-dP6pKN74.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";import"./index-B64kcLyW.js";import"./link-CdhBFSX1.js";const G={title:"Forms/Button",component:a,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["primary","secondary","tertiary","danger"]},size:{control:"select",options:["sm","md","lg"]},onClick:{action:"clicked"}}},s={render:e=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(a,{...e,appearance:"primary",children:"Primary"}),r.jsx(a,{...e,appearance:"secondary",children:"Secondary"}),r.jsx(a,{...e,appearance:"tertiary",children:"Tertiary"}),r.jsx(a,{...e,appearance:"danger",children:"Danger"})]})},t={render:e=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(a,{...e,size:"sm",children:"Small"}),r.jsx(a,{...e,size:"md",children:"Medium"}),r.jsx(a,{...e,size:"lg",children:"Large"})]})},n={args:{children:"Processing",loading:!0,appearance:"primary"}},o={args:{children:"Go to Google",href:"https://google.com",external:!0,appearance:"secondary"}},c={args:{children:"Checkout Now",fullWidth:!0,appearance:"primary"},decorators:[e=>r.jsx("div",{style:{width:"400px"},children:r.jsx(e,{})})]};var p,i,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} appearance="primary">Primary</Button>\r
      <Button {...args} appearance="secondary">Secondary</Button>\r
      <Button {...args} appearance="tertiary">Tertiary</Button>\r
      <Button {...args} appearance="danger">Danger</Button>\r
    </div>
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>\r
      <Button {...args} size="sm">Small</Button>\r
      <Button {...args} size="md">Medium</Button>\r
      <Button {...args} size="lg">Large</Button>\r
    </div>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Processing',
    loading: true,
    appearance: 'primary'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,B,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Go to Google',
    href: 'https://google.com',
    external: true,
    appearance: 'secondary'
  }
}`,...(f=(B=o.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var j,S,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Checkout Now',
    fullWidth: true,
    appearance: 'primary'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}><Story /></div>]
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const P=["AllAppearances","AllSizes","Loading","AsLink","FullWidth"];export{s as AllAppearances,t as AllSizes,o as AsLink,c as FullWidth,n as Loading,P as __namedExportsOrder,G as default};
