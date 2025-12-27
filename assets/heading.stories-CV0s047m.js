import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{H as r}from"./heading-4hneTzQK.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";import"./index-B64kcLyW.js";const j={title:"Typography/Heading",component:r,tags:["autodocs"],argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},visualLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},inverseColor:{control:"boolean"}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{level:"h1",children:"Heading Level 1"}),e.jsx(r,{level:"h2",children:"Heading Level 2"}),e.jsx(r,{level:"h3",children:"Heading Level 3"}),e.jsx(r,{level:"h4",children:"Heading Level 4"}),e.jsx(r,{level:"h5",children:"Heading Level 5"}),e.jsx(r,{level:"h6",children:"Heading Level 6"})]})},n={args:{level:"h1",visualLevel:"h3",children:"Semantic H1, but looks like H3"}},a={args:{level:"h2",inverseColor:!0,children:"Inverse Heading"},decorators:[H=>e.jsx("div",{style:{padding:"2rem",backgroundColor:"#333"},children:e.jsx(H,{})})]};var i,s,o;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Heading level="h1">Heading Level 1</Heading>\r
      <Heading level="h2">Heading Level 2</Heading>\r
      <Heading level="h3">Heading Level 3</Heading>\r
      <Heading level="h4">Heading Level 4</Heading>\r
      <Heading level="h5">Heading Level 5</Heading>\r
      <Heading level="h6">Heading Level 6</Heading>\r
    </div>
}`,...(o=(s=l.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,t,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    level: 'h1',
    visualLevel: 'h3',
    children: 'Semantic H1, but looks like H3'
  }
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var v,g,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    level: 'h2',
    inverseColor: true,
    children: 'Inverse Heading'
  },
  decorators: [Story => <div style={{
    padding: '2rem',
    backgroundColor: '#333'
  }}>\r
        <Story />\r
      </div>]
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const y=["AllLevels","VisualOverride","Inverse"];export{l as AllLevels,a as Inverse,n as VisualOverride,y as __namedExportsOrder,j as default};
