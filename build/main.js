!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(){l=new c({width:1920,height:1080}),l.loadURL("file://"+process.cwd()+"/public/index.html"),l.webContents.openDevTools(),l.on("closed",function(){l=null})}var o=t(5),i=t(4),u=i.ipcMain,a=i.app,c=i.BrowserWindow,l=void 0;a.on("ready",r),a.on("window-all-closed",function(){"darwin"!==process.platform&&a.quit()}),a.on("activate",function(){null===l&&r()}),o.readdir("./ipc",function(e,n){var r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var l=a.value;if(".DS_Store"!==l){var f=t(2)("./"+l).default;f.ipcMain=u,f.init()}}}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}})},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),i=r(o);(new i.default).getResult(),n.default={init:function(){this.ipcMain.on("index",function(e,n){})}}},function(e,n,t){function r(e){return t(o(e))}function o(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./index":1,"./index.js":1};r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=2},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(){t(this,e),this.result={result:0,errorcode:0,message:"",data:{}}}return r(e,[{key:"getResult",value:function(){return this.result}}]),e}();n.default=o},function(e,n){e.exports=require("electron")},function(e,n){e.exports=require("fs")}]);