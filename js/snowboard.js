$(document).ready(function () {
  var search = document.getElementById("search");

  search.addEventListener("click", function () {
    var searchBox = document.getElementById("searchbox");
    searchBox.classList.toggle("click");
  });

  // slick
  $(".top_slider").slick({
    autoplay: true,
  });

  $(".bot_slider").slick({
    autoplay: false,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    arrows: true,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
  });

  // mobile 모바일 햄버거
  var windowWidth = window.matchMedia("screen and (max-width: 500px)");
  if (windowWidth.matches) {
    // 햄버거 버튼 햄버거 메뉴
    var hamButton = document.getElementById("ham_button");
    var hamMenu = document.getElementById("ham_menu");

    hamButton.addEventListener("click", function () {
      hamButton.classList.toggle("click");
      hamMenu.classList.toggle("click");
    });

    // 모바일 검색
    var search = document.getElementById("search-m");

    search.addEventListener("click", function () {
      var searchBoxM = document.getElementById("searchbox-m");
      searchBoxM.classList.toggle("click");
    });
  }
});
