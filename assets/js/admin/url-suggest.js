!function(t){"use strict";function n(t){var n=t.val(),e=t.attr("data-internal"),u=t.nextAll("small");-1<n.indexOf(e)?u.addClass("internal"):u.removeClass("internal")}function e(e){e.autocomplete({minLength:2,source:function(n,e){/^http/.test(n.term)?e([]):t.get(SkUrlSuggest.endpoint+"&q="+n.term).done(function(t){e(t.data)}).fail(function(){e([])})},select:function(e,u){return t(this).val(u.item.url),n(t(this)),!1}}).autocomplete("instance")._renderItem=function(n,e){return t("<li>").append("<a>"+e.title+"</a>").appendTo(n)}}t(document).on("click",".url-suggest-button",function(n){n.preventDefault();var e=t(this).prevAll("input").val();/^https?:\/\//.test(e)?window.open(e,"url-check"):alert("URLの形式が不正です")}),t(document).on("keyup",".url-suggest",function(){n(t(this))}),t(document).on("uiReady.suggest",".url-suggest",function(){e(t(this))}),t(document).ready(function(){t(".url-suggest").each(function(u,i){n(t(i)),e(t(i))})})}(jQuery);