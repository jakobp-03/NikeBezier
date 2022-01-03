window.addEventListener('DOMContentLoaded', event =>{
document.getElementById("gumb1").addEventListener("click",function()
{
 var box1= document.getElementById("div1");
    var box2= document.getElementById("div2");
    var box3= document.getElementById("div3");

    if(box1.style.display=="none"){
       box1.style.display="block";
       box2.style.display="none";
       box3.style.display="none";
    }
    else{
        box1.style.display="none";
    }
});
document.getElementById("gumb2").addEventListener("click",function()
{
 var box1= document.getElementById("div2");
    var box2= document.getElementById("div1");
    var box3= document.getElementById("div3");
    if(box1.style.display=="none"){
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        box1.style.display="none";
    }
});
document.getElementById("gumb3").addEventListener("click",function()
{
 var box1= document.getElementById("div3");
    var box2= document.getElementById("div2");
    var box3= document.getElementById("div1");
    if(box1.style.display=="none"){
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        box1.style.display="none";
    }
});


document.getElementById("gumb4").addEventListener("click",function()
{
 var box1= document.getElementById("div4");
    var box2= document.getElementById("div5");
    var box3= document.getElementById("div6");

    if(box1.style.display=="none"){
       box1.style.display="block";
       box2.style.display="none";
       box3.style.display="none";
    }
    else{
        box1.style.display="none";
    }
});
document.getElementById("gumb5").addEventListener("click",function()
{
 var box1= document.getElementById("div5");
    var box2= document.getElementById("div4");
    var box3= document.getElementById("div6");
    if(box1.style.display=="none"){
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        box1.style.display="none";
    }
});
document.getElementById("gumb6").addEventListener("click",function()
{
 var box1= document.getElementById("div6");
    var box2= document.getElementById("div5");
    var box3= document.getElementById("div4");
    if(box1.style.display=="none"){
       box1.style.display="block";
        box2.style.display="none";
       box3.style.display="none";
    }
    else{
        box1.style.display="none";
    }
});});