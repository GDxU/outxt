$(function(){
	$(".hero_").click(function(){
		var selectedHero = $(this).attr("id");
		if(selectedHero){
			var checkbulletY = selectedHero == "hero1"?"160px":selectedHero =="hero2"?"255px":"350px";
			$("#checkbullet").css({"top":checkbulletY});
			var data = store.get('data');
			data.hero = selectedHero;
			data.checkbullety = checkbulletY;
			data.task = 0;//目前没有开发任务，都从头开始
			store.set('data',data);
		}
	});
	$(".gamebtn_").click(function(){
		var item = $(this).attr("id");
		switch(item){
			case 'singleplayer':
				singlegame.init();
				break;
			case 'multiplayer':
			case 'config':
			case 'aboutme':
		}
	});
});
$(window).load(function() {
	resourceloader.init();
	sounds.init();
	if (resourceloader.loaded){
		sounds.bgMusic();
	} else {
		resourceloader.onload = sounds.bgMusic;
	}
	if(store.get('data')){
		$("#checkbullet").css({"top":store.get('data').checkbullety});
	}else{
		store.set('data',{hero:"hero1",checkbullety:"160px",task:0});
	}
});