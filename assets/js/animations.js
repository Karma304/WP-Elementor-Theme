/**
 * Modern Conversion-Optimized Animations JavaScript
 * Version: 1.0.0
 * 
 * Features:
 * - Intersection Observer for scroll-triggered animations
 * - RequestAnimationFrame for smooth animations
 * - Counter animations
 * - Parallax effects
 * - 3D tilt effects
 * - Touch gesture support
 * - Reduced-motion support
 */

(function() {
  'use strict';

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  /**
   * Check if user prefers reduced motion
   */
  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  /**
   * Throttle function for performance
   */
  const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  /**
   * Debounce function
   */
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // ============================================
  // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
  // ============================================

  /**
   * Initialize Intersection Observer for scroll-triggered animations
   */
  const initScrollAnimations = () => {
    if (prefersReducedMotion()) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated', 'revealed');
          
          // Optionally unobserve after animation
          if (!entry.target.dataset.repeat) {
            observer.unobserve(entry.target);
          }
        } else if (entry.target.dataset.repeat) {
          entry.target.classList.remove('animated', 'revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal, .pain-point-card, .roi-counter, .integration-logo, .case-study-split, .blur-to-focus').forEach(el => {
      observer.observe(el);
    });
  };

  // ============================================
  // COUNTER ANIMATION
  // ============================================

  /**
   * Animate counter from 0 to target value
   */
  const animateCounter = (element, target, duration = 2000, suffix = '') => {
    if (prefersReducedMotion()) {
      element.textContent = target + suffix;
      return;
    }

    const start = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(start + (target - start) * easeOutExpo);
      element.textContent = current.toLocaleString() + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString() + suffix;
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  /**
   * Initialize counters when they come into view
   */
  const initCounters = () => {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const target = parseInt(entry.target.dataset.target);
          const suffix = entry.target.dataset.suffix || '';
          const duration = parseInt(entry.target.dataset.duration) || 2000;
          
          animateCounter(entry.target, target, duration, suffix);
          entry.target.dataset.animated = 'true';
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.roi-counter, .counter-animate').forEach(counter => {
      counterObserver.observe(counter);
    });
  };

  // ============================================
  // PARALLAX SCROLLING
  // ============================================

  /**
   * Initialize parallax effect for background elements
   */
  const initParallax = () => {
    if (prefersReducedMotion()) return;

    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    const handleParallax = throttle(() => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px) translateZ(0)`;
      });
    }, 10);

    window.addEventListener('scroll', handleParallax, { passive: true });
  };

  // ============================================
  // 3D TILT EFFECT
  // ============================================

  /**
   * Initialize 3D tilt effect on hero graphics
   */
  const init3DTilt = () => {
    if (prefersReducedMotion()) return;

    const tiltElements = document.querySelectorAll('.hero-graphic-3d');
    
    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = ((y - centerY) / centerY) * 15; // Max 15 degrees
        const tiltY = ((x - centerX) / centerX) * -15;
        
        el.style.setProperty('--tilt-x', `${tiltX}deg`);
        el.style.setProperty('--tilt-y', `${tiltY}deg`);
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
      });
    });
  };

  // ============================================
  // FEATURE CAROUSEL/SLIDER
  // ============================================

  /**
   * Initialize feature carousel with touch support
   */
  const initFeatureCarousel = () => {
    const sliders = document.querySelectorAll('.feature-slider');
    
    sliders.forEach(slider => {
      const slides = slider.querySelectorAll('.feature-slide');
      const progressBar = slider.querySelector('.slider-progress-bar');
      let currentSlide = 0;
      let autoplayInterval;
      const duration = parseInt(slider.dataset.duration) || 5000;
      
      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });
      };
      
      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetProgress();
      };
      
      const resetProgress = () => {
        if (progressBar) {
          progressBar.style.animation = 'none';
          progressBar.offsetHeight; // Trigger reflow
          progressBar.style.animation = `progressAnimation ${duration}ms linear`;
        }
      };
      
      const startAutoplay = () => {
        autoplayInterval = setInterval(nextSlide, duration);
        resetProgress();
      };
      
      const stopAutoplay = () => {
        clearInterval(autoplayInterval);
      };
      
      // Initialize
      showSlide(0);
      if (!prefersReducedMotion()) {
        startAutoplay();
      }
      
      // Pause on hover
      slider.addEventListener('mouseenter', stopAutoplay);
      slider.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) startAutoplay();
      });
      
      // Touch gesture support
      let touchStartX = 0;
      let touchEndX = 0;
      
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });
      
      const handleSwipe = () => {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
          nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
          resetProgress();
        }
      };
    });
  };

  // ============================================
  // TESTIMONIAL SLIDER
  // ============================================

  /**
   * Initialize testimonial slider with fade transitions
   */
  const initTestimonialSlider = () => {
    const sliders = document.querySelectorAll('.testimonial-slider');
    
    sliders.forEach(slider => {
      const slides = slider.querySelectorAll('.testimonial-slide');
      let currentSlide = 0;
      const duration = parseInt(slider.dataset.duration) || 6000;
      
      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
        });
      };
      
      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      };
      
      showSlide(0);
      
      if (!prefersReducedMotion()) {
        setInterval(nextSlide, duration);
      }
    });
  };

  // ============================================
  // IMAGE COMPARISON SLIDER
  // ============================================

  /**
   * Initialize before/after image comparison slider
   */
  const initImageComparison = () => {
    const comparisons = document.querySelectorAll('.image-comparison');
    
    comparisons.forEach(comp => {
      const handle = comp.querySelector('.comparison-handle');
      const beforeImage = comp.querySelector('.before-image');
      let isDragging = false;
      
      const updatePosition = (x) => {
        const rect = comp.getBoundingClientRect();
        const position = Math.max(0, Math.min(x - rect.left, rect.width));
        const percentage = (position / rect.width) * 100;
        
        if (handle) handle.style.left = `${percentage}%`;
        if (beforeImage) beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      };
      
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        updatePosition(e.clientX);
      };
      
      const handleTouchMove = (e) => {
        if (!isDragging) return;
        updatePosition(e.touches[0].clientX);
      };
      
      if (handle) {
        handle.addEventListener('mousedown', () => isDragging = true);
        comp.addEventListener('mousedown', () => isDragging = true);
      }
      
      document.addEventListener('mouseup', () => isDragging = false);
      document.addEventListener('mousemove', handleMouseMove);
      
      // Touch support
      if (handle) {
        handle.addEventListener('touchstart', () => isDragging = true);
      }
      document.addEventListener('touchend', () => isDragging = false);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    });
  };

  // ============================================
  // FAQ ACCORDION
  // ============================================

  /**
   * Initialize FAQ accordion with smooth animations
   */
  const initFAQAccordion = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      if (!question || !answer) return;
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        
        // Smooth scroll to active item
        if (!isActive && !prefersReducedMotion()) {
          setTimeout(() => {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 300);
        }
      });
    });
  };

  // ============================================
  // STICKY CTA BAR
  // ============================================

  /**
   * Initialize sticky CTA bar with scroll trigger
   */
  const initStickyCTA = () => {
    const ctaBar = document.querySelector('.sticky-cta-bar');
    if (!ctaBar) return;
    
    const showThreshold = window.innerHeight * 0.5; // Show at 50% scroll
    
    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      
      if (scrolled > showThreshold) {
        ctaBar.classList.add('visible');
      } else {
        ctaBar.classList.remove('visible');
      }
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  // ============================================
  // CONFETTI EFFECT
  // ============================================

  /**
   * Create confetti effect on button click
   */
  const createConfetti = (x, y) => {
    if (prefersReducedMotion()) return;
    
    const colors = ['#16c79a', '#11a87e', '#1a1a2e', '#0f3460'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = x + 'px';
      confetti.style.top = y + 'px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      // Random horizontal spread
      const spreadX = (Math.random() - 0.5) * 200;
      confetti.style.setProperty('--spread-x', spreadX + 'px');
      
      document.body.appendChild(confetti);
      
      // Remove after animation
      setTimeout(() => confetti.remove(), 2000);
    }
  };

  /**
   * Initialize confetti on CTA clicks
   */
  const initConfettiButtons = () => {
    const confettiButtons = document.querySelectorAll('[data-confetti="true"]');
    
    confettiButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        createConfetti(x, y);
      });
    });
  };

  // ============================================
  // PROGRESS BAR ANIMATIONS
  // ============================================

  /**
   * Animate progress bars when scrolled into view
   */
  const initProgressBars = () => {
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const bar = entry.target.querySelector('.metric-progress');
          if (bar) {
            bar.classList.add('animated');
          }
          entry.target.dataset.animated = 'true';
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.metric-progress').forEach(progress => {
      progressObserver.observe(progress.parentElement);
    });
  };

  // ============================================
  // PARTICLE BACKGROUND
  // ============================================

  /**
   * Create subtle particle effect for backgrounds
   */
  const initParticleBackground = () => {
    if (prefersReducedMotion()) return;
    
    const particleContainers = document.querySelectorAll('.particle-bg');
    
    particleContainers.forEach(container => {
      const particleCount = parseInt(container.dataset.particles) || 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
      }
    });
  };

  // ============================================
  // LOTTIE ANIMATIONS
  // ============================================

  /**
   * Initialize Lottie animations if library is loaded
   */
  const initLottieAnimations = () => {
    if (typeof lottie === 'undefined') return;
    
    const lottieContainers = document.querySelectorAll('[data-lottie]');
    
    lottieContainers.forEach(container => {
      const animationPath = container.dataset.lottie;
      const loop = container.dataset.loop !== 'false';
      const autoplay = container.dataset.autoplay !== 'false';
      
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: loop,
        autoplay: autoplay,
        path: animationPath
      });
    });
  };

  // ============================================
  // INITIALIZATION
  // ============================================

  /**
   * Initialize all animations when DOM is ready
   */
  const init = () => {
    // Check browser support
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported. Loading polyfill recommended.');
    }

    // Initialize all animation features
    initScrollAnimations();
    initCounters();
    initParallax();
    init3DTilt();
    initFeatureCarousel();
    initTestimonialSlider();
    initImageComparison();
    initFAQAccordion();
    initStickyCTA();
    initConfettiButtons();
    initProgressBars();
    initParticleBackground();
    initLottieAnimations();

    // Log initialization
    console.log('✨ Conversion-optimized animations initialized');
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for manual control
  window.SaaSAnimations = {
    animateCounter,
    createConfetti,
    prefersReducedMotion
  };

})();
