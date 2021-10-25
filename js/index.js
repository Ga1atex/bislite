$(function () {
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="works__arrow slick-prev"><img class="slick-arrow__img slick-arrow__img-prev" src="img/arrow-right.svg" alt=""></button>',
    nextArrow: '<button type="button" class="works__arrow slick-next"><img class="slick-arrow__img slick-arrow__img-next" src="img/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.header__menu-btn').on('click', function () {
    $('body').toggleClass('overflow--hidden');
    $('.menu__list').toggleClass('menu__list--visible');
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
  });

  $(window).on('resize load', function () {
    if (document.body.clientWidth <= 768) {
      $('.drop-down').off();
      $('.drop-down').on('click', function () {
        // if (!$(this).children().is('.drop-down__link--active')) {
        //   $('.drop-down__link--active').removeClass('drop-down__link--active');
        // }
        // if (!$(this).children().is('.drop-down__list--active')) {
        //   $('.drop-down__list--active').removeClass('drop-down__list--active');
        // }
        if ($(this).siblings('.drop-down').children().is('.drop-down__link--active')) {
          $('.drop-down__link--active').removeClass('drop-down__link--active');
        }
        if ($(this).siblings('.drop-down').children().is('.drop-down__list--active')) {
          $('.drop-down__list--active').removeClass('drop-down__list--active');
        }
        $(this).children('.drop-down__link').toggleClass('drop-down__link--active');
        $(this).children('.drop-down__list').toggleClass('drop-down__list--active');
      });
    } else {
      $('body').removeClass('overflow--hidden');
      $('.drop-down').off();
      $('.drop-down').on('mouseover mouseout', function () {
        $(this).children('.drop-down__link').toggleClass('drop-down__link--active');
        $(this).children('.drop-down__list').toggleClass('drop-down__list--active');
      });
    }
  });

});