"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var y=f(function(z,m){
function d(a,r,e,o){var v,s,n,u,i,t,c;if(v=r.data,s=r.accessors[0],a===1||e===0)return s(v,o);for(u=o,n=0,t=0,c=0;c<a;c++)i=s(v,u),i===i&&(n+=i,t+=1),u+=e;return t===0?NaN:n/t}m.exports=d
});var q=f(function(A,p){
var g=require('@stdlib/array-base-arraylike2object/dist'),j=y();function k(a,r,e,o){var v,s,n,u,i,t;if(a<=0)return NaN;if(t=g(r),t.accessorProtocol)return j(a,t,e,o);if(a===1||e===0)return r[o];for(s=o,v=0,u=0,i=0;i<a;i++)n=r[s],n===n&&(v+=n,u+=1),s+=e;return u===0?NaN:v/u}p.exports=k
});var l=f(function(B,x){
var N=require('@stdlib/strided-base-stride2offset/dist'),O=q();function P(a,r,e){return O(a,r,e,N(a,e))}x.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=l(),h=q();R(b,"ndarray",h);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
