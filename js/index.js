//入口函数事件
window.addEventListener('load',function(){
    //获取轮播图高度
    var slideHight = document.querySelector('#slide').offsetHeight;
    // console.log(slideHight);
    //获取头部
    var header = document.querySelector('#header');
    // 滚动事件
    window.addEventListener('scroll',function(e){
        //获取滚动高度
        var scrollTop = document.documentElement.scrollTop;
        //计算透明度
        var opacity = scrollTop/slideHight;
        // console.log(scrollTop);
        // 设置给头部的rgba中的a
        header.style.backgroundColor = 'rgba(226, 25, 24,'+opacity+')';
    });
    var spanList = document.querySelectorAll('.seckill-time span');
    var futureTime = new Date(2018,11,8,14,56,00);
    var nowTime = new Date();
    // console.log(futureTime);
    var time = Math.floor((futureTime-nowTime)/1000);
    function downTime (){
        var hour = time/3600;
        var minute = time%3600/60;
        var second = time%60;
        spanList[0].innerHTML = Math.floor(hour/10);
        spanList[1].innerHTML = Math.floor(hour%10);
        spanList[3].innerHTML = Math.floor(minute/10);
        spanList[4].innerHTML = Math.floor(minute%10);
        spanList[6].innerHTML = Math.floor(second/10);
        spanList[7].innerHTML = Math.floor(second%10);
    }
    downTime();
    var timerId = setInterval(function(){
        time--;
        if(time <= 0){
            time=0;
            downTime();
            clearInterval(timerId);
        }else {
            downTime();
            console.log(time);
        }
    },1000);

    // 初始化swiper插件  第一个参数轮播图大容器选择器  第二个参数是对象 是轮播图一些配置项
    new Swiper('.swiper-container', {
        // 方向 水平
        direction: 'horizontal',
        // 是否循环 无缝轮播图 （动态添加2张图片）
        loop: true,
        // 小圆点
        pagination: {
            el: '.swiper-pagination',
        },
          // autoplay:true,//等同于以下设置
            autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
});
})