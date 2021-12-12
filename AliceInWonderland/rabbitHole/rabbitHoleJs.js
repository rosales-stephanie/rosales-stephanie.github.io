console.log("javascript");
function fall() {
    let alice = document.getElementById("alice");
    alice.classList.toggle("rotate");
}

function talking() {
    var sound = document.getElementById("falling");
    sound.play();
}
