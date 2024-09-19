
$(window).scroll(function () {
  let scrollBox = $(document).scrollTop();
  console.log(scrollBox);
});
$(function () {

  //헤더스크롤
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 0) {
      $("#header").addClass("fix");
      $("#header").addClass("fix_bg");
    } else {
      $("#header").removeClass("fix");
      $("#header").removeClass("fix_bg");
    }
  });


  //2차메뉴
  $(".depth2").hide();
  $(".depth2_bg").hide();
  $(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
    $(".depth2_bg").stop().fadeToggle();
    $("header").toggleClass("hover_bg");
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

  //매인배너
  const main_visual = new Swiper(".main_visual", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    /*        autoplay: {
             delay: 3000,
             disableOnInteraction: false,
           }, */
    speed: 1000,
  });

  let videos = document.querySelectorAll(".mov");

  // 모든 비디오를 초기화
  videos.forEach((video) => {
    video.currentTime = 0;
    /* video.pause(); */
  });

  //product-tit-box
  // $(window).scroll(function () {
  //   let scrollBox = $(document).scrollTop();
  //   if (scrollBox < 1300) {
  //     $("#product .p1").show();
  //     $("#product .p2").hide();
  //     $("#product .p3").hide();
  //   } if (scrollBox > 1300 && scrollBox < 1800) {
  //     $("#product .p1").hide();
  //     $("#product .p2").show();
  //     $("#product .p3").hide();
  //   } else {
  //     $("#product .p1").hide();
  //     $("#product .p2").hide();
  //     $("#product .p3").show();
  //   }
  // });
  $(window).scroll(function () {
    if ($(this).scrollTop() < $(".food_list").offset().top) {
      $("#product .p1").show();
      $("#product .p2").hide();
      $("#product .p3").hide();
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".food_list").offset().top && $(this).scrollTop() < $(".toddler_list").offset().top) {
      $("#product .p1").hide();
      $("#product .p2").show();
      $("#product .p3").hide();
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".toddler_list").offset().top) {
      $("#product .p1").hide();
      $("#product .p2").hide();
      $("#product .p3").show();
    }
  });

  //product-제품 슬라이드
  const dairy_list = new Swiper('.dairy_list', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
  });
  const food_list = new Swiper('.food_list', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
  });
  const toddler_list = new Swiper('.toddler_list', {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
  });
  //company 영역

  const company_txt = new Swiper(".company_txt", {
    /* loop: true, */
    slidesPerView: "auto",
    /* freeMode: true, */
    watchSlidesProgress: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const company_list = new Swiper(".company_list", {
    slidesPerView: 4,
    /* slidesPerView: 1, */
    spaceBetween: 24,
    thumbs: {
      swiper: company_txt,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 14,
        /* direction: "horizontal", */
        loop: true,
        centeredSlides: true,
        grid: {
          rows: 1,
        },
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 24,
        /*  direction: "horizontal", */
        loop: true,
        centeredSlides: true,
        grid: {
          rows: 1,
        },
      },
    },
    /* direction: "vertical", */
    grid: {
      rows: 4,
    },
  });

  /*   $(".company_txt li").css({ "opacity": "0" });
    $(".company_txt li.swiper-slide-visible").css({ "opacity": "1" }); */
  /*   company_list.controller.control = company_txt
    company_txt.controller.control = company_list */

});//문서준비이벤트종료(삭제금지)



