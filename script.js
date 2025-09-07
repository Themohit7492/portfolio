
        // Navigation functionality
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinksContainer = document.getElementById('navLinks');
        const progressBar = document.getElementById('progressBar');

        // Mobile menu toggle
        mobileMenu.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });

        // Smooth scrolling and active nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                link.classList.add('active');
                
                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu
                navLinksContainer.classList.remove('active');
            });
        });

        // Scroll effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Navbar background on scroll
            if (scrolled > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Progress bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled_percentage = (winScroll / height) * 100;
            progressBar.style.width = scrolled_percentage + '%';

            // Update active nav link based on scroll position
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                
                if (sectionTop <= 200 && sectionTop + sectionHeight > 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections and fade-in elements
        const sections = document.querySelectorAll('section');
        const fadeElements = document.querySelectorAll('.fade-in-up');

        sections.forEach(section => {
            observer.observe(section);
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroImage = document.querySelector('.hero-image');
            const rate = scrolled * -0.2;
            
            if (heroImage) {
                heroImage.style.transform = `translateY(${rate}px)`;
            }
        });

        // Add typing effect to hero text
        const heroTitle = document.querySelector('.hero-text h1');
        const originalText = "I'm Mohit Singh";
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent = originalText.substring(0, i + 1);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing effect when page loads
        window.addEventListener('load', () => {
            heroTitle.textContent = '';
            setTimeout(typeWriter, 1000);
        });

        // Add floating animation to skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // Add hover effect to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add click effect to CTA button
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = ctaButton.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            ctaButton.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Add ripple animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Add particle effect to background
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(0, 212, 255, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight + 10}px;
                animation: floatUp 15s linear infinite;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 15000);
        }

        // Add floating particles animation
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleStyle);

        // Create particles periodically
        setInterval(createParticle, 2000);

        // Add smooth reveal animation for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
        });

        // Enhanced scroll animations
        function handleScroll() {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // Parallax effect for different elements
            const parallaxElements = document.querySelectorAll('.hero-image, .profile-img');
            parallaxElements.forEach((element, index) => {
                const rate = (scrollTop * 0.5) * (index + 1);
                element.style.transform = `translateY(${rate * 0.1}px)`;
            });
        }

        window.addEventListener('scroll', handleScroll);

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            
            // Stagger animation for nav links
            navLinks.forEach((link, index) => {
                link.style.animationDelay = `${index * 0.1}s`;
                link.style.animation = 'slideInDown 0.5s ease forwards';
            });
        });

        // Add slide animations
        const slideAnimationStyle = document.createElement('style');
        slideAnimationStyle.textContent = `
            @keyframes slideInDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(slideAnimationStyle);

        // Easter egg: Konami code
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                // Easter egg activated
                document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
                konamiCode = [];
            }
        });

        // Add cursor trail effect
        let mouseTrail = [];
        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
            
            // Keep only recent trail points
            mouseTrail = mouseTrail.filter(point => Date.now() - point.timestamp < 1000);
            
            // Create trail element
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX - 4}px;
                top: ${e.clientY - 4}px;
                animation: fadeTrail 1s ease-out forwards;
            `;
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 1000);
        });

        // Add fade trail animation
        const trailStyle = document.createElement('style');
        trailStyle.textContent = `
            @keyframes fadeTrail {
                0% {
                    transform: scale(1);
                    opacity: 1;
                }
                100% {
                    transform: scale(0.1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(trailStyle);
   