"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const d=require("./index.cjs23.js"),u=require("react"),S=require("class-variance-authority"),c=require("./index.cjs19.js"),T=S.cva("transition-all relative",{variants:{variant:{default:"bg-background-secondary border border-border",elevated:"bg-background-secondary border border-border shadow-md",glass:"backdrop-blur-md bg-white/10 border border-white/20","glass-premium":"backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg","glass-frost":"backdrop-blur-xl bg-white/5 border-t border-l border-white/20 shadow-xl","glass-dark":"backdrop-blur-md bg-black/40 border border-white/10",outline:"border border-border bg-transparent",solid:"bg-background-tertiary border border-border","gradient-subtle":"bg-gradient-to-br from-background-primary to-background-secondary border border-border","gradient-blue":"bg-gradient-to-br from-blue-500/10 to-background-primary border border-blue-500/20","gradient-purple":"bg-gradient-to-br from-purple-500/10 to-background-primary border border-purple-500/20","gradient-cyan":"bg-gradient-to-br from-cyan-500/10 to-background-primary border border-cyan-500/20","gradient-emerald":"bg-gradient-to-br from-emerald-500/10 to-background-primary border border-emerald-500/20","dark-elevated":"bg-gray-900 border border-gray-800 shadow-xl","dark-glass":"bg-gray-900/80 backdrop-blur-md border border-gray-800/50","dark-gradient":"bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/30","glow-blue":"bg-background-secondary border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]","glow-purple":"bg-background-secondary border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]","glow-cyan":"bg-background-secondary border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]","glow-emerald":"bg-background-secondary border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]","glow-amber":"bg-background-secondary border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]","glow-pink":"bg-background-secondary border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]","premium-blue":"bg-blue-950 border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.4),_inset_0_0_20px_rgba(59,130,246,0.2)]","premium-purple":"bg-purple-950 border border-purple-500/50 shadow-[0_0_20px_rgba(139,92,246,0.4),_inset_0_0_20px_rgba(139,92,246,0.2)]","premium-cyan":"bg-cyan-950 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4),_inset_0_0_20px_rgba(6,182,212,0.2)]","premium-emerald":"bg-emerald-950 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.4),_inset_0_0_20px_rgba(16,185,129,0.2)]","gradient-blue-purple":"bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white border border-white/10","gradient-cyan-blue":"bg-gradient-to-br from-cyan-500/90 to-blue-600/90 text-white border border-white/10","gradient-emerald-cyan":"bg-gradient-to-br from-emerald-500/90 to-cyan-500/90 text-white border border-white/10","gradient-amber-orange":"bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white border border-white/10","neumorphic-light":"bg-[#e0e5ec] text-gray-700 shadow-[6px_6px_12px_#b8bec7,_-6px_-6px_12px_#ffffff]","neumorphic-dark":"bg-[#2a2d3e] text-gray-100 shadow-[6px_6px_12px_#1e2030,_-6px_-6px_12px_#363b50]","shimmer-light":"bg-gray-50 border border-gray-200","shimmer-dark":"bg-gray-900 border border-gray-800"},padding:{none:"",xs:"p-2",sm:"p-3",md:"p-5",lg:"p-7",xl:"p-9"},rounded:{none:"rounded-none",sm:"rounded-sm",md:"rounded",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl","3xl":"rounded-3xl",full:"rounded-[28px]"},effect:{none:"",hover:"hover:shadow-lg hover:-translate-y-1","hover-subtle":"hover:shadow-md hover:-translate-y-0.5","hover-glow":"hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",glow:"shadow-blue-glow","glow-sm":"shadow-[0_0_10px_rgba(59,130,246,0.2)]","glow-lg":"shadow-[0_0_30px_rgba(59,130,246,0.3)]","glow-pulse":"animate-[glow-pulse_2s_ease-in-out_infinite]","purple-glow":"shadow-purple-glow","multi-glow":"shadow-multi-glow",gradientBorder:"gradient-border-1",rainbowBorder:"rainbow-border-1",pulseBorder:"animate-[border-pulse_2s_ease-in-out_infinite]",float:"animate-float",shimmer:"overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full after:animate-shimmer-contained after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent","shimmer-fast":"overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full after:animate-[shimmer-contained_1s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent","shimmer-subtle":"overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:-translate-x-full after:animate-shimmer-contained after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent",glassBorder:"border border-white/20 backdrop-filter backdrop-blur-sm","glassBorder-strong":"border-2 border-white/30 backdrop-filter backdrop-blur-md",scaleUp:"hover:scale-105 transition-transform duration-300",scaleDown:"hover:scale-95 transition-transform duration-300",highlight:"overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent hover:after:translate-x-[100%] after:transition-transform after:duration-500","highlight-subtle":"overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent hover:after:translate-x-[100%] after:transition-transform after:duration-700","tilt-3d":"transform-style-preserve-3d transition-transform duration-300"},animation:{none:"",pulse:"animate-pulse","pulse-slow":"animate-[pulse_3s_ease-in-out_infinite]",float:"animate-float","float-slow":"animate-[float_5s_ease-in-out_infinite]",fadeIn:"animate-[fadeIn_0.5s_ease-out]",slideUp:"animate-[slideUp_0.5s_ease-out]",slideDown:"animate-[slideDown_0.5s_ease-out]",slideIn:"animate-[slideIn_0.5s_ease-out]",slideRight:"animate-[slideRight_0.5s_ease-out]",zoomIn:"animate-[zoomIn_0.5s_ease-out]",blurIn:"animate-[blurIn_0.5s_ease-out]"},border:{none:"border-0",thin:"border border-border/50",default:"border border-border",strong:"border-2 border-border-strong",focus:"border border-border-focus",accent:"border-l-4 border border-primary",bottom:"border-b-2 border-b-border border-x-0 border-t-0",top:"border-t-2 border-t-border border-x-0 border-b-0"}},compoundVariants:[{variant:"glass",effect:"glow",className:"shadow-blue-glow"},{variant:"glass-premium",effect:"purple-glow",className:"shadow-purple-glow"},{variant:"glass-frost",effect:"glow",className:"shadow-[0_0_20px_rgba(255,255,255,0.15)]"},{variant:"shimmer-light",effect:"shimmer",className:"overflow-hidden after:via-black/5"},{variant:"shimmer-dark",effect:"shimmer",className:"overflow-hidden after:via-white/10"},{variant:["gradient-blue-purple","gradient-cyan-blue","gradient-emerald-cyan","gradient-amber-orange"],effect:"shimmer",className:"overflow-hidden after:via-white/15"},{variant:"premium-blue",effect:"glow-pulse",className:"animate-[glow-pulse-blue_3s_ease-in-out_infinite]"},{variant:"premium-purple",effect:"glow-pulse",className:"animate-[glow-pulse-purple_3s_ease-in-out_infinite]"},{variant:"neumorphic-light",effect:"hover",className:"hover:shadow-[4px_4px_8px_#b8bec7,_-4px_-4px_8px_#ffffff]"},{variant:"neumorphic-dark",effect:"hover",className:"hover:shadow-[4px_4px_8px_#1e2030,_-4px_-4px_8px_#363b50]"}],defaultVariants:{variant:"default",padding:"md",rounded:"lg",effect:"none",animation:"none",border:"default"}}),P=(e,r,a,t,s,o)=>{let i=r,l=a,b=t,p=s,n=o;return e==="techDark"&&!r?(i="dark-elevated",a||(l="lg"),t||(b="glow-sm"),o||(n="default")):e==="glass"&&!r&&(i="glass-premium",a||(l="xl"),t||(b="glow"),o||(n="thin")),{variant:i,rounded:l,effect:b,animation:p,border:n}},y=({variant:e,padding:r,rounded:a,effect:t,animation:s,border:o,className:i="",children:l,...b})=>{const{theme:p}=c.useTheme(),n=u.useRef(null),[v,h]=u.useState({}),{variant:k,rounded:C,effect:m,animation:j,border:B}=P(p,e,a,t,s,o),N=[T({variant:k,padding:r,rounded:C,effect:m,animation:j,border:B}),i].filter(Boolean).join(" ");return u.useEffect(()=>{if(m==="tilt-3d"&&n.current){const f=n.current,_=w=>{const g=f.getBoundingClientRect(),R=w.clientX-g.left,E=w.clientY-g.top,I=g.width/2,Y=g.height/2,X=(E-Y)/20,D=(I-R)/20;h({transform:`perspective(1000px) rotateX(${X}deg) rotateY(${D}deg)`})},x=()=>{h({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg)"})};return f.addEventListener("mousemove",_),f.addEventListener("mouseleave",x),()=>{f.removeEventListener("mousemove",_),f.removeEventListener("mouseleave",x)}}},[m]),d.jsxRuntimeExports.jsx("div",{ref:n,className:N,style:m==="tilt-3d"?v:{},...b,children:l})},V=({className:e="",children:r,...a})=>{const{theme:t}=c.useTheme(),o=[`px-5 py-4 ${t==="glass"?"border-b border-white/10":"border-b border-border"}`,e].filter(Boolean).join(" ");return d.jsxRuntimeExports.jsx("div",{className:o,...a,children:r})},$=({className:e="",children:r,...a})=>{const t=["text-xl font-semibold text-foreground-primary",e].filter(Boolean).join(" ");return d.jsxRuntimeExports.jsx("h3",{className:t,...a,children:r})},q=({className:e="",children:r,...a})=>{const t=["mt-1 text-sm text-foreground-tertiary",e].filter(Boolean).join(" ");return d.jsxRuntimeExports.jsx("p",{className:t,...a,children:r})},L=({className:e="",children:r,...a})=>{const o=[/p[xytlrb]?-\d+/.test(e)?"":"p-5",e].filter(Boolean).join(" ");return d.jsxRuntimeExports.jsx("div",{className:o,...a,children:r})},M=({className:e="",children:r,...a})=>{const{theme:t}=c.useTheme(),o=[`px-5 py-4 ${t==="glass"?"border-t border-white/10":"border-t border-border"}`,e].filter(Boolean).join(" ");return d.jsxRuntimeExports.jsx("div",{className:o,...a,children:r})};y.animationKeyframes=`
/* FIXED: Contained shimmer animation that stays within boundaries */
@keyframes shimmer-contained {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
}

@keyframes glow-pulse-blue {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(59, 130, 246, 0.3); }
}

@keyframes glow-pulse-purple {
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.2); }
  50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6), inset 0 0 30px rgba(139, 92, 246, 0.3); }
}

@keyframes border-pulse {
  0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
  50% { border-color: rgba(59, 130, 246, 0.6); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideRight {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes zoomIn {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes blurIn {
  0% { filter: blur(5px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;exports.Card=y;exports.CardContent=L;exports.CardDescription=q;exports.CardFooter=M;exports.CardHeader=V;exports.CardTitle=$;
//# sourceMappingURL=index.cjs4.js.map
