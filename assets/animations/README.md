# Animation Assets

This folder contains animation assets for the B2B SaaS landing page.

## 📁 Folder Structure

```
animations/
├── lottie/          # Lottie JSON animations
├── svg/             # Animated SVG files
└── README.md        # This file
```

## 🎬 Lottie Animations

Lottie animations are lightweight, scalable animations that can be used in the hero section and other key areas.

### Recommended Sources

1. **LottieFiles** - https://lottiefiles.com/
   - Search for: loading, success, technology, data, growth, charts
   - Free and premium options available

2. **Custom Creation**
   - Create in After Effects
   - Export with Bodymovin plugin
   - Optimize file size

### How to Add Lottie Animations

1. **Download Lottie JSON File**
   - Save to `assets/animations/lottie/`
   - Example: `hero-animation.json`

2. **Add to HTML**
   ```html
   <div data-lottie="path/to/animation.json" 
        data-loop="true" 
        data-autoplay="true">
   </div>
   ```

3. **Add via Elementor**
   - Install Lottie widget plugin
   - Or use HTML widget with code above
   - Upload JSON file to Media Library

### Recommended Animations

**Hero Section:**
- Technology/Innovation animations
- Data flowing animations
- Growth/Progress animations
- Abstract geometric patterns

**Features Section:**
- Checkmark/Success animations
- Icon animations
- Process/Workflow animations

**Success/ROI Section:**
- Chart/Graph animations
- Trophy/Success animations
- Celebration animations

## 🖼️ SVG Animations

Animated SVGs can be used for icons and decorative elements.

### Creating Animated SVGs

1. **Using CSS**
   ```html
   <svg class="animated-icon">
     <path class="icon-path" d="..."/>
   </svg>
   ```

   ```css
   .icon-path {
     animation: draw 2s ease-in-out infinite;
   }
   
   @keyframes draw {
     0% { stroke-dashoffset: 1000; }
     100% { stroke-dashoffset: 0; }
   }
   ```

2. **Using SMIL**
   ```html
   <svg>
     <circle r="10">
       <animate attributeName="r" 
                from="10" to="20" 
                dur="1s" 
                repeatCount="indefinite"/>
     </circle>
   </svg>
   ```

### SVG Animation Libraries

- **Vivus.js** - Line drawing animations
- **Snap.svg** - SVG manipulation
- **GreenSock (GSAP)** - Advanced animations

## 📊 Performance Guidelines

### File Size Limits

- **Lottie JSON:** < 100KB (ideal: < 50KB)
- **SVG:** < 50KB
- **Total animations per page:** < 500KB

### Optimization Tips

1. **Lottie Files:**
   - Remove unnecessary layers
   - Simplify paths
   - Reduce keyframes
   - Use LottieFiles optimizer

2. **SVG Files:**
   - Use SVGO tool
   - Remove metadata
   - Simplify paths
   - Combine shapes where possible

3. **Loading Strategy:**
   - Lazy load animations below fold
   - Preload critical animations
   - Use Intersection Observer

## 🎨 Animation Examples

### Example 1: Hero Loading Animation

**File:** `lottie/hero-tech.json`

**Usage:**
```html
<div id="hero-animation" 
     data-lottie="/wp-content/themes/your-theme/assets/animations/lottie/hero-tech.json"
     data-loop="true"
     data-autoplay="true"
     style="width: 500px; height: 500px;">
</div>
```

### Example 2: Success Checkmark

**File:** `lottie/success-check.json`

**Usage:**
```html
<div data-lottie="success-check.json"
     data-loop="false"
     data-autoplay="false"
     data-trigger="scroll"
     style="width: 100px; height: 100px;">
</div>
```

### Example 3: Data Visualization

**File:** `lottie/data-chart.json`

**Usage in ROI section:**
```html
<div class="roi-animation"
     data-lottie="data-chart.json"
     data-loop="true"
     data-autoplay="true">
</div>
```

## 🔄 Animation States

### Controlling Playback

**JavaScript API:**
```javascript
// Get animation instance
const animation = lottie.loadAnimation({
  container: document.getElementById('my-animation'),
  path: 'animation.json'
});

// Control playback
animation.play();
animation.pause();
animation.stop();
animation.setSpeed(1.5);
animation.setDirection(-1); // Reverse
```

### Trigger on Scroll

Use Intersection Observer:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animation = entry.target.lottieAnimation;
      if (animation) animation.play();
    }
  });
});

document.querySelectorAll('[data-lottie]').forEach(el => {
  observer.observe(el);
});
```

## 📱 Mobile Considerations

### Reduce Complexity on Mobile

```javascript
const isMobile = window.innerWidth < 768;

lottie.loadAnimation({
  container: element,
  path: 'animation.json',
  loop: !isMobile, // Disable loop on mobile
  autoplay: !isMobile, // Disable autoplay on mobile
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    progressiveLoad: true
  }
});
```

### Alternative Static Images

Provide fallback for low-end devices:
```html
<div class="animation-container">
  <div data-lottie="animation.json" class="lottie-animation"></div>
  <img src="fallback.png" class="animation-fallback" alt="Animation">
</div>
```

```css
@media (max-width: 768px) {
  .lottie-animation { display: none; }
  .animation-fallback { display: block; }
}
```

## 🎯 Best Practices

1. **Keep it Simple**
   - Use animations purposefully
   - Don't overload the page
   - Max 3-5 complex animations per page

2. **Performance First**
   - Test on low-end devices
   - Monitor frame rate
   - Use lighter animations on mobile

3. **Accessibility**
   - Provide pause controls
   - Respect prefers-reduced-motion
   - Don't rely solely on animation for information

4. **Branding**
   - Match your brand colors
   - Keep style consistent
   - Use custom animations when possible

## 🔗 Resources

### Free Animation Libraries

- **LottieFiles:** https://lottiefiles.com/
- **IconScout:** https://iconscout.com/lottie-animations
- **Lordicon:** https://lordicon.com/

### Tools

- **After Effects + Bodymovin:** Create custom Lottie
- **Rive:** Interactive animations
- **SVGOMG:** SVG optimizer
- **LottieFiles Plugin:** After Effects export

### Documentation

- **Lottie Docs:** https://airbnb.io/lottie/
- **Lottie Web:** https://github.com/airbnb/lottie-web
- **SVG Animation Guide:** https://css-tricks.com/guide-svg-animations-smil/

## 📝 Notes

- Always test animations in target browsers
- Keep backup static versions
- Monitor performance impact
- Update animations as needed
- Document custom animations

---

**Version:** 1.0.0  
**Last Updated:** November 14, 2024
