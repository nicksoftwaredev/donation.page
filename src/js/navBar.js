document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const mobileNav = document.querySelector(".mobile-nav");
    const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a"); 
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
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", () => {
        activateLinkOnScroll();
    });

    if (navOpenBtn && navCloseBtn && mobileNav) {
        navOpenBtn.addEventListener("click", () => {
            mobileNav.classList.add("nav-open");
            navOpenBtn.style.display = 'none'; 
        });

        navCloseBtn.addEventListener("click", () => {
            mobileNav.classList.remove("nav-open");
            navOpenBtn.style.display = 'block'; 
        });

        mobileNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("nav-open");
                navOpenBtn.style.display = 'block'; 
            });
        });
    }

    activateLinkOnScroll();
});