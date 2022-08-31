const dropDownHeaders = Array.from(document.querySelectorAll(".drop-down"));
const dropDownPopups = Array.from(document.querySelectorAll(".drop-down-content"));

const hamburgerDiv = document.querySelector("#hamburger-div");
const navContents = document.querySelector("#nav-contents");
const hamburger = document.querySelector("#hamburger");
const exitBtn = document.querySelector("#exit-btn");

for (let i = 0; i < dropDownHeaders.length; i++) {
    dropDownHeaders[i].addEventListener("click", () => {
        dropDownPopups[i].classList.toggle("hidden");

        dropDownHeaders[i].lastElementChild.classList.toggle("hidden");
        dropDownHeaders[i].children[1].classList.toggle("hidden");
    })
}

hamburgerDiv.addEventListener("click", () => {
    navContents.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    exitBtn.classList.toggle("hidden");
})