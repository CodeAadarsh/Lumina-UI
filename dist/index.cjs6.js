"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("./index.cjs23.js"),a=require("react"),p=require("class-variance-authority"),L=require("./index.cjs24.js"),b=require("./index.cjs21.js"),N=p.cva("relative inline-block",{variants:{theme:{enterprise:"text-gray-900",techDark:"text-white",glass:"text-white",neumorphicLight:"text-gray-800",glow:"text-white","3d":"text-gray-900 dark:text-white"},size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl"},weight:{light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},cursor:{bar:"",block:"",underscore:"",none:""},effect:{none:"",glow:"",gradient:"",shadow:""},speed:{slow:"",normal:"",fast:""}},compoundVariants:[{effect:"glow",theme:"enterprise",className:"text-shadow-blue"},{effect:"glow",theme:"techDark",className:"text-shadow-purple"},{effect:"glow",theme:"glass",className:"text-shadow-white"},{effect:"glow",theme:"neumorphicLight",className:"text-shadow-blue-light"},{effect:"glow",theme:"glow",className:"text-shadow-blue-strong"},{effect:"gradient",theme:"enterprise",className:"bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text"},{effect:"gradient",theme:"techDark",className:"bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"},{effect:"gradient",theme:"glass",className:"bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text"},{effect:"gradient",theme:"neumorphicLight",className:"bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"},{effect:"gradient",theme:"glow",className:"bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"},{effect:"shadow",theme:"enterprise",className:"drop-shadow-md"},{effect:"shadow",theme:"techDark",className:"drop-shadow-lg"},{effect:"shadow",theme:"glass",className:"drop-shadow-xl"}],defaultVariants:{theme:"enterprise",size:"md",weight:"normal",cursor:"bar",effect:"none",speed:"normal"}}),A=p.cva("inline-block",{variants:{theme:{enterprise:"bg-blue-500",techDark:"bg-purple-500",glass:"bg-white",neumorphicLight:"bg-blue-500",glow:"bg-blue-500","3d":"bg-blue-500 dark:bg-blue-400"},cursor:{bar:"h-4 w-1",block:"h-4 w-3",underscore:"h-1 w-4 align-bottom mb-0.5",none:"hidden"},effect:{none:"",glow:"shadow-glow",gradient:"",shadow:""}},compoundVariants:[{effect:"glow",theme:"enterprise",className:"shadow-blue-glow"},{effect:"glow",theme:"techDark",className:"shadow-purple-glow"},{effect:"glow",theme:"glass",className:"shadow-white-glow"},{effect:"glow",theme:"glow",className:"shadow-blue-glow-strong"}],defaultVariants:{theme:"enterprise",cursor:"bar",effect:"none"}}),C=({words:u,className:k,theme:v,size:y,weight:T,cursor:m,effect:x,speed:s,onComplete:o,loop:w=!1,delay:f=0,typingDelay:l,...j})=>{const{theme:R}=L.useSafeTheme(),d=v||R,[V,n]=a.useState([]),[S,i]=a.useState(!1),[c,q]=a.useState(!0),t=a.useRef(null),e=a.useRef(null),E=()=>{if(l!==void 0)return l;const r={slow:80,normal:30,fast:10};return r[s]||r.normal};a.useEffect(()=>{if(c)return n([]),i(!1),t.current&&clearTimeout(t.current),e.current&&clearInterval(e.current),t.current=window.setTimeout(()=>{const r=u.split("");let h=-1;e.current=window.setInterval(()=>{h++,n(G=>[...G,r[h]]),h===r.length-1&&(e.current&&clearInterval(e.current),i(!0),o&&o(),w&&(t.current=window.setTimeout(()=>{n([]),i(!1)},2e3)))},E())},f),()=>{t.current&&clearTimeout(t.current),e.current&&clearInterval(e.current)}},[u,c,w,f,s,o,l]);const I=N({theme:d,size:y,weight:T,cursor:m,effect:x,speed:s,className:k}),D=A({theme:d,cursor:m,effect:x}),P=()=>{q(!c)};return g.jsxRuntimeExports.jsxs("span",{className:b.cn(I),onClick:P,...j,children:[V.join(""),!S&&g.jsxRuntimeExports.jsx("span",{className:b.cn(D,"ml-1 animate-blink"),style:{animation:"blink 0.8s infinite"}}),g.jsxRuntimeExports.jsx("style",{jsx:!0,global:!0,children:`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .text-shadow-blue {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }
        .text-shadow-purple {
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
        }
        .text-shadow-white {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
        .text-shadow-blue-light {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
        }
        .text-shadow-blue-strong {
          text-shadow: 0 0 12px rgba(59, 130, 246, 0.8);
        }
        .shadow-blue-glow {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        .shadow-purple-glow {
          box-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
        }
        .shadow-white-glow {
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
        .shadow-blue-glow-strong {
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.8);
        }
      `})]})};exports.TextGenerateEffect=C;exports.textGenerateVariants=N;
//# sourceMappingURL=index.cjs6.js.map
