document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's the skills section, animate the progress bars
                if (entry.target.classList.contains('about-content')) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width');
                        bar.style.width = targetWidth;
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = header.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // 6. Mobile Menu (Simple toggle placeholder)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // For a complete implementation, we'd toggle a class to show/hide the menu
            // Here is a simple alert or console log as a placeholder
            console.log('Mobile menu toggled');
            alert('Mobile menu navigation to be implemented. Currently visible in desktop view.');
        });
    }

    // 7. Course Enrollment Auto-Select
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    const courseSelect = document.getElementById('enroll-course');
    
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const courseName = this.getAttribute('data-course');
            if (courseSelect) {
                for (let i = 0; i < courseSelect.options.length; i++) {
                    if (courseSelect.options[i].value === courseName) {
                        courseSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        });
    });

    // 8. Handle Form Submission with Hidden Iframe & Popup
    const enrollmentForm = document.getElementById('enrollment-form');
    const successPopup = document.getElementById('success-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const hiddenIframe = document.getElementById('hidden_iframe');

    let isSubmitting = false;

    if (enrollmentForm && hiddenIframe) {
        enrollmentForm.addEventListener('submit', function(e) {
            isSubmitting = true;
            
            const submitBtn = enrollmentForm.querySelector('button[type="submit"]');
            
            // Show loading state
            submitBtn.innerHTML = 'Sending... <span class="material-symbols-outlined icon-right animate-spin" style="animation: spin 1s linear infinite;">sync</span>';
            submitBtn.disabled = true;
        });

        hiddenIframe.addEventListener('load', function() {
            if (isSubmitting) {
                // Form was submitted and iframe loaded the response
                const submitBtn = enrollmentForm.querySelector('button[type="submit"]');
                
                // Show success popup
                successPopup.classList.add('show');
                enrollmentForm.reset();
                
                // Restore button
                submitBtn.innerHTML = 'Submit Application <span class="material-symbols-outlined icon-right">send</span>';
                submitBtn.disabled = false;
                
                isSubmitting = false;
            }
        });
    }

    if (closePopupBtn && successPopup) {
        closePopupBtn.addEventListener('click', () => {
            successPopup.classList.remove('show');
        });
    }
});
