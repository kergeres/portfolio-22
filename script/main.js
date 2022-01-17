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