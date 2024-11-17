 // Initialize AOS
 AOS.init();

 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Header scroll effect
 window.addEventListener('scroll', function() {
     const header = document.querySelector('.header');
     if (window.scrollY > 100) {
         header.style.background = 'rgba(255, 255, 255, 0.95)';
     } else {
         header.style.background = 'rgba(255, 255, 255, 0.1)';
     }
 });