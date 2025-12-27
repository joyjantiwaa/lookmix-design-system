import{j as e}from"./jsx-runtime-Clm7cEE4.js";import{c as D}from"./index-B64kcLyW.js";import{B as E}from"./button-dP6pKN74.js";import{H as F}from"./heading-4hneTzQK.js";import{P as G}from"./paragraph-yTbgQMqT.js";import{I as v}from"./image-BX8cwRsH.js";import"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";import"./link-CdhBFSX1.js";const J="_banner_cfa3x_1",K="_background_cfa3x_14",Q="_overlay_cfa3x_25",X="_content_cfa3x_36",Y="_hero_cfa3x_48",Z="_title_cfa3x_53",$="_subtitle_cfa3x_59",ee="_promotional_cfa3x_64",te="_alert_cfa3x_78",re="_textWrapper_cfa3x_95",ae="_actions_cfa3x_108",ne="_center_cfa3x_113",oe="_left_cfa3x_125",se="_right_cfa3x_133",ie="_inverse_cfa3x_150",le="_foregroundImageWrapper_cfa3x_158",t={banner:J,background:K,overlay:Q,content:X,hero:Y,title:Z,subtitle:$,promotional:ee,alert:te,textWrapper:re,actions:ae,center:ne,left:oe,right:se,inverse:ie,foregroundImageWrapper:le};function L({title:l,subtitle:c,ctaText:p,ctaHref:H,onCtaClick:B,action:m,backgroundImage:u,foregroundImage:g,variant:d="hero",align:W="center",overlay:P=!1,inverse:r=!1,className:V,children:U,style:M,...O}){const f=d==="alert",z=f?"h6":d==="hero"?"h1":"h2",h=m||(p?e.jsx(E,{appearance:r?"secondary":"primary",href:H,onClick:B,children:p}):null);return e.jsxs("div",{className:D(t.banner,t[d],t[W],{[t.inverse]:r},V),style:M,...O,children:[u&&e.jsxs(e.Fragment,{children:[e.jsx(v,{src:u,alt:"",className:t.background,fit:"cover"}),P&&e.jsx("div",{className:t.overlay})]}),e.jsxs("div",{className:t.content,children:[(l||c)&&e.jsxs("div",{className:t.textWrapper,children:[l&&e.jsx(F,{level:z,className:t.title,inverseColor:r,children:l}),c&&e.jsx(G,{size:f?"body-small":"body-large",color:r?"inverse":"primary",className:t.subtitle,children:c})]}),h&&e.jsx("div",{className:t.actions,children:h}),U,g&&e.jsx("div",{className:t.foregroundImageWrapper,children:e.jsx(v,{src:g,alt:"Banner Visual",width:"auto",height:"auto"})})]})]})}L.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Primary headline text for the banner."},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Secondary description text or supporting copy."},ctaText:{required:!1,tsType:{name:"string"},description:"Label for the primary call-to-action button.\r\nIf provided along with `onCtaClick` or `ctaHref`, a Button will be rendered."},ctaHref:{required:!1,tsType:{name:"string"},description:"URL for the call-to-action button navigation."},onCtaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function for the call-to-action button click."},action:{required:!1,tsType:{name:"ReactNode"},description:"Custom action element to replace the default CTA button or add secondary actions."},backgroundImage:{required:!1,tsType:{name:"string"},description:`URL for the background image.\r
If provided, the banner will render an absolute positioned image behind the content.`},foregroundImage:{required:!1,tsType:{name:"string"},description:`URL for a foreground image (e.g., a product shot or phone mockup).\r
Renders below the text in default layout.`},variant:{required:!1,tsType:{name:"union",raw:"'hero' | 'promotional' | 'alert'",elements:[{name:"literal",value:"'hero'"},{name:"literal",value:"'promotional'"},{name:"literal",value:"'alert'"}]},description:"Visual style variant of the banner.\r\n- `hero`: Large padding, display typography, full width.\r\n- `promotional`: Medium padding, standard heading sizes.\r\n- `alert`: Compact, row layout (on desktop), intended for notifications.\r\n@default 'hero'",defaultValue:{value:"'hero'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`Text and content alignment.\r
@default 'center'`,defaultValue:{value:"'center'",computed:!1}},overlay:{required:!1,tsType:{name:"boolean"},description:`Whether to apply a semi-transparent dark overlay on the background image\r
to improve text readability.\r
@default false`,defaultValue:{value:"false",computed:!1}},inverse:{required:!1,tsType:{name:"boolean"},description:`Inverts text colors to white.\r
Useful when using dark background images or colors.\r
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom inline styles."},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional content to render inside the banner content area."}}};const xe={title:"Data Display/Banner",component:L,tags:["autodocs"],argTypes:{variant:{control:"select",options:["hero","promotional","alert"]},align:{control:"radio",options:["left","center","right"]},overlay:{control:"boolean"},inverse:{control:"boolean"},backgroundImage:{control:"text"},foregroundImage:{control:"text"}}},a={args:{variant:"hero",title:"Summer Collection 2024",subtitle:"ค้นพบสไตล์ใหม่ที่บ่งบอกความเป็นคุณ พร้อมส่วนลดสูงสุด 50% เฉพาะสมาชิก Lookmix เท่านั้น",ctaText:"ช้อปเลยตอนนี้",backgroundImage:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",overlay:!0,inverse:!0,align:"center"}},n={args:{variant:"promotional",title:"สมัครรับข่าวสาร",subtitle:"ไม่พลาดทุกโปรโมชั่นเด็ดและสินค้าใหม่ล่าสุด ส่งตรงถึงอีเมลคุณทุกสัปดาห์",ctaText:"ลงทะเบียน",align:"left",inverse:!1,style:{backgroundColor:"var(--colors-primary-subtle)"}}},o={args:{variant:"alert",title:"ส่งฟรีทุกออเดอร์!",subtitle:"เมื่อมียอดซื้อครบ 999 บาทขึ้นไป ภายในเดือนนี้เท่านั้น",ctaText:"ดูรายละเอียด",inverse:!1}},s={args:{variant:"hero",title:"Lookmix App",subtitle:"ช้อปสะดวกกว่าเดิมบนแอปพลิเคชัน ดาวน์โหลดได้แล้ววันนี้ทั้ง iOS และ Android",ctaText:"ดาวน์โหลดแอป",backgroundImage:"https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029",foregroundImage:"https://cdn-icons-png.flaticon.com/512/888/888857.png",overlay:!0,inverse:!0,align:"center"}},i={args:{variant:"hero",title:"ใหม่! คอลเลกชันฤดูหนาว",subtitle:"เตรียมตัวรับลมหนาวด้วยเสื้อผ้าคุณภาพเยี่ยม ดีไซน์ทันสมัย",ctaText:"ดูสินค้าทั้งหมด",backgroundImage:"https://images.unsplash.com/photo-1520975954732-35dd2229969e?q=80&w=1974",align:"left",inverse:!0,overlay:!0}};var b,x,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'hero',
    title: 'Summer Collection 2024',
    subtitle: 'ค้นพบสไตล์ใหม่ที่บ่งบอกความเป็นคุณ พร้อมส่วนลดสูงสุด 50% เฉพาะสมาชิก Lookmix เท่านั้น',
    ctaText: 'ช้อปเลยตอนนี้',
    backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    overlay: true,
    inverse: true,
    // ใช้สีขาวเพื่อให้เด่นบนรูปเข้ม
    align: 'center'
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var _,k,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'promotional',
    title: 'สมัครรับข่าวสาร',
    subtitle: 'ไม่พลาดทุกโปรโมชั่นเด็ดและสินค้าใหม่ล่าสุด ส่งตรงถึงอีเมลคุณทุกสัปดาห์',
    ctaText: 'ลงทะเบียน',
    align: 'left',
    inverse: false,
    style: {
      backgroundColor: 'var(--colors-primary-subtle)'
    } // ทดลองเปลี่ยนสีพื้นหลัง
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var q,w,I;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'alert',
    title: 'ส่งฟรีทุกออเดอร์!',
    subtitle: 'เมื่อมียอดซื้อครบ 999 บาทขึ้นไป ภายในเดือนนี้เท่านั้น',
    ctaText: 'ดูรายละเอียด',
    inverse: false
  }
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var C,N,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'hero',
    title: 'Lookmix App',
    subtitle: 'ช้อปสะดวกกว่าเดิมบนแอปพลิเคชัน ดาวน์โหลดได้แล้ววันนี้ทั้ง iOS และ Android',
    ctaText: 'ดาวน์โหลดแอป',
    backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029',
    foregroundImage: 'https://cdn-icons-png.flaticon.com/512/888/888857.png',
    // ตัวอย่างรูป mockup
    overlay: true,
    inverse: true,
    align: 'center'
  }
}`,...(A=(N=s.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var j,S,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'hero',
    title: 'ใหม่! คอลเลกชันฤดูหนาว',
    subtitle: 'เตรียมตัวรับลมหนาวด้วยเสื้อผ้าคุณภาพเยี่ยม ดีไซน์ทันสมัย',
    ctaText: 'ดูสินค้าทั้งหมด',
    backgroundImage: 'https://images.unsplash.com/photo-1520975954732-35dd2229969e?q=80&w=1974',
    align: 'left',
    inverse: true,
    overlay: true
  }
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const ye=["Hero","Promotional","AlertBanner","MobileAppHero","LeftAlignedHero"];export{o as AlertBanner,a as Hero,i as LeftAlignedHero,s as MobileAppHero,n as Promotional,ye as __namedExportsOrder,xe as default};
