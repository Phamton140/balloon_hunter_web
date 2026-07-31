document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons and sections
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding section
            const targetId = btn.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                // Scroll to top when changing section
                window.scrollTo(0, 0);
            }
        });
    });

    // Optional: Handle hash in URL on load
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetBtn = document.querySelector(`.nav-btn[href="${hash}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }
});
