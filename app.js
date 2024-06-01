
let tl = gsap.timeline({
    repeat:-1
})
tl.to(".imagecontainer",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:2,
    stagger:2,
   
},'bothAnim')
.to(".text h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"100%",
    Infinity:"-1"
    
},'bothAnim')
.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    top:0
    

   
},'bothAnim')