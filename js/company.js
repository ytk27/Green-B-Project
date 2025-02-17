const contents = document.querySelectorAll(".b");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }
});
}, options);

contents.forEach((content) => {
    observer.observe(content);
});


const swiperSlide = document.querySelectorAll(".swiper-slide");

swiperSlide.forEach(slide => {
    slide.addEventListener("click", function() {
        // 기존 active 클래스 제거
        swiperSlide.forEach(s => s.classList.remove("active"));

        // 선택한 슬라이드에 active 클래스 추가
        this.classList.add("active");
    });
});


const swiperSlide2 = document.querySelectorAll(".mySwiper2 .swiper-slide");
const swiperSlide2_img = document.querySelector(".tab-img-con02 img");
const swiperSlide2_p = document.querySelector(".tab-img-con02 p");
let slide2Con = [
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'},
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'},
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'},
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'},
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'},
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'},
    {url:'./img/company/history.jpg',txt:'sdsdsdsd'}
]

swiperSlide2.forEach((slide,i) => {
    slide.addEventListener("click", function() {
        // 기존 active 클래스 제거
        swiperSlide2.forEach(s => s.classList.remove("active"));

        // 선택한 슬라이드에 active 클래스 추가
        this.classList.add("active");

        swiperSlide2_img.src = slide2Con[i].url;
        swiperSlide2_p.innerHTML = slide2Con[i].txt
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});