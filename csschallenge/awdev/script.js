
const maxStarRadius = 3;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getDocumentHeight() {
    let body = document.body,
        html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
}
function drawStars() {
    if (document.getElementById("stars1") !== null) {
        document.body.removeChild(document.getElementById("stars1"))
    }
    if (document.getElementById("stars2") !== null) {
        document.body.removeChild(document.getElementById("stars2"))
    }
    if (document.getElementById("stars3") !== null) {
        document.body.removeChild(document.getElementById("stars3"))
    }
    for (let i = 0; i < 3; i++) {
        let canvas = document.createElement("canvas")
        canvas.id = "stars" + (i + 1)
        canvas.style.filter = `blur(${((i + 1) / 3) * 1.2}px)`
        canvas.style.zIndex = -1
        canvas.style.position = "absolute"
        canvas.style.top = 0;
        canvas.style.animationName = "star"
        canvas.style.animationDuration = "5s"
        canvas.style.animationDelay = `-${Math.random() * 8}s`
        canvas.style.animationIterationCount = "infinite";
        document.body.appendChild(canvas);
        /*
      filter: blur(1px);
      z-index: -1;
      position: absolute;
      top: 0; */
        let context = canvas.getContext("2d")
        canvas.width = window.innerWidth - 17
        canvas.height = getDocumentHeight()
        for (let i = 0; i < 100; i++) {
            context.beginPath();
            context.arc(canvas.width * Math.random(), canvas.height * Math.random(), maxStarRadius * getRandomArbitrary(0.4, 1), 0, 2 * Math.PI, false);
            context.fillStyle = 'white';
            context.fill();
        }
    }
}
document.querySelectorAll(".faq-item").forEach(element => {
    console.log(element)
    let childone = element.children[0].scrollHeight
    let childtwo = element.children[1].scrollHeight
    console.log(childone, childtwo)
})
drawStars();
window.addEventListener("resize", drawStars)