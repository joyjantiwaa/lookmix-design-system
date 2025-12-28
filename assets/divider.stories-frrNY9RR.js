import{j as e}from"./jsx-runtime-D7NN_m21.js";import{c as z}from"./index-DLipHefI.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";const N="_divider_u12tf_1",k="_vertical_u12tf_9",q="_dashed_u12tf_18",V="_dotted_u12tf_21",B="_withContent_u12tf_24",I="_content_u12tf_36",r={divider:N,vertical:k,dashed:q,dotted:V,withContent:B,content:I,"textAlign-left":"_textAlign-left_u12tf_43","textAlign-right":"_textAlign-right_u12tf_48"};function t({orientation:l="horizontal",type:L="solid",children:c,textAlign:C="center",className:R,style:S}){const o=c&&l==="horizontal";return e.jsx("div",{style:S,className:z(r.divider,r[l],r[L],{[r.withContent]:o,[r[`textAlign-${C}`]]:o},R),role:"separator",children:o&&e.jsx("span",{className:r.content,children:c})})}t.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},textAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const W={title:"Data Display/Divider",component:t,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},type:{control:"select",options:["solid","dashed","dotted"]},textAlign:{control:"radio",options:["left","center","right"]}}},i={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"เนื้อหาส่วนบน"}),e.jsx(t,{}),e.jsx("p",{children:"เนื้อหาส่วนล่าง"})]})},n={args:{children:"OR",textAlign:"center",type:"solid"}},s={render:()=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx(t,{textAlign:"left",children:"Left Aligned"}),e.jsx(t,{textAlign:"center",children:"Center Aligned"}),e.jsx(t,{textAlign:"right",children:"Right Aligned"})]})},a={render:()=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx(t,{type:"dashed",children:"Dashed Line"}),e.jsx(t,{type:"dotted",children:"Dotted Line"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"24px"},children:[e.jsx("span",{children:"Link A"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"Link B"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"Link C"})]})};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div>\r
      <p>เนื้อหาส่วนบน</p>\r
      <Divider />\r
      <p>เนื้อหาส่วนล่าง</p>\r
    </div>
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,v,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'OR',
    textAlign: 'center',
    type: 'solid'
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,f,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%'
  }}>\r
      <Divider textAlign="left">Left Aligned</Divider>\r
      <Divider textAlign="center">Center Aligned</Divider>\r
      <Divider textAlign="right">Right Aligned</Divider>\r
    </div>
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var _,A,D;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%'
  }}>\r
      <Divider type="dashed">Dashed Line</Divider>\r
      <Divider type="dotted">Dotted Line</Divider>\r
    </div>
}`,...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var j,w,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '24px'
  }}>\r
      <span>Link A</span>\r
      <Divider orientation="vertical" />\r
      <span>Link B</span>\r
      <Divider orientation="vertical" />\r
      <span>Link C</span>\r
    </div>
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const $=["Horizontal","WithText","TextAlignment","BorderTypes","Vertical"];export{a as BorderTypes,i as Horizontal,s as TextAlignment,d as Vertical,n as WithText,$ as __namedExportsOrder,W as default};
