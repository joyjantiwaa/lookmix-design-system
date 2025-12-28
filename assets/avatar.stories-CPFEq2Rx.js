import{j as e}from"./jsx-runtime-D7NN_m21.js";import{A as s}from"./avatar-Bj2FDOQa.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./index-DLipHefI.js";const E={title:"Data Display/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"ขนาดของ Avatar (รองรับทั้ง sm, md, lg หรือตัวเลข px)"},shape:{control:"radio",options:["circle","square"],description:"รูปทรงของ Avatar"},src:{control:"text"},name:{control:"text"}}},a={args:{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",alt:"User profile",size:"md",shape:"circle"}},o={args:{name:"John Doe",size:"md",shape:"circle"}},t={args:{size:"md",shape:"circle"}},c={args:{name:"Lookmix Design",shape:"square",size:"lg"}},i={args:{name:"Admin",size:100,shape:"circle"}},n={render:r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(s,{...r,size:"sm"}),e.jsx(s,{...r,size:"md"}),e.jsx(s,{...r,size:"lg"}),e.jsx(s,{...r,size:80})]}),args:{name:"Size Test"}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    alt: 'User profile',
    size: 'md',
    shape: 'circle'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,g,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'md',
    shape: 'circle'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,z,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'md',
    shape: 'circle'
  }
}`,...(x=(z=t.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var f,S,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'Lookmix Design',
    shape: 'square',
    size: 'lg'
  }
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var v,j,q;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'Admin',
    size: 100,
    // ใส่ตัวเลขได้ตามที่พี่เขียนโค้ดรองรับไว้
    shape: 'circle'
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var y,D,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>\r
      <Avatar {...args} size="sm" />\r
      <Avatar {...args} size="md" />\r
      <Avatar {...args} size="lg" />\r
      <Avatar {...args} size={80} />\r
    </div>,
  args: {
    name: 'Size Test'
  }
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const J=["WithImage","WithName","Placeholder","Square","CustomSize","AllSizes"];export{n as AllSizes,i as CustomSize,t as Placeholder,c as Square,a as WithImage,o as WithName,J as __namedExportsOrder,E as default};
