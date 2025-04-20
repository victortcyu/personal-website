/**
 * Cursor effects for Victor Yu's personal website
 * These effects enhance the relaxed vibe of the Hobbies and Life Lessons pages
 */

// Check if we're on mobile - don't apply effects on mobile
const isMobile = window.matchMedia('(max-width: 768px)').matches;

/**
 * Creates a ripple effect when hovering over certain elements
 * @param {string} selector - CSS selector for elements to apply effect to
 */
function createRippleEffect(selector) {
  if (isMobile) return; // Skip on mobile devices
  
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      // Create ripple element if it doesn't exist
      let ripple = element.querySelector('.cursor-ripple');
      if (!ripple) {
        ripple = document.createElement('div');
        ripple.classList.add('cursor-ripple');
        element.appendChild(ripple);
      }
      
      // Position the ripple at cursor position
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      // Trigger animation
      ripple.style.animation = 'none';
      setTimeout(() => {
        ripple.style.animation = 'ripple 1s ease-out';
      }, 10);
    });
  });
}

/**
 * Creates a particle trail behind the cursor on specified pages
 * @param {string} pageIdentifier - CSS class or ID to identify the current page
 */
function createParticleTrail(pageIdentifier) {
  if (isMobile) return; // Skip on mobile devices
  
  // Only apply on specified pages
  if (!document.querySelector(pageIdentifier)) return;
  
  // Create a container for particles
  const container = document.createElement('div');
  container.classList.add('particle-container');
  document.body.appendChild(container);
  
  // Create particles on mouse move
  document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Set particle position to mouse position
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    
    // Randomize particle color for Life Lessons page
    if (document.querySelector('.life-lessons')) {
      const hue = Math.floor(Math.random() * 360);
      particle.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
    }
    
    // Add particle to container
    container.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      particle.remove();
    }, 1000);
  });
}

// Initialize cursor effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Apply ripple effect on hobbies page
  if (document.querySelector('.hobbies')) {
    createRippleEffect('.hobby-card');
    createParticleTrail('.hobbies');
  }
  
  // Apply particle trail on life lessons page
  if (document.querySelector('.life-lessons')) {
    createParticleTrail('.life-lessons');
    createRippleEffect('.lesson-box');
  }
});
