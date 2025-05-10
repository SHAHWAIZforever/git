document.addEventListener("DOMContentLoaded", function () {

    // ========== Swiper Safe Initializer ==========
    function initSwiper(selector, options) {
      const container = document.querySelector(selector);
      if (container && container.querySelector('.swiper-wrapper')) {
        new Swiper(selector, options);
      } else {
        console.warn(`Swiper not initialized: '${selector}' missing or incorrect structure.`);
      }
    }
  
    // Swiper 1
    initSwiper('.myswiper1', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: { el: '.swiper-scrollbar', draggable: true },
      pagination: { el: '.swiper-pagination', clickable: true },
    });
 
      
    // Swiper 2
    initSwiper('.mySlider', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: { el: '.swiper-scrollbar', draggable: true },
      pagination: { el: '.swiper-pagination', clickable: true },
    });
  
    // Swiper 3 (Autoplay + Loop)
    initSwiper('.mobiswipe', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      observer: true,
      observeParents: true,
      on: {
        init: function () {
          setTimeout(() => this.update(), 100);
        },
      },
    });


    initSwiper('.swipe4', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: { el: '.swiper-scrollbar', draggable: true },
        pagination: { el: '.swiper-pagination', clickable: true },
      });
   

    // ========== Animated Changing Text ==========
    const textElement = document.getElementById("changing-text");
    if (textElement) {
      const texts = ["Try Free", "Free Delivery", "on Everything"];
      let index = 0;
      setInterval(() => {
        index = (index + 1) % texts.length;
        textElement.classList.remove("animated-text");
        void textElement.offsetWidth;
        textElement.textContent = texts[index];
        textElement.classList.add("animated-text");
        textElement.style.color = texts[index] === "Try Free" ? "green" : "";
      }, 2000);
    }
  
    // ========== Horizontal Carousel Scroll ==========
    const carousel = document.getElementById('carousel');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const scrollAmount = 200;
  
    if (carousel && leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      rightArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  
    // ========== Custom Slider with Dots ==========
    document.querySelectorAll('[data-slider]').forEach((slider) => {
      const track = slider.querySelector('.slider-track');
      const slides = Array.from(track?.children || []);
      const pagination = slider.querySelector('.pagination');
      const nextBtn = slider.querySelector('.next');
      const prevBtn = slider.querySelector('.prev');
      let currentIndex = 0;
      let timer;
  
      if (!track || slides.length === 0) return;
  
      function goToSlide(i) {
        currentIndex = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updatePagination();
      }
  
      function updatePagination() {
        if (!pagination) return;
        Array.from(pagination.children).forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }
  
      function buildPagination() {
        if (!pagination) return;
        pagination.innerHTML = '';
        slides.forEach((_, i) => {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          dot.addEventListener('click', () => {
            goToSlide(i);
            resetTimer();
          });
          pagination.appendChild(dot);
        });
      }
  
      function startAutoSlide() {
        timer = setInterval(() => goToSlide(currentIndex + 1), 3000);
      }
  
      function resetTimer() {
        clearInterval(timer);
        startAutoSlide();
      }
  
      nextBtn?.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetTimer();
      });
  
      prevBtn?.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetTimer();
      });
  
      buildPagination();
      goToSlide(0);
      startAutoSlide();
    });
  
    // ========== Search Bar ==========
    const searchBar = document.querySelector(".search-bar");
    if (searchBar) {
      searchBar.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          alert("Searching for: " + this.value);
        }
      });
    }
  
    // ========== Map Modal ==========
    const mapBtn = document.getElementById('mapBtn');
    const modal = document.getElementById('mapModal');
    const closeBtn = document.querySelector('.close');
  
    mapBtn?.addEventListener('click', () => {
      modal && (modal.style.display = 'block');
    });
  
    closeBtn?.addEventListener('click', () => {
      modal && (modal.style.display = 'none');
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // ========== Countdown Timer ==========
    const countdownElement = document.getElementById("countdown");
    const deals = document.getElementById("deals");
    const countdownDuration = (7 * 24 * 60 * 60 + 3 * 60 * 60) * 1000;
    let endTime = parseInt(localStorage.getItem("countdownEndTime") || "0");
  
    if (!endTime || isNaN(endTime)) {
      endTime = Date.now() + countdownDuration;
      localStorage.setItem("countdownEndTime", endTime.toString());
    }
  
    function updateCountdown() {
      if (!countdownElement) return;
      const now = Date.now();
      let remaining = endTime - now;
  
      if (remaining <= 0) {
        countdownElement.textContent = "DEALS EXPIRED";
        deals?.classList.add("hidden");
        return;
      }
  
      const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((remaining % (1000 * 60)) / 1000);
  
      countdownElement.textContent =
        `${d}d ${h.toString().padStart(2, '0')}h : ` +
        `${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
//   >>>>>>>>>>>>>>>>>>>>>> Text Fadeups in smallItembox
    //   function showNextMessage() {
    //     el.style.opacity = 0;
    //     el.style.transform = "translateY(10px)";
    //     setTimeout(() => {
    //       el.textContent = messages[index];
    //       el.style.opacity = 1;
    //       el.style.transform = "translateY(0)";
    //       index = (index + 1) % messages.length;
    //     }, fadeDuration);
  
    //     setTimeout(showNextMessage, displayDuration + fadeDuration * 2);
    //   }
(function() {
    const fadeDuration = 500; // fade in/out time in ms
    const displayDuration = 2000; // visible time per message
  
    document.querySelectorAll(".fade-up-text").forEach(el => {
      let messages;
      try {
        messages = JSON.parse(el.dataset.messages);
      } catch {
        messages = [el.textContent || "Message"];
      }
      let index = 0;
  

    function showNextMessage() {
        el.style.opacity = 0;
        el.style.transform = "translateY(-10px)";
        setTimeout(() => {
            el.innerHTML = messages[index];

          el.classList.remove(...el.classList);
          el.classList.add("fade-up-text", `color-${index}`);
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
          index = (index + 1) % messages.length;
        }, fadeDuration);
      
        setTimeout(showNextMessage, displayDuration + fadeDuration * 2);
      }
      
  
      showNextMessage();
    });
  })();