document.addEventListener("DOMContentLoaded", () => {
    // 1. Asynchronously fetch the header HTML
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // 2. Inject HTML into the placeholder on index.html
            document.getElementById('header-placeholder').innerHTML = html;
            
            // 3. Initialize interactive states after DOM injection
            initHeaderInteractions();
        })
        .catch(err => console.error("Failed to load header: ", err));

    // 4. Asynchronously fetch the footer HTML
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(err => console.error("Failed to load footer: ", err));
});

function initHeaderInteractions() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const overlay = document.querySelector('.drawer-overlay');

    function openMenu() {
        mobileDrawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMenu() {
        mobileDrawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = ''; // Restore background scrolling
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
}