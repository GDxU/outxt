var sounds = {
    list:{
        "background":["desolate"]
    },
    loaded:{},
    init: function(){
        for(var soundName in sounds.list){
            var sound = {};
            sound.audioObjects = [];
            for (var i=0; i < sounds.list[soundName].length; i++) {
                sound.audioObjects.push(resourceloader.loadSound('audio/' + sounds.list[soundName][i]));
            };            
            this.loaded [soundName] = sound;
        }        
    },
    bgMusic:function(){
        var sound = sounds.loaded["background"];
        if(sound && sound.audioObjects && sound.audioObjects.length>0){
			var n = Math.floor(Math.round(sound.audioObjects.length));
            sound.audioObjects[n-1].play();
        }
    },
    shuffle:function(soundName){
        var sound = sounds.loaded[soundName];
        if(sound && sound.audioObjects && sound.audioObjects.length>0){
			var n = Math.floor(Math.round(sound.audioObjects.length));
            sound.audioObjects[n-1].play();
        }
    },
    order:function(soundName){
        var sound = sounds.loaded[soundName];
        if(sound && sound.audioObjects && sound.audioObjects.length>0){
            if(!sound.counter || sound.counter>= sound.audioObjects.length){
                sound.counter = 0;
            }
            var audioObject = sound.audioObjects[sound.counter];
            sound.counter++;
            audioObject.play();
        }        
    }
};