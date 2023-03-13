var estadoLicuadora = false
var soundLicuadora = document.getElementById("blender-sound")
var soundButtonLicuadora = document.getElementById("blender-button-sound")
var licuadora = document.getElementById("blender")

function controlarLicuadora() {
    if (estadoLicuadora == false){
        estadoLicuadora = true;
        hacerRuido();
        licuadora.classList.add("active");
    } else{
        estadoLicuadora = false
        hacerRuido();
        licuadora.classList.remove("active")
    }
}

function hacerRuido(){
    if(soundLicuadora.paused){
        soundButtonLicuadora.play()
        soundLicuadora.play()
    } else{
        soundButtonLicuadora.play()
        soundLicuadora.pause()
        soundLicuadora.currentTime = 0
    }
}