document.addEventListener('DOMContentLoaded', function() {
    const sectionMap = {
        'About': '.about-section',
        'Services': '.services-section',
        'FAQs': '.about-section',
        'Contact': '.about-section' 
    };

    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = link.textContent.trim();
            const sectionSelector = sectionMap[linkText];
            if (sectionSelector) {
                const section = document.querySelector(sectionSelector);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
