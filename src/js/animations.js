document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger); 

    const fadeIn = (element, trigger, start = "top 80%", stagger = 0, delay = 0) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: stagger,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: trigger,
                start: start,
            }
        });
    };

    ScrollTrigger.matchMedia({
        "(min-width: 1000px)": function () {
            const header = document.querySelector('header');
            const showAnim = gsap.from(header, {
                yPercent: -100,
                paused: true,
                duration: 0.2
            }).progress(1);

            ScrollTrigger.create({
                start: "top top",
                end: 99999,
                onUpdate: (self) => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse();
                }
            });

            gsap.from('.hero-text-content > *', {
                opacity: 0, x: -50, duration: 1, stagger: 0.2, delay: 0.3, ease: 'power3.out', scrollTrigger: {
                    trigger: '.hero-text-content',
                    start: 'top 90%',
                }
            });
            gsap.from('.hero-img', {
                opacity: 0, x: 50, duration: 1, delay: 0.5, ease: 'power3.out', scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top 90%',
                }
            });
            gsap.from('.hero-decoration', {
                opacity: 0,
                scale: 0,
                duration: 1,
                delay: 1,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: { trigger: '.hero-decoration', start: 'top 90%' }
            });

            fadeIn('.about-container__imgs img', '#about', "top 70%", 0.2);
            fadeIn('.about-container__text > *', '#about', "top 60%", 0.15);
            fadeIn('.about-decoration', '.about-decoration');

            fadeIn('.campaing-text > *', '#campaing', "top 80%", 0.2);
            fadeIn('.campaing-arrow', '#campaing');
            fadeIn('.campaing-cards .card-one', '.campaing-cards');
            fadeIn('.campaing-cards .card-two', '.campaing-cards', "top 80%", 0, 0.2);
            fadeIn('.campaing-cards .card-three', '.campaing-cards', "top 80%", 0, 0.4);

            fadeIn('.contact-text > *', '#contact', "top 80%", 0.2);
            fadeIn('.contact-info-wrapper > *', '.contact-info-wrapper', "top 80%", 0.2);

            fadeIn('.footer-decoration', '.footer-decoration');
            fadeIn('.footer-brand > *', '.footer-content-wrapper', "top 95%", 0.2);
            fadeIn('.footer-nav > *', '.footer-content-wrapper', "top 95%", 0.2, 0.2);
            fadeIn('.footer-contact-info > *', '.footer-content-wrapper', "top 95%", 0.2, 0.4);
            fadeIn('.footer-bottom', '.footer-content-wrapper', "bottom bottom");
        },

        "(max-width: 999px)": function () {
            const showAnim = gsap.from('header', { yPercent: 0 }).progress(1);
            ScrollTrigger.create({
                onUpdate: (self) => {}
            });

            gsap.from('.hero-text-content > *', {
                opacity: 0, x: -50, duration: 1, stagger: 0.2, delay: 0.3, ease: 'power3.out', scrollTrigger: {
                    trigger: '.hero-text-content',
                    start: 'top 90%',
                }
            });
            gsap.from('.hero-img', {
                opacity: 0, x: 50, duration: 1, delay: 0.5, ease: 'power3.out', scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top 90%',
                }
            });

            fadeIn('.about-container__imgs', '#about', "top 110%");
            fadeIn('.about-container__text > *', '#about', "top 110%", 0.15);

            fadeIn('.campaing-text > *', '#campaing', "top 110%", 0.2);
            fadeIn('.campaing-cards .card-one', '.card-one', "top 110%");
            fadeIn('.campaing-cards .card-two', '.card-two', "top 110%");
            fadeIn('.campaing-cards .card-three', '.card-three', "top 110%");

            // Seção Contato
            fadeIn('.contact-text > *', '#contact', "top 110%", 0.2);
            fadeIn('.contact-info-wrapper > *', '.contact-info-wrapper', "top 110%", 0.2);

            // Footer
            fadeIn('.footer-content-wrapper > *', '.footer-content-wrapper', "top 120%", 0.2);
            fadeIn('.footer-bottom', '.footer-bottom', "top 120%");
        }
    });
});