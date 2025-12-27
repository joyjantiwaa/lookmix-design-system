import{j as r}from"./jsx-runtime-Clm7cEE4.js";import{P as e}from"./paragraph-yTbgQMqT.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";import"./index-B64kcLyW.js";const j={title:"Typography/Paragraph",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["body-large","body-medium","body-default","body-small","caption"]},color:{control:"select",options:["primary","secondary","tertiary","inverse"]},element:{control:"text"}}},a={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[r.jsxs(e,{size:"body-large",children:[r.jsx("b",{children:"Body Large:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}),r.jsxs(e,{size:"body-medium",children:[r.jsx("b",{children:"Body Medium:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}),r.jsxs(e,{size:"body-default",children:[r.jsx("b",{children:"Body Default:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}),r.jsxs(e,{size:"body-small",children:[r.jsx("b",{children:"Body Small:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}),r.jsxs(e,{size:"caption",children:[r.jsx("b",{children:"Caption:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit."]})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(e,{color:"primary",children:"Primary Text Color"}),r.jsx(e,{color:"secondary",children:"Secondary Text Color"}),r.jsx(e,{color:"tertiary",children:"Tertiary Text Color"}),r.jsx("div",{style:{padding:"10px",backgroundColor:"#333",borderRadius:"4px"},children:r.jsx(e,{color:"inverse",children:"Inverse Text Color (on dark background)"})})]})},i={args:{children:r.jsxs(r.Fragment,{children:["This is a paragraph that includes ",r.jsx("strong",{children:"bold text"}),",",r.jsx("em",{children:" italic text"}),", and even a ",r.jsx("u",{children:"underlined part"})," to show how it handles nested elements."]})}};var s,t,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      <Paragraph size="body-large">\r
        <b>Body Large:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
      </Paragraph>\r
      <Paragraph size="body-medium">\r
        <b>Body Medium:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
      </Paragraph>\r
      <Paragraph size="body-default">\r
        <b>Body Default:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
      </Paragraph>\r
      <Paragraph size="body-small">\r
        <b>Body Small:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
      </Paragraph>\r
      <Paragraph size="caption">\r
        <b>Caption:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
      </Paragraph>\r
    </div>
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,n,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Paragraph color="primary">Primary Text Color</Paragraph>\r
      <Paragraph color="secondary">Secondary Text Color</Paragraph>\r
      <Paragraph color="tertiary">Tertiary Text Color</Paragraph>\r
      <div style={{
      padding: '10px',
      backgroundColor: '#333',
      borderRadius: '4px'
    }}>\r
        <Paragraph color="inverse">Inverse Text Color (on dark background)</Paragraph>\r
      </div>\r
    </div>
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>\r
        This is a paragraph that includes <strong>bold text</strong>, \r
        <em> italic text</em>, and even a <u>underlined part</u> to show \r
        how it handles nested elements.\r
      </>
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const P=["Sizes","Colors","RichText"];export{o as Colors,i as RichText,a as Sizes,P as __namedExportsOrder,j as default};
