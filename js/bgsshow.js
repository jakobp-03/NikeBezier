var body = document.getElementsByTagName("body")[0];
var counter = 0;

setInterval(function () {
    if(counter ==0)
  body.style.backgroundImage = "url()";
    if(counter ==1)
    body.style.backgroundImage = "url()";
    if(counter ==2)
  body.style.backgroundImage = "url()";
  if(counter ==3){
  body.style.backgroundImage = "url()";
  counter =0;    
  }
  
}, 3000);
