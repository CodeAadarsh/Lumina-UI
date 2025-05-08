"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const E=require("./index.cjs23.js"),e=require("react"),k=require("class-variance-authority"),W=require("./index.cjs19.js"),F=k.cva("relative transition-all",{variants:{animation:{none:"",fadeIn:"opacity-0 motion-fade-in",fadeInUp:"opacity-0 translate-y-10 motion-fade-in-up",fadeInDown:"opacity-0 -translate-y-10 motion-fade-in-down",fadeInLeft:"opacity-0 translate-x-10 motion-fade-in-left",fadeInRight:"opacity-0 -translate-x-10 motion-fade-in-right",scaleIn:"opacity-0 scale-95 motion-scale-in",scaleInUp:"opacity-0 scale-95 translate-y-10 motion-scale-in-up",rotateIn:"opacity-0 rotate-12 motion-rotate-in",rotateInLeft:"opacity-0 -rotate-12 motion-rotate-in-left",flipInX:"opacity-0 rotateX-90 motion-flip-in-x",flipInY:"opacity-0 rotateY-90 motion-flip-in-y",tiltIn:"opacity-0 perspective-1000 rotateX-10 motion-tilt-in",bounceIn:"opacity-0 scale-90 motion-bounce-in",blurIn:"opacity-0 blur-sm motion-blur-in",glowIn:"opacity-0 motion-glow-in"},duration:{faster:"motion-duration-300",fast:"motion-duration-500",normal:"motion-duration-700",slow:"motion-duration-1000",slower:"motion-duration-1500"},delay:{none:"motion-delay-0",small:"motion-delay-100",medium:"motion-delay-300",large:"motion-delay-500",extraLarge:"motion-delay-1000"},easing:{linear:"motion-easing-linear",ease:"motion-easing-ease",easeIn:"motion-easing-ease-in",easeOut:"motion-easing-ease-out",easeInOut:"motion-easing-ease-in-out",spring:"motion-easing-spring",bounce:"motion-easing-bounce"},stagger:{none:"motion-stagger-none",small:"motion-stagger-50",medium:"motion-stagger-100",large:"motion-stagger-200"},once:{true:"motion-once",false:""},threshold:{default:"motion-threshold-default",half:"motion-threshold-half",most:"motion-threshold-most",full:"motion-threshold-full"},offset:{none:"motion-offset-none",small:"motion-offset-50",medium:"motion-offset-100",large:"motion-offset-200"}},defaultVariants:{animation:"fadeIn",duration:"normal",delay:"none",easing:"easeOut",stagger:"none",once:!0,threshold:"default",offset:"none"}}),G=t=>{switch(t){case"small":return 100;case"medium":return 300;case"large":return 500;case"extraLarge":return 1e3;default:return 0}},J=t=>{switch(t){case"half":return .5;case"most":return .8;case"full":return 1;default:return .1}},K=t=>{switch(t){case"small":return 50;case"medium":return 100;case"large":return 200;default:return 0}},Q=t=>{switch(t){case"small":return 50;case"medium":return 100;case"large":return 200;default:return 0}},A=t=>{switch(t){case"faster":return 300;case"fast":return 500;case"slow":return 1e3;case"slower":return 1500;default:return 700}},X=e.forwardRef(({animation:t,duration:o,delay:l,easing:c,stagger:n,once:r=!0,threshold:u,offset:d,children:f,as:m="div",className:C="",style:h={},perspective:b=1e3,depth:g=0,rotateX:S=0,rotateY:w=0,rotateZ:v=0,...Y},V)=>{const{theme:L}=W.useTheme(),q=e.useRef(null),y=V||q,[R,M]=e.useState(!1),[D,z]=e.useState(!1),[$,U]=e.useState([]),[j,T]=e.useState(0),Z=F({animation:t,duration:o,delay:l,easing:c,stagger:n,once:r,threshold:u,offset:d,className:C}),I=()=>{if(!y.current)return;const i=y.current.getBoundingClientRect(),x=J(u),p=K(d);i.top+p<=window.innerHeight*x&&i.bottom>=0&&i.left<=window.innerWidth&&i.right>=0?(M(!0),r&&z(!0)):r||M(!1)};e.useEffect(()=>{if(!y.current||n==="none")return;const a=Array.from(y.current.children);U(a),a.forEach(i=>{i.classList.add("opacity-0"),i.style.transition=`opacity ${A(o)}ms, transform ${A(o)}ms ${c||"ease-out"}`}),T(0)},[n,o,c,f]),e.useEffect(()=>{if(!R||n==="none"||$.length===0)return;const a=Q(n),i=G(l),x=p=>{if(p<$.length){const s=$[p];s.classList.remove("opacity-0"),s.classList.add("opacity-100"),t!=null&&t.includes("Up")||t!=null&&t.includes("Down")?s.style.transform="translateY(0)":t!=null&&t.includes("Left")||t!=null&&t.includes("Right")?s.style.transform="translateX(0)":t!=null&&t.includes("scale")?s.style.transform="scale(1)":t!=null&&t.includes("rotate")&&(s.style.transform="rotate(0)"),setTimeout(()=>{T(p+1),x(p+1)},a)}};j===0&&setTimeout(()=>{x(0)},i)},[R,$,j,n,t,l]),e.useEffect(()=>{if(!y.current)return;const a=y.current;if(R)a.style.transform=`
        perspective(${b}px) 
        translateZ(${g}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        rotateZ(0deg)
        scale(1)
      `,a.style.opacity="1";else if(!(r&&D)){const i=t!=null&&t.includes("flipInX")?"90deg":t!=null&&t.includes("tiltIn")?"10deg":S?`${S}deg`:"0deg",x=t!=null&&t.includes("flipInY")?"90deg":w?`${w}deg`:"0deg",p=v?`${v}deg`:"0deg",s=t!=null&&t.includes("scale")||t!=null&&t.includes("bounce")?"0.95":"1";a.style.transform=`
          perspective(${b}px) 
          translateZ(${g}px) 
          rotateX(${i}) 
          rotateY(${x}) 
          rotateZ(${p})
          scale(${s})
        `,a.style.opacity="0"}},[R,D,r,b,g,S,w,v,t]),e.useEffect(()=>(I(),window.addEventListener("scroll",I),window.addEventListener("resize",I),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}),[r,u,d]);const B=m,H={transformStyle:"preserve-3d",willChange:"transform, opacity",...h};return E.jsxRuntimeExports.jsx(B,{ref:y,className:Z,style:H,...Y,children:f})});X.displayName="ScrollMotion";const N=e.forwardRef(({children:t,className:o="",style:l={},...c},n)=>{const r=`transition-all ${o}`;return E.jsxRuntimeExports.jsx("div",{ref:n,className:r,style:l,...c,children:t})});N.displayName="ScrollMotionItem";const O=e.forwardRef(({perspective:t=1e3,depth:o=50,rotateX:l=0,rotateY:c=0,rotateZ:n=0,animation:r="tiltIn",duration:u="normal",easing:d="spring",...f},m)=>E.jsxRuntimeExports.jsx(X,{ref:m,animation:r,duration:u,easing:d,perspective:t,depth:o,rotateX:l,rotateY:c,rotateZ:n,...f}));O.displayName="ScrollMotion3D";const P=e.forwardRef(({speed:t=.5,direction:o="y",children:l,className:c="",style:n={},...r},u)=>{const d=e.useRef(null),f=u||d,[m,C]=e.useState(0),h=()=>{if(!f.current)return;const g=window.scrollY,w=f.current.getBoundingClientRect(),Y=w.top+g+w.height/2,L=g+window.innerHeight/2-Y;C(L*t)};e.useEffect(()=>(window.addEventListener("scroll",h),h(),()=>{window.removeEventListener("scroll",h)}),[t,o]);const b={transform:o==="x"?`translateX(${m}px)`:o==="y"?`translateY(${m}px)`:`translate(${m}px, ${m}px)`,transition:"transform 0.1s linear",willChange:"transform",...n};return E.jsxRuntimeExports.jsx("div",{ref:f,className:c,style:b,...r,children:l})});P.displayName="ParallaxScrollItem";const _=`
/* ScrollMotion Animation Classes */
.motion-fade-in.opacity-0 {
  transition-property: opacity, transform;
}
.motion-fade-in.opacity-100 {
  opacity: 1;
}

.motion-fade-in-up.opacity-0 {
  transform: translateY(40px);
  transition-property: opacity, transform;
}
.motion-fade-in-up.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.motion-fade-in-down.opacity-0 {
  transform: translateY(-40px);
  transition-property: opacity, transform;
}
.motion-fade-in-down.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}

