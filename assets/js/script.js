 document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded, initializing burger menu...');
            
            // Get DOM elements
            const burgerMenu = document.querySelector('.burger-menu');
            const mobileNav = document.getElementById('mobileNav');
            const closeBtn = document.getElementById('closeBtn');
            const navOverlay = document.getElementById('navOverlay');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav li a');

            // Debug: Check if elements exist
            console.log('Burger menu found:', !!burgerMenu);
            console.log('Mobile nav found:', !!mobileNav);
            console.log('Close btn found:', !!closeBtn);
            console.log('Overlay found:', !!navOverlay);
            console.log('Mobile nav links found:', mobileNavLinks.length);

            // Function to open mobile navigation
            function openMobileNav() {
                console.log('Opening mobile nav...');
                if (mobileNav && navOverlay) {
                    mobileNav.classList.add('active');
                    navOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    console.log('Mobile nav opened successfully');
                } else {
                    console.error('Mobile nav or overlay not found!');
                }
            }

            // Function to close mobile navigation
            function closeMobileNav() {
                console.log('Closing mobile nav...');
                if (mobileNav && navOverlay) {
                    mobileNav.classList.remove('active');
                    navOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    console.log('Mobile nav closed successfully');
                }
            }

            // Event listener for burger menu click
            if (burgerMenu) {
                burgerMenu.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Burger menu clicked!');
                    openMobileNav();
                });
                console.log('Burger menu click listener added');
            } else {
                console.error('Burger menu not found! Make sure you have class="burger-menu" on your burger menu link');
            }

            // Event listener for close button
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    console.log('Close button clicked');
                    closeMobileNav();
                });
                console.log('Close button listener added');
            } else {
                console.warn('Close button not found!');
            }

            // Event listener for overlay click
            if (navOverlay) {
                navOverlay.addEventListener('click', function() {
                    console.log('Overlay clicked');
                    closeMobileNav();
                });
                console.log('Overlay listener added');
            } else {
                console.warn('Overlay not found!');
            }

            // Close menu when clicking on a nav link
            if (mobileNavLinks.length > 0) {
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        console.log('Nav link clicked');
                        closeMobileNav();
                    });
                });
                console.log('Nav links listeners added');
            } else {
                console.warn('No mobile nav links found!');
            }

            // Close menu when pressing Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('active')) {
                    console.log('Escape key pressed');
                    closeMobileNav();
                }
            });

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains('active')) {
                    console.log('Window resized above 768px, closing mobile nav');
                    closeMobileNav();
                }
            });

            console.log('Burger menu initialization complete');
        });