import{j as C}from"./jsx-runtime-Clm7cEE4.js";import{r as R}from"./iframe-DG-dEiUR.js";import{Q as b}from"./quantity-stepper-DgBCmUqq.js";import"./preload-helper-C1FmrZbK.js";import"./index-B64kcLyW.js";import"./iconify-CFZmQpD_.js";const D={title:"E-commerce/QuantityStepper",component:b,tags:["autodocs"],argTypes:{value:{control:{type:"number"}},min:{control:{type:"number"}},max:{control:{type:"number"}},disabled:{control:"boolean"},onChange:{action:"changed"}}},e={render:s=>{const[S,y]=R.useState(s.value??1);return C.jsx(b,{...s,value:S,onChange:t=>{y(t),s.onChange(t)}})},args:{value:1,min:1,max:10}},a={args:{value:5,disabled:!0}},r={args:{value:1,min:1}},n={args:{value:99,max:99}};var o,c,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState(args.value ?? 1);
    return <QuantityStepper {...args} value={val} onChange={v => {
      setVal(v);
      args.onChange(v);
    }} />;
  },
  args: {
    value: 1,
    min: 1,
    max: 10
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 5,
    disabled: true
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,d,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 1,
    min: 1
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,x,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 99,
    max: 99
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const I=["Interactive","Disabled","MinReached","MaxReached"];export{a as Disabled,e as Interactive,n as MaxReached,r as MinReached,I as __namedExportsOrder,D as default};
