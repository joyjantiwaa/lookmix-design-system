import{j as e}from"./jsx-runtime-D7NN_m21.js";import{r as T}from"./iframe-BzsbkQY8.js";import{c as C}from"./index-DLipHefI.js";import{B as m}from"./button-BRYyhyxi.js";import"./preload-helper-C1FmrZbK.js";import"./link-CgLy0FMO.js";const h="_toastContainer_xqco6_1",j="_toast_xqco6_1",q="_slideIn_xqco6_1",w="_success_xqco6_23",S="_error_xqco6_26",B="_warning_xqco6_29",b="_info_xqco6_32",I="_message_xqco6_36",N="_closeBtn_xqco6_44",r={toastContainer:h,toast:j,slideIn:q,success:w,error:S,warning:B,info:b,message:I,closeBtn:N};function t({id:n,message:a,type:i="info",duration:c=3e3,onClose:s}){return T.useEffect(()=>{const o=setTimeout(()=>s(n),c);return()=>clearTimeout(o)},[n,c,s]),e.jsxs("div",{className:C(r.toast,r[i]),role:"alert",children:[e.jsx("div",{className:r.icon}),e.jsx("div",{className:r.message,children:a}),e.jsx("button",{className:r.closeBtn,onClick:()=>s(n),children:"×"})]})}t.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{id:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const M={title:"Feedback/Toast",component:t,parameters:{layout:"centered"},argTypes:{onClose:{action:"closed"},type:{control:"select",options:["success","error","info","warning"]}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{id:"1",type:"success",message:"Item added to cart successfully!",onClose:()=>{}}),e.jsx(t,{id:"2",type:"error",message:"Could not process payment. Please try again.",onClose:()=>{}}),e.jsx(t,{id:"3",type:"warning",message:"Your session is about to expire.",onClose:()=>{}}),e.jsx(t,{id:"4",type:"info",message:"New version of the app is available.",onClose:()=>{}})]})},d={render:()=>{const[n,a]=T.useState([]),i=(s,o)=>{const p=Math.random().toString(36).substring(2,9);a(_=>[..._,{id:p,type:s,message:o}])},c=s=>{a(o=>o.filter(p=>p.id!==s))};return e.jsxs("div",{style:{height:"300px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(m,{onClick:()=>i("success","Saved!"),children:"Success"}),e.jsx(m,{onClick:()=>i("error","Failed!"),children:"Error"})]}),e.jsx("div",{style:{position:"fixed",top:"24px",right:"24px",display:"flex",flexDirection:"column",gap:"8px",zIndex:9999},children:n.map(s=>e.jsx(t,{...s,onClose:c},s.id))})]})}};var u,g,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Toast id="1" type="success" message="Item added to cart successfully!" onClose={() => {}} />\r
      <Toast id="2" type="error" message="Could not process payment. Please try again." onClose={() => {}} />\r
      <Toast id="3" type="warning" message="Your session is about to expire." onClose={() => {}} />\r
      <Toast id="4" type="info" message="New version of the app is available." onClose={() => {}} />\r
    </div>
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<{
      id: string;
      type: any;
      message: string;
    }[]>([]);
    const addToast = (type: any, message: string) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts(prev => [...prev, {
        id,
        type,
        message
      }]);
    };
    const removeToast = (id: string) => {
      setToasts(prev => prev.filter(t => t.id !== id));
    };
    return <div style={{
      height: '300px'
    }}>\r
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>\r
          <Button onClick={() => addToast('success', 'Saved!')}>Success</Button>\r
          <Button onClick={() => addToast('error', 'Failed!')}>Error</Button>\r
        </div>\r
\r
        {/* ตัวจำลอง Container ที่อยู่มุมขวาบนหน้าจอ */}\r
        <div style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 9999
      }}>\r
          {toasts.map(t => <Toast key={t.id} {...t} onClose={removeToast} />)}\r
        </div>\r
      </div>;
  }
}`,...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const P=["AllTypes","ToastSimulator"];export{l as AllTypes,d as ToastSimulator,P as __namedExportsOrder,M as default};
