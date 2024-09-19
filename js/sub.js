
$(window).scroll(function () {
  let scrollBox = $(document).scrollTop();
  console.log(scrollBox);
});
$(function () {

  //헤더스크롤
  $("#header").addClass("fix")
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 0) {
      $("#header").addClass("sub_fix");
    } else {
      $("#header").removeClass("sub_fix");
    }
  });


  //2차메뉴
  $(".depth2").hide();
  $(".depth2_bg").hide();
  $(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
    $(".depth2_bg").stop().fadeToggle();
    $("header").toggleClass("depth2_fix");
  });


  //검색영역
  $("#search").hide();
  $(".btn_search").click(function () {
    $(this).toggleClass("active");
    $("#header").toggleClass("active");
    $("#search").fadeToggle();
    $(".gnb>li").toggleClass("disable");
  });
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 0) {
      $("#search").addClass("fix");
    } else {
      $("#search").removeClass("fix");
    }
  });

  //모바일전체메뉴
  $("#ham").hide();
  $(".btn_ham").click(function () {
    $("#ham").fadeToggle();
    $(this).toggleClass("active");
    $(".util").toggleClass("active");
  });
  //모바일-2차메뉴
  $(".mdepth2").hide();
  $(".mgnb>li").click(function () {
    $(this).find(".mdepth2").slideToggle();
    $(this).toggleClass("active");
  });

  //history
  $(".year1980").hide();
  $(".year1990").hide();
  $(".year2000").hide();
  $(".year2010").hide();
  $(".year2020").hide();
  $(".year_list>li").click(function () {
    let idx = $(this).index();
    $(".corporate_history ul").eq(idx).show();
    $(".corporate_history ul").eq(idx).siblings().hide();
    $(this).find("button").addClass("active")
    $(this).siblings().find("button").removeClass("active")
  });

  //notice
  $(".opened").hide();
  $(".notice_list>li").click(function () {
    $(this).find(".opened").slideToggle();
    $(this).find(".closed").toggleClass("open")
  })

  $(".notice_list:not(:first-child)").hide();
  $(".notice_pagination>li").click(function () {
    let idx = $(this).index();
    $(".notice_page_list>ul").eq(idx).show();
    $(".notice_page_list>ul").eq(idx).siblings().hide();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  //charter - bg 바꾸기
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".charter_list").offset().top) {
      $(".background").addClass("fix");
    } else {
      $(".background").removeClass("fix");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() < $(".charter_list li:nth-child(1)").offset().top) {
      $(".background").removeClass("bg2");
      $(".background").removeClass("bg3");
      $(".background").addClass("bg1");
      $(".charter_list li:nth-child(1)").addClass("active");
      $(".charter_list li:not(:nth-child(1))").removeClass("active");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".charter_list li:nth-child(1)").offset().top) {
      $(".charter_list li:nth-child(2)").addClass("active");
      $(".charter_list li:not(:nth-child(2))").removeClass("active");
      $(".background").removeClass("bg1");
      $(".background").addClass("bg2");

    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() < $(".charter_list li:nth-child(2)").offset().top && $(this).scrollTop() > $(".charter_list li:nth-child(1)").offset().top) {
      $(".background").removeClass("bg1");
      $(".background").removeClass("bg3");
      $(".background").addClass("bg2");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".charter_list li:nth-child(2)").offset().top) {
      $(".charter_list li:nth-child(3)").addClass("active");
      $(".charter_list li:not(:nth-child(3))").removeClass("active");
      $(".background").removeClass("bg2");
      $(".background").addClass("bg3");
      /* $(".background").removeClass("fix"); */
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".charter_list li:nth-child(3)").offset().top) {

      //$(".background").removeClass("fix");
    }
  });
  //서브 브랜드 스와이퍼
  const milk_txt = new Swiper(".milk_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const milk_img = new Swiper(".milk_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: milk_txt,
    },
    pagination: {
      el: ".milk-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".milk-next",
      prevEl: ".milk-prev",
    },
    /*     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }, */
    speed: 1000,
  });
  const yogurt_txt = new Swiper(".yogurt_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const yogurt_img = new Swiper(".yogurt_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: yogurt_txt,
    },
    pagination: {
      el: ".yogurt-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".yogurt-next",
      prevEl: ".yogurt-prev",
    },
    /*     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }, */
    speed: 1000,
  });
  const cheese_txt = new Swiper(".cheese_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const cheese_img = new Swiper(".cheese_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: cheese_txt,
    },
    pagination: {
      el: ".cheese-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".cheese-next",
      prevEl: ".cheese-prev",
    },
    /*     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }, */
    speed: 1000,
  });
  const juice_txt = new Swiper(".juice_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const juice_img = new Swiper(".juice_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: juice_txt,
    },
    pagination: {
      el: ".juice-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".juice-next",
      prevEl: ".juice-prev",
    },
    speed: 1000,
  });
  const coffee_txt = new Swiper(".coffee_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const coffee_img = new Swiper(".coffee_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: coffee_txt,
    },
    pagination: {
      el: ".coffee-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".coffee-next",
      prevEl: ".coffee-prev",
    },
    speed: 1000,
  });
  const grain_txt = new Swiper(".grain_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const grain_img = new Swiper(".grain_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: grain_txt,
    },
    pagination: {
      el: ".grain-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".grain-next",
      prevEl: ".grain-prev",
    },
    speed: 1000,
  });
  const baby_txt = new Swiper(".baby_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const baby_img = new Swiper(".baby_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: baby_txt,
    },
    pagination: {
      el: ".baby-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".baby-next",
      prevEl: ".baby-prev",
    },
    speed: 1000,
  });
  const health_txt = new Swiper(".health_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const health_img = new Swiper(".health_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: health_txt,
    },
    pagination: {
      el: ".health-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".health-next",
      prevEl: ".health-prev",
    },
    speed: 1000,
  });
  const instant_txt = new Swiper(".instant_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const instant_img = new Swiper(".instant_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: instant_txt,
    },
    pagination: {
      el: ".instant-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".instant-next",
      prevEl: ".instant-prev",
    },
    speed: 1000,
  });
  const snack_txt = new Swiper(".snack_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const snack_img = new Swiper(".snack_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: snack_txt,
    },
    pagination: {
      el: ".snack-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".snack-next",
      prevEl: ".snack-prev",
    },
    speed: 1000,
  });
  const dessert_txt = new Swiper(".dessert_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const dessert_img = new Swiper(".dessert_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: dessert_txt,
    },
    pagination: {
      el: ".dessert-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".dessert-next",
      prevEl: ".dessert-prev",
    },
    speed: 1000,
  });
  const dairy_txt = new Swiper(".dairy_txt", {
    slidesPerView: 1,
    watchSlidesProgress: true,
    effect: "fade"
  });
  const dairy_img = new Swiper(".dairy_img", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 115,
    thumbs: {
      swiper: dairy_txt,
    },
    pagination: {
      el: ".dairy-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".dairy-next",
      prevEl: ".dairy-prev",
    },
    speed: 1000,
  });
  //서브-브랜드-탭
  $(".brand_list>div:not(:first-child)").hide();
  $(".brand_tap .tap_btn_list>li").click(function () {
    let idx = $(this).index();
    $(".brand_list>div").eq(idx).fadeIn();
    $(".brand_list>div").eq(idx).siblings().fadeOut(0);
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");


  });
  /*   brand_img_list.controller.control = brand_txt_list;
    brand_txt_list.controller.control = brand_img_list; */
});//문서준비이벤트종료(삭제금지)



