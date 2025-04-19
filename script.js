


// mood.innerHTML="jbcsijxknk"

function slider_value(val){

    var slider=document.querySelector("#slider");
    var happy=document.getElementById("happy");
    var mood=document.querySelector("#mood")
    // return val;
    console.log(val)

    if(val>10 && val<25){
        // // console.log("huiiii")
        happy.style.transform="scale(1.5)"
        mood.innerHTML="Awesome! Take a moment to enjoy this."
    }
     if(val>=25){
        mood.innerHTML="Yes! Take a movement to soak in this feeling."
        
    }
     if(val>=45 ){
        mood.innerHTML="Your current Emotion dont define who you are."

    }
     if(val>=70 ){
        mood.innerHTML="you are not alone in feeling this way"

    }
     if(val>=85 ){
        mood.innerHTML="recognizing how we feel helps us learn from our experience"

    }
}