.motion-fade-in-left.opacity-0 {
  transform: translateX(40px);
  transition-property: opacity, transform;
}
.motion-fade-in-left.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.motion-fade-in-right.opacity-0 {
  transform: translateX(-40px);
  transition-property: opacity, transform;
}
.motion-fade-in-right.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.motion-scale-in.opacity-0 {
  transform: scale(0.95);
  transition-property: opacity, transform;
}
.motion-scale-in.opacity-100 {
  opacity: 1;
  transform: scale(1);
}

.motion-scale-in-up.opacity-0 {
  transform: scale(0.95) translateY(40px);
  transition-property: opacity, transform;
}
.motion-scale-in-up.opacity-100 {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.motion-rotate-in.opacity-0 {
  transform: rotate(12deg);
  transition-property: opacity, transform;
}
.motion-rotate-in.opacity-100 {
  opacity: 1;
  transform: rotate(0);
}

.motion-rotate-in-left.opacity-0 {
  transform: rotate(-12deg);
  transition-property: opacity, transform;
}
.motion-rotate-in-left.opacity-100 {
  opacity: 1;
  transform: rotate(0);
}

.motion-flip-in-x.opacity-0 {
  transform: perspective(1000px) rotateX(90deg);
  transition-property: opacity, transform;
}
.motion-flip-in-x.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateX(0);
}

