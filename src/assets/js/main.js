AOS.init({
  disable: function() {
      return window.innerWidth < 1024;
  },
}),
	
$(document).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('.header').addClass('header-after');
    $('.header-img').hide();
  } else {
    $('.header').removeClass('header-after');
    $('.header-img').show();
  }
});

const mainSlide = new Swiper(".main-slide", {
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.main-slide-next',
    prevEl: '.main-slide-prev',
  },
  loop: true,
  effect: 'fade',
});

	
// Tab
$(".tab-nav ul li").click(function() {
  const tabId = $(this).attr("data-number");
  $(".tab-nav ul li a").removeClass("tab-nav-active");
  $(".tab-content").removeClass("tab-active");
  $(this).children("a").addClass("tab-nav-active");
  $(`#${tabId}`).addClass("tab-active");
});

$(".benefits-tab-head").click(function() {
  const display = $(this).next().is(":visible") ? 1 : 0;
  $(".benefits-tab-content").hide();
  $(".benefits-tab-head button").css("transform", "rotate(0deg)");
  if (display) {
      $(this).next().hide();
      $(this).children("button").css("transform", "rotate(0deg)");
  } else {
      $(this).next().show();
      $(this).children("button").css("transform", "rotate(45deg)");
  }
});