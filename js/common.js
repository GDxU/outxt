$(function(){
	$(".hero_").click(function(){
			var selectedHero = $(this).attr("id");
			if(selectedHero){
				var checkbulletY = selectedHero == "hero1"?"160px":selectedHero =="hero2"?"255px":"350px";
				$("#checkbullet").css({"top":checkbulletY});
			}
	});
	$(".gamebtn_").click(function(){
			var item = $(this).attr("id");
			alert(item);
	});
});