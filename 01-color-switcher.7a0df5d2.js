const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;let a=null;t.addEventListener("click",(function(n){a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(d){clearInterval(a),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.7a0df5d2.js.map
