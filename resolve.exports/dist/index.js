function e(e,n,r){throw new Error(r?`No known conditions for "${n}" specifier in "${e}" package`:`Missing "${n}" specifier in "${e}" package`)}function n(n,i,o,f){let s,u,l=r(n,o),c=function(e){let n=new Set(["default",...e.conditions||[]]);return e.unsafe||n.add(e.require?"require":"import"),e.unsafe||n.add(e.browser?"browser":"node"),n}(f||{}),a=i[l];if(void 0===a){let e,n,r,t;for(t in i)n&&t.length<n.length||("/"===t[t.length-1]&&l.startsWith(t)?(u=l.substring(t.length),n=t):t.length>1&&(r=t.indexOf("*",2),~r&&(e=RegExp("^"+t.substring(0,r)+"(.*)"+t.substring(1+r)).exec(l),e&&e[1]&&(u=e[1],n=t))));a=i[n]}return a||e(n,l),s=t(a,c),s||e(n,l,1),u&&function(e,n){let r,t=0,i=e.length,o=/[*]/g;for(;t<i;t++)e[t]=o.test(r=e[t])?r.replace(o,n):r+n}(s,u),s}function r(e,n,r){if(e===n||"."===n)return".";let t=e+"/",i=t.length,o=n.slice(0,i)===t,f=o?n.slice(i):n;return"#"===f[0]?f:o||!r?"./"===f.slice(0,2)?f:"./"+f:f}function t(e,n,r){if(e){if("string"==typeof e)return r&&r.add(e),[e];let i,o;if(Array.isArray(e)){for(o=r||new Set,i=0;i<e.length;i++)t(e[i],n,o);if(!r&&o.size)return[...o]}else for(i in e)if(n.has(i))return t(e[i],n,r)}}function i(e,n={}){let t,i=0,o=n.browser,f=n.fields||["module","main"],s="string"==typeof o;for(o&&!f.includes("browser")&&(f.unshift("browser"),s&&(o=r(e.name,o,!0)));i<f.length;i++)if(t=e[f[i]]){if("string"==typeof t);else{if("object"!=typeof t||"browser"!=f[i])continue;if(s&&(t=t[o],null==t))return o}return"string"==typeof t?"./"+t.replace(/^\.?\//,""):t}}function o(e,r,t){let i,o=e.exports;if(o){if("string"==typeof o)o={".":o};else for(i in o){"."!==i[0]&&(o={".":o});break}return n(e.name,o,r||".",t)}}function f(e,r,t){if(e.imports)return n(e.name,e.imports,r,t)}function s(e,n,t){return"#"===(n=r(e.name,n||"."))[0]?f(e,n,t):o(e,n,t)}exports.exports=o;exports.imports=f;exports.legacy=i;exports.resolve=s;