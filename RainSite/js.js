mute = false;

setInterval(() => {
    checkRain()
}, 30000);

function makeRain(){
    destoryRain();
    console.log('test');
    if(mute == false){
        document.getElementById("body").insertAdjacentHTML("afterend",
        `
        <div id="rain">
            <audio id="RainPlayer"  autoplay>    
                <source src="./Media/rain.mp3" type="audio/mpeg">
            </audio>
            <video autoplay muted loop id="myVideo">
                <source src="./Media/rain3.mp4" type="video/mp4">
            </video>
        </div>
        `
    );
    }
    else if (mute == true){
        document.getElementById("body").insertAdjacentHTML("afterend",
        `
        <div id="rain">
            <audio id="RainPlayer" muted autoplay>    
                <source src="./Media/rain.mp3" type="audio/mpeg">
            </audio>
            <video autoplay muted loop id="myVideo">
                <source src="./Media/rain3.mp4" type="video/mp4">
            </video>
        </div>
        `
    );
    }

}

function destoryRain(){
    try{
        document.getElementById("rain").remove();
    }
    catch(exeception_var){
        console.log("No Rain Id")
    }
    finally{
        return;
    }
}

function muteRain(){
    var b = document.getElementById("RainPlayer");
    if(mute == false){
        mute = true;
        document.getElementById("muteBtn").innerHTML = `<i class="fa fa-volume-off fa-3x" aria-hidden="true"></i>`;
    }
    else if(mute == true){
        mute = false;
        document.getElementById("muteBtn").innerHTML = `<i class="fa fa-volume-up fa-3x" aria-hidden="true"></i>`;
    }
    checkRain();
}

function checkRain(){
    fetch('config.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.raining == 'true'){
          makeRain()
      }
      else{
          destoryRain()
      }
});
}