.motion-flip-in-y.opacity-0 {
  transform: perspective(1000px) rotateY(90deg);
  transition-property: opacity, transform;
}
.motion-flip-in-y.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateY(0);
}

.motion-tilt-in.opacity-0 {
  transform: perspective(1000px) rotateX(10deg);
  transition-property: opacity, transform;
}
.motion-tilt-in.opacity-100 {
  opacity: 1;
  transform: perspective(1000px) rotateX(0);
}

.motion-bounce-in.opacity-0 {
  transform: scale(0.9);
  transition-property: opacity, transform;
}
.motion-bounce-in.opacity-100 {
  opacity: 1;
  transform: scale(1);
}

.motion-blur-in.opacity-0 {
  filter: blur(10px);
  transition-property: opacity, filter;
}
.motion-blur-in.opacity-100 {
  opacity: 1;
  filter: blur(0);
}

.motion-glow-in.opacity-0 {
  box-shadow: 0 0 0 rgba(59, 130, 246, 0);
  transition-property: opacity, box-shadow;
}
.motion-glow-in.opacity-100 {
  opacity: 1;
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
}

/* Duration Classes */
.motion-duration-300 {
  transition-duration: 300ms;
}
.motion-duration-500 {
  transition-duration: 500ms;
}
.motion-duration-700 {
  transition-duration: 700ms;
}
.motion-duration-1000 {
  transition-duration: 1000ms;
}
.motion-duration-1500 {
  transition-duration: 1500ms;
}

/* Delay Classes */
.motion-delay-0 {
  transition-delay: 0ms;
}
.motion-delay-100 {
  transition-delay: 100ms;
}
.motion-delay-300 {
  transition-delay: 300ms;
}
.motion-delay-500 {
  transition-delay: 500ms;
}
.motion-delay-1000 {
  transition-delay: 1000ms;
}

/* Easing Classes */
.motion-easing-linear {
  transition-timing-function: linear;
}
.motion-easing-ease {
  transition-timing-function: ease;
}
.motion-easing-ease-in {
  transition-timing-function: ease-in;
}
.motion-easing-ease-out {
  transition-timing-function: ease-out;
}
.motion-easing-ease-in-out {
  transition-timing-function: ease-in-out;
}
.motion-easing-spring {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.motion-easing-bounce {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;exports.ParallaxScrollItem=P;exports.ScrollMotion=X;exports.ScrollMotion3D=O;exports.ScrollMotionItem=N;exports.scrollMotionStyles=_;
//# sourceMappingURL=index.cjs18.js.map
