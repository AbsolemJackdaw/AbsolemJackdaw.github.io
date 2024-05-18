import{s as G,n as T,r as R,c as U,e as W,u as X,g as Z,f as ee}from"../chunks/scheduler.BfJEPAwo.js";import{S as J,i as K,e as v,t as A,s as I,c as g,a as x,b as S,d as b,f as q,l as c,g as Q,h as i,A as w,q as re,r as se,u as te,m as Y,o as F,v as ae}from"../chunks/index.Dj_E9Es6.js";import{p as oe}from"../chunks/stores.BDeiDgz3.js";const le=!0,_e=Object.freeze(Object.defineProperty({__proto__:null,prerender:le},Symbol.toStringTag,{value:"Module"}));function ne(a){let t,e,s,n,l,f,m,o,r,u,d,y,E,M,h,O,$,H,N;return{c(){t=v("nav"),e=v("div"),s=v("a"),n=A("Home"),f=I(),m=v("a"),o=A("Mods"),u=I(),d=v("a"),y=A("Software"),M=I(),h=v("a"),O=A("About"),this.h()},l(_){t=g(_,"NAV",{class:!0});var p=x(t);e=g(p,"DIV",{class:!0});var k=x(e);s=g(k,"A",{href:!0,class:!0});var B=x(s);n=S(B,"Home"),B.forEach(b),f=q(k),m=g(k,"A",{href:!0,class:!0});var C=x(m);o=S(C,"Mods"),C.forEach(b),u=q(k),d=g(k,"A",{href:!0,class:!0});var L=x(d);y=S(L,"Software"),L.forEach(b),M=q(k),h=g(k,"A",{href:!0,class:!0});var P=x(h);O=S(P,"About"),P.forEach(b),k.forEach(b),p.forEach(b),this.h()},h(){c(s,"href",D),c(s,"class",l="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(a[0]===D?"border-b-4":"")),c(m,"href",V),c(m,"class",r="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(a[0]===V?"border-b-4":"")),c(d,"href",j),c(d,"class",E="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(a[0]===j?"border-b-4":"")),c(h,"href",z),c(h,"class",$="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(a[0]===z?"border-b-4":"")),c(e,"class",""),c(t,"class","z-10 items-center justify-center flex fixed w-full bg-gradient-to-b from-indigo-500 from-20% via-purple-500 via-80% to-pink-400 p-6 mx-auto text-green-300 capitalize text-2xl")},m(_,p){Q(_,t,p),i(t,e),i(e,s),i(s,n),i(e,f),i(e,m),i(m,o),i(e,u),i(e,d),i(d,y),i(e,M),i(e,h),i(h,O),H||(N=[w(s,"click",a[3]),w(m,"click",a[4]),w(d,"click",a[5]),w(h,"click",a[6])],H=!0)},p(_,[p]){p&1&&l!==(l="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(_[0]===D?"border-b-4":""))&&c(s,"class",l),p&1&&r!==(r="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(_[0]===V?"border-b-4":""))&&c(m,"class",r),p&1&&E!==(E="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(_[0]===j?"border-b-4":""))&&c(d,"class",E),p&1&&$!==($="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 "+(_[0]===z?"border-b-4":""))&&c(h,"class",$)},i:T,o:T,d(_){_&&b(t),H=!1,R(N)}}}const D="/",V="/mods",j="/software",z="/about";function ce(a,t,e){let s,n,l;U(a,oe,u=>e(2,l=u));const f=()=>e(0,n=D),m=()=>e(0,n=V),o=()=>e(0,n=j),r=()=>e(0,n=z);return a.$$.update=()=>{a.$$.dirty&4&&e(1,s=l.url.pathname),a.$$.dirty&2&&e(0,n=s)},[n,s,l,f,m,o,r]}class me extends J{constructor(t){super(),K(this,t,ce,ne,G,{})}}function ie(a){let t,e,s,n,l,f;s=new me({});const m=a[1].default,o=W(m,a,a[0],null);return{c(){t=v("body"),e=v("div"),re(s.$$.fragment),n=I(),l=v("div"),o&&o.c(),this.h()},l(r){t=g(r,"BODY",{class:!0});var u=x(t);e=g(u,"DIV",{class:!0});var d=x(e);se(s.$$.fragment,d),n=q(d),l=g(d,"DIV",{class:!0});var y=x(l);o&&o.l(y),y.forEach(b),d.forEach(b),u.forEach(b),this.h()},h(){c(l,"class","flex flex-col items-center pt-20"),c(e,"class","min-h-screen foregroundImg svelte-9k7qo0"),c(t,"class","min-h-screen scroll backgroundImg text-slate-300 svelte-9k7qo0")},m(r,u){Q(r,t,u),i(t,e),te(s,e,null),i(e,n),i(e,l),o&&o.m(l,null),f=!0},p(r,[u]){o&&o.p&&(!f||u&1)&&X(o,m,r,r[0],f?ee(m,r[0],u,null):Z(r[0]),null)},i(r){f||(Y(s.$$.fragment,r),Y(o,r),f=!0)},o(r){F(s.$$.fragment,r),F(o,r),f=!1},d(r){r&&b(t),ae(s),o&&o.d(r)}}}function de(a,t,e){let{$$slots:s={},$$scope:n}=t;return a.$$set=l=>{"$$scope"in l&&e(0,n=l.$$scope)},[n,s]}class he extends J{constructor(t){super(),K(this,t,de,ie,G,{})}}export{he as component,_e as universal};