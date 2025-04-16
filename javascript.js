// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("div.section");
  const navLinks = document.querySelectorAll(".navbar-custom .nav-link");

  function onScroll() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // adjust for navbar height
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});



// .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  nav bar done


document.addEventListener("DOMContentLoaded", function () {
  gsap.to('.popping', {
    y: -15,
    duration: .7,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> first section fadeup

 // Wait for the page to fully load
 window.onload = function() {
  gsap.from(".yourDiv", {
      opacity: 0,     // Start as invisible
      y: 90,          // Start 50px lower than its final position
      duration: 1.5,    // Duration of the animation
      ease: "power2.out"  // Easing for smooth motion
    }); 
};


// .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


$(function(){
  $('.owl-carousel').owlCarousel({
    items: 6,
    loop: true,
    margin:2,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });
});