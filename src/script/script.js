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

document.addEventListener('DOMContentLoaded', function() {
    const faq1 = document.querySelector('.faq-1');
    if (faq1) {
        faq1.style.width = '100%';
    }

    const faq2 = document.querySelector('.faq-2');
    if (faq2) {
        faq2.style.width = '100%';
    }

    const faq3 = document.querySelector('.faq-3');
    if (faq3) {
        faq3.style.width = '100%';
    }

    const faq4 = document.querySelector('.faq-4');
    if (faq4) {
        faq4.style.width = '100%';
    }

    const faq5 = document.querySelector('.faq-5');
    if (faq5) {
        faq5.style.width = '100%';
    }

    const faq6 = document.querySelector('.faq-6');
    if (faq6) {
        faq6.style.width = '100%';
    }

    const faqPanels = document.querySelectorAll('.faq-panel');
    faqPanels.forEach(panel => {
        panel.style.display = 'none';
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const panel = question.nextElementSibling;
            if (panel && panel.classList.contains('faq-panel')) {
                const isOpening = (panel.style.display === 'none' || panel.style.display === '');
                panel.style.display = isOpening ? 'block' : 'none';

                const parentFaq1 = question.closest('.faq-1');
                if (parentFaq1) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq2 = question.closest('.faq-2');
                if (parentFaq2) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq3 = question.closest('.faq-3');
                if (parentFaq3) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq4 = question.closest('.faq-4');
                if (parentFaq4) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq5 = question.closest('.faq-5');
                if (parentFaq5) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }

                const parentFaq6 = question.closest('.faq-6');
                if (parentFaq6) {
                    const img = question.querySelector('img');
                    if (img) {
                        if (isOpening) {
                            img.style.transform = 'rotate(45deg)';
                            img.style.transition = 'transform 0.3s';
                        } else {
                            img.style.transform = 'rotate(0deg)';
                            img.style.transition = 'transform 0.3s';
                        }
                    }
                }
            }
        });
    });
});