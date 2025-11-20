document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const mobileNav = document.querySelector(".mobile-nav");
    const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a"); // Seleciona links de ambas as navs
    const sections = document.querySelectorAll("section[id]");
    const navOpenBtn = document.querySelector(".nav-open-button");
    const navCloseBtn = document.querySelector(".nav-close-button");

    const activateLinkOnScroll = () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            // Compara o href do link (ex: #about) com o id da seção atual
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", () => {
        activateLinkOnScroll();
    });

    // --- Mobile Menu Logic ---
    if (navOpenBtn && navCloseBtn && mobileNav) {
        navOpenBtn.addEventListener("click", () => {
            mobileNav.classList.add("nav-open");
            navOpenBtn.style.display = 'none'; // Esconde o botão de abrir
        });

        navCloseBtn.addEventListener("click", () => {
            mobileNav.classList.remove("nav-open");
            navOpenBtn.style.display = 'block'; // Mostra o botão de abrir
        });

        mobileNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("nav-open");
                navOpenBtn.style.display = 'block'; // Mostra o botão de abrir ao clicar em um link
            });
        });
    }

    // Ativa o link correto no carregamento inicial da página
    activateLinkOnScroll();
});