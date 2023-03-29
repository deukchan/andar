$(function(){

    /**
     * @gnb에있는메뉴버튼누를때
     * 
     */ 
    $('.btn-menu').click(function(e){
      e.preventDefault();
      $('.side-nav, .bg').addClass('show')
      $('body').css('overflow', 'hidden')
    })
    $(".btn-area .btn-close, .bg").click(function(e){
      e.preventDefault();
      $('.side-nav,.bg').removeClass('show')
      $('body').css('overflow', 'auto')
    })

    /**
     * @검색창
     * 
     * 
     */

    $('.btn-search').click(function(e){
      e.preventDefault();
      if($('.popup-search').hasClass('show')){
        $('.popup-search').removeClass('show')
      }else{
        $('.popup-search').addClass('show')
      }
    })

    $(".popup-search .btn-close").click(function(e){
      e.preventDefault();
      $(".popup-search").removeClass("show")
    })

    

    /**
     * @nav메뉴버튼누르면나오는메뉴리스트
     */
    $('.btn-nav').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).siblings(".sub-list").stop().slideToggle();
    })

    /**
     * @배너탑슬라이드
     * 
     * 
     * 
     */
    var BntSwiper = new Swiper(".banner-slide", {
      effect: "fade",
        loop: true,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        }
    });

    /**
     * @스크롤하면보이는메뉴
     */

    let lastScroll = 0;

    $(window).scroll(function(){
      curr = $(this).scrollTop();
      if(curr > 0){
          $('.header').addClass('fix')
      }else{
          $('.header').removeClass('fix')
      }

      if(curr == 0){

        $('.fix-btns').removeClass('show')

      }else{

        if (curr > lastScroll) {
          $('.fix-btns').removeClass('show')
        } else {
          $('.fix-btns').addClass('show')
        }
      }
      lastScroll = curr;

    })

    $('#topBtn').click(function(e){
      e.preventDefault();
      window.scrollTo({top:0,behavior:'smooth'})
    })

    $(window).trigger('scroll'); //이벤트강제실행
    $('#allBtn').click(function(){
      $('.gnb').toggleClass('active');
      $('.group-all').stop().slideToggle()
    })



    /**
     * @전체메뉴버튼 
     * 
     *  
     */ 

    $('.btn-all').click(function(){
      if($('menu-list').hasClass('active')){
        $('menu-list.all').addClass('show')
        $('menu-list.active').removeClass('active')
      }else{
        $('menu-list.active').addClass('active')
        $('menu-list.all').removeClass('show')
      }
    })

    /**
     * @메인슬라이드
     * 
     * 
     * 
     */
    const swiper = new Swiper(".slide", {
        effect: "fade",
        loop: true,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },  
      pagination: {
        el: ".swiper-pagination",
      },
    });
    
    /**
     * @product슬라이드
     * 
     * 
     * 
     */
    var PrdSwiper = new Swiper(".swiper.product", {
      slidesPerView: 2.1,
      spaceBetween: 10,
      freeMode:true
    });

})