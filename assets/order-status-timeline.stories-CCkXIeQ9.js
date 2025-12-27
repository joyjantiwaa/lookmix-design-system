import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{c as _}from"./index-B64kcLyW.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";const g="_timeline_2mhnk_2",v="_eventItem_2mhnk_8",y="_completed_2mhnk_13",k="_dot_2mhnk_13",f="_line_2mhnk_18",x="_statusTitle_2mhnk_21",j="_indicator_2mhnk_33",C="_content_2mhnk_60",N="_header_2mhnk_64",O="_time_2mhnk_2",T="_description_2mhnk_84",t={timeline:g,eventItem:v,completed:y,dot:k,line:f,statusTitle:x,indicator:j,content:C,header:N,time:O,description:T};function h({events:i}){return e.jsx("div",{className:t.timeline,children:i.map((s,a)=>{var o;return e.jsxs("div",{className:_(t.eventItem,{[t.completed]:s.isCompleted,[t.active]:s.isCompleted&&(a===0||!((o=i[a-1])!=null&&o.isCompleted))}),children:[e.jsxs("div",{className:t.indicator,children:[e.jsx("div",{className:t.dot,children:s.isCompleted&&e.jsx("span",{className:"mingcute--check-line"})}),a!==i.length-1&&e.jsx("div",{className:t.line})]}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t.header,children:[e.jsx("span",{className:t.statusTitle,children:s.status}),e.jsx("span",{className:t.time,children:s.timestamp})]}),e.jsx("p",{className:t.description,children:s.description})]})]},s.id)})})}h.__docgenInfo={description:"",methods:[],displayName:"OrderStatusTimeline",props:{events:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: string;\r
  status: string;\r
  description: string;\r
  timestamp: string;\r
  isCompleted: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"timestamp",value:{name:"string",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}}]}}],raw:"OrderEvent[]"},description:""}}};const E={title:"E-commerce/OrderStatusTimeline",component:h,tags:["autodocs"],decorators:[i=>e.jsx("div",{style:{maxWidth:"500px",margin:"2rem auto",padding:"1rem",background:"white"},children:e.jsx(i,{})})]},P=[{id:"1",status:"Order Placed",description:"We have received your order and it is being processed.",timestamp:"24 Dec 2024, 10:30",isCompleted:!0},{id:"2",status:"Payment Confirmed",description:"Your payment has been successfully verified.",timestamp:"24 Dec 2024, 10:45",isCompleted:!0},{id:"3",status:"Shipped",description:"Your package is on the way. Tracking No: TH123456789",timestamp:"25 Dec 2024, 14:20",isCompleted:!0},{id:"4",status:"Out for Delivery",description:"The courier is delivering your package to your location.",timestamp:"26 Dec 2024, 09:00",isCompleted:!1},{id:"5",status:"Delivered",description:"Package has been delivered to the recipient.",timestamp:"--:--",isCompleted:!1}],r={args:{events:P}},n={args:{events:[{id:"1",status:"Order Placed",description:"Waiting for payment verification.",timestamp:"Just now",isCompleted:!0},{id:"2",status:"Payment",description:"Please complete your payment.",timestamp:"",isCompleted:!1}]}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    events: mockEvents
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      status: 'Order Placed',
      description: 'Waiting for payment verification.',
      timestamp: 'Just now',
      isCompleted: true
    }, {
      id: '2',
      status: 'Payment',
      description: 'Please complete your payment.',
      timestamp: '',
      isCompleted: false
    }]
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Default","NewOrder"];export{r as Default,n as NewOrder,S as __namedExportsOrder,E as default};
