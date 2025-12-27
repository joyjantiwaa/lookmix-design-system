import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{c as T}from"./index-B64kcLyW.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";const N="_label_1qbdq_1",E="_disabled_1qbdq_10",F="_sm_1qbdq_14",k="_md_1qbdq_18",P="_lg_1qbdq_22",I="_asterisk_1qbdq_27",s={label:N,disabled:E,sm:F,md:k,lg:P,asterisk:I};function r({children:S,htmlFor:j,required:o,disabled:v,size:z="md",className:D,style:w}){return e.jsxs("label",{htmlFor:j,style:w,className:T(s.label,s[z],{[s.required]:o,[s.disabled]:v},D),children:[S,o&&e.jsx("span",{className:s.asterisk,"aria-hidden":"true",children:"*"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const U={title:"Forms/Label",component:r,tags:["autodocs"],argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]},disabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{children:"Username"}},d={args:{children:"Email Address",required:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",children:"Small Label"}),e.jsx(r,{size:"md",children:"Medium Label (Default)"}),e.jsx(r,{size:"lg",children:"Large Label"})]})},i={args:{children:"ReadOnly Field",disabled:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(r,{htmlFor:"test-input",required:!0,children:"Password"}),e.jsx("input",{id:"test-input",type:"password",placeholder:"Enter your password",style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}})]})};var n,c,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Username'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    required: true
  }
}`,...(b=(u=d.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,q,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Label size="sm">Small Label</Label>\r
      <Label size="md">Medium Label (Default)</Label>\r
      <Label size="lg">Large Label</Label>\r
    </div>
}`,...(x=(q=l.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'ReadOnly Field',
    disabled: true
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,L,R;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>\r
      <Label htmlFor="test-input" required>Password</Label>\r
      <input id="test-input" type="password" placeholder="Enter your password" style={{
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    }} />\r
    </div>
}`,...(R=(L=t.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const W=["Default","Required","Sizes","Disabled","WithInput"];export{a as Default,i as Disabled,d as Required,l as Sizes,t as WithInput,W as __namedExportsOrder,U as default};
