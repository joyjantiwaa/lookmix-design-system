import{j as e}from"./jsx-runtime-DGop6S_Y.js";import{c as f}from"./index-DdzbqoOO.js";import{r as C}from"./index-C3JiJ1qr.js";const F="_container_1n74m_2",P="_label_1n74m_9",j="_optionsGrid_1n74m_17",k="_option_1n74m_17",w="_active_1n74m_40",E="_colorType_1n74m_61",T="_colorCircle_1n74m_73",a={container:F,label:P,optionsGrid:j,option:k,active:w,colorType:E,colorCircle:T};function u({label:l,options:c,selectedValue:i,onChange:h,type:d="text"}){return e.jsxs("div",{className:a.container,children:[e.jsx("span",{className:a.label,children:l}),e.jsx("div",{className:a.optionsGrid,children:c.map(r=>e.jsx("button",{type:"button",disabled:r.disabled,onClick:()=>h(r.value),className:f(a.option,{[a.active]:i===r.value,[a.colorType]:d==="color"}),title:r.label,children:d==="color"?e.jsx("span",{className:a.colorCircle,style:{backgroundColor:r.color}}):r.label},r.value))})]})}u.__docgenInfo={description:"",methods:[],displayName:"PropertySelector",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
  disabled?: boolean;\r
  color?: string; // สำหรับกรณีเลือกสี\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}],raw:"PropertyOption[]"},description:""},selectedValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'color'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'color'"}]},description:"",defaultValue:{value:"'text'",computed:!1}}}};const B={title:"E-commerce/PropertySelector",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","color"]},onChange:{action:"changed"}}},s=l=>{const[c,i]=C.useState(l.selectedValue||"");return e.jsx(u,{...l,selectedValue:c,onChange:i})},t={render:l=>e.jsx(s,{...l}),args:{label:"Select Size",type:"text",options:[{label:"S",value:"s"},{label:"M",value:"m"},{label:"L",value:"l"},{label:"XL",value:"xl",disabled:!0}],selectedValue:"m"}},o={render:l=>e.jsx(s,{...l}),args:{label:"Select Color",type:"color",options:[{label:"Midnight Black",value:"black",color:"#1A1A1A"},{label:"Cloud White",value:"white",color:"#FFFFFF"},{label:"Pacific Blue",value:"blue",color:"#3B82F6"},{label:"Sunset Red",value:"red",color:"#EF4444"}],selectedValue:"black"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"320px"},children:[e.jsx(s,{label:"Color",type:"color",options:[{label:"Green",value:"g",color:"#22C55E"},{label:"Yellow",value:"y",color:"#EAB308"}]}),e.jsx(s,{label:"Size",type:"text",options:[{label:"38",value:"38"},{label:"39",value:"39"},{label:"40",value:"40"}]})]})};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <PropertySelectorWithState {...args} />,
  args: {
    label: 'Select Size',
    type: 'text',
    options: [{
      label: 'S',
      value: 's'
    }, {
      label: 'M',
      value: 'm'
    }, {
      label: 'L',
      value: 'l'
    }, {
      label: 'XL',
      value: 'xl',
      disabled: true
    } // ตัวอย่างกรณีของหมด
    ],
    selectedValue: 'm'
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,y,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <PropertySelectorWithState {...args} />,
  args: {
    label: 'Select Color',
    type: 'color',
    options: [{
      label: 'Midnight Black',
      value: 'black',
      color: '#1A1A1A'
    }, {
      label: 'Cloud White',
      value: 'white',
      color: '#FFFFFF'
    }, {
      label: 'Pacific Blue',
      value: 'blue',
      color: '#3B82F6'
    }, {
      label: 'Sunset Red',
      value: 'red',
      color: '#EF4444'
    }],
    selectedValue: 'black'
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var S,x,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '320px'
  }}>\r
      <PropertySelectorWithState label="Color" type="color" options={[{
      label: 'Green',
      value: 'g',
      color: '#22C55E'
    }, {
      label: 'Yellow',
      value: 'y',
      color: '#EAB308'
    }]} />\r
      <PropertySelectorWithState label="Size" type="text" options={[{
      label: '38',
      value: '38'
    }, {
      label: '39',
      value: '39'
    }, {
      label: '40',
      value: '40'
    }]} />\r
    </div>
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const N=["SizeSelector","ColorSelector","ProductDetailPreview"];export{o as ColorSelector,n as ProductDetailPreview,t as SizeSelector,N as __namedExportsOrder,B as default};
