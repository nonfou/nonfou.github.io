!function(){var e=!(!window.attachEvent||window.opera),t=/webkit\/(\d+)/i.test(navigator.userAgent)&&RegExp.$1<525,n=[],o=function(){for(var e=0;e<n.length;e++)n[e]()},d=document;d.ready=function(a){if(!e&&!t&&d.addEventListener)return d.addEventListener("DOMContentLoaded",a,!1);if(!(n.push(a)>1))if(e)!function(){try{d.documentElement.doScroll("left"),o()}catch(e){setTimeout(arguments.callee,0)}}();else if(t)var l=setInterval((function(){/^(loaded|complete)$/.test(d.readyState)&&(clearInterval(l),o())}),0)}}(),document.ready((()=>{var e=window._Blog||{};const t="dark"===(window.localStorage&&window.localStorage.getItem("theme")),n=document.getElementsByTagName("body")[0];t?(document.getElementById("switch_default").checked=!0,document.getElementById("mobile-toggle-theme").innerText="· Dark"):(document.getElementById("switch_default").checked=!1,document.getElementById("mobile-toggle-theme").innerText="· Dark"),e.toggleTheme=function(){t?(n.classList.add("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Dark"):(n.classList.remove("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Light"),document.getElementsByClassName("toggleBtn")[0].addEventListener("click",(()=>{n.classList.contains("dark-theme")?n.classList.remove("dark-theme"):n.classList.add("dark-theme"),window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light")})),document.getElementById("mobile-toggle-theme").addEventListener("click",(()=>{n.classList.contains("dark-theme")?(n.classList.remove("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Light"):(n.classList.add("dark-theme"),document.getElementById("mobile-toggle-theme").innerText="· Dark"),window.localStorage&&window.localStorage.setItem("theme",document.body.classList.contains("dark-theme")?"dark":"light")}))},e.toggleTheme()}));