let i = 0;
let images = [];
let time = 6000;

images[0] = "images/wake-tech-campus.jpg";
images[1] = "images/code-snippet.png";
images[2] = "images/math-homework.png";
images[3] = "images/terminal-chess.png";
images[4] = "images/peer-tutoring.png";

function changeImg() {
    document.slide.src = images[i]
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;