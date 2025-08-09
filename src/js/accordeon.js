document.querySelector("#accordeon").addEventListener("click", e => {
    const header = e.target.closest("[data-accordeon-header]");
    if (!header) return;

    const item = header.closest("[data-accordeon-item]");
    const body = item.querySelector("[data-accordeon-body]");

    item.classList.toggle("active");
    
    body.style.height = item.classList.contains("active")
        ? body.scrollHeight + "px"
        : 0;
});
