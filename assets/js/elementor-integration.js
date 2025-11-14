/**
 * Elementor Integration Script
 * Version: 1.0.0
 * 
 * This script integrates custom animations with Elementor widgets
 * by adding appropriate classes and data attributes to existing widgets
 */

(function($) {
  'use strict';

  /**
   * Apply animation classes to Elementor widgets
   */
  const applyAnimationClasses = () => {
    // Hero Section - Fade-in animations
    $('.elementor-section[data-id*="hero"] .elementor-heading-title').first().addClass('hero-headline');
    $('.elementor-section[data-id*="hero"] .elementor-heading-title').eq(1).addClass('hero-subtitle');
    $('.elementor-section[data-id*="hero"] .elementor-button').addClass('cta-button');
    $('.elementor-section[data-id*="hero"] .elementor-background-overlay, .elementor-section[data-id*="hero"] > .elementor-background-video-container').addClass('parallax-bg').attr('data-speed', '0.5');
    $('.elementor-section[data-id*="hero"] .elementor-widget-image img').addClass('hero-graphic-3d');

    // Pain Points - Stagger animations
    $('.elementor-section[data-id*="pain"] .elementor-icon-box, .elementor-section[data-id*="pain"] .elementor-widget-icon-box').addClass('pain-point-card scroll-reveal');
    $('.elementor-section[data-id*="pain"] .elementor-icon').addClass('pain-point-icon');

    // Features - Scroll reveal
    $('.elementor-section[data-id*="feature"] .elementor-icon-box, .elementor-section[data-id*="feature"] .elementor-widget-icon-box').addClass('scroll-reveal');

    // ROI Counters - Counter animation
    $('.elementor-section[data-id*="roi"] .elementor-counter-number').each(function() {
      const $this = $(this);
      const value = $this.text().replace(/[^0-9]/g, '');
      const suffix = $this.text().replace(/[0-9]/g, '');
      
      $this.addClass('roi-counter counter-animate');
      $this.attr('data-target', value);
      if (suffix) $this.attr('data-suffix', suffix);
      $this.text('0');
    });

    // Testimonials - Slider setup
    const $testimonialSection = $('.elementor-section[data-id*="testimonial"]');
    if ($testimonialSection.find('.elementor-testimonial').length > 0) {
      const $testimonialsContainer = $testimonialSection.find('.elementor-testimonial').parent().parent();
      $testimonialsContainer.addClass('testimonial-slider');
      $testimonialSection.find('.elementor-testimonial').addClass('testimonial-slide');
      $testimonialSection.find('.elementor-testimonial').first().addClass('active');
    }
    $('.elementor-testimonial, .elementor-widget-testimonial').addClass('testimonial-card');

    // Integration logos - Stagger animations
    $('.elementor-section[data-id*="integration"] .elementor-icon-list-item, .elementor-section[data-id*="integration"] .elementor-image').addClass('integration-logo scroll-reveal');

    // FAQ - Accordion setup
    $('.elementor-accordion .elementor-accordion-item').addClass('faq-item');
    $('.elementor-accordion .elementor-tab-title').addClass('faq-question');
    $('.elementor-accordion .elementor-tab-content').addClass('faq-answer');
    $('.elementor-accordion .elementor-accordion-icon').addClass('faq-icon');

    // CTA Buttons - Hover effects
    $('.elementor-button').not('.cta-button').addClass('cta-button');
    
    // Pricing buttons - Special confetti effect
    $('.elementor-section[data-id*="pricing"] .elementor-button').attr('data-confetti', 'true');

    // Add pulse effect to primary CTAs
    $('.elementor-section[data-id*="cta"] .elementor-button-primary, .elementor-button.elementor-size-lg').addClass('pulse-button');

    // Metric cards - Hover effects
    $('.elementor-icon-box').addClass('metric-card');

    // Progress bars - Animation setup
    $('.elementor-progress-bar').each(function() {
      const $this = $(this);
      const $inner = $this.find('.elementor-progress-percentage');
      const percentage = $inner.attr('aria-valuenow') || $inner.data('max') || 100;
      
      $inner.addClass('metric-progress');
      $inner.css('--progress-value', percentage + '%');
      $inner.css('width', '0%');
    });

    // Add scroll reveal to various sections
    $('.elementor-section').each(function() {
      const $section = $(this);
      const sectionId = $section.attr('data-id');
      
      // Add scroll reveal to specific sections
      if (sectionId && (
        sectionId.includes('feature') ||
        sectionId.includes('benefit') ||
        sectionId.includes('advantage') ||
        sectionId.includes('stats')
      )) {
        $section.find('.elementor-widget').addClass('scroll-reveal');
      }
    });
  };

  /**
   * Create sticky CTA bar if not exists
   */
  const createStickyCTABar = () => {
    if ($('.sticky-cta-bar').length > 0) return;

    // Find the main CTA text
    const ctaText = $('.elementor-section[data-id*="cta"] .elementor-button').first().text() || 'Kostenlos testen';
    const ctaLink = $('.elementor-section[data-id*="cta"] .elementor-button').first().attr('href') || '#';

    const stickyBar = `
      <div class="sticky-cta-bar">
        <div class="elementor-container" style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
          <div style="color: white; font-size: 18px; font-weight: 600;">
            Bereit loszulegen? Starten Sie noch heute!
          </div>
          <a href="${ctaLink}" class="elementor-button gradient-button pulse-button" style="padding: 12px 40px; border-radius: 50px; text-decoration: none; color: white; font-weight: 600;" data-confetti="true">
            ${ctaText}
          </a>
        </div>
      </div>
    `;

    $('body').append(stickyBar);
  };

  /**
   * Setup feature carousel/slider
   */
  const setupFeatureCarousel = () => {
    // Look for tabs widget and convert to slider
    const $tabsSection = $('.elementor-section[data-id*="tab"]');
    if ($tabsSection.length > 0) {
      const $tabs = $tabsSection.find('.elementor-tabs');
      if ($tabs.length > 0) {
        $tabs.addClass('feature-slider');
        $tabs.attr('data-duration', '5000');
        
        $tabs.find('.elementor-tab-content').addClass('feature-slide');
        $tabs.find('.elementor-tab-content').first().addClass('active');
        
        // Add progress bar
        if ($tabs.find('.slider-progress').length === 0) {
          $tabs.append('<div class="slider-progress"><div class="slider-progress-bar"></div></div>');
        }
      }
    }
  };

  /**
   * Add particle background to testimonial section
   */
  const addParticleBackground = () => {
    const $testimonialSection = $('.elementor-section[data-id*="testimonial"]').first();
    if ($testimonialSection.length > 0 && $testimonialSection.find('.particle-bg').length === 0) {
      $testimonialSection.css('position', 'relative');
      $testimonialSection.prepend('<div class="particle-bg" data-particles="15"></div>');
    }
  };

  /**
   * Setup grayscale filter for customer logos
   */
  const setupLogoFilters = () => {
    $('.elementor-section[data-id*="logo"] img, .elementor-section[data-id*="client"] img').addClass('customer-logo');
  };

  /**
   * Add animated underlines to links
   */
  const setupAnimatedUnderlines = () => {
    $('.elementor-section[data-id*="case-study"] a, .elementor-section[data-id*="case"] a').not('.elementor-button').addClass('animated-underline');
  };

  /**
   * Initialize on Elementor frontend load
   */
  const init = () => {
    // Apply all classes and setup
    applyAnimationClasses();
    createStickyCTABar();
    setupFeatureCarousel();
    addParticleBackground();
    setupLogoFilters();
    setupAnimatedUnderlines();

    console.log('✨ Elementor animation integration complete');
  };

  // Run on document ready
  $(document).ready(init);

  // Re-run when Elementor loads (for preview mode)
  $(window).on('elementor/frontend/init', () => {
    setTimeout(init, 500);
  });

})(jQuery);
