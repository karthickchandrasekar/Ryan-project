const btn=document.querySelectorAll(".slider i");
const slider=document.querySelector(".image-slider");
const img=document.querySelector(".image-slider img");
console.log(img.offsetWidth);
btn.forEach(bt=>{
    bt.addEventListener("click",()=>{
    if(bt.id=="left"){
    slider.scrollLeft-=img.offsetWidth;
    }
    else{
        slider.scrollLeft+=img.offsetWidth;
    }
});
});

// slider function where we implement scroll function on button click
const sliderbtn=document.querySelectorAll(".slider-arrow i");
const cardwidth=document.querySelector(".card").offsetWidth;
const cardslider=document.querySelectorAll(".card-slider");
sliderbtn.forEach(arrow=>{
    arrow.addEventListener("click",()=>{
        cardslider.forEach(slid=>{
            if(slid.getAttribute("data-target")==arrow.getAttribute("data-slider")){
                if(arrow.getAttribute("data-action")=="left"){
                    slid.scrollLeft-=cardwidth;
                }
                if(arrow.getAttribute("data-action")=="right"){
                    slid.scrollLeft+=cardwidth;
                }
            }
        })

    })
})

//form submittion for email or contact functionality
const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();
  const email=document.getElementById("email").value;
  const name=document.getElementById("name").value;
  const idea=document.getElementById("idea").value;
  document.getElementById("form").reset();
  const body= "name :"+name+"<br>"+"email :"+email+"<br>"+"idea :"+idea;
  Email.send({
    //SecureToken:"e98a6df6-3657-4c1d-8006-926c65caeb44",
   Host : "smtp.elasticemail.com",
  Username : "t85088657@gmail.com",
  Password : "199C7A3FCC0726871349BCFD4298936AF122",
    To : email,
    From : "t85088657@gmail.com",
    Subject : "mail from portfolio",
    Body : "Thanks for your Mail,response will sent with in 48 hours. <br>" + body
}).then(
  message => alert(message + " your form is submitted.")
);

})

// for dyanamic menu implementation 
const bars=document.getElementById("bars");
const close= document.getElementById("close");
const menu=document.getElementById("menu-item");

bars.addEventListener("click",()=>{
   menu.style.display="block";
   close.style.display="grid";
   close.style.justifyContent="end";
   bars.style.display="none";
   menu.style.width="auto";
   menu.style.height="88vh";
});

close.addEventListener("click",()=>{

    menu.style.display="none";
   close.style.display="none";
   bars.style.display="grid";
   bars.style.justifyContent="end";
});


// download functionality
const download=document.querySelector(".download-cv");
download.addEventListener("click",(e)=>{
    url="./resource/Style Guide.pdf"
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  
})