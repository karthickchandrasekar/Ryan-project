const btn=document.querySelectorAll(".slider i");
const slider=document.querySelector(".image-slider");
const img=document.querySelector(".image-slider img");
console.log(img.offsetWidth);
btn.forEach(bt=>{
    bt.addEventListener("click",()=>{
    if(bt.id=="left"){
    slider.scrollLeft+=img.offsetWidth;
    }
    else{
        slider.scrollLeft-=img.offsetWidth;
    }
});
});