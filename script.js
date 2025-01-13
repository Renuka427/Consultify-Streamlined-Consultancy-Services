document.addEventListener('DOMContentLoaded', function () {
    const emojis = document.querySelectorAll('.emoji');
    const emojiResponse = document.getElementById('emoji-response');
    const emojiResponseText = document.getElementById('emoji-response-text');
    const thankYouMessage = document.getElementById('thank-you-message');
    const navbar = document.getElementById('navbar');
    const backToTopButton = document.getElementById('back-to-top');
    const hero = document.querySelector('.hero'); 
    const responses = {
        1: "We're truly sorry to hear that! Your feedback is crucial, and we’ll make every effort to improve.",
        2: "Thank you for sharing your experience! We’re committed to making things better based on your input.",
        3: "We appreciate your honesty! Your feedback helps us strive for a higher standard.",
        4: "That’s great to hear! Thank you for your support; we aim to keep it up!",
        5: "Fantastic! We’re thrilled you’re happy with our services. We’ll continue to work hard for you!",
        6: "Thank you for the love! Your encouragement motivates us to provide the best service possible."
    };

    
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function () {
            const rating = emoji.getAttribute('data-rating');
            emojiResponseText.textContent = responses[rating];
            
           
            emojiResponse.style.display = 'block';
            thankYouMessage.style.display = 'block';
            
            emojiResponse.classList.add('card');
        });
    });

    
    window.addEventListener('scroll', function () {
        requestAnimationFrame(handleScroll);
    });

       function handleScroll() {
        const scrollY = window.scrollY;
        const heroHeight = hero ? hero.offsetHeight : 0;
        console.log("Scroll Y:", scrollY);
        console.log("Hero Height:", heroHeight);

        
        document.body.style.background = (scrollY > heroHeight)
            ? 'linear-gradient(to right, #4B0082, #121212)' : '#121212';

        
        if (navbar) {
            navbar.style.opacity = (scrollY > heroHeight) ? 1 : 0;
            navbar.style.transition = "opacity 0.5s ease";
        }

        
        if (backToTopButton) {
            backToTopButton.style.display = (scrollY > 300) ? 'block' : 'none';
        }

        
        changeSectionBackgroundColor();

        
        fadeInOnScroll();
    }

    
    function changeSectionBackgroundColor() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            section.style.background = (rect.top >= 0 && rect.top <= window.innerHeight)
                ? 'linear-gradient(to right, #4B0082, #121212)' : '#121212';
        });
    }

    
    const fadeInSections = document.querySelectorAll('.fade-in');
    function fadeInOnScroll() {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    
    const getStartedButton = document.getElementById('get-started');
    const aboutSection = document.getElementById('about');
    if (getStartedButton && aboutSection) {
        getStartedButton.addEventListener('click', function () {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    fadeInOnScroll();
});
