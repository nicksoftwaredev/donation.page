document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 10) {
            header.classList.remove('scrolled-up');
        } else if (scrollTop > lastScrollTop) { 
            header.classList.remove('scrolled-up');
        } else { 
            header.classList.add('scrolled-up');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});