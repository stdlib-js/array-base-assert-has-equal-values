"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=m(function(P,h){
var u=require('@stdlib/array-base-assert-is-complex128array/dist'),f=require('@stdlib/array-base-assert-is-complex64array/dist'),l=require('@stdlib/array-base-assert-is-booleanarray/dist'),v=require('@stdlib/array-base-arraylike2object/dist'),c=require('@stdlib/strided-base-reinterpret-complex128/dist'),q=require('@stdlib/strided-base-reinterpret-complex64/dist'),p=require('@stdlib/strided-base-reinterpret-boolean/dist');function o(e,r){var a;for(a=0;a<e.length;a++)if(e[a]!==r[a])return!1;return!0}function g(e,r){var a,i,s,n,t;for(a=e.data,i=r.data,s=e.accessors[0],n=r.accessors[0],t=0;t<a.length;t++)if(s(a,t)!==n(i,t))return!1;return!0}function A(e,r){var a,i,s,n,t;return e.length!==r.length?!1:(i=v(e),s=v(r),i.accessorProtocol||s.accessorProtocol?(a=2,l(e)?l(r)?o(p(e,0),p(r,0)):g(i,s):(u(e)?(n=c(e,0),a-=1):f(e)&&(n=q(e,0),a-=1),u(r)?(t=c(r,0),a-=1):f(r)&&(t=q(r,0),a-=1),a===0?o(n,t):g(i,s))):o(e,r))}h.exports=A
});var B=d();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
