const letTalk = document.getElementById('let-talk');
const contact = document.getElementById('contact');

letTalk.addEventListener('click',() => {
    contact.style.display = 'block';
});

(function ($) {
    "use strict";
$(".services-list-li").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

})(jQuery);

const sliderr = document.querySelector(".services-list");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const cardsWidth = sliderr.querySelector("ul").offsetWidth + 20;

nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: cardsWidth,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -cardsWidth,
        behavior: "smooth"
    });
});

const dots = document.querySelectorAll(".dot");

function updateDots(index){
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

let currentIndex = 0;

function startSlider(){

    autoSlide = setInterval(()=>{

        currentIndex++;

        if(currentIndex >= dots.length){
            currentIndex = 0;
            scrollAmount = 0;
        }else{
            scrollAmount += cardWidth;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });

        updateDots(currentIndex);

    },3000);
}

