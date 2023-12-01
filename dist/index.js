"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var c=f(function(h,o){
function N(r,a,t){var v,e,i,n,u;if(r<=0)return NaN;if(r===1||t===0)return a[0];for(t<0?e=(1-r)*t:e=0,v=0,n=0,u=0;u<r;u++)i=a[e],i===i&&(v+=i,n+=1),e+=t;return n===0?NaN:v/n}o.exports=N
});var p=f(function(j,m){
function l(r,a,t,v){var e,i,n,u,s;if(r<=0)return NaN;if(r===1||t===0)return a[v];for(i=v,e=0,u=0,s=0;s<r;s++)n=a[i],n===n&&(e+=n,u+=1),i+=t;return u===0?NaN:e/u}m.exports=l
});var y=f(function(k,x){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),R=p();O(q,"ndarray",R);x.exports=q
});var b=y();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
