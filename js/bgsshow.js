var body = document.getElementById("bodi");
var html=document.getElementById("htmll");
var counter = 0;

setInterval(function () {
    if(counter ==0){
      counter++;
      body.style.backgroundImage = "url(image/bg1.jpg)";
      html.style.background ="#526986";
      document.getElementById("titl").style.color="orangered";
      console.log("Image1");
    }
  
    else if(counter ==1){
      body.style.backgroundImage = "url(image/bg2.jpg)";
      counter++;
      html.style.background ="#46473f";
      console.log("Image2");
      document.getElementById("titl").style.color="black";
    }
    
    else if(counter ==2){
      body.style.backgroundImage = "url(image/bg3.jpg)";
      counter++;  
      html.style.background ="#759ea7";
      document.getElementById("titl").style.color="black";
      document.getElementById("h51").style.color="#78a1e3";
      document.getElementById("h52").style.color="#78a1e3";
      document.getElementById("part").style.backgroundColor= "rgba(184, 227, 255, 0.6)";
      document.getElementById("part2").style.backgroundColor= "rgba(184, 227, 255, 0.6)";
      console.log("Image3");
    }
  
  else if(counter ==3){
  body.style.backgroundImage = "url(image/bg1.jpg)";
  counter =0;    
  document.getElementById("titl").style.color="orangered";
  document.getElementById("h51").style.color="orangered";
  document.getElementById("h52").style.color="orangered";
  document.getElementById("part").style.backgroundColor= "rgba(240, 229, 228, 0.6)";
  document.getElementById("part2").style.backgroundColor= "rgba(240, 229, 228, 0.6)";
  console.log("Image4");
  }
  
}, 5500);


