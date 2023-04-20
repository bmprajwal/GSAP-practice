const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-open')

// const tween = TweenLite.to(object, time, {properties})
// const tween = TweenLite.to('.cover', 2, {
//     width: "40%"
// })

const tl = new TimelineLite({paused: true, reversed: true})
//set paused to true to prevent the animation on loading page


tl.to('.cover', 1, {
    width: "60%",
    ease: Power2.easeOut
})
.to('nav', 1, {
    height:"100%",
    ease: Power2.easeOut
}, "-= 0.5")
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    onComplete : function(){
        navOpen.style.pointerEvents = "auto"
    }
    //onComplete runs after the animation has completed
})

navButton.addEventListener('click', (e) => {
    if(tl.isActive()) {
        e.preventDefault()
        //this prevents the default action of event i.e, clicking event of the button while animation is running
        e.stopImmediatePropagation()
        return false
    }

    toggleTween(tl)
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse()
}