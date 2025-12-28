import{j as l}from"./jsx-runtime-D7NN_m21.js";import{r as x}from"./iframe-BzsbkQY8.js";import{c as p}from"./index-DLipHefI.js";import"./preload-helper-C1FmrZbK.js";const _="_segmentedControl_cbve4_1",k="_option_cbve4_16",W="_active_cbve4_44",q="_disabled_cbve4_54",o={segmentedControl:_,option:k,active:W,disabled:q},E=[{label:"Workwear",value:"workwear"},{label:"Casual",value:"casual"},{label:"Formal",value:"formal"},{label:"Gym",value:"gym"}];function m({options:a=E,value:c="workwear",onChange:n,className:r}){const t=(e,s)=>{s||n&&n(e)};return l.jsx("div",{className:p(o.segmentedControl,r),children:a.map(e=>{const s=e.value===c;return l.jsx("button",{type:"button",className:p(o.option,{[o.active]:s,[o.disabled]:e.disabled}),onClick:()=>t(e.value,e.disabled),disabled:e.disabled,"aria-pressed":s,children:e.label},e.value)})})}m.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  /**\r
   * The display label for the option.\r
   */\r
  label: string;\r
\r
  /**\r
   * The unique value identifier for the option.\r
   */\r
  value: string;\r
\r
  /**\r
   * Whether the option is disabled.\r
   */\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"The display label for the option."},{key:"value",value:{name:"string",required:!0},description:"The unique value identifier for the option."},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether the option is disabled."}]}}],raw:"SegmentedControlOption[]"},description:"Array of options to display in the segmented control.",defaultValue:{value:`[\r
  { label: 'Workwear', value: 'workwear' },\r
  { label: 'Casual', value: 'casual' },\r
  { label: 'Formal', value: 'formal' },\r
  { label: 'Gym', value: 'gym' },\r
]`,computed:!1}},value:{required:!1,tsType:{name:"string"},description:"The currently selected value.",defaultValue:{value:"'workwear'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when an option is selected."},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the container."}}};const O={title:"Navigation/SegmentedControl",component:m,tags:["autodocs"]},i={render:a=>{const[c,n]=x.useState("workwear");return l.jsx(m,{...a,value:c,onChange:r=>{var t;n(r),(t=a.onChange)==null||t.call(a,r)}})}},d={args:{options:[{label:"All Items",value:"all"},{label:"New Arrivals",value:"new"},{label:"Summer Collection",value:"summer"},{label:"Winter Essentials",value:"winter"},{label:"Best Sellers",value:"best"},{label:"Limited Edition",value:"limited"},{label:"Sale",value:"sale"}],value:"all"},decorators:[a=>l.jsx("div",{style:{maxWidth:"400px"},children:l.jsx(a,{})})]},u={args:{options:[{label:"Standard",value:"std"},{label:"Express",value:"exp"},{label:"Same Day",value:"same",disabled:!0}],value:"std"}};var v,b,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('workwear');
    return <SegmentedControl {...args} value={selected} onChange={v => {
      setSelected(v);
      args.onChange?.(v);
    }} />;
  }
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'All Items',
      value: 'all'
    }, {
      label: 'New Arrivals',
      value: 'new'
    }, {
      label: 'Summer Collection',
      value: 'summer'
    }, {
      label: 'Winter Essentials',
      value: 'winter'
    }, {
      label: 'Best Sellers',
      value: 'best'
    }, {
      label: 'Limited Edition',
      value: 'limited'
    }, {
      label: 'Sale',
      value: 'sale'
    }],
    value: 'all'
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>\r
        <Story />\r
      </div>]
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,w,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Standard',
      value: 'std'
    }, {
      label: 'Express',
      value: 'exp'
    }, {
      label: 'Same Day',
      value: 'same',
      disabled: true
    }],
    value: 'std'
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const I=["Interactive","ManyOptions","WithDisabled"];export{i as Interactive,d as ManyOptions,u as WithDisabled,I as __namedExportsOrder,O as default};
