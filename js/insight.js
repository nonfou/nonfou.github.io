!function(n,t){var e=n(".ins-search"),r=e.find(".ins-search-input"),i=e.find(".ins-section-wrapper"),a=e.find(".ins-section-container");function s(e,r,i,a,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("icon").addClass("icon-"+e)).append(null!=r&&""!=r?r:t.TRANSLATION.UNTITLED).append(i?n("<span>").addClass("ins-slug").text(i):null)).append(a?n("<p>").addClass("ins-search-preview").text(a):null).attr("data-url",s)}function o(e,r){var i,a,o;if(0===r.length)return null;switch(i=t.TRANSLATION[e],e){case"POSTS":case"PAGES":a=r.map((function(n){return s("file",n.title,null,n.text.slice(0,150),t.ROOT_URL+n.path)}));break;case"CATEGORIES":case"TAGS":a=r.map((function(n){return s("CATEGORIES"===e?"folder":"tag",n.name,n.slug,null,n.permalink)}));break;default:return null}return(o=i,n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(o))).append(a)}function c(n,t){var e={};n.pages.concat(n.posts).forEach((function(n){n[t]&&n[t].forEach((function(n){e[n.name]=n}))}));var r=[];for(var t in e)r.push(e[t]);return r}function u(n){return n.split(" ").filter((function(n){return!!n})).map((function(n){return n.toUpperCase()}))}function l(n,t,e){var r=u(n);return r.filter((function(n){return e.filter((function(e){return!!t.hasOwnProperty(e)&&(t[e].toUpperCase().indexOf(n)>-1||void 0)})).length>0})).length===r.length}function f(n,t,e,r){var i=0;return u(n).forEach((function(n){var a=new RegExp(n,"img");e.forEach((function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(a);i+=s?s.length*r[e]:0}}))})),i}function p(n,t){var e=function(n){return{POST:function(t){return f(n,t,["title","text"],[3,1])},PAGE:function(t){return f(n,t,["title","text"],[3,1])},CATEGORY:function(t){return f(n,t,["name","slug"],[1,1])},TAG:function(t){return f(n,t,["name","slug"],[1,1])}}}(t),r=function(n){return{POST:function(t){return l(n,t,["title","text"])},PAGE:function(t){return l(n,t,["title","text"])},CATEGORY:function(t){return l(n,t,["name","slug"])},TAG:function(t){return l(n,t,["name","slug"])}}}(t),i=n.posts,a=n.pages,s=c(n,"tags"),o=c(n,"categories");return{posts:i.filter(r.POST).sort((function(n,t){return e.POST(t)-e.POST(n)})).slice(0,5),pages:a.filter(r.PAGE).sort((function(n,t){return e.PAGE(t)-e.PAGE(n)})).slice(0,5),categories:o.filter(r.CATEGORY).sort((function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)})).slice(0,5),tags:s.filter(r.TAG).sort((function(n,t){return e.TAG(t)-e.TAG(n)})).slice(0,5)}}function d(t){var e=n.makeArray(a.find(".ins-selectable")),r=-1;e.forEach((function(t,e){n(t).hasClass("active")&&(r=e)}));var s=(e.length+r+t)%e.length;n(e[r]).removeClass("active"),n(e[s]).addClass("active"),function(n){if(0!==n.length){var t=i[0].clientHeight,e=n.position().top-i.scrollTop(),r=n[0].clientHeight+n.position().top;r>t+i.scrollTop()&&i.scrollTop(r-i[0].clientHeight),e<0&&i.scrollTop(n.position().top)}}(n(e[s]))}function h(n){n&&n.length&&(location.href=n.attr("data-url"))}e.parent().remove(".ins-search"),n("body").append(e),n.getJSON(t.CONTENT_URL,(function(t){"#ins-search"===location.hash.trim()&&e.addClass("show"),r.on("input",(function(){var e=n(this).val();!function(n){for(var t in a.empty(),n)a.append(o(t.toUpperCase(),n[t]))}(p(t,e))})),r.trigger("input")})),n(document).on("click focus",".search-form-input",(function(){e.addClass("show"),e.find(".ins-search-input").focus()})).on("click",".ins-search-item",(function(){h(n(this))})).on("click",".ins-close",(function(){e.removeClass("show")})).on("keydown",(function(n){if(e.hasClass("show"))switch(n.keyCode){case 27:e.removeClass("show");break;case 38:d(-1);break;case 40:d(1);break;case 13:h(a.find(".ins-selectable.active").eq(0))}}))}(jQuery,window.INSIGHT_CONFIG);