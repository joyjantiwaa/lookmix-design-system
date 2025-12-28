import{j as r}from"./jsx-runtime-D7NN_m21.js";import{B as a}from"./badge-CLcTSNpG.js";import{A as O}from"./avatar-Bj2FDOQa.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./index-DLipHefI.js";const P={title:"Data Display/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning"]},size:{control:"radio",options:["sm","md"]},content:{control:"text"},isDot:{control:"boolean"},max:{control:"number"}}},e={args:{content:"New",variant:"primary"}},s={args:{content:120,max:99,variant:"danger"}},t={render:()=>r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx(a,{content:"Primary",variant:"primary"}),r.jsx(a,{content:"Secondary",variant:"secondary"}),r.jsx(a,{content:"Success",variant:"success"}),r.jsx(a,{content:"Danger",variant:"danger"}),r.jsx(a,{content:"Warning",variant:"warning"})]})},n={args:{isDot:!0,variant:"success"}},o={render:i=>r.jsx(a,{...i,children:r.jsx(O,{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",size:"lg"})}),args:{content:5,variant:"danger",size:"md"}},c={render:i=>r.jsx(a,{...i,children:r.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:"#ddd",borderRadius:"8px"}})}),args:{isDot:!0,variant:"success",size:"sm"}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: 'New',
    variant: 'primary'
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,l;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 120,
    max: 99,
    variant: 'danger'
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var v,x,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px'
  }}>\r
      <Badge content="Primary" variant="primary" />\r
      <Badge content="Secondary" variant="secondary" />\r
      <Badge content="Success" variant="success" />\r
      <Badge content="Danger" variant="danger" />\r
      <Badge content="Warning" variant="warning" />\r
    </div>
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,f,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDot: true,
    variant: 'success'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,j,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Badge {...args}>\r
      {/* ใช้ Avatar ที่เราเพิ่งทำไปมาโชว์คู่กัน */}\r
      <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" size="lg" />\r
    </Badge>,
  args: {
    content: 5,
    variant: 'danger',
    size: 'md'
  }
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var w,A,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Badge {...args}>\r
      <div style={{
      width: '48px',
      height: '48px',
      backgroundColor: '#ddd',
      borderRadius: '8px'
    }} />\r
    </Badge>,
  args: {
    isDot: true,
    variant: 'success',
    size: 'sm'
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const V=["Default","NotificationCount","AllVariants","StatusDot","OverlapOnAvatar","OnlineStatus"];export{t as AllVariants,e as Default,s as NotificationCount,c as OnlineStatus,o as OverlapOnAvatar,n as StatusDot,V as __namedExportsOrder,P as default};
