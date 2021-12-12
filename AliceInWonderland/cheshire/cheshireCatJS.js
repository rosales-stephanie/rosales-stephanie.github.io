console.log('javascript')
randomPositionCheshire()
/* https://stackoverflow.com/questions/4796743/random-position-of-divs-in-javascript */
function randomPositionCheshire(){
    console.log('clicked')
    let divWidth = document.getElementById("cheshire").offsetWidth
    let divHeight = document.getElementById("cheshire").offsetHeight
    // make position sensitive to size and document's width
    let intViewportWidth = window.innerWidth;
    let intViewportHeight = window.innerHeight;
    var posx = (Math.random() * (intViewportWidth - divWidth)).toFixed();
    var posy = (Math.random() * (intViewportHeight - divHeight)).toFixed();

    $('.field').css({
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(1000).delay(5000).fadeOut(1000, function(){
        $('.field').css({
            'display':'block'
        })      
    randomPositionCheshire();
    });
}

/* https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click */
function playMusic() {
    var music = document.getElementById("song");
    music.play();
}
