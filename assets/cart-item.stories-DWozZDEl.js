import{j as e}from"./jsx-runtime-D7NN_m21.js";import{Q as S}from"./quantity-stepper-Cr10op4n.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./index-DLipHefI.js";import"./iconify-CZpI7N4b.js";const w="_item_kdvyx_1",L="_imageContainer_kdvyx_8",B="_image_kdvyx_8",D="_details_kdvyx_23",Q="_header_kdvyx_30",R="_title_kdvyx_36",z="_removeBtn_kdvyx_42",M="_properties_kdvyx_54",P="_propText_kdvyx_60",E="_footer_kdvyx_65",W="_price_kdvyx_72",t={item:w,imageContainer:L,image:B,details:D,header:Q,title:R,removeBtn:z,properties:M,propText:P,footer:E,price:W};function i({id:r,title:l,image:b,price:k,properties:c,quantity:p,onQuantityChange:I,onRemove:N}){return e.jsxs("div",{className:t.item,children:[e.jsx("div",{className:t.imageContainer,children:e.jsx("img",{src:b,alt:l,className:t.image})}),e.jsxs("div",{className:t.details,children:[e.jsxs("div",{className:t.header,children:[e.jsx("h4",{className:t.title,children:l}),e.jsx("button",{className:t.removeBtn,onClick:()=>N(r),"aria-label":"Remove item",children:e.jsx("span",{className:"mingcute--delete-2-line"})})]}),c&&c.length>0&&e.jsx("div",{className:t.properties,children:c.map((a,T)=>e.jsxs("span",{className:t.propText,children:[a.label,": ",e.jsx("strong",{children:a.value})]},T))}),e.jsxs("div",{className:t.footer,children:[e.jsxs("span",{className:t.price,children:["฿",(k*p).toLocaleString()]}),e.jsx(S,{value:p,onChange:a=>I(r,a)})]})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"CartItem",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},properties:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:""},quantity:{required:!0,tsType:{name:"number"},description:""},onQuantityChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string, quantity: number) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"number"},name:"quantity"}],return:{name:"void"}}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const K={title:"E-commerce/CartItem",component:i,tags:["autodocs"],argTypes:{onQuantityChange:{action:"quantity changed"},onRemove:{action:"item removed"}},decorators:[r=>e.jsx("div",{style:{maxWidth:"500px",padding:"20px",background:"white"},children:e.jsx(r,{})})]},s={args:{id:"1",title:"Minimalist Cotton T-Shirt",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200",price:590,quantity:1,properties:[{label:"Color",value:"White"},{label:"Size",value:"L"}]}},n={args:{id:"2",title:"Premium Denim Jeans",image:"https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200",price:1250,quantity:2,properties:[{label:"Size",value:"32"}]}},o={args:{id:"3",title:"Classic Leather Belt",image:"https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=200",price:890,quantity:1}},m={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(i,{...r,title:"Item 1",price:500,id:"1"}),e.jsx(i,{...r,title:"Item 2",price:1200,id:"2"}),e.jsx(i,{...r,title:"Item 3",price:350,id:"3"})]}),args:{image:"https://via.placeholder.com/90x120",quantity:1,onQuantityChange:()=>{},onRemove:()=>{}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: '1',
    title: 'Minimalist Cotton T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200',
    price: 590,
    quantity: 1,
    properties: [{
      label: 'Color',
      value: 'White'
    }, {
      label: 'Size',
      value: 'L'
    }]
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: '2',
    title: 'Premium Denim Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200',
    price: 1250,
    quantity: 2,
    properties: [{
      label: 'Size',
      value: '32'
    }]
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,_,q;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: '3',
    title: 'Classic Leather Belt',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=200',
    price: 890,
    quantity: 1
  }
}`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var f,C,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>\r
      <CartItem {...args} title="Item 1" price={500} id="1" />\r
      <CartItem {...args} title="Item 2" price={1200} id="2" />\r
      <CartItem {...args} title="Item 3" price={350} id="3" />\r
    </div>,
  args: {
    image: 'https://via.placeholder.com/90x120',
    quantity: 1,
    onQuantityChange: () => {},
    onRemove: () => {}
  }
}`,...(j=(C=m.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const U=["Default","MultipleItems","NoProperties","CartList"];export{m as CartList,s as Default,n as MultipleItems,o as NoProperties,U as __namedExportsOrder,K as default};
