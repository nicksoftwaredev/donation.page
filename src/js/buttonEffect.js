document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-donation, .btn-back");

    buttons.forEach(button => {
        const effectEl = document.createElement("span");
        effectEl.classList.add("btn-gsap-effect");
        button.appendChild(effectEl);

        let isBorderedButton = false;

        const getEffectColor = () => {
            const style = window.getComputedStyle(button);
            // Check if the button has a solid background color
            if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)') {
                isBorderedButton = false;
                return 'var(--primary-color)'; // Green ripple
            }
            isBorderedButton = true;
            // For bordered buttons, the ripple is also green
            return 'var(--primary-color)';
        };

        gsap.set(effectEl, {
            position: 'absolute',
            width: '200%',
            height: '200%',
            borderRadius: '50%',
            backgroundColor: getEffectColor(),
            scale: 0,
            transformOrigin: 'center center',
            pointerEvents: 'none',
        });

        button.addEventListener("mouseenter", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(effectEl, {
                x: x - rect.width,
                y: y - rect.height,
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
            });

            if (isBorderedButton) {
                gsap.to(button, { color: '#000', duration: 0.3 });
            } else {
                // For solid buttons, make background transparent and text black
                gsap.to(button, { backgroundColor: 'transparent', color: '#000', duration: 0.3 });
            }
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(effectEl, {
                scale: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            if (isBorderedButton) {
                gsap.to(button, { color: 'var(--primary-color)', duration: 0.3 });
            } else {
                // On mouse leave, revert solid button to its original state
                const originalTextColor = window.getComputedStyle(button).getPropertyValue('--bg-color') || '#FFF';
                gsap.to(button, { backgroundColor: 'var(--primary-color)', color: originalTextColor, duration: 0.3 });
            }
        });
    });
});