var t={615:(t,e,n)=>{n.d(e,{A:()=>i});class i{constructor(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}createCollection(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})}fireEvent(t,e=null){if(this.events.hasOwnProperty(t))return this.events[t](e)}on(t,e){this.events[t]=e}}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};n.d(i,{A:()=>l});var o=n(615);
/*
 * HSToggleCount
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */class s extends o.A{constructor(t,e){super(t,e);const n=t.getAttribute("data-hs-toggle-count"),i=n?JSON.parse(n):{},o=Object.assign(Object.assign({},i),e);this.target=(null==o?void 0:o.target)?"string"==typeof(null==o?void 0:o.target)?document.querySelector(o.target):o.target:null,this.min=(null==o?void 0:o.min)||0,this.max=(null==o?void 0:o.max)||0,this.duration=(null==o?void 0:o.duration)||700,this.isChecked=this.target.checked||!1,this.target&&this.init()}init(){this.createCollection(window.$hsToggleCountCollection,this),this.isChecked&&(this.el.innerText=String(this.max)),this.target.addEventListener("change",(()=>{this.isChecked=!this.isChecked,this.toggle()}))}toggle(){this.isChecked?this.countUp():this.countDown()}animate(t,e){let n=0;const i=o=>{n||(n=o);const s=Math.min((o-n)/this.duration,1);this.el.innerText=String(Math.floor(s*(e-t)+t)),s<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}countUp(){this.animate(this.min,this.max)}countDown(){this.animate(this.max,this.min)}static getInstance(t,e){const n=window.$hsToggleCountCollection.find((e=>e.element.el===("string"==typeof t?document.querySelector(t):t)));return n?e?n:n.element:null}static autoInit(){window.$hsToggleCountCollection||(window.$hsToggleCountCollection=[]),document.querySelectorAll("[data-hs-toggle-count]:not(.--prevent-on-load-init)").forEach((t=>{window.$hsToggleCountCollection.find((e=>{var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new s(t)}))}}window.addEventListener("load",(()=>{s.autoInit()})),"undefined"!=typeof window&&(window.HSToggleCount=s);const l=s;var r=i.A;export{r as default};