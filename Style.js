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


const sliderbtn=document.querySelectorAll(".slider-arrow i");
const cardwidth=document.querySelector(".card").offsetWidth;
const cardslider=document.querySelectorAll(".card-slider");
sliderbtn.forEach(arrow=>{
    arrow.addEventListener("click",()=>{
        //console.log(arrow);
        //console.log(arrow.getAttribute("data-action"));
        cardslider.forEach(slid=>{
            if(slid.getAttribute("data-target")==arrow.getAttribute("data-slider")){
                if(arrow.getAttribute("data-action")=="left"){
                    slid.scrollLeft+=cardwidth;
                }
                if(arrow.getAttribute("data-action")=="right"){
                    slid.scrollLeft-=cardwidth;
                }
            }
        })

    })
})