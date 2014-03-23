var singlegame = {
    init:function(){
		$('#loadingscene').show();
		var currentTask = task[store.get('data').task];
		$('#progresstip').html('<strong>'+currentTask.name+'</strong><br/>'+currentTask.briefing);
		game.currentTask = currentTask;
	    game.currentMapImage = resourceloader.loadImage(currentTask.mapImage);
	    
	    if (resourceloader.loaded){
	        singlegame.start();
	    } else {
	        resourceloader.onload = singlegame.start;
	    }
    },
    start:function(){
		//待续
		//$('#loadingscene').hide();
		//$('#gamescene').show();
    },    
    exit:function(){
        
    }
};