import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{r as u}from"./iframe-DG-dEiUR.js";import{u as q,a as T,b as E,c as z,d as D,e as h,F as W,f as A,g as P}from"./floating-ui.react-5vY0kGlQ.js";import{c as V}from"./index-B64kcLyW.js";import{B as d}from"./button-dP6pKN74.js";import"./preload-helper-C1FmrZbK.js";import"./index-Ci2TeMzY.js";import"./link-CdhBFSX1.js";const Y="_overlay_16ib2_1",L="_modalContainer_16ib2_11",G="_modalIn_16ib2_1",H="_sm_16ib2_26",J="_md_16ib2_30",K="_lg_16ib2_34",Q="_full_16ib2_38",U="_header_16ib2_44",X="_title_16ib2_52",Z="_closeButton_16ib2_62",$="_content_16ib2_80",ee="_footer_16ib2_90",n={overlay:Y,modalContainer:L,modalIn:G,sm:H,md:J,lg:K,full:Q,header:U,title:X,closeButton:Z,content:$,footer:ee};function c({isOpen:t,onClose:r,title:s,children:k,footer:m,size:I="md",closeOnOverlayClick:w=!0}){const{refs:F,context:o}=q({open:t,onOpenChange:N=>{N||r()}}),M=T(o,{enabled:w}),R=E(o),S=z(o),{getFloatingProps:B}=D([M,R,S]),p=h(),f=h();return u.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),t?e.jsx(W,{children:e.jsx(A,{className:n.overlay,lockScroll:!0,children:e.jsx(P,{context:o,children:e.jsxs("div",{ref:F.setFloating,className:V(n.modalContainer,n[I]),...B(),"aria-labelledby":p,"aria-describedby":f,children:[e.jsxs("div",{className:n.header,children:[e.jsx("h2",{id:p,className:n.title,children:s}),e.jsx("button",{className:n.closeButton,onClick:r,"aria-label":"Close",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("div",{id:f,className:n.content,children:k}),m&&e.jsx("div",{className:n.footer,children:m})]})})})}):null}c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ce={title:"Overlay/Modal",component:c,parameters:{layout:"fullscreen"}},a={render:t=>{const[r,s]=u.useState(!1);return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(d,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(c,{...t,isOpen:r,onClose:()=>s(!1),children:e.jsx("p",{children:"This is the modal content. You can put any React elements here."})})]})},args:{title:"Example Modal",size:"md"}},l={render:t=>{const[r,s]=u.useState(!0);return e.jsx(c,{...t,isOpen:r,onClose:()=>s(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(d,{appearance:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx(d,{onClick:()=>s(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"Are you sure you want to proceed with this action?"})})},args:{title:"Confirmation Required",size:"sm"}},i={args:{isOpen:!0,title:"Full Screen Editor",size:"full",children:e.jsx("div",{style:{height:"1000px",background:"linear-gradient(#fff, #f0f0f0)"},children:e.jsx("p",{children:"Scroll down to see the sticky header/footer behavior."})})}};var g,y,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: '2rem'
    }}>\r
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\r
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r
          <p>This is the modal content. You can put any React elements here.</p>\r
        </Modal>\r
      </div>;
  },
  args: {
    title: 'Example Modal',
    size: 'md'
  }
}`,...(_=(y=a.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var x,v,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(true); // เปิดไว้ให้ดูเป็นตัวอย่างเลย
    return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} footer={<>\r
            <Button appearance="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>\r
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>\r
          </>}>\r
        <p>Are you sure you want to proceed with this action?</p>\r
      </Modal>;
  },
  args: {
    title: 'Confirmation Required',
    size: 'sm'
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var C,O,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Full Screen Editor',
    size: 'full',
    children: <div style={{
      height: '1000px',
      background: 'linear-gradient(#fff, #f0f0f0)'
    }}>\r
        <p>Scroll down to see the sticky header/footer behavior.</p>\r
      </div>
  }
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const de=["Default","WithFooter","FullScreen"];export{a as Default,i as FullScreen,l as WithFooter,de as __namedExportsOrder,ce as default};
