


var swiper = new Swiper(".mySwiper", {
  loop: true, // Enable continuous loop
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    next: ".swiper-button-next",
    prev: ".swiper-button-prev",
  },
  on: {
    click: function() {
      // Update active index display in the top slider area
      document.querySelector('.top-slider-active').innerHTML = this.clickedIndex + 1;
    }
  }
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  on: {
    slideChange: function() {
      // Center the active item in the bottom slider
      var activeIndex = this.activeIndex;
      var swiperWidth = this.width;
      var swiperWrapperWidth = this.wrapperEl.clientWidth;
      var activeSlideWidth = this.slides[activeIndex].offsetWidth;
      var activeSlideLeft = this.slides[activeIndex].offsetLeft;

      var centerOffset = (swiperWrapperWidth / 2) - (activeSlideWidth / 2) - activeSlideLeft;

      this.setTranslate(centerOffset);
    }
  }
});

