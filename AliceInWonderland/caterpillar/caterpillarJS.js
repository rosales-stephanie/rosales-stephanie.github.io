console.log('javascript')
/* https://stackoverflow.com/questions/34751230/javascript-how-to-see-if-an-image-has-been-clicked */
$('#caterpillar').click(displayWords);

function displayWords() {
    console.log("button clicked!!");
    document.body.style.backgroundImage = 'url(../images/smoke.gif)';
    /* https://www.javascripttutorial.net/javascript-dom/javascript-append/ */
    let heading = document.querySelector('#words');
    let words = ['Who', 'are', 'you?'];
    let spans = words.map(wd => {
        let span = document.createElement('span');
        span.textContent = wd;
        return span;
    });
    heading.append(...spans);
}

