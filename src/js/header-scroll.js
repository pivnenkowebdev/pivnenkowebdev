const headerElement = document.querySelector("#header");

const handleScroll = () => {
    if (window.scrollY > 20) {
        headerElement.classList.add("scrolled");
    } else {
        headerElement.classList.remove("scrolled");
    }
};

handleScroll();

window.addEventListener("scroll", handleScroll);
