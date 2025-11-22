const tl = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    onStart: () => {
        document.documentElement.style.overflow = 'hidden';
    },
    onComplete: () => {
        document.documentElement.style.overflow = '';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    tl.from(".transition-text span", {
        y: 80,
        rotationX: -80,
        scale: 0.9,
        opacity: 0,
        filter: "blur(8px)",
        stagger: {
            amount: 0.6,
            from: "start",
        },
        duration: 0.9,
        ease: "power4.out",
    });

    tl.to(".transition-text span", {
        y: 100,
        opacity: 0,
        filter: "blur(5px)",
        stagger: {
            amount: 0.5,
            from: "start",
        },
        duration: 1.0,
        ease: "power2.in",
    }, "+=0.3"); 

    tl.to(".transition-screen", {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
    }, "-=0.3");

    tl.fromTo(".donation-page-wrapper",
        {
            y: 40,
            autoAlpha: 0,
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
        },
        "-=0.6"
    );
});
