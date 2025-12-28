import{j as e}from"./jsx-runtime-D7NN_m21.js";import{c as T}from"./index-DLipHefI.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";const V="_spinner_lm0rf_1",z="_spin_lm0rf_1",E="_sm_lm0rf_8",O="_md_lm0rf_13",R="_lg_lm0rf_18",C="_skeleton_lm0rf_32",D="_text_lm0rf_37",I="_circular_lm0rf_43",P="_rectangular_lm0rf_46",L="_pulse_lm0rf_49",F="_wave_lm0rf_52",A="_srOnly_lm0rf_82",a={spinner:V,spin:z,sm:E,md:O,lg:R,skeleton:C,text:D,circular:I,rectangular:P,pulse:L,wave:F,srOnly:A};function d({variant:r="text",width:o,height:c,animation:s="pulse",className:q,style:N}){return e.jsx("div",{className:T(a.skeleton,a[r],a[s],q),style:{width:o,height:c,...N}})}d.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'pulse'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function l({size:r="md",color:o,className:c}){const s=typeof r=="number"?r:void 0;return e.jsx("div",{className:T(a.spinner,typeof r=="string"?a[r]:"",c),style:{...s?{width:s,height:s}:{},...o?{borderTopColor:o}:{}},role:"status",children:e.jsx("span",{className:a.srOnly,children:"Loading..."})})}l.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | number",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"number"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Feedback/Loading",parameters:{layout:"centered"}},n={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[e.jsx(l,{size:"sm"}),e.jsx(l,{size:"md"}),e.jsx(l,{size:"lg"}),e.jsx(l,{size:64,color:"var(--colors-error-default)"})]})},t={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(d,{...r,variant:"circular",width:60,height:60}),e.jsx(d,{...r,variant:"text",width:"80%"}),e.jsx(d,{...r,variant:"rectangular",width:"100%",height:100})]}),args:{animation:"pulse"}},i={render:()=>e.jsx("div",{style:{width:"250px",padding:"var(--spacing-large)",border:"1px solid var(--borders-default-color)",borderRadius:"var(--borders-radius-large)",display:"flex",flexDirection:"column",gap:"var(--spacing-medium)"}})};var m,p,u,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }}>\r
      <Spinner size="sm" />\r
      <Spinner size="md" />\r
      <Spinner size="lg" />\r
      <Spinner size={64} color="var(--colors-error-default)" />\r
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"--- Spinner Stories ---",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var x,v,_,y,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Skeleton {...args} variant="circular" width={60} height={60} />\r
      <Skeleton {...args} variant="text" width="80%" />\r
      <Skeleton {...args} variant="rectangular" width="100%" height={100} />\r
    </div>,
  args: {
    animation: 'pulse'
  }
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source},description:{story:"--- Skeleton Stories ---",...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var S,w,b,k,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px',
    padding: 'var(--spacing-large)',
    // ใช้ Variable แทน 1rem
    border: '1px solid var(--borders-default-color)',
    // ใช้ Variable แทน #eee
    borderRadius: 'var(--borders-radius-large)',
    // ใช้ Variable แทน 12px
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-medium)' // ใช้ Variable แทน 12px
  }}>\r
      {/* ... ส่วนของ Skeleton ... */}\r
    </div>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:"--- Practical Example (Product Card Loading) ---",...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};const M=["Spinners","Skeletons","SkeletonExample"];export{i as SkeletonExample,t as Skeletons,n as Spinners,M as __namedExportsOrder,K as default};
