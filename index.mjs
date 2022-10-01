// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e){var t,a,i,o,f;if(r<=0)return NaN;if(1===r||0===e)return n[0];for(a=e<0?(1-r)*e:0,t=0,o=0,f=0;f<r;f++)(i=n[a])==i&&(t+=i,o+=1),a+=e;return 0===o?NaN:t/o}r(n,"ndarray",(function(r,n,e,t){var a,i,o,f,u;if(r<=0)return NaN;if(1===r||0===e)return n[t];for(i=t,a=0,f=0,u=0;u<r;u++)(o=n[i])==o&&(a+=o,f+=1),i+=e;return 0===f?NaN:a/f}));const{ndarray:e}=nanmeanors;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
