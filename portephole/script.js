const toggleBtn = document.querySelector('.Togglebtn');
const navLinks = document.querySelector('.nav-links');


toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('click');
    navLinks.classList.toggle('open');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav .nav-links li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                toggleBtn.classList.remove('click');
                navLinks.classList.remove('open');
            }
        }
    });
});

// Basic Contact Form Validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();

        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset(); // Clear form
        } else {
            alert('Please fill out all fields.');
        }
    });
}