document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (!toggle || !sidebar) return;

    toggle.addEventListener("click", (event) => {
        if (window.innerWidth > 800) return;

        event.preventDefault();

        const isOpen = sidebar.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen);
    });
});
