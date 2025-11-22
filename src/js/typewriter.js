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
        masterTl.to("#typewriter-text", { duration: 2, text: text, ease: "none", delay: 1.5 });
        masterTl.to("#typewriter-text", { duration: 1, text: { value: "", rtl: true }, ease: "none", delay: 1.5 });
    });
});