document.addEventListener("mousemove", function (event) {
    const x = event.pageX
    const y = event.pageY
    
    document.querySelectorAll("div").forEach(div => {
        const dx = (div.offsetLeft + 50) - x
        const dy = (div.offsetTop + 48) - y
        const dist = Math.sqrt(dx * dx + dy * dy)

        const score = Math.exp(dist * -0.00333333)

      // div.style.transform = "scale(" + score + ")"
        div.style.fontWeight = 100 + (100 * Math.floor(8 * score))
        if (score < .95) {
            div.style.fontFamily = "ABC Arizona Sans Trial, sans-serif"
        }
        if (score < .8) {
            div.style.fontFamily = "ABC Arizona Flare Trial, sans-serif"
        }
        if (score < .6) {
            div.style.fontFamily = "ABC Arizona Mix Trial, sans-serif"
        }
        if (score < .4) {
            div.style.fontFamily = "ABC Arizona Text Trial, sans-serif"
        }
        if (score < .2) {
            div.style.fontFamily = "ABC Arizona Serif Trial, sans-serif"
        }
        
        
        
        
    })    
})
