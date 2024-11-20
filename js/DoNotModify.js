// const exampleGif01 = "test"; // img src값 삽입 ㄱㄱ

// // #1
const toggleItems = document.querySelectorAll(".question__toggle .toggle__item a");
toggleItems.forEach((item)=>{
    item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.toggle("active");
    });
});


// #2 

const tabTitleItems = document.querySelectorAll(".tab__box .title__item");
const tabContentItems = document.querySelectorAll(".tab__box .content__item");

tabTitleItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        tabTitleItems.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContentItems.forEach((content) => {
            content.classList.remove("active");
        });
        item.classList.add("active");
        tabContentItems[index].classList.add("active");
    });
});

new Swiper('.swiper-container', {
    slidesPerView : 1,
    loop : true,
    autoplay : { 
        delay : 2000, 
        disableOnInteraction : false,
    },
    loopAdditionalSlides : 1,
})


