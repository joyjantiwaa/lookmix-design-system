import{j as a}from"./jsx-runtime-D7NN_m21.js";import{r as _}from"./iframe-BzsbkQY8.js";import{c as S}from"./index-DLipHefI.js";import"./preload-helper-C1FmrZbK.js";const x="_container_1n74m_2",y="_label_1n74m_9",C="_optionsGrid_1n74m_17",g="_option_1n74m_17",L="_active_1n74m_40",j="_colorType_1n74m_61",h="_colorCircle_1n74m_73",e={container:x,label:y,optionsGrid:C,option:g,active:L,colorType:j,colorCircle:h},M=({label:b,options:f,type:n="text",defaultValue:p})=>{const[m,v]=_.useState(p);return a.jsxs("div",{className:e.container,children:[a.jsx("span",{className:e.label,children:b}),a.jsx("div",{className:e.optionsGrid,children:f.map(l=>a.jsx("button",{disabled:l.disabled,className:S(e.option,{[e.active]:m===l.value,[e.colorType]:n==="color"}),onClick:()=>v(l.value),children:n==="color"?a.jsx("span",{className:e.colorCircle,style:{backgroundColor:l.value}}):l.label},l.value))})]})},E={title:"E-commerce/PropertySelector",component:M,tags:["autodocs"]},o={args:{label:"Select Size",type:"text",defaultValue:"M",options:[{label:"S",value:"S",disabled:!1},{label:"M",value:"M",disabled:!1},{label:"L",value:"L",disabled:!0},{label:"XL",value:"XL",disabled:!1}]}},s={args:{label:"Select Color",type:"color",defaultValue:"#000000",options:[{label:"Black",value:"#000000",disabled:!1},{label:"White",value:"#ffffff",disabled:!1},{label:"Red",value:"#ff0000",disabled:!1},{label:"Blue",value:"#0000ff",disabled:!0}]}};var t,r,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Select Size',
    type: 'text',
    defaultValue: 'M',
    options: [{
      label: 'S',
      value: 'S',
      disabled: false
    }, {
      label: 'M',
      value: 'M',
      disabled: false
    }, {
      label: 'L',
      value: 'L',
      disabled: true
    },
    // ของหมด
    {
      label: 'XL',
      value: 'XL',
      disabled: false
    }]
  }
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,d,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Select Color',
    type: 'color',
    defaultValue: '#000000',
    options: [{
      label: 'Black',
      value: '#000000',
      disabled: false
    }, {
      label: 'White',
      value: '#ffffff',
      disabled: false
    }, {
      label: 'Red',
      value: '#ff0000',
      disabled: false
    }, {
      label: 'Blue',
      value: '#0000ff',
      disabled: true
    }]
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const G=["SizeSelector","ColorSelector"];export{s as ColorSelector,o as SizeSelector,G as __namedExportsOrder,E as default};
