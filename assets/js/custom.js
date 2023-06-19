jQuery(function ($) {
  $(".list-slide").slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
  });

  const btnMenu = $(".logo-menu-bar");
  const listMenu = $(" .nav-bar");
  const header = $(".header-title");
  const openBtn = $(".header-title-menu.open");
  const closeBtn = $(".header-title-menu.close");
  const shadow = $(".shadow");

  const handleClick = function () {
    listMenu.toggleClass("active");
    header.toggleClass("active");
    openBtn.toggleClass("d-none");
    closeBtn.toggleClass("d-none");
    shadow.toggleClass("active");
  };

  btnMenu.click(handleClick);
  shadow.click(handleClick);
});
