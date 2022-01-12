var body = document.getElementById("bodi");
var counter = 0;

setInterval(function () {
    if(counter ==0){
      counter++;
      body.style.backgroundImage = "url(image/bg1.jpg)";
      console.log("Image1");
    }
  
    else if(counter ==1){
      body.style.backgroundImage = "url(image/bg2.jpg)";
      counter++;
      console.log("Image2");
    }
    
    else if(counter ==2){
      body.style.backgroundImage = "url(image/bg3.jpg)";
      counter++;  
      console.log("Image3");
    }
  
  else if(counter ==3){
  body.style.backgroundImage = "url(image/bg1.jpg)";
  counter =0;    
  console.log("Image1");
  }
  
}, 1500);


