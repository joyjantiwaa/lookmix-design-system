import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{c as M}from"./index-B64kcLyW.js";import{L as U}from"./link-CdhBFSX1.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";const A="_card_8in84_2",B="_outOfStock_8in84_10",F="_quickAdd_8in84_14",R="_linkWrapper_8in84_19",G="_imageContainer_8in84_26",K="_image_8in84_26",z="_tagBadge_8in84_40",J="_soldOutText_8in84_79",Q="_content_8in84_87",V="_brand_8in84_94",X="_title_8in84_101",H="_overlay_8in84_117",Y="_priceContainer_8in84_129",Z="_price_8in84_129",$="_discountPrice_8in84_136",ee="_originalPrice_8in84_146",r={card:A,outOfStock:B,quickAdd:F,linkWrapper:R,imageContainer:G,image:K,tagBadge:z,soldOutText:J,content:Q,brand:V,title:X,overlay:H,priceContainer:Y,price:Z,discountPrice:$,originalPrice:ee};function i({id:t,title:u,price:p,discountPrice:a,imageUrl:E,brand:g,tag:h,isOutOfStock:m,href:I,onClick:L,onAddToCart:s}){const W=a!==void 0&&a<p,D=_=>{_.preventDefault(),_.stopPropagation(),s==null||s(t)};return e.jsx("div",{className:M(r.card,{[r.outOfStock]:m}),children:e.jsxs(U,{href:I,className:r.linkWrapper,noStyles:!0,onClick:L,children:[e.jsxs("div",{className:r.imageContainer,children:[h&&e.jsx("span",{className:r.tagBadge,children:h}),e.jsx("img",{src:E,alt:u,className:r.image}),m&&e.jsx("div",{className:r.overlay,children:e.jsx("span",{className:r.soldOutText,children:"OUT OF STOCK"})}),!m&&s&&e.jsx("button",{className:r.quickAdd,onClick:D,"aria-label":"Add to cart",children:e.jsx("span",{className:"mingcute--shopping-cart-1-line"})})]}),e.jsxs("div",{className:r.content,children:[g&&e.jsx("span",{className:r.brand,children:g}),e.jsx("h3",{className:r.title,children:u}),e.jsx("div",{className:r.priceContainer,children:W?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:r.discountPrice,children:["฿",a==null?void 0:a.toLocaleString()]}),e.jsxs("span",{className:r.originalPrice,children:["฿",p.toLocaleString()]})]}):e.jsxs("span",{className:r.price,children:["฿",p.toLocaleString()]})})]})]})})}i.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},discountPrice:{required:!1,tsType:{name:"number"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},brand:{required:!1,tsType:{name:"string"},description:""},tag:{required:!1,tsType:{name:"string"},description:""},isOutOfStock:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAddToCart:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const ne={title:"E-commerce/ProductCard",component:i,tags:["autodocs"],argTypes:{onAddToCart:{action:"added to cart"},onClick:{action:"card clicked"}},decorators:[t=>e.jsx("div",{style:{maxWidth:"280px",margin:"2rem auto"},children:e.jsx(t,{})})]},n={args:{id:"p1",title:"Essential Oversized T-Shirt",brand:"LOOKMIX ORIGINALS",price:590,imageUrl:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",href:"#"}},c={args:{id:"p2",title:"Classic Denim Jacket Premium Quality with Vintage Finish",brand:"DENIM CO.",tag:"Sale",price:1890,discountPrice:1290,imageUrl:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",href:"#"}},o={args:{id:"p3",title:"Leather Messenger Bag",brand:"CRAFTED",tag:"New",price:3200,imageUrl:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",href:"#"}},d={args:{id:"p4",title:"Minimalist Wrist Watch",brand:"TIMELINE",price:4500,imageUrl:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",isOutOfStock:!0,href:"#"}},l={render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px",maxWidth:"1000px"},children:[e.jsx(i,{...t,id:"1",title:"Product 1",price:500,tag:"New"}),e.jsx(i,{...t,id:"2",title:"Product 2 with a very long title that should wrap correctly",price:800,discountPrice:600}),e.jsx(i,{...t,id:"3",title:"Product 3",price:1200,isOutOfStock:!0}),e.jsx(i,{...t,id:"4",title:"Product 4",price:450})]}),decorators:[t=>e.jsx("div",{style:{width:"100%"},children:e.jsx(t,{})})]};var f,x,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'p1',
    title: 'Essential Oversized T-Shirt',
    brand: 'LOOKMIX ORIGINALS',
    price: 590,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    href: '#'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var O,N,S;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'p2',
    title: 'Classic Denim Jacket Premium Quality with Vintage Finish',
    brand: 'DENIM CO.',
    tag: 'Sale',
    price: 1890,
    discountPrice: 1290,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    href: '#'
  }
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var j,v,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'p3',
    title: 'Leather Messenger Bag',
    brand: 'CRAFTED',
    tag: 'New',
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800',
    href: '#'
  }
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var C,k,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'p4',
    title: 'Minimalist Wrist Watch',
    brand: 'TIMELINE',
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800',
    isOutOfStock: true,
    href: '#'
  }
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var b,q,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    maxWidth: '1000px'
  }}>\r
      <ProductCard {...args} id="1" title="Product 1" price={500} tag="New" />\r
      <ProductCard {...args} id="2" title="Product 2 with a very long title that should wrap correctly" price={800} discountPrice={600} />\r
      <ProductCard {...args} id="3" title="Product 3" price={1200} isOutOfStock />\r
      <ProductCard {...args} id="4" title="Product 4" price={450} />\r
    </div>,
  decorators: [Story => <div style={{
    width: '100%'
  }}><Story /></div>]
}`,...(T=(q=l.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};const ce=["Default","OnSale","NewArrival","OutOfStock","ProductGrid"];export{n as Default,o as NewArrival,c as OnSale,d as OutOfStock,l as ProductGrid,ce as __namedExportsOrder,ne as default};
