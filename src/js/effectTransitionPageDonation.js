const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Texto entra com blur, leve rotação e escala
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

    // 2️⃣ Texto sai com efeito de "explosão suave"
    tl.to(".transition-text span", {
        y: -100,
        rotationX: 60,
        scale: 1.2,
        opacity: 0,
        filter: "blur(10px)",
        stagger: {
            amount: 0.5,
            from: "end",
        },
        duration: 0.6,
        ease: "power2.inOut",
    }, "+=0.8");

    // 3️⃣ Tela sobe suavemente
    tl.to(".transition-screen", {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
    }, "-=0.5");

    // 4️⃣ Conteúdo principal entra com zoom e fade
    tl.fromTo(".donation-page-wrapper",
        {
            y: 40,
            scale: 0.96,
            autoAlpha: 0,
            filter: "blur(6px)",
        },
        {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
        },
        "-=0.9"
    );
});
