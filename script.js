var tl = gsap.timeline();

tl.from("#nav img, #nav h3,#nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:.5,
    stagger:0.2,
    opacity:0,
})
tl.from("#main h1",{
    y:100,
    stagger:.3,
    opacity:0,
})
tl.from("#main>img",{
    y:200,
    x:-100,
    duration:1,
    stagger:.3,
    rotation:180,
    opacity:0,
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:.7,
    yoyo:true,
})
tl.from(".social-links div",{
    opacity:0,
    scale:0,
    x:-200,
    duration:1,
    rotation:360,
    stagger:.3,
})
tl.to("#main h1 span",{
    scale: 1.1,
    delay:.3,
    duration:1,
    yoyo:true,
    repeat:-1
})
