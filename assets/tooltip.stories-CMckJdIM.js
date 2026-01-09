import{j as t}from"./jsx-runtime-DGop6S_Y.js";import{r as _}from"./index-C3JiJ1qr.js";import{c as p}from"./index-DdzbqoOO.js";const v="_tooltipWrapper_6o5ad_1",N="_tooltipContent_6o5ad_6",R="_top_6o5ad_19",w="_arrow_6o5ad_25",e={tooltipWrapper:v,tooltipContent:N,top:R,arrow:w};function o({content:b,children:g,position:f="top",className:j}){const[y,s]=_.useState(!1);return t.jsxs("div",{className:p(e.tooltipWrapper,j),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[g,y&&t.jsxs("div",{className:p(e.tooltipContent,e[f]),children:[b,t.jsx("div",{className:e.arrow})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Feedback/Tooltip",component:o,parameters:{layout:"centered"},argTypes:{position:{control:"select",options:["top","bottom","left","right"]}}},n={args:{content:"นี่คือข้อความ Tooltip",children:t.jsx("button",{style:{padding:"8px 16px"},children:"เอาเมาส์มาวางที่นี่"}),position:"top"}},r={render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"50px"},children:[t.jsx(o,{content:"Tooltip ด้านบน",position:"top",children:t.jsx("button",{children:"Top"})}),t.jsx(o,{content:"Tooltip ด้านล่าง",position:"bottom",children:t.jsx("button",{children:"Bottom"})}),t.jsx(o,{content:"Tooltip ด้านซ้าย",position:"left",children:t.jsx("button",{children:"Left"})}),t.jsx(o,{content:"Tooltip ด้านขวา",position:"right",children:t.jsx("button",{children:"Right"})})]})},i={args:{content:"ข้อมูลเพิ่มเติม",children:t.jsx("span",{style:{textDecoration:"underline",color:"blue",cursor:"pointer"},children:"อ่านต่อตรงนี้"}),position:"top"}};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    content: 'นี่คือข้อความ Tooltip',
    children: <button style={{
      padding: '8px 16px'
    }}>เอาเมาส์มาวางที่นี่</button>,
    position: 'top'
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    padding: '50px'
  }}>\r
      <Tooltip content="Tooltip ด้านบน" position="top">\r
        <button>Top</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Tooltip ด้านล่าง" position="bottom">\r
        <button>Bottom</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Tooltip ด้านซ้าย" position="left">\r
        <button>Left</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Tooltip ด้านขวา" position="right">\r
        <button>Right</button>\r
      </Tooltip>\r
    </div>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,T,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: 'ข้อมูลเพิ่มเติม',
    children: <span style={{
      textDecoration: 'underline',
      color: 'blue',
      cursor: 'pointer'
    }}>อ่านต่อตรงนี้</span>,
    position: 'top'
  }
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const I=["Default","AllPositions","InlineText"];export{r as AllPositions,n as Default,i as InlineText,I as __namedExportsOrder,E as default};
