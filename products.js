// import {Modal} from "./node_modules/bootstrap/dist/js/bootstrap";
function hideLoader() {
    $('#loading').fadeOut('slow');
}

$(window).on("load",hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

