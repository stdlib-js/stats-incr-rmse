// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt,n=function(){var r,n;return r=0,n=0,function(t){if(0===arguments.length)return 0===n?null:r;return r+=(t-r)/(n+=1)}};var t=function(){var t=n();return function(n,u){var e;if(0===arguments.length)return null===(e=t())?e:r(e);return r(t((e=u-n)*e))}};export{t as default};
//# sourceMappingURL=mod.js.map
