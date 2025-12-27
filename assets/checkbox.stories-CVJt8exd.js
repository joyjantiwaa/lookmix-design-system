import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{R as b,r as S}from"./iframe-DG-dEiUR.js";import{c as E}from"./index-B64kcLyW.js";import"./preload-helper-C1FmrZbK.js";const N="_checkboxContainer_3zwyt_1",L="_disabled_3zwyt_9",R="_sm_3zwyt_13",T="_control_3zwyt_13",B="_label_3zwyt_18",P="_md_3zwyt_21",W="_lg_3zwyt_29",A="_inputWrapper_3zwyt_38",M="_hiddenInput_3zwyt_45",q="_checkIcon_3zwyt_62",F="_indeterminateIcon_3zwyt_70",s={checkboxContainer:N,disabled:L,sm:R,control:T,label:B,md:P,lg:W,inputWrapper:A,hiddenInput:M,checkIcon:q,indeterminateIcon:F},t=b.forwardRef(({label:n,size:d="md",indeterminate:l,className:x,disabled:o,...c},a)=>{const u=S.useId(),r=c.id||u;return b.useEffect(()=>{a&&typeof a!="function"&&a.current&&(a.current.indeterminate=!!l)},[l,a]),e.jsxs("div",{className:E(s.checkboxContainer,s[d],{[s.disabled]:o},x),children:[e.jsxs("div",{className:s.inputWrapper,children:[e.jsx("input",{type:"checkbox",className:s.hiddenInput,id:r,ref:a,disabled:o,...c}),e.jsxs("div",{className:s.control,children:[e.jsx("svg",{className:s.checkIcon,viewBox:"0 0 12 10",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"1.5 5 4.5 8 10.5 2"})}),e.jsx("div",{className:s.indeterminateIcon})]})]}),n&&e.jsx("label",{htmlFor:r,className:s.label,children:n})]})});t.displayName="Checkbox";t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const G={title:"Forms/Checkbox",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},i={args:{label:"ยอมรับเงื่อนไขการใช้บริการ",size:"md"}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{label:"ยังไม่ได้เลือก (Unchecked)"}),e.jsx(t,{label:"เลือกแล้ว (Checked)",defaultChecked:!0}),e.jsx(t,{label:"เลือกบางส่วน (Indeterminate)",indeterminate:!0}),e.jsx(t,{label:"ปิดการใช้งาน (Disabled)",disabled:!0}),e.jsx(t,{label:"ปิดการใช้งานขณะเลือกอยู่ (Disabled Checked)",disabled:!0,defaultChecked:!0})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},children:[e.jsx(t,{label:"Small",size:"sm"}),e.jsx(t,{label:"Medium",size:"md"}),e.jsx(t,{label:"Large",size:"lg"})]})},p={render:()=>{const[n,d]=S.useState([!1,!1]),l=n.every(Boolean),x=n.some(Boolean)&&!l,o=a=>{d([a.target.checked,a.target.checked])},c=a=>u=>{const r=[...n];r[a]=u.target.checked,d(r)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{label:"เลือกทั้งหมด (Category)",checked:l,indeterminate:x,onChange:o}),e.jsxs("div",{style:{paddingLeft:"24px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{label:"สินค้าชิ้นที่ 1",checked:n[0],onChange:c(0)}),e.jsx(t,{label:"สินค้าชิ้นที่ 2",checked:n[1],onChange:c(1)})]})]})}};var k,C,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'ยอมรับเงื่อนไขการใช้บริการ',
    size: 'md'
  }
}`,...(g=(C=i.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var y,f,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Checkbox label="ยังไม่ได้เลือก (Unchecked)" />\r
      <Checkbox label="เลือกแล้ว (Checked)" defaultChecked />\r
      <Checkbox label="เลือกบางส่วน (Indeterminate)" indeterminate />\r
      <Checkbox label="ปิดการใช้งาน (Disabled)" disabled />\r
      <Checkbox label="ปิดการใช้งานขณะเลือกอยู่ (Disabled Checked)" disabled defaultChecked />\r
    </div>
}`,...(I=(f=m.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var _,j,v;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  }}>\r
      <Checkbox label="Small" size="sm" />\r
      <Checkbox label="Medium" size="md" />\r
      <Checkbox label="Large" size="lg" />\r
    </div>
}`,...(v=(j=h.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var z,w,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [checkedItems, setCheckedItems] = useState([false, false]);
    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems([e.target.checked, e.target.checked]);
    };
    const handleChildChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newItems = [...checkedItems];
      newItems[index] = e.target.checked;
      setCheckedItems(newItems);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>\r
        <Checkbox label="เลือกทั้งหมด (Category)" checked={allChecked} indeterminate={isIndeterminate} onChange={handleParentChange} />\r
        <div style={{
        paddingLeft: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>\r
          <Checkbox label="สินค้าชิ้นที่ 1" checked={checkedItems[0]} onChange={handleChildChange(0)} />\r
          <Checkbox label="สินค้าชิ้นที่ 2" checked={checkedItems[1]} onChange={handleChildChange(1)} />\r
        </div>\r
      </div>;
  }
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const J=["Default","AllStates","AllSizes","ParentChildExample"];export{h as AllSizes,m as AllStates,i as Default,p as ParentChildExample,J as __namedExportsOrder,G as default};
