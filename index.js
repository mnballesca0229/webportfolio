
Splitting();

let cursor = document.querySelector('.cursor'),
    cursorText = cursor.querySelectorAll('.char');


function rounded(radius) {
  
    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        });
        gsap.set(cursor, { transformOrigin: "center center", rotation: 0, width: radius * 2, height: radius * 2 })

    }

    let rotate = gsap.timeline({ repeat: -1 })
    rotate.to(cursor, { rotation: 360, duration: 5, ease: "none", })
}

let radius = 70






function cursorMove(event) {
    var mouseX = event.pageX,
        mouseY = event.pageY
    tl = gsap.timeline();
    tl.to(cursor, {
        duration: 0.1,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease
    })
}




function init() {
    rounded(radius);
    window.addEventListener('mousemove', cursorMove);
}

window.addEventListener("load", function () {
    init();
})



// Preloader End


// Hover effect on cards

const handleOnMouseMove = e => {
    const {currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll("#website")) {
    card.onmousemove = e => handleOnMouseMove(e);
}
// Hover effect on cards End

// Water Effect Hover End

// loading images in work space
// let myDiv = document.querySelector('.website-image');

// window.onload = () => {
//     myDiv.style.backgroundImage = `url('https://iili.io/HG5acFt.jpg')`;
//     myDiv.style.backgroundRepeat = `no-repeat`;
//     myDiv.style.backgroundPosition = `center`;
// };

// myDiv.addEventListener('mouseover', () => {
//     myDiv.style.backgroundImage = `url('https://iili.io/HG5Qerx.jpg')`;
//     myDiv.style.backgroundRepeat = `no-repeat`;
//     myDiv.style.backgroundPosition = `center`;
// });

// myDiv.addEventListener('mouseleave', () => {
//     myDiv.style.backgroundImage = `url('https://iili.io/HG5acFt.jpg')`;
//     myDiv.style.backgroundRepeat = `no-repeat`;
//     myDiv.style.backgroundPosition = `center`;
// });

// loading images in work space
