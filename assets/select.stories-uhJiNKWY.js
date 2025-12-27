import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{r as w}from"./iframe-DG-dEiUR.js";import{u as A,a as D,b as $,c as z,d as B,F as L,g as U,j as W,o as G,h as H,s as J,i as K}from"./floating-ui.react-5vY0kGlQ.js";import{c as i}from"./index-B64kcLyW.js";import"./preload-helper-C1FmrZbK.js";import"./index-Ci2TeMzY.js";const Q="_container_ig0ah_1",X="_label_ig0ah_9",Y="_control_ig0ah_16",Z="_disabled_ig0ah_29",ee="_open_ig0ah_32",ae="_value_ig0ah_42",se="_placeholder_ig0ah_47",ne="_chevron_ig0ah_51",te="_menu_ig0ah_63",le="_option_ig0ah_75",re="_selected_ig0ah_89",a={container:Q,label:X,control:Y,disabled:Z,open:ee,value:ae,placeholder:se,chevron:ne,menu:te,option:le,selected:re};function h({options:s,value:t,onChange:u,placeholder:r="เลือกรายการ...",label:l,disabled:T,className:F}){const[m,v]=w.useState(!1),{refs:b,floatingStyles:q,context:o}=A({open:m,onOpenChange:v,middleware:[G(4),H(),J(),K({apply({rects:n,elements:V}){Object.assign(V.floating.style,{width:`${n.reference.width}px`})}})],whileElementsMounted:W}),M=D(o),R=$(o),I=z(o,{role:"listbox"}),{getReferenceProps:P,getFloatingProps:E}=B([M,R,I]),g=s.find(n=>n.value===t);return e.jsxs("div",{className:i(a.container,F),children:[l&&e.jsx("label",{className:a.label,children:l}),e.jsxs("div",{ref:b.setReference,className:i(a.control,{[a.open]:m,[a.disabled]:T}),...P(),children:[e.jsx("span",{className:i(a.value,{[a.placeholder]:!g}),children:g?g.label:r}),e.jsx("svg",{className:a.chevron,viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})]}),e.jsx(L,{children:m&&e.jsx(U,{context:o,modal:!1,children:e.jsx("div",{ref:b.setFloating,style:q,className:a.menu,...E(),children:s.map(n=>e.jsx("div",{className:i(a.option,{[a.selected]:n.value===t}),onClick:()=>{u(n.value),v(!1)},children:n.label},n.value))})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'เลือกรายการ...'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const me={title:"Forms/Select",component:h,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{height:"300px",maxWidth:"320px"},children:e.jsx(s,{})})]},C=[{label:"กรุงเทพมหานคร",value:"bkk"},{label:"เชียงใหม่",value:"cnx"},{label:"ภูเก็ต",value:"hkt"},{label:"ขอนแก่น",value:"kkc"},{label:"ชลบุรี",value:"chy"}],c={render:s=>{const[t,u]=w.useState("");return e.jsx(h,{...s,value:t,onChange:r=>{var l;u(r),(l=s.onChange)==null||l.call(s,r)}})},args:{label:"จังหวัดที่อยู่ (Province)",options:C,placeholder:"เลือกจังหวัดของคุณ"}},d={args:{label:"ประเภทสมาชิก (Member Type)",options:C,disabled:!0,value:"bkk"}},p={args:{label:"เลือกสาขาที่ใกล้บ้าน",options:Array.from({length:20},(s,t)=>({label:`สาขาที่ ${t+1}`,value:t+1}))}};var _,f,x;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | number>('');
    return <Select {...args} value={val} onChange={v => {
      setVal(v);
      args.onChange?.(v);
    }} />;
  },
  args: {
    label: 'จังหวัดที่อยู่ (Province)',
    options: options,
    placeholder: 'เลือกจังหวัดของคุณ'
  }
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,j,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'ประเภทสมาชิก (Member Type)',
    options: options,
    disabled: true,
    value: 'bkk'
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,N,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'เลือกสาขาที่ใกล้บ้าน',
    options: Array.from({
      length: 20
    }, (_, i) => ({
      label: \`สาขาที่ \${i + 1}\`,
      value: i + 1
    }))
  }
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const ge=["Interactive","Disabled","ManyOptions"];export{d as Disabled,c as Interactive,p as ManyOptions,ge as __namedExportsOrder,me as default};
