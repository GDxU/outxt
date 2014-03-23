var resourceloader = {
    loaded:true,
    loadedCount:0,
    totalCount:0,
    
    init:function(){
        var mp3,ogg,wav;
        var audio = document.createElement('audio');
    	if (audio.canPlayType) {
      		mp3 = "" != audio.canPlayType('audio/mpeg');
      		ogg = "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
			wav = "" != audio.canPlayType('audio/wav');
    	} else {
    		mp3 = false;
    		ogg = false;
			wav = false;
    	}
        resourceloader.audioExt = ogg?".ogg":mp3?".mp3":wav?".wav":undefined;
    },
    loadImage:function(url){
        this.totalCount++;
        this.loaded = false;
        var image = new Image();
        image.src = url;
        image.onload = resourceloader.itemLoaded;
        return image;
    },
	loadSound:function(url){
		this.totalCount++;
		this.loaded = false;
		var audio = new Audio();
		audio.src = url+resourceloader.audioExt;
		audio.addEventListener("canplaythrough", resourceloader.itemLoaded, false);
		return audio;   
	},
    itemLoaded:function(){
        resourceloader.loadedCount++;
        if (resourceloader.loadedCount >= resourceloader.totalCount){
            resourceloader.loaded = true;
            if(resourceloader.onload){
                resourceloader.onload();
                resourceloader.onload = undefined;
            }
        }
    }
}