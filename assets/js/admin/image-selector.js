jQuery(document).ready(function(e){"use strict";function t(t){var a=[];t.find(".image-selector-picture").each(function(t,i){a.push(parseInt(e(i).attr("data-id"),10))}),t.find(".image-selector-input").val(a.join(","))}function a(e){var t=parseInt(e.find(".image-selector-input").attr("data-max"),10),a=e.find(".image-selector-picture").length;return t>a}var i,r;e(document).on("click",".image-selector-button",function(n){n.preventDefault(),r=e(this).parents(".image-selector"),a(r)&&(i||(i=wp.media({className:"media-frame taro-media-frame",frame:"select",multiple:!1,title:"使用する画像をアップロードまたは選択してください。",library:{type:"image"},button:{text:"選択した画像を挿入"}}),i.on("select",function(){var a,n=i.state().get("selection").first().toJSON(),s=e('<div class="image-selector-container"></div>');a=n.sizes.thumbnail?n.sizes.thumbnail.url:n.sizes.full.url,s.append('<img class="image-selector-picture" src="'+a+'" data-id="'+n.id+'" />').append('<a class="button image-selector-delete" href="#">削除</a>'),r.find(".image-selector-place-holder").before(s),t(r)})),i.open())}).on("click",".image-selector-delete",function(a){a.preventDefault(),r=e(this).parents(".image-selector"),e(this).parents(".image-selector-container").remove(),t(r)})});