window.addEventListener('DOMContentLoaded', event =>{
document.getElementById("gumb1").addEventListener("click",function()
{
      
 var box1= document.getElementById("nike1");
    var box2= document.getElementById("nike2");
    var box3= document.getElementById("nike3");

    if(box1.style.display=="none"){
    document.getElementById("nike1").className =
    "animate__animated animate__bounceIn"; 
       box1.style.display="block";
       box2.style.display="none";
       box3.style.display="none";
    }
    else{
        document.getElementById("nike1").className =
        "animate__animated animate__bounceOut animate_faster";
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
    box1.style.display="none";
    }, delayInMilliseconds);
    }
});
document.getElementById("gumb2").addEventListener("click",function()
{
 var box1= document.getElementById("nike2");
    var box2= document.getElementById("nike1");
    var box3= document.getElementById("nike3");
    if(box1.style.display=="none"){
        document.getElementById("nike2").className =
    "animate__animated animate__zoomIn animate_faster";
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        document.getElementById("nike2").className =
    "animate__animated animate__zoomOut animate_faster";
    var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
    box1.style.display="none";
    }, delayInMilliseconds);
    }
});
document.getElementById("gumb3").addEventListener("click",function()
{
 var box1= document.getElementById("nike3");
    var box2= document.getElementById("nike2");
    var box3= document.getElementById("nike1");
    if(box1.style.display=="none"){
        document.getElementById("nike3").className =
    "animate__animated animate__fadeIn animate_faster";
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        document.getElementById("nike3").className =
        "animate__animated animate__fadeOut animate_faster";
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
    box1.style.display="none";
    }, delayInMilliseconds);
    }
});

//------------------------------------------------------------------//
document.getElementById("gumb4").addEventListener("click",function()
{
 var box1= document.getElementById("nike4");
    var box2= document.getElementById("nike5");
    var box3= document.getElementById("nike6");

    if(box1.style.display=="none"){ 
        document.getElementById("nike4").className =
    "animate__animated animate__bounceIn"; 
       box1.style.display="block";
       box2.style.display="none";
       box3.style.display="none";
    }
    else{
        document.getElementById("nike4").className =
        "animate__animated animate__bounceOut animate_faster";
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
    box1.style.display="none";
    }, delayInMilliseconds);
    }
});
document.getElementById("gumb5").addEventListener("click",function()
{
 var box1= document.getElementById("nike5");
    var box2= document.getElementById("nike4");
    var box3= document.getElementById("nike6");
    if(box1.style.display=="none"){
        document.getElementById("nike5").className =
    "animate__animated animate__zoomIn animate_faster";
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{ 
    document.getElementById("nike5").className =
    "animate__animated animate__zoomOut animate_faster";
    var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
    box1.style.display="none";
    }, delayInMilliseconds);
        
       
    }
});
document.getElementById("gumb6").addEventListener("click",function()
{
 var box1= document.getElementById("nike6");
    var box2= document.getElementById("nike5");
    var box3= document.getElementById("nike4");
    if(box1.style.display=="none"){
        document.getElementById("nike6").className =
    "animate__animated animate__fadeIn animate_faster";
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        document.getElementById("nike6").className =
        "animate__animated animate__fadeOut animate_faster";
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
    box1.style.display="none";
    }, delayInMilliseconds);

    }
});});