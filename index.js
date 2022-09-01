const dropDownHeaders = Array.from(document.querySelectorAll(".drop-down"));
const dropDownPopups = Array.from(document.querySelectorAll(".drop-down-content"));

const hamburgerDiv = document.querySelector("#hamburger-div");
const navContents = document.querySelector("#nav-contents");
const hamburger = document.querySelector("#hamburger");
const exitBtn = document.querySelector("#exit-btn");
const pageMask = document.querySelector("#page-mask");

let dropDownTally = 0;
let hamburgerTally = 0;

for (let i = 0; i < dropDownHeaders.length; i++) {
    DropDownEvent(i);
}

hamburgerDiv.addEventListener("click", () => {
    HamburgerEvent();
})

function DropDownEvent(i) {
    dropDownHeaders[i].addEventListener("click", () => {
        dropDownPopups[i].classList.toggle("hidden");

        dropDownHeaders[i].lastElementChild.classList.toggle("hidden");
        dropDownHeaders[i].children[1].classList.toggle("hidden");
    })
}

function HamburgerEvent() {
    navContents.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    exitBtn.classList.toggle("hidden");
    pageMask.classList.toggle("hidden");
    hamburgerTally++;
}

if (window.attachEvent) {
    window.attachEvent('onresize', () => {
        if (window.innerWidth > 800) {
            if (hamburgerTally % 2 !== 0) {
                HamburgerEvent();
            }
        }
    });
} else if (window.addEventListener) {
    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) {
            if (hamburgerTally % 2 !== 0) {
                HamburgerEvent();
            }
        }
    }, true);
} else {
    //The browser does not support Javascript event binding
}