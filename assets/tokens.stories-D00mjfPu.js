import{j as n}from"./jsx-runtime-Clm7cEE4.js";import{j}from"./iframe-DG-dEiUR.js";import"./preload-helper-C1FmrZbK.js";const o=j(),O={title:"Foundation/Tokens",parameters:{layout:"padded"}},r=({title:e,children:t})=>n.jsxs("div",{style:{marginBottom:"40px"},children:[n.jsx("h2",{style:{borderBottom:"2px solid #eee",paddingBottom:"10px",marginBottom:"20px",fontFamily:"sans-serif"},children:e}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:t})]}),l=({name:e,value:t})=>n.jsxs("div",{style:{border:"1px solid #eee",borderRadius:"8px",overflow:"hidden",backgroundColor:"#fff"},children:[n.jsx("div",{style:{backgroundColor:t,height:"80px",width:"100%"}}),n.jsxs("div",{style:{padding:"10px"},children:[n.jsx("div",{style:{fontWeight:"bold",fontSize:"14px",color:"#333"},children:e}),n.jsx("div",{style:{fontSize:"12px",color:"#666",fontFamily:"monospace"},children:t})]})]}),s=({name:e,value:t,style:i})=>n.jsxs("div",{style:{border:"1px solid #eee",borderRadius:"8px",padding:"10px",...i},children:[n.jsx("div",{style:{fontWeight:"bold",fontSize:"14px",color:"#333"},children:e}),n.jsx("div",{style:{fontSize:"12px",color:"#666",fontFamily:"monospace"},children:t})]});function a(e){return Object.entries(e).map(([t,i])=>[t,String(i)])}const p={render:()=>n.jsxs("div",{children:[n.jsx(r,{title:"Primary Colors",children:a(o.colors.primary).map(([e,t])=>n.jsx(l,{name:e,value:t},e))}),n.jsx(r,{title:"Secondary Colors",children:a(o.colors.secondary).map(([e,t])=>n.jsx(l,{name:e,value:t},e))}),n.jsx(r,{title:"Surface Colors",children:a(o.colors.surface).map(([e,t])=>n.jsx(l,{name:e,value:t},e))}),n.jsx(r,{title:"Text Colors",children:a(o.colors.text).map(([e,t])=>n.jsx(l,{name:e,value:t},e))}),n.jsx(r,{title:"Status Colors",children:Object.entries(o.colors.status).map(([e,t])=>a(t).map(([i,f])=>n.jsx(l,{name:`${e}.${i}`,value:f},`${e}-${i}`)))}),n.jsx(r,{title:"Overlay",children:n.jsx(l,{name:"overlay",value:o.colors.overlay})})]})},y={render:()=>n.jsxs("div",{style:{fontFamily:o.typography.fontFamily},children:[n.jsx(r,{title:"Font Sizes - Display",children:a(o.typography.sizes.display).map(([e,t])=>n.jsx(s,{name:e,value:t,style:{fontSize:t}},e))}),n.jsx(r,{title:"Font Sizes - Heading",children:a(o.typography.sizes.heading).map(([e,t])=>n.jsx(s,{name:e,value:t,style:{fontSize:t}},e))}),n.jsx(r,{title:"Font Sizes - Body",children:a(o.typography.sizes.body).map(([e,t])=>n.jsx(s,{name:e,value:t,style:{fontSize:t}},e))}),n.jsx(r,{title:"Font Sizes - Caption",children:a(o.typography.sizes.caption).map(([e,t])=>n.jsx(s,{name:e,value:t,style:{fontSize:t}},e))}),n.jsx(r,{title:"Line Height",children:a(o.typography.lineHeight).map(([e,t])=>n.jsx(s,{name:e,value:t},e))}),n.jsx(r,{title:"Font Weight",children:a(o.typography.fontWeight).map(([e,t])=>n.jsx(s,{name:e,value:t},e))}),n.jsx(r,{title:"Letter Spacing",children:a(o.typography.letterSpacing).map(([e,t])=>n.jsx(s,{name:e,value:t},e))})]})},c={render:()=>n.jsx(r,{title:"Spacing Scale",children:a(o.spacing).map(([e,t])=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx("div",{style:{width:t,height:"20px",backgroundColor:o.colors.primary.default}}),n.jsxs("span",{style:{fontSize:"12px"},children:[e," (",t,")"]})]},e))})};var d,m,k;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div>\r
      <TokenSection title="Primary Colors">\r
        {entriesOf(tokens.colors.primary).map(([key, value]) => <ColorCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Secondary Colors">\r
        {entriesOf(tokens.colors.secondary).map(([key, value]) => <ColorCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Surface Colors">\r
        {entriesOf(tokens.colors.surface).map(([key, value]) => <ColorCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Text Colors">\r
        {entriesOf(tokens.colors.text).map(([key, value]) => <ColorCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Status Colors">\r
        {Object.entries(tokens.colors.status).map(([status, sub]) => entriesOf(sub as Record<string, unknown>).map(([key, value]) => <ColorCard key={\`\${status}-\${key}\`} name={\`\${status}.\${key}\`} value={value} />))}\r
      </TokenSection>\r
\r
      <TokenSection title="Overlay">\r
        <ColorCard name="overlay" value={tokens.colors.overlay as string} />\r
      </TokenSection>\r
    </div>
}`,...(k=(m=p.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var x,u,S;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: tokens.typography.fontFamily
  }}>\r
      <TokenSection title="Font Sizes - Display">\r
        {entriesOf(tokens.typography.sizes.display).map(([key, value]) => <TextCard key={key} name={key} value={value} style={{
        fontSize: value
      }} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Font Sizes - Heading">\r
        {entriesOf(tokens.typography.sizes.heading).map(([key, value]) => <TextCard key={key} name={key} value={value} style={{
        fontSize: value
      }} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Font Sizes - Body">\r
        {entriesOf(tokens.typography.sizes.body).map(([key, value]) => <TextCard key={key} name={key} value={value} style={{
        fontSize: value
      }} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Font Sizes - Caption">\r
        {entriesOf(tokens.typography.sizes.caption).map(([key, value]) => <TextCard key={key} name={key} value={value} style={{
        fontSize: value
      }} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Line Height">\r
        {entriesOf(tokens.typography.lineHeight).map(([key, value]) => <TextCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Font Weight">\r
        {entriesOf(tokens.typography.fontWeight).map(([key, value]) => <TextCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
\r
      <TokenSection title="Letter Spacing">\r
        {entriesOf(tokens.typography.letterSpacing).map(([key, value]) => <TextCard key={key} name={key} value={value} />)}\r
      </TokenSection>\r
    </div>
}`,...(S=(u=y.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,g,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <TokenSection title="Spacing Scale">\r
      {entriesOf(tokens.spacing).map(([key, value]) => <div key={key} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>\r
          <div style={{
        width: value,
        height: '20px',
        backgroundColor: tokens.colors.primary.default
      }} />\r
          <span style={{
        fontSize: '12px'
      }}>{key} ({value})</span>\r
        </div>)}\r
    </TokenSection>
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const b=["ColorPalette","Typography","Spacing"];export{p as ColorPalette,c as Spacing,y as Typography,b as __namedExportsOrder,O as default};
