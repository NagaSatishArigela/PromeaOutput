$(document).ready(function () {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
      $('.top').attr('style' , 'display: block');
    } else {
      $('.top').hide();
    }
  });

 

  function scrollTops() {
    function fadeIn() {
      // 창 뷰포트의 높이 가져 오기
      var windowHeight = window.innerHeight
      //console.log("windowHeight = " + windowHeight);

      // 스크롤 상단 위치 설정
      var scrollTopPos = $(document).scrollTop();
      //console.log("scrollTopPos = " + scrollTopPos);

      // 스크롤 하단 위치 설정
      var scrollBottomPos = $(document).scrollTop() + windowHeight;
      //console.log("scrollBottomPos = " + scrollBottomPos);


      // 애니메이션의 트리거 포인트 설정
      var scrollBottomTrigger = scrollBottomPos - (windowHeight / 2);
      //console.log("scrollBottomTrigger = " + scrollBottomTrigger);

      // 이 고유 한 요소의 스크롤 위치 가져 오기


      //console.log("scrollPosSec1 = " + scrollPosSec1);
      //console.log("===============================================================");

      // 첫 번째 요소에 대한 애니메이션 트리거
      if (scrollBottomTrigger >= scrollTopPos) {
        $('#intro').addClass('animateOn01');
      };

      // if (scrollTopPos > 300) {
      //   $('#pageTopBtn').addClass('show');
      // } else {
      //   $('#pageTopBtn').removeClass('show');
      // }
    }

    // 문서가 준비되면이 함수를 실행하십시오.
    fadeIn();

    // 사용자가 스크롤 할 때이 함수를 실행하십시오.
    $(window).scroll(function () {
      fadeIn();
    });
  }; scrollTops();

  // 메뉴
  function lnb() {
    var li = $('.lnb > li');
    li.on('mouseenter keyup', function () {
      $(this).addClass('on');
      $(this).siblings('li').removeClass('on');
      // $(this).parents('.main_bg').css({'background':'#fff'});
      // $('.nav_wrap_pc .nav_close').addClass('on');
    });

    li.on('mouseleave', function () {
      $(this).removeClass('on');
      $('.lnb li').removeClass('on');
      $('.lnb li').children('ul').removeClass('on');
      $('.nav_wrap_pc .nav_close').removeClass('on');
      // $(this).parents('.main_bg').css({'background':'trasnparent'});
    });

    // 2deps, 3deps
    $(".sub_left > ul > li").on('mouseenter keyup', function () {
      $(this).children("ul").addClass('on');
      $(this).siblings("li").children('ul').removeClass('on');
      $(this).addClass('on');
      $(this).siblings('li').removeClass('on');

    });
    $(".sub_left > ul > li > ul > li").on('mouseenter keyup', function () {
      $(this).children("ul").addClass('on');
      $(this).siblings("li").children('ul').removeClass('on');
      // $(this).addClass('on');
      // $(this).siblings('li').removeClass('on');
    });

  }
  lnb();

  // 모바일 메뉴
  // Header Hamburger Click

  $('.header .menu').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('on');
    $('.lnb li').removeClass('on');
    $('.lnb li ul').removeClass('on');
    $('.m_only li div').removeClass('on');
    $('.dim1').toggleClass('on');
  });

  $('nav .m_only > ul > li > div > ul > li').click(function () {
    $(this).toggleClass('on');
    $(this).siblings('li').removeClass('on');
  });



  function rightdiv() {
    var clickBtn = $('.sub_left1 > ul > li');

    clickBtn.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow(index);
    });

    function boxShow(index) {
      var showBox = $('.sub_right1');
      showBox.siblings().removeClass('on');
      showBox.eq(index).addClass('on');
    };
  }
  rightdiv();

  function rightdiv02() {
    var clickBtn2 = $('.sub_left2 > ul > li');

    clickBtn2.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow2(index);
    });

    function boxShow2(index) {
      var showBox2 = $('.sub_right2');
      showBox2.siblings().removeClass('on');
      showBox2.eq(index).addClass('on');
    };
  }
  rightdiv02();

  function rightdiv03() {
    var clickBtn3 = $('.sub_left3 > ul > li');

    clickBtn3.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow3(index);
    });

    function boxShow3(index) {
      var showBox3 = $('.sub_right3');
      showBox3.siblings().removeClass('on');
      showBox3.eq(index).addClass('on');
    };
  }
  rightdiv03();

  function rightdiv04() {
    var clickBtn4 = $('.sub_left4 > ul > li');

    clickBtn4.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow4(index);
    });

    function boxShow4(index) {
      var showBox4 = $('.sub_right4');
      showBox4.siblings().removeClass('on');
      showBox4.eq(index).addClass('on');
    };
  }
  rightdiv04();

  function rightdiv05() {
    var clickBtn5 = $('.sub_left5 > ul > li');

    clickBtn5.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow5(index);
    });

    function boxShow5(index) {
      var showBox5 = $('.sub_right5');
      showBox5.siblings().removeClass('on');
      showBox5.eq(index).addClass('on');
    };
  }
  rightdiv05();

  function rightdiv06() {
    var clickBtn6 = $('.sub_left6 > ul > li');

    clickBtn6.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow6(index);
    });

    function boxShow6(index) {
      var showBox6 = $('.sub_right6');
      showBox6.siblings().removeClass('on');
      showBox6.eq(index).addClass('on');
    };
  }
  rightdiv06();

  function rightdiv07() {
    var clickBtn7 = $('.sub_left7 > ul > li');

    clickBtn7.on('mouseenter keyup', function () {
      var index = $(this).index();
      console.log(index);
      boxShow7(index);
    });

    function boxShow7(index) {
      var showBox7 = $('.sub_right7');
      showBox7.siblings().removeClass('on');
      showBox7.eq(index).addClass('on');
    };
  }
  rightdiv07();

  //추가
  $(window).resize(function () {
    m_h_change();
  });
  var menu_active = false;
  m_h_change();
  function m_h_change() {
    if ($(window).width() < 1280) {
      $('header .menu').click(function () {
        if (menu_active == false) {
          // $('.m_logo').hide();
          // $('.pc_logo').show();
          $('header').css('background', '#fff');
          menu_active = true;
        } else {
          // $('.m_logo').show();
          // $('.pc_logo').hide();
          // $('header').css('background','transparent');
          menu_active = false;
        }
      });
    }
  }

  // 모바일 메뉴 클릭
  // let depthOne = $('.dep1-a');
  // let depthTwo = $('.dep2-a');
  // let back = $('.back');

  // depthOne.click(function(){
  //   $(this).next('.dep1-cha').addClass('on');
  // });
  // depthTwo.click(function(){
  //   $(this).next('.dep2-cha').addClass('on');
  // });
  // back.click(function(){
  //   $(this).parent().removeClass('on');
  // });


  // 검색
  function search() {
    var formSearch = $('.form_search > img');
    formSearch.on('click', function () {
      $(this).next('form').addClass('on');
    });
    $('.form_search button').on('click', function () {
      $(this).parents().removeClass('on');
    });
  }
  search();

  // main selectbox 
  // function select(){
  //     $('.select button').on('click', function(){
  //         $(this).next().stop().slideToggle();
  //         $(this).toggleClass('on');
  //     });

  //     $('.select a').on('click', function(){
  //         var txt = $(this).text();
  //         var btn = $(this).parents('.select').children('button');

  //         btn.text(txt);
  //         btn.removeClass('on');
  //         $(this).parents('ul').slideUp();

  //         return false;
  //     });
  //   }
  //   select();


  $('.section01 .sec1_box2 button').click(function () {
    $('.section01 .sec1_box2').toggleClass('active');
  });

  // top
  function top() {
    $('.top').on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
  }
  top();

  // side메뉴 버튼
  const sidebtn_li = document.querySelectorAll('.sidebtn ul li');
  let li_gap = 10;
  let li_height = $(sidebtn_li).height() + 10;
  let click = false;
  $('.sidebtn').click(function () {
    if (click === false) {
      for (let i = 0; i < sidebtn_li.length; i++) {
        $(sidebtn_li[i]).delay(100 * i).animate({
          'top': -li_height * (i + 1),
          'opacity': 1
        }, 300);
      }
      click = true;
      $('.dim').addClass('on');
    } else {
      for (let m = 0; m < sidebtn_li.length; m++) {
        $(sidebtn_li[m]).delay(100 * (2 - m)).animate({
          'top': 0,
          'opacity': 0
        }, 300);
      }
      click = false;
      $('.dim').removeClass('on');
    }
    $('.side__btn').toggleClass('active');
  });


  // youtube 팝업
  // $('.popup_cf .close').on('click', function(){
  //   $('.popup_cf').fadeOut();
  // });
  $('.popup_content ul li').click(function () {
    $(this).addClass('on');
    $(this).siblings('li').removeClass('on');
  });
  // sub팝업
  $('.btn_popup').click(function () {
    $('.popup').fadeIn();
  });


  var closeBtn = (function () {
    return {
      init: function () {
        this.$closeBtn = $('.close');
        this.event();
      },
      event: function () {
        this.$closeBtn.on('click', function () {
          $(this).closest('.popup').hide();
        });
      }
    }
  })();
  closeBtn.init();

  // 직무소개 팝업
  $('.btn_popup1').click(function (e) {
    e.preventDefault();
    $('.popup1').fadeIn();
  });
  $('.btn_popup2').click(function (e) {
    e.preventDefault();
    $('.popup2').fadeIn();
  });
  $('.btn_popup3').click(function (e) {
    e.preventDefault();
    $('.popup3').fadeIn();
  });
  $('.btn_popup4').click(function (e) {
    e.preventDefault();
    $('.popup4').fadeIn();
  });
  $('.btn_popup5').click(function (e) {
    e.preventDefault();
    $('.popup5').fadeIn();
  });
  $('.btn_popup6').click(function (e) {
    e.preventDefault();
    $('.popup6').fadeIn();
  });
  $('.btn_popup7').click(function (e) {
    e.preventDefault();
    $('.popup7').fadeIn();
  });
  $('.btn_popup8').click(function (e) {
    e.preventDefault();
    $('.popup8').fadeIn();
  });
  $('.btn_popup9').click(function (e) {
    e.preventDefault();
    $('.popup9').fadeIn();
  });
  $('.btn_popup10').click(function (e) {
    e.preventDefault();
    $('.popup10').fadeIn();
  });
  $('.btn_popup11').click(function (e) {
    e.preventDefault();
    $('.popup11').fadeIn();
  });
  $('.btn_popup12').click(function (e) {
    e.preventDefault();
    $('.popup12').fadeIn();
  });


  // tabs
  function tab() {
    $('.tabs .tab li').click(function () {
      let idx = $(this).index();
      $(this).addClass('on');
      $(this).siblings().removeClass('on');

      $(this).parent('ul').siblings('div').eq(idx).addClass('on');
      $(this).parent('ul').siblings('div').eq(idx).siblings('div').removeClass('on');

      if (typeof changeTab === "function") {
        changeTab(idx);
      }

      console.log(idx);
      return false;
    });
  }
  tab();

  function tab1() {
    $('.tabs .tab li').click(function () {
      let idx = $(this).index();
      $(this).addClass('on');
      $(this).siblings().removeClass('on');

      // $(this).parent('ul').siblings('div').eq(idx).addClass('on');
      // $(this).parent('ul').siblings('div').eq(idx).siblings('div').removeClass('on');

      $('.tabs_box').children('div').eq(idx).addClass('on');
      $('.tabs_box').children('div').eq(idx).siblings('div').removeClass('on');

      if (typeof changeTab === "function") {
        changeTab(idx);
      }

      console.log(idx);
      return false;
    });
  }
  tab1();


  //  radio 클릭이벤트
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio1"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio1"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio2"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio2"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio3"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio3"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio4"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio4"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio5"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio5"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio6"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio6"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio7"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio7"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio8"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="form_radio8"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });
  // radio 클릭 이벤트(respiratory)
  $('.section3 .tabs_box > div > ul li form input[type="radio"][name="radio_type1"]').click(function () {
    if ($(this).prop('checked')) {
      $('.section3 .tabs_box > div > ul li form input[type="radio"][name="radio_type1"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });


  // faq
  function faq() {
    var li = $('.faq > ul > li');
    li.on('click', function () {
      $(this).children('div').stop().slideToggle(300);
      $(this).siblings().children('div').slideUp(300);

      $(this).toggleClass('on');
      $(this).siblings('li').removeClass('on');

      return false;
    });
  }
  faq();

  function faq1() {
    var li = $('.faq1 > ul > li').find('.prd_list_title');
    li.on('click', function () {
      $(this).parent().children('div').stop().slideToggle(200);
      $(this).parent().children('div').toggleClass();
      // $(this).siblings().children('div').slideDown(300);

      $(this).parent().toggleClass('on');
      // $(this).removeClass('on');

      return false;
    });
  }
  faq1();

  let sec2_cvList_height = $('.sec2_cvList').height();
  $('.sub_btn1').click(function () {
    position = $('.product_list1 .list_type1_1 > div').offset();
    $('body,html').stop().animate({ scrollTop: position.top - sec2_cvList_height }, 500);
    $('.list_type1_1>div').show();
  });
  $('.sub_btn2').click(function () {
    position = $('.product_list2 .list_type2_1 > div').offset();
    $('body,html').stop().animate({ scrollTop: position.top - sec2_cvList_height }, 500);
    $('.list_type2_1>div').show();

  });
  $('.sub_btn3').click(function () {
    position = $('.product_list3 .list_type3_1 > div').offset();
    $('body,html').stop().animate({ scrollTop: position.top - sec2_cvList_height }, 500);
    $('.list_type3_1>div').show();

  });


  // 회사소개 연혁 버튼 클릭 이동
  $('.years-1').click(function () {
    position = $('.his_year1').offset();
    $('body,html').stop().animate({ scrollTop: position.top }, 500);
    $(this).addClass('on');
    $(this).siblings('button').removeClass('on');
  });
  $('.years-2').click(function () {
    position = $('.his_year2').offset();
    $('body,html').stop().animate({ scrollTop: position.top }, 500);
    $(this).addClass('on');
    $(this).siblings('button').removeClass('on');
  });


  // 
  $('.sec1_boxtype1 tabs ul li').click(function () {
    $(this).addClass('on');
    $(this).siblings('li').removeClass('on');
  });

  // table 아코디언
  $('.table-type2 .item').click(function () {
    $(this).children('p').stop().slideToggle(300);
    $(this).siblings().children('p').slideUp(300);

    $(this).toggleClass('on');
    $(this).siblings('.item').removeClass('on');
    // $(this).parents('.tab_list6 .table-type2 .item').toggleClass('on');

    return false;
  });


  // selectbox
  $('.m-tab').change(function () {
    let state = $('.m-tab option:selected').val();
    if (state == 'option1') {
      $('.info_type1_1').addClass('on');
      $('.info_type1_1').siblings('div').removeClass('on');
    } else if (state == 'option2') {
      $('.info_type2').addClass('on');
      $('.info_type2').siblings('div').removeClass('on');
    } else if (state == 'option3') {
      $('.info_type3').addClass('on');
      $('.info_type3').siblings('div').removeClass('on');
    } else if (state == 'option4') {
      $('.info_type4').addClass('on');
      $('.info_type4').siblings('div').removeClass('on');
    } else if (state == 'option5') {
      $('.info_type5').addClass('on');
      $('.info_type5').siblings('div').removeClass('on');
    } else if (state == 'option6') {
      $('.info_type6').addClass('on');
      $('.info_type6').siblings('div').removeClass('on');
    } else if (state == 'option7') {
      $('.info_type7').addClass('on');
      $('.info_type7').siblings('div').removeClass('on');
    }
    
  });




  // Create a new ScrollTrigger instance with default options
  const trigger = new ScrollTrigger.default();
  // Add all html elements with attribute data-trigger
  trigger.add('[data-trigger]');



  $(".mobile_menu").simpleMobileMenu({
    onMenuLoad: function(menu) {
        console.log(menu)
        console.log("menu loaded")
    },
    onMenuToggle: function(menu, opened) {
        console.log(opened)
    },
    "menuStyle": "slide"
});


});


function toggleDepth1MenuGroup(key) {
  $('nav > .m_only > ul > li > div').each(function () {
    if ($(this).attr('id') == 'm_nav_' + key) {
      $(this).slideToggle();
    } else {
      $(this).slideUp();
    }
  });
}

function toggleDepth1MenuGroup01(key) {
  $('nav > .m_only > ul > li > div > ul > li > div').each(function () {
    if ($(this).attr('id') == 'm_nav_sub_' + key) {
      $(this).slideToggle();
    } else {
      $(this).slideUp();
    }
  });
}