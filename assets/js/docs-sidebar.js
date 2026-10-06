document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (!toggle || !sidebar) return;

    toggle.addEventListener("click", (event) => {
        event.preventDefault();

        const isOpen = sidebar.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen);
    });
});
