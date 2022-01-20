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




$(document).ready(function () {

    $(document).on('mousemove', function (e) {
        $('#circularcursor').css({
            left: e.pageX + 10,
            top: e.pageY + 10

        });

    })

});

let scrollanim = () => {

    let blocks = document.querySelectorAll('.scrolldwn-container div')


    var i = 0;                  //  set your counter to 1

    function myLoop() {
        //  create a loop function
        setTimeout(function () {

            if (i == 0) {
                blocks[i].style.border = `1px solid green`
            }
            if (i == 1) {
                blocks[i].style.border = `1px solid blue`
            }
            if (i == 2) {
                blocks[i].style.border = `1px solid red`
            }
            if (i == 3) {
                blocks[i].style.border = `1px solid black`
            }

            i++;                    //  increment the counter
            if (i < 4) {           //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another 
            }
        }, 100)
    }

    myLoop();


}
// scrollanim()

// let blocks = document.querySelector('.scrolldwn-container div').style.opacity = '0.1'
