  // Form Validation
  (function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            event.preventDefault(); // Prevent form submission for now
            displayInfo();
          }
          form.classList.add('was-validated')
        }, false)
      })
  })();

  function displayInfo() {
    var name = document.getElementById("name").value;
    var pic = document.getElementById("pic").files[0];
    var age = document.getElementById("age").value;
    var education = document.getElementById("education").value;
    var contact = document.getElementById("contact").value;
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "Not selected";

    var picURL = pic ? URL.createObjectURL(pic) : "https://via.placeholder.com/150"; // Fallback image URL

    var infoHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Profile Picture:</strong></p>
      <p><img src="${picURL}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;"></p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Gender:</strong> ${gender}</p>
    `;
    document.getElementById("displayInfo").innerHTML = infoHTML;
  }

  // Owl Carousel Script
  $(document).ready(function() {
    $('#carousel .owl-carousel').owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
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

  // Scroll fade-up functionality
  window.addEventListener('scroll', function() {
    const fadeUp1Elements = document.querySelectorAll('.fade-up-1');
    fadeUp1Elements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeUp2Elements = document.querySelectorAll('.fade-up-2');
    fadeUp2Elements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeUp3Elements = document.querySelectorAll('.fade-up-3');
    fadeUp3Elements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeLeftElements = document.querySelectorAll('.fade-left');
    fadeLeftElements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeRightElements = document.querySelectorAll('.fade-right');
    fadeRightElements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeDownElements = document.querySelectorAll('.fade-down');
    fadeDownElements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    const fadeUpSlowElements = document.querySelectorAll('.fade-up-slow');
    fadeUpSlowElements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  });

  // Swiper Initialization
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  // Small Slide Owl Carousel
  const owlCarousel = document.querySelector('#smallslide .owl-carousel');
  if (owlCarousel) {
    $(owlCarousel).owlCarousel({
      items: 6,
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    });
  }

  // Accordion Image Resizing
  const collapseElements = document.querySelectorAll('.accordion-collapse');
  const image = document.getElementById('infoImage');
  function checkAccordionState() {
    let anyOpen = false;
    collapseElements.forEach((collapseElement) => {
      if (collapseElement.classList.contains('show')) {
        anyOpen = true;
      }
    });

    if (anyOpen) {
      image.classList.add('enlarged');
    } else {
      image.classList.remove('enlarged');
    }
  }

  collapseElements.forEach((collapseElement) => {
    collapseElement.addEventListener('shown.bs.collapse', function() {
      checkAccordionState();
    });

    collapseElement.addEventListener('hidden.bs.collapse', function() {
      checkAccordionState();
    });
  });
  checkAccordionState();

  // Progress Bars with IntersectionObserver
  const progressSection = document.getElementById('progressSection');
  const htmlProgressBar = document.querySelector('.html-progress');
  const cssProgressBar = document.querySelector('.css-progress');
  const jsProgressBar = document.querySelector('.js-progress');
  const htmlText = document.getElementById('htmlText');
  const cssText = document.getElementById('cssText');
  const jsText = document.getElementById('jsText');

  const htmlProgress = 40;
  const cssProgress = 57;
  const jsProgress = 90;

  function animateProgress() {
    let html = 0;
    let css = 0;
    let js = 0;

    const htmlInterval = setInterval(() => {
      if (html < htmlProgress) {
        html += 2;
        htmlProgressBar.style.width = html + '%';
        htmlText.innerText = 'HTML ' + html + '%';
      } else {
        clearInterval(htmlInterval);
      }
    }, 20);

    const cssInterval = setInterval(() => {
      if (css < cssProgress) {
        css += 2;
        cssProgressBar.style.width = css + '%';
        cssText.innerText = 'CSS ' + css + '%';
      } else {
        clearInterval(cssInterval);
      }
    }, 20);

    const jsInterval = setInterval(() => {
      if (js < jsProgress) {
        js += 2;
        jsProgressBar.style.width = js + '%';
        jsText.innerText = 'JS ' + js + '%';
      } else {
        clearInterval(jsInterval);
      }
    }, 20);
  }

  function resetProgress() {
    htmlProgressBar.style.width = '0%';
    cssProgressBar.style.width = '0%';
    jsProgressBar.style.width = '0%';
    htmlText.innerText = 'HTML 0%';
    cssText.innerText = 'CSS 0%';
    jsText.innerText = 'JS 0%';
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressSection.classList.add('animate');
        animateProgress();
      } else {
        progressSection.classList.remove('animate');
        resetProgress();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(progressSection);

  // Active Link and Smooth Scrolling
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });

      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.getElementById('homeLink').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });

  // GSAP ScrollTrigger for dynamic effects on scroll
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".navbar", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  });

  document.addEventListener("DOMContentLoaded", function() {
    gsap.to('.popping', {
      y: -15,
      duration: .8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  window.addEventListener('load', function() {
    gsap.from('.c1col', {
      delay: 0,
      duration: 1,
      y: -140,
      opacity: 0,
      scale: 0.8,
      scaleX: 1,
      scaleY: 1,
      scaleOrigin: "center",
      ease: "power1.out",
    });
  });


  window.onload = function() {
    const typingEffectElement = document.getElementById('typingEffect');
    const text = "I'm a Web Developer";
    let index = 0;
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const pauseTime = 1000; // Time to pause before starting deletion or typing

    // Function to type the text
    function typeText() {
        if (index < text.length) {
            typingEffectElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Pause before deleting text
            setTimeout(deleteText, pauseTime);
        }
    }

    // Function to delete the text
    function deleteText() {
        if (index > 0) {
            typingEffectElement.textContent = typingEffectElement.textContent.slice(0, index - 1);
            index--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            // Pause before typing again
            setTimeout(typeText, pauseTime);
        }
    }

    // Start typing effect when page loads
    typeText();
}