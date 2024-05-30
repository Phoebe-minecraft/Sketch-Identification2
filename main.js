function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);

        
    }

}

function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
       document.getElementById("object").innerHTML= 'Object : '+results[0].label;
       document.getElementById("confidence").innerHTML= 'Confidence : '+(results[0].confidence*100).toFixed()+ "%";
       speakThis = new SpeechSynthesisUtterance( results[0].label)
      
       synth.speak(speakThis)
    }


    
    
}





