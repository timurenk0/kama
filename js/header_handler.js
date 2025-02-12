const headerLinks = document.querySelectorAll("a");

const currentURL = window.location.href;

headerLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('active');
    }
});