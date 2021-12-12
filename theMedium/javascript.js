console.log("javascript!!")

function myFunction () {
    console.log("button clicked!!");
    document.body.style.backgroundImage = 'url(images/smoke.gif)';
    /* https://www.javascripttutorial.net/javascript-dom/javascript-append/ */
    let heading = document.querySelector('#words');
    let words = ['Who', 'are', 'you?'];
    let spans = words.map(wd => {
        let span = document.createElement('span');
        span.textContent = wd;
        return span;
    });
    heading.append(...spans);
    document.getElementById("alice").style.display='none';
    var img = document.createElement("img");
    img.src = "images/medium_message.jpeg";
    var src = document.getElementById("image");
    src.appendChild(img);
}

