// Balloon Hunter Web Hub - Global JS

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Modal / Expandable Cards (Balloonpedia)
    const cards = document.querySelectorAll('.expandable-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // For now, simple toggle of expanded class
            card.classList.toggle('expanded');
            // If we had a modal, we would open it here and populate data
        });
    });

    // Mystery Cards (Future Section) hover effect logic if needed
    // The CSS blur/shadows handle most of the mystery, but we could add 
    // click hints if they click a locked card.
    const mysteryCards = document.querySelectorAll('.mystery-card');
    mysteryCards.forEach(card => {
        card.addEventListener('click', () => {
            alert("Información clasificada. Vuelve en la próxima actualización.");
        });
    });
});
