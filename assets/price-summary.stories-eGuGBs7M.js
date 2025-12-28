import{j as s}from"./jsx-runtime-D7NN_m21.js";import{B as N}from"./button-BRYyhyxi.js";import{c as d}from"./index-DLipHefI.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./link-CgLy0FMO.js";const C="_summaryCard_1j6fv_1",F="_title_1j6fv_7",k="_rows_1j6fv_13",T="_row_1j6fv_13",B="_discount_1j6fv_26",D="_divider_1j6fv_30",E="_totalRow_1j6fv_36",R="_checkoutBtn_1j6fv_42",e={summaryCard:C,title:F,rows:k,row:T,discount:B,divider:D,totalRow:E,checkoutBtn:R};function b({subtotal:r,shippingFee:i,discount:c=0,onCheckout:w,isLoading:L}){const S=r+i-c;return s.jsxs("div",{className:e.summaryCard,children:[s.jsx("h3",{className:e.title,children:"Order Summary"}),s.jsxs("div",{className:e.rows,children:[s.jsxs("div",{className:e.row,children:[s.jsx("span",{children:"Subtotal"}),s.jsxs("span",{children:["฿",r.toLocaleString()]})]}),s.jsxs("div",{className:e.row,children:[s.jsx("span",{children:"Shipping Fee"}),s.jsx("span",{children:i===0?"Free":`฿${i.toLocaleString()}`})]}),c>0&&s.jsxs("div",{className:d(e.row,e.discount),children:[s.jsx("span",{children:"Discount"}),s.jsxs("span",{children:["-฿",c.toLocaleString()]})]}),s.jsx("hr",{className:e.divider}),s.jsxs("div",{className:d(e.row,e.totalRow),children:[s.jsx("span",{children:"Total"}),s.jsxs("span",{children:["฿",S.toLocaleString()]})]})]}),s.jsx(N,{fullWidth:!0,size:"lg",onClick:w,loading:L,className:e.checkoutBtn,children:"PROCEED TO CHECKOUT"})]})}b.__docgenInfo={description:"",methods:[],displayName:"PriceSummary",props:{subtotal:{required:!0,tsType:{name:"number"},description:""},shippingFee:{required:!0,tsType:{name:"number"},description:""},discount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onCheckout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const z={title:"E-commerce/PriceSummary",component:b,tags:["autodocs"],argTypes:{onCheckout:{action:"checkout clicked"},subtotal:{control:{type:"number",min:0}},shippingFee:{control:{type:"number",min:0}},discount:{control:{type:"number",min:0}},isLoading:{control:"boolean"}},decorators:[r=>s.jsx("div",{style:{maxWidth:"400px",margin:"2rem auto"},children:s.jsx(r,{})})]},o={args:{subtotal:1590,shippingFee:50,discount:0,isLoading:!1}},t={args:{subtotal:2500,shippingFee:0,discount:300,isLoading:!1}},n={args:{subtotal:1200,shippingFee:45,discount:100,isLoading:!0}},a={args:{subtotal:125e3,shippingFee:0,discount:5e3,isLoading:!1}};var u,l,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    subtotal: 1590,
    shippingFee: 50,
    discount: 0,
    isLoading: false
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    subtotal: 2500,
    shippingFee: 0,
    discount: 300,
    isLoading: false
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var j,f,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    subtotal: 1200,
    shippingFee: 45,
    discount: 100,
    isLoading: true
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var x,v,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    subtotal: 125000,
    shippingFee: 0,
    discount: 5000,
    isLoading: false
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const I=["Default","WithDiscount","Loading","HighValue"];export{o as Default,a as HighValue,n as Loading,t as WithDiscount,I as __namedExportsOrder,z as default};
