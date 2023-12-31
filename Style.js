// General slider for image
const btn=document.querySelectorAll(".slider i");
const slider=document.querySelector(".image-slider");
const img=document.querySelector(".image-slider img");

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

// Attribute slider for cards which works on any elements
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
        });

    });
});

//form using smtp function
const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();
  const email=document.getElementById("email").value;
  const name=document.getElementById("name").value;
  const idea=document.getElementById("idea").value;
  document.getElementById("form").reset();
  const body= "name :"+name+"<br>"+"email :"+email+"<br>"+"idea :"+idea;
  Email.send({
    SecureToken : "9c9fb57c-bc56-47d4-a3ef-dae9d3745898",
    To : email,
    From : "t85088657@gmail.com",
    Subject : "mail from portfolio",
    Body : "Thanks for your Mail,response will sent with in 48 hours. <br>" + body
}).then(
  message => alert(message + " your form is submitted.")
);

});

// menu bar for navigation
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


// download function
const download=document.querySelector(".download-cv");
download.addEventListener("click",(e)=>{
    url="./resource/Design file.jpg"
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  
})

// active link function

const nav=document.querySelectorAll(".nav-item");
nav.forEach(item=>{
    item.addEventListener("click",(n)=>{
        if(screen.width <= 600){
        close.click();
    }
    n.preventDefault();
    const id=document.querySelector(n.target.getAttribute("href"));
        document.querySelector(".active").className="nav-item";
        n.currentTarget.className="nav-item active";
        var bodyRect = document.body.getBoundingClientRect(),
      elemRect = id.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top-80;
        console.log(offset);
        window.scrollTo(0,offset);
    })
})