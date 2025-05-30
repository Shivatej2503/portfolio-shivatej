document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const options = {
        root: null, // viewport
        threshold: 0.5, // 50% of the section must be visible
        rootMargin: "-50px 0px -50px 0px" // Adjust to trigger slightly earlier
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === currentSectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    form.addEventListener('submit', function (e) {
        // Show success message after a delay (FormSubmit reloads)
        setTimeout(() => {
            successMsg.style.display = 'block';
            form.reset(); // Clear the form fields
        }, 500);
    });

    // Section active menu logic (your existing code)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const current = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        root: null,
        threshold: 0.5,
        rootMargin: "-50px 0px -50px 0px"
    });

    sections.forEach(section => observer.observe(section));
});
