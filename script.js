document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');
    
    form.addEventListener('submit', function(e) {
        let valid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            valid = false;
            nameInput.classList.add('error');
            alert('Please enter your name.');
        } else {
            nameInput.classList.remove('error');
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            valid = false;
            emailInput.classList.add('error');
            alert('Please enter a valid email address.');
        } else {
            emailInput.classList.remove('error');
        }

        // Interest validation
        if (interestSelect.value === '') {
            valid = false;
            interestSelect.classList.add('error');
            alert('Please select an interest.');
        } else {
            interestSelect.classList.remove('error');
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});
