AOS.init({
      once: false,      // Whether animation should happen only once - while scrolling down
      mirror: true,     // Whether elements should animate out while scrolling past them
      offset: 120,      // Offset (in px) from the original trigger point
      easing: 'ease-in-out',
      duration: 800
    });
    // Hamburger menu functionality
    document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });
 // Typed.js initialization
    var typedGreeting = new Typed("#greeting", {
      strings: ["Hii, I am a"],
      typeSpeed: 0,  // Set to 0 for instant display
      showCursor: false, // Optional: Hide the cursor for the greeting
    });
 var typedContent = new Typed("#name", {
      strings: ["Vivek Deshmukh", "Web Developer", "Programmer"],
      typeSpeed: 68,
      backSpeed: 30,
      loop: true
    })