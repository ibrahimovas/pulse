const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__content_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
  });
  })(jQuery);




// const tabs = document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.tabTarget)
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('catalog__content_active')
//     })
//     tabs.forEach(tab => {
//       tab.classList.remove('catalog__tab_active')
//     })
//     tab.classList.add('catalog__tab_active')
//     target.classList.add('catalog__content_active')
//   })
// })