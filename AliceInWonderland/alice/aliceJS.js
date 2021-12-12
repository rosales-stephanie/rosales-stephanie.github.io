console.log("javascript")
let cakeClickedTimes = 0;
let bottleClickedTimed = 0;

$("#eatMe").click(function() {
    console.log('cake clicked')
    cakeClickedTimes += 1;
    if (cakeClickedTimes <= 1) {
        playSoundForGrowing();
    } else {
        makeAliceGrow();
    }
});

$("#drinkMe").click(function() {
    console.log('drink clicked')
    bottleClickedTimed += 1;
    if (bottleClickedTimed <= 1) {
        playSoundForShrinking();
    } else {
        makeAliceShrink();
    }
});

function makeAliceGrow(){
    let divHeight = document.getElementById("alice").offsetHeight
    // make position sensitive to size and document's width
    divHeight += 50;
    $('#alice').css({
        'height': divHeight +'px',
    }).appendTo( 'body' )
}

function makeAliceShrink(){
    let divHeight = document.getElementById("alice").offsetHeight
    // make position sensitive to size and document's width
    divHeight -= 50;
    $('#alice').css({
        'height': divHeight +'px',
    }).appendTo( 'body' )
}

/* https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click */
function playSoundForGrowing() {
    console.log("playing sound")
    var sound = document.getElementById("grow");
    sound.play();
}

function playSoundForShrinking() {
    console.log("playing sound")
    var sound = document.getElementById("shrink");
    sound.play();
}
