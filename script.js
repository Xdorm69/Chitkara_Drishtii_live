let tl = gsap.timeline()
tl.to(".loader" , {
    top:"-150%",
    delay:5.5,
    duration:1,
    ease:"expo.out"
})
tl.from(".uppr_txt" , {
    y:100,
    opacity:0,
    duration:.5,
})
tl.from(".middle_txt" , {
    y:100,
    opacity:0,
    duration:.5,
})
tl.from(".lower_txt" , {
    y:100,
    opacity:0,
    duration:.5,
})

let hm = gsap.timeline()
hm.from(".ham" , {
    x:200,
    duration:.2,
})
hm.from(".ham a" , {
    y:100,
    stagger:.2,
    opacity:0,
    duration:.3,
})
hm.pause()

var ham = document.querySelector(".ham")
var cross = document.querySelector(".cross")
cross.addEventListener("click" , ()=>{
    
    hm.reverse()
})
var hamSign = document.querySelector(".hamSign")
hamSign.addEventListener("click" , ()=>{
    
    hm.play()
}) 

