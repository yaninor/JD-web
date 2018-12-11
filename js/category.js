// 入口函数
window.addEventListener('load',function(){
 new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
},
mousewheel: true,
});
 var links = document.querySelectorAll('.category-left ul li a');
 var swiperWrapper = document.querySelector('.category-left .swiper-wrapper');
 var swiperSlide = document.querySelector('.category-left .swiper-slide');
 for (var i = 0; i < links.length; i++) {
     links[i].addEventListener('click',(function(i){
        return function(e){
            var translateY = -i*this.offsetHeight;
            var minHeight = swiperWrapper.offsetHeight-swiperSlide.offsetHeight;
            if(translateY<minHeight){
                translateY = minHeight;
            }
            swiperWrapper.style.transform = 'translate3d(0px, ' + translateY + 'px, 0px)';
            swiperWrapper.style.transition = "all .3s";
            for (var j = 0; j < links.length; j++) {
                links[j].parentNode.classList.remove("active");
            }
            links[i].parentNode.classList.add('active');
        }
    })(i));
 };
})