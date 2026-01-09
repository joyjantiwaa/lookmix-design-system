import{j as e}from"./jsx-runtime-DGop6S_Y.js";import{c as R}from"./index-DdzbqoOO.js";import"./index-C3JiJ1qr.js";const q="_labelBase_1npf0_1",w="_captionDefault_1npf0_7",B="_captionMedium_1npf0_14",V="_primary_1npf0_21",E="_secondary_1npf0_25",r={labelBase:q,captionDefault:w,captionMedium:B,primary:V,secondary:E};function a({children:z,variant:s="default",color:l="primary",className:A,as:I="span"}){const N=R(r.labelBase,{[r.captionDefault]:s==="default",[r.captionMedium]:s==="medium",[r.primary]:l==="primary",[r.secondary]:l==="secondary"},A);return e.jsx(I,{className:N,children:z})}a.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'medium'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'medium'"}]},description:"ประเภทของ Label",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"สีของข้อความ",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"คลาสเพิ่มเติม"},as:{required:!1,tsType:{name:"union",raw:"'span' | 'label' | 'p'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'label'"},{name:"literal",value:"'p'"}]},description:"HTML Tag ที่ต้องการใช้ (default: span)",defaultValue:{value:"'span'",computed:!1}}}};const F={title:"Typography/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"ขนาดของตัวอักษร (Default: 12px, Medium: 13px)",control:"inline-radio",options:["default","medium"]},color:{description:"สีของตัวอักษรตาม Tokens",control:"select",options:["primary","secondary"]},as:{description:"HTML Tag ที่ต้องการใช้ Render",control:"select",options:["span","label","p"]}}},o={args:{children:"Caption Default - Inter 12px / 18px",variant:"default",color:"primary"}},i={args:{children:"Caption Medium - Inter 13px",variant:"medium",color:"primary"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{color:"primary",variant:"default",children:"Primary Text (12px)"}),e.jsx(a,{color:"secondary",variant:"default",children:"Secondary Text (12px)"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"4px",opacity:.5,fontSize:"10px"},children:"VARIANT: DEFAULT (12px)"}),e.jsx(a,{variant:"default",children:"The quick brown fox jumps over the lazy dog."})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"4px",opacity:.5,fontSize:"10px"},children:"VARIANT: MEDIUM (13px)"}),e.jsx(a,{variant:"medium",children:"The quick brown fox jumps over the lazy dog."})]})]})};var p,d,c,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Caption Default - Inter 12px / 18px',
    variant: 'default',
    color: 'primary'
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:`1. Caption Default (12px)\r
ใช้สำหรับข้อความอธิบายขนาดเล็ก หรือ Metadata`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var y,x,f,v,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Caption Medium - Inter 13px',
    variant: 'medium',
    color: 'primary'
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`2. Caption Medium (13px)\r
ขนาดพิเศษสำหรับ Label ที่ต้องการความชัดเจนขึ้นมาอีกระดับ`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var T,b,h,C,_;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>\r
      <Label color="primary" variant="default">Primary Text (12px)</Label>\r
      <Label color="secondary" variant="default">Secondary Text (12px)</Label>\r
    </div>
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:`3. Color Variants\r
แสดงความแตกต่างระหว่างสี Primary และ Secondary`,...(_=(C=t.parameters)==null?void 0:C.docs)==null?void 0:_.description}}};var D,j,L,M,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <div>\r
        <div style={{
        marginBottom: '4px',
        opacity: 0.5,
        fontSize: '10px'
      }}>VARIANT: DEFAULT (12px)</div>\r
        <Label variant="default">The quick brown fox jumps over the lazy dog.</Label>\r
      </div>\r
      <div>\r
        <div style={{
        marginBottom: '4px',
        opacity: 0.5,
        fontSize: '10px'
      }}>VARIANT: MEDIUM (13px)</div>\r
        <Label variant="medium">The quick brown fox jumps over the lazy dog.</Label>\r
      </div>\r
    </div>
}`,...(L=(j=n.parameters)==null?void 0:j.docs)==null?void 0:L.source},description:{story:`4. All Sizes Comparison\r
แสดงการเปรียบเทียบขนาด 12px และ 13px พร้อมกัน`,...(S=(M=n.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};const H=["CaptionDefault","CaptionMedium","ColorComparison","SizeComparison"];export{o as CaptionDefault,i as CaptionMedium,t as ColorComparison,n as SizeComparison,H as __namedExportsOrder,F as default};
