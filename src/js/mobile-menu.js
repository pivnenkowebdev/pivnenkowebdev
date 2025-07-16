import { gsap } from "gsap";

const tl = gsap.timeline({ paused: true });

const headerElement = document.querySelector("#header");
const menu = headerElement.querySelector("#menu");
const burger = headerElement.querySelector("#burger");

const isMobile = () => window.matchMedia("(max-width: 1250px)").matches;

tl.from("[data-anchor]", {
    duration: 0.3,
    y: 200,
    opacity: 0,
    stagger: 0.05,
    ease: "power2.out"
});

if (!isMobile()) {
    gsap.set("[data-anchor]", { clearProps: "all" });
}

const closeMenuWithAnimation = () => {
    burger.classList.remove("open");
    tl.reverse();

    tl.eventCallback("onReverseComplete", () => {
        menu.classList.remove("open");
        tl.eventCallback("onReverseComplete", null);
    });
};

const forceCloseMenu = () => {
    burger.classList.remove("open");
    menu.classList.remove("open");
    tl.pause(0);
    gsap.set("[data-anchor]", { clearProps: "all" });
};

const toggleMenu = (e) => {
    if (!isMobile()) return;

    const isBurger = e.target.closest("#burger");
    const isAnchor = e.target.closest("[data-anchor]");

    if (isBurger) {
        const isOpen = menu.classList.contains("open");

        if (isOpen) {
            closeMenuWithAnimation();
        } else {
            burger.classList.add("open");
            menu.classList.add("open");
            tl.play();
        }
    }

    if (isAnchor) {
        closeMenuWithAnimation();
    }
};

headerElement.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
    if (!isMobile()) {
        forceCloseMenu();
    }
});
