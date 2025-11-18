var box1=document.querySelector(".box1");
var box2=document.querySelector(".box2");
var btn=document.querySelector(".add");
var result=document.querySelector(".result");
btn.addEventListener("click",()=>{
    result.innerText=parseInt(box1.value)+parseInt(box2.value);
})
