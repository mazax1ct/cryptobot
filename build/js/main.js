//открытие меню на мобильных
$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.main-menu').addClass('is-open');
  setTimeout(function() {
    $('.main-menu__inner').addClass('is-open');
  }, 100);
  return false;
});

//закрытие меню на мобильных
$(document).on('click', '.js-menu-closer', function () {
  $('.main-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.main-menu').removeClass('is-open');
  }, 400);
  return false;
});

$(document).ready(function () {
  if ($('.js-main-menu').length) {
    $('.js-main-menu').ddscrollSpy({
      highlightclass: 'is-active',
      scrolltopoffset: -120
    });
  }
});
