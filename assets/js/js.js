window.addEventListener('scroll', () => {
    const scrolling_set = document.querySelector('.header-bar');

    scrolling_set.classList.toggle('nav-scroll', window.scrollY > 80);

})