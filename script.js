// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Phone number anti-bot protection
    const phoneElement = document.getElementById('phone-number');
    if (phoneElement) {
        // Decode phone number only when user interacts with the element
        phoneElement.addEventListener('click', function() {
            try {
                const encoded = this.getAttribute('data-encoded');
                if (encoded) {
                    const decoded = atob(encoded);
                    this.textContent = decoded;
                    // Remove the event listener after showing the number
                    this.removeEventListener('click', arguments.callee);
                    this.style.cursor = 'default';
                }
            } catch (error) {
                console.error('Error decoding phone number:', error);
            }
        });
        
        // Visual indication that it's clickable
        phoneElement.style.cursor = 'pointer';
        phoneElement.style.color = 'var(--primary-color)';
        phoneElement.title = 'Click to reveal phone number';
    }
    
    // PDF Viewer functionality
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfIframe = document.getElementById('pdf-iframe');
    const pdfTitle = document.getElementById('pdf-title');
    const viewButtons = document.querySelectorAll('.view-pdf');
    const closeButton = document.getElementById('close-pdf');
    
    // Open PDF viewer
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pdfPath = this.getAttribute('data-pdf');
            let projectTitle;
            
            // Different title extraction based on context (project card or resume)
            if (this.classList.contains('view-btn')) {
                projectTitle = "Resume";
            } else {
                projectTitle = this.parentElement.querySelector('h3').textContent;
            }
            
            pdfIframe.src = pdfPath;
            pdfTitle.textContent = projectTitle;
            
            pdfViewer.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when viewer is open
        });
    });
    
    // Close PDF viewer
    closeButton.addEventListener('click', function() {
        pdfViewer.classList.remove('active');
        setTimeout(() => {
            pdfIframe.src = ''; // Clear the iframe source
        }, 300);
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close viewer when clicking outside the PDF container
    pdfViewer.addEventListener('click', function(e) {
        if (e.target === pdfViewer) {
            closeButton.click();
        }
    });
    
    // Close viewer with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && pdfViewer.classList.contains('active')) {
            closeButton.click();
        }
    });
    
    // Simplified form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form submission logic here
            // For demonstration purposes:
            alert('Your message has been sent successfully!');
            contactForm.reset();
        });
    }
    
    // Animation on scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.project-card, .contact-item, .resume-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Add revealed class for animation
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load
    
    // Add year to copyright text
    const yearSpan = document.querySelector('.copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}); 