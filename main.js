document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });
    }

    // Typed.js initialization
    if (document.getElementById('typed-element')) {
        new Typed('#typed-element', {
            strings: ['पैशनेट एंड्रॉयड डेवलपर', 'क्रिएटिव वेब डिज़ाइनर', 'टेक्नोलॉजी उत्साही'],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            smartBackspace: true,
        });
    }

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(icon) { icon.classList.replace('fa-moon', 'fa-sun'); }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Loading Spinner Logic
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        window.addEventListener('load', () => {
            loader.classList.add('loader-hidden');
            loader.addEventListener('transitionend', () => {
                loader.remove();
            });
        });
    }
});