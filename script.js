document.addEventListener('DOMContentLoaded', function() {
    // Get all sections and navigation items
    const sections = document.querySelectorAll('.project');
    const navItems = document.querySelectorAll('.nav-item');
    const mygif = document.getElementById('diamond_gif');
    setInterval(() => {
        mygif.src = mygif.src;
    }, 3400);  //    milliseconds
    // Function to update active navigation item based on scroll position
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY;
        
        // Check each section's position
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // If the current scroll position is within this section
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all nav items
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to the corresponding nav item
                navItems[index].classList.add('active');
            }
        });
    }
    
    // Add click event listeners to navigation items for smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav item
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Add scroll event listener to update active nav item
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Initialize active nav item on page load
    updateActiveNavItem();
    
    // Make sure GIFs loop endlessly
    const gifs = document.querySelectorAll('.gif');
    gifs.forEach(gif => {
        gif.setAttribute('loop', 'infinite');
    });
    
    // Add a small animation when the page loads
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
}); 