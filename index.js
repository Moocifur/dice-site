// index.js

class Navigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinksContainer = document.querySelector('.nav-links');
        this.form = document.querySelector('form');
        this.ctaButton = document.querySelector('.cta-button');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Mobile menu toggle
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // CTA button
        if (this.ctaButton) {
            this.ctaButton.addEventListener('click', (e) => this.handleCtaClick(e));
        }
        
        // Form submission
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
    }
    
    toggleMobileMenu() {
        this.navLinksContainer.classList.toggle('mobile-open');
    }
    
    closeMobileMenu() {
        if (this.navLinksContainer.classList.contains('mobile-open')) {
            this.navLinksContainer.classList.remove('mobile-open');
        }
    }
    
    updateActiveNav(targetId) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        
        const activeLink = document.querySelector(`[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        this.updateActiveNav(targetId);
        this.closeMobileMenu();
    }
    
    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
    }
    
    handleCtaClick(e) {
        e.preventDefault();
        this.scrollToSection('gallery');
    }
    
    handleFormSubmit(e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you within 24-48 hours.');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});