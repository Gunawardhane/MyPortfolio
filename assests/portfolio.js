let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// gallery

// var gallery = document.querySelector('#gallery');
// var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
// var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
// var resizeAll = function () {
//     var altura = getVal(gallery, 'grid-auto-rows');
//     var gap = getVal(gallery, 'grid-row-gap');
//     gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//         var el = item;
//         el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
//     });
// };
// gallery.querySelectorAll('img').forEach(function (item) {
//     item.classList.add('byebye');
//     if (item.complete) {
//         console.log(item.src);
//     }
//     else {
//         item.addEventListener('load', function () {
//             var altura = getVal(gallery, 'grid-auto-rows');
//             var gap = getVal(gallery, 'grid-row-gap');
//             var gitem = item.parentElement.parentElement;
//             gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
//             item.classList.remove('byebye');
//         });
//     }
// });
// window.addEventListener('resize', resizeAll);
// gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//     item.addEventListener('click', function () {        
//         item.classList.toggle('full');        
//     });
// });

// Gallery

window.onload = () => {
  for (let i of document.querySelectorAll(".gallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
};


// loader

let loader = document.getElementById("loader");
    //this is it. this will execute after the window is fully loaded
    window.addEventListener("load", function () {
        console.log("This message will print just after fully loading the website")

        //hide the loader
        loader.style.display = 'none';
    });


    // in addition to that if you want to run a code as soon as the DOM created
    document.addEventListener("DOMContentLoaded", function () {
        // you can write anything you want here, and it will run just after creating the DOM object
        let h1 = document.createElement("h1");
        h1.textContent = "HI there";

        let body=document.querySelector("body");
        body.prepend(h1);
    });