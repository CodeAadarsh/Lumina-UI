"use strict";const e=require("./index.cjs23.js"),g=require("react"),q=require("class-variance-authority"),A=require("./index.cjs19.js"),L=q.cva("relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:pointer-events-none disabled:opacity-50 will-change-transform",{variants:{variant:{primary:"bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary-darker",secondary:"bg-background-secondary text-foreground-primary hover:bg-background-tertiary active:scale-[0.98]",outline:"border border-border bg-transparent hover:bg-background-secondary active:bg-background-tertiary",ghost:"bg-transparent text-foreground-primary hover:bg-background-secondary active:bg-background-tertiary",destructive:"bg-red-500 text-white hover:bg-red-600 active:bg-red-700",glass:"backdrop-blur-md bg-white/10 border border-white/20 text-foreground-primary hover:bg-white/15 active:bg-white/20","glass-dark":"backdrop-blur-md bg-black/30 border border-white/10 text-white hover:bg-black/40 active:bg-black/50","glass-frost":"backdrop-blur-xl bg-white/20 border border-white/40 text-foreground-primary hover:bg-white/25 active:bg-white/30 shadow-sm","glass-deep":"backdrop-blur-xl bg-black/40 border border-white/5 text-white hover:bg-black/50 active:bg-black/60 shadow-md","glass-premium":"backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 text-white hover:from-white/25 hover:to-white/10 active:from-white/15 active:to-white/5","glass-gradient":"backdrop-blur-md bg-gradient-to-br from-primary/20 to-accent-purple/20 border border-primary/20 text-white hover:from-primary/30 hover:to-accent-purple/30",gradient:"bg-gradient-to-br from-primary to-accent-purple text-white hover:brightness-110 active:brightness-90","gradient-blue-purple":"bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:brightness-110 active:brightness-90","gradient-cyan-blue":"bg-gradient-to-br from-cyan-400 to-blue-600 text-white hover:brightness-110 active:brightness-90","gradient-emerald-cyan":"bg-gradient-to-br from-emerald-500 to-cyan-500 text-white hover:brightness-110 active:brightness-90","gradient-amber-orange":"bg-gradient-to-br from-amber-500 to-orange-500 text-white hover:brightness-110 active:brightness-90","accent-blue":"bg-accent-blue text-white hover:brightness-110 active:brightness-90","accent-purple":"bg-accent-purple text-white hover:brightness-110 active:brightness-90","accent-cyan":"bg-accent-cyan text-white hover:brightness-110 active:brightness-90","accent-pink":"bg-accent-pink text-white hover:brightness-110 active:brightness-90","accent-amber":"bg-amber-500 text-white hover:brightness-110 active:brightness-90","accent-emerald":"bg-emerald-500 text-white hover:brightness-110 active:brightness-90","glow-blue":"bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] active:shadow-[0_0_15px_rgba(59,130,246,0.6)]","glow-purple":"bg-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] active:shadow-[0_0_15px_rgba(139,92,246,0.6)]","glow-cyan":"bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] active:shadow-[0_0_15px_rgba(6,182,212,0.6)]","glow-emerald":"bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] active:shadow-[0_0_15px_rgba(16,185,129,0.6)]","glow-amber":"bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] active:shadow-[0_0_15px_rgba(245,158,11,0.6)]","glow-pink":"bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] active:shadow-[0_0_15px_rgba(236,72,153,0.6)]","glow-white":"bg-white text-gray-900 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] active:shadow-[0_0_15px_rgba(255,255,255,0.6)]","premium-dark":"bg-gray-900 text-white border border-gray-700 hover:bg-gray-800 active:bg-gray-700","premium-light":"bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 active:bg-gray-100","premium-blue":"bg-blue-900 text-white border border-blue-700 hover:bg-blue-800 active:bg-blue-700","premium-purple":"bg-purple-900 text-white border border-purple-700 hover:bg-purple-800 active:bg-purple-700","neumorphic-light":"bg-[#e0e5ec] text-gray-700 shadow-[6px_6px_12px_#b8bec7,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#b8bec7,_-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,_inset_-4px_-4px_8px_#ffffff] dark:bg-[#2d3748] dark:text-gray-100 dark:shadow-[5px_5px_10px_#1e2533,_-5px_-5px_10px_#3c495d] dark:hover:shadow-[3px_3px_6px_#1e2533,_-3px_-3px_6px_#3c495d] dark:active:shadow-[inset_3px_3px_6px_#1e2533,_inset_-3px_-3px_6px_#3c495d]","neumorphic-dark":"bg-[#2a2d3e] text-gray-100 shadow-[6px_6px_12px_#1e2030,_-6px_-6px_12px_#363b50] hover:shadow-[4px_4px_8px_#1e2030,_-4px_-4px_8px_#363b50] active:shadow-[inset_4px_4px_8px_#1e2030,_inset_-4px_-4px_8px_#363b50] dark:bg-[#2a2d3e] dark:text-gray-100 dark:shadow-[5px_5px_10px_#1e2030,_-5px_-5px_10px_#363b50] dark:hover:shadow-[3px_3px_6px_#1e2030,_-3px_-3px_6px_#363b50] dark:active:shadow-[inset_3px_3px_6px_#1e2030,_inset_-3px_-3px_6px_#363b50]","shimmer-light":"bg-white text-gray-900 border border-gray-200 shadow-sm overflow-hidden","shimmer-dark":"bg-gray-900 text-white border border-gray-800 shadow-sm overflow-hidden","shimmer-blue":"bg-blue-600 text-white overflow-hidden","shimmer-purple":"bg-purple-600 text-white overflow-hidden"},size:{xs:"h-7 px-2.5 text-xs",sm:"h-9 px-3 text-sm",md:"h-10 px-4 text-sm",lg:"h-11 px-5 text-base",xl:"h-12 px-6 text-lg","2xl":"h-14 px-8 text-xl",icon:"h-10 w-10 p-0","icon-sm":"h-8 w-8 p-0","icon-lg":"h-12 w-12 p-0"},rounded:{none:"rounded-none",sm:"rounded-sm",md:"rounded",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl",full:"rounded-full"},effect:{none:"",glow:"shadow-blue-glow hover:shadow-purple-glow","glow-sm":"shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]","glow-lg":"shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]","glow-pulse":"animate-[glow-pulse_2s_ease-in-out_infinite]",float:"animate-float",shimmer:"before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent","shimmer-fast":"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent","shimmer-subtle":"before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",gradientBorder:"gradient-border-1",rainbowBorder:"rainbow-border-1",glassBorder:"border border-white/20 backdrop-filter backdrop-blur-sm","glassBorder-strong":"border-2 border-white/30 backdrop-filter backdrop-blur-md",scaleUp:"hover:scale-105 transition-transform duration-300",scaleDown:"hover:scale-95 transition-transform duration-300",magnetic:"transition-transform duration-200",highlight:"before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-[100%] before:transition-transform before:duration-500","highlight-subtle":"before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent hover:before:translate-x-[100%] before:transition-transform before:duration-700"},animation:{none:"",pulse:"animate-pulse","pulse-slow":"animate-[pulse_3s_ease-in-out_infinite]",float:"animate-float","float-slow":"animate-[float_5s_ease-in-out_infinite]",fadeIn:"animate-[fadeIn_0.5s_ease-out]",slideUp:"animate-[slideUp_0.5s_ease-out]",slideDown:"animate-[slideDown_0.5s_ease-out]",slideIn:"animate-[slideIn_0.5s_ease-out]",slideRight:"animate-[slideRight_0.5s_ease-out]",zoomIn:"animate-[zoomIn_0.5s_ease-out]",blurIn:"animate-[blurIn_0.5s_ease-out]"},mode:{none:"","light-only":"dark:hidden","dark-only":"hidden dark:block","light-optimized":"dark:opacity-90 dark:hover:opacity-100","dark-optimized":"opacity-90 hover:opacity-100 dark:opacity-100"},fullWidth:{true:"w-full"}},compoundVariants:[{variant:["glass","glass-frost","glass-premium"],effect:"shimmer",className:"before:via-white/20"},{variant:"shimmer-light",effect:"shimmer",className:"before:via-black/5"},{variant:["gradient-blue-purple","gradient-cyan-blue"],effect:"shimmer",className:"before:via-white/20"},{variant:"neumorphic-light",effect:"scaleDown",className:"hover:shadow-[3px_3px_6px_#b8bec7,_-3px_-3px_6px_#ffffff]"},{variant:["primary","accent-blue","accent-purple","accent-cyan","accent-pink","glow-blue","glow-purple"],className:"focus-visible:ring-white"}],defaultVariants:{variant:"primary",size:"md",rounded:"md",effect:"none",animation:"none",mode:"none"}}),T=(a,r,o,i,m,s)=>{let n=r,b=o,l=i,t=m,d=s;return a==="techDark"&&!r?(n="accent-blue",o||(b="md"),i||(l="glow"),s||(d="dark-optimized")):a==="glass"&&!r?(n="glass-premium",o||(b="xl"),i||(l="glow")):a==="enterprise"&&!r&&(s||(d="light-optimized")),{variant:n,rounded:b,effect:l,animation:t,mode:d}},_=g.memo(({variant:a,size:r,rounded:o,effect:i,animation:m,mode:s,className:n="",children:b,disabled:l=!1,loading:t=!1,fullWidth:d,leftIcon:u,rightIcon:w,...E})=>{const{theme:f,themeObject:U}=A.useTheme(),[v,y]=g.useState({x:0,y:0}),x=g.useRef(null),{variant:N,rounded:z,effect:c,animation:B,mode:I}=T(f,a,o,i,m,s),D=l||t,C=L({variant:N||"primary",size:r,rounded:z,effect:c,animation:B,mode:I,fullWidth:d,className:n});g.useEffect(()=>{if(c==="magnetic"&&x.current){const p=x.current,k=R=>{requestAnimationFrame(()=>{const h=p.getBoundingClientRect(),X=R.clientX-h.left-h.width/2,Y=R.clientY-h.top-h.height/2;y({x:X*.2,y:Y*.2})})},j=()=>{y({x:0,y:0})};return p.addEventListener("mousemove",k),p.addEventListener("mouseleave",j),()=>{p.removeEventListener("mousemove",k),p.removeEventListener("mouseleave",j)}}},[c]);const M=c==="magnetic"?{"--magnetic-x":`${v.x}px`,"--magnetic-y":`${v.y}px`,transform:"translate(var(--magnetic-x), var(--magnetic-y))"}:{},V=f==="techDark"||f==="glass"?"text-opacity-90 hover:text-opacity-100":"";return e.jsxRuntimeExports.jsxs("button",{ref:x,className:C,disabled:D,style:M,...E,children:[t&&e.jsxRuntimeExports.jsxs("svg",{className:"mr-2 h-4 w-4 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsxRuntimeExports.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsxRuntimeExports.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),!t&&u&&e.jsxRuntimeExports.jsx("span",{className:"mr-2",children:u}),e.jsxRuntimeExports.jsx("span",{className:V,children:b}),!t&&w&&e.jsxRuntimeExports.jsx("span",{className:"ml-2",children:w})]})});_.displayName="Button";_.animationKeyframes=`
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes slideUp {
  0% { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideIn {
  0% { transform: translateX(-10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideRight {
  0% { transform: translateX(10px); opacity: 0; }
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

/* Tailwind doesn't include these by default, add them to your tailwind.config.js */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
`;module.exports=_;
//# sourceMappingURL=index.cjs2.js.map
