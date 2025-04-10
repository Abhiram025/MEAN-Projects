const toggleBtn=document.getElementById("turn-on") 
const toggleSlider=document.getElementById("slider")
const lightImg=document.getElementById("light-img")
let lightOn=false

toggleBtn.addEventListener("click", ()=> {
    lightOn=!lightOn
    toggleBtn.style.background=lightOn? "#00986f":"#efefef"
    toggleSlider.style.background=lightOn? "#fff":"#999"
    toggleSlider.style.marginLeft=lightOn? "auto":"0"
    toggleSlider.style.marginRight=lightOn? "auto":"0"
    lightImg.style.opacity=lightOn? "100%":"-100%"
    if(lightOn) {
        toggleSlider.style.marginRight="2px"
    }
    else {
        toggleSlider.style.marginLeft="2px"
    }
})