var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "-75% 50",
    end: "50% 50%",
    scrub:true,
    
}})

tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'org')
tl.to("#orange-cut",{
    top:"180%",
    left:"22%"
},'org')
tl.to("#orange",{
    top:"180%",
    right:"10%",
    width:"15%"
},'org')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "-75% 50",
    end: "50% 50%",
    scrub:true,
    markers:true,
}})

tl2.from(".lm1",{
    rotate:"-90deg",
    left:"-50%",
    top:"110%",
},'sp')
tl2.from("#sprite",{
    rotate:"-90deg",
    top:"110%",
},'sp')

tl2.from(".lm2",{
    rotate:"-90deg",
    right:"-50%",
    top:"110%"
},'sp')
// tl2.from("#coco",{
//     rotate:"90deg",
//     top:"110%"
// },'sp')
tl2.to("#fanta",{
    left:"35%",
    top: "218%",
    width:"30%"
},'cut')
tl2.to("#orange-cut",{
    left:"43%",
    top:"215%",
})