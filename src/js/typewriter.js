document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(TextPlugin);

    const texts = [
        "Transforme solidariedade em ação.",
        "Cada doação escreve um futuro.",
        "Seu gesto pode mudar uma vida.",
        "Juntos, somos mais fortes."
    ];

    let masterTl = gsap.timeline({ repeat: -1 });

    texts.forEach(text => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
        tl.to("#typewriter-text", { duration: 2, text: text });
        masterTl.add(tl);
    });
});