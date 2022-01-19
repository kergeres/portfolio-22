"use strict";


window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-2E86DF0HZ1');

document.querySelectorAll('.upper-container div, .lower-container div').forEach(pic => {
    pic.addEventListener('click', (e) => {
        window.open("https://photos.app.goo.gl/RTEVkvdS5fLeFDD37")
    })
})

function textAnimatoin() {

    let top = document.querySelector(".text"); let bottom = document.querySelector(".zw");
    let introPositionForB = bottom.getBoundingClientRect().top;
    let introPosition = top.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7;
    if (introPosition < screenPosition) {
        top.classList.add("text-show");
    }
    if (introPositionForB < screenPosition) {
        bottom.classList.add("text-showb");
    }


}



window.addEventListener("scroll", function () {
    textAnimatoin();

});







// function crs() {
//     document.querySelector("body").addEventListener('mousemove', function (e) {

//         document.querySelector('#circularcursor').style.left = `${e.screenX}px`;

//         document.querySelector('#circularcursor').style.top = `${e.screenY}px`;

//     })
// };
// crs()



$(document).ready(function () {

    $(document).on('mousemove', function (e) {
        $('#circularcursor').css({
            left: e.pageX + 10,
            top: e.pageY + 10

        });

    })

});