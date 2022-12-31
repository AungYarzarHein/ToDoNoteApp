import Sound from 'react-native-sound';
Sound.setCategory("Playback");

var btnsound;


export const loadSound = () => {
     btnsound = new Sound("btn2.mp3",Sound.MAIN_BUNDLE,(error)=>{
        if(error){
           // console.log(error);
            return ;
        }
       // console.log("Audio successfully loaded")
    });
}


 export const btnsoundplay = () => {

btnsound.setVolume(1);
btnsound.play(success=>{
    if(success){
       return ;
    }else{
        return ;
    }
})

}