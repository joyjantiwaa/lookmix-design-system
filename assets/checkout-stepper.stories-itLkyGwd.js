import{j as e}from"./jsx-runtime-D7NN_m21.js";import{R as f}from"./iframe-BzsbkQY8.js";import{c as k}from"./index-DLipHefI.js";import"./preload-helper-C1FmrZbK.js";const q="_container_71cij_1",C="_step_71cij_10",E="_active_71cij_18",I="_circle_71cij_21",R="_completed_71cij_26",T="_label_71cij_48",w="_line_71cij_53",r={container:q,step:C,active:E,circle:I,completed:R,label:T,line:w};function y({steps:p,currentStep:i}){return e.jsx("div",{className:r.container,children:p.map((t,N)=>e.jsxs(f.Fragment,{children:[e.jsxs("div",{className:k(r.step,{[r.active]:i===t.id,[r.completed]:i>t.id}),children:[e.jsx("div",{className:r.circle,children:i>t.id?e.jsx("span",{className:"mingcute--check-line"}):t.id}),e.jsx("span",{className:r.label,children:t.label})]}),N<p.length-1&&e.jsx("div",{className:r.line})]},t.id))})}y.__docgenInfo={description:"",methods:[],displayName:"CheckoutStepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: number;\r
  label: string;\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Step[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""}}};const z={title:"E-commerce/CheckoutStepper",component:y,tags:["autodocs"],argTypes:{currentStep:{control:{type:"number",min:1,max:3},description:"ขั้นตอนปัจจุบัน (1-3)"}}},o=[{id:1,label:"Cart"},{id:2,label:"Shipping"},{id:3,label:"Payment"}],s={args:{steps:o,currentStep:1}},c={args:{steps:o,currentStep:2}},n={args:{steps:o,currentStep:3}},a={args:{steps:o,currentStep:1}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: commonSteps,
    currentStep: 1
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,S,_;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: commonSteps,
    currentStep: 2
  }
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var g,j,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    steps: commonSteps,
    currentStep: 3
  }
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var h,v,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps: commonSteps,
    currentStep: 1
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const B=["Step1","Step2","Step3","Interactive"];export{a as Interactive,s as Step1,c as Step2,n as Step3,B as __namedExportsOrder,z as default};
