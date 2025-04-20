# To-Do List: Building GitHub Personal Webpage

This to-do list outlines the step-by-step process to build Victor Yu’s personal webpage, hosted on GitHub Pages, with a minimalistic, professional design, light/dark mode, and interactive features.

## 1. Project Setup
- [x] Create a new GitHub repository named `personal-webpage`.
- [x] Clone the repository locally: `git clone <repository-url>`.
- [x] Initialize the project structure:
  - Create folders: `assets/`, `assets/images/`, `assets/css/`, `assets/js/`, `data/`, `pages/`, `scripts/`.
  - Create initial files: `index.html`, `assets/css/styles.css`, `assets/js/main.js`, `data/lessons.json`, `README.md`.
- [x] Configure GitHub Pages:
  - Go to repository Settings > Pages.
  - Set source to `main` branch and `/ (root)` folder.
  - Save and verify the generated URL (e.g., `https://<username>.github.io/personal-webpage`).
- [x] Install Python (if not already installed) for content generation.
- [x] Add `.gitignore` with common ignores (e.g., `*.pyc`, `node_modules/`, `venv/`).

## 2. Content Preparation
- [x] Create a placeholder profile picture (`assets/images/profile-placeholder.jpg`).
- [x] Create placeholder hobby image (`assets/images/placeholder-hobby.jpg`).
- [x] Create `data/lessons.json` with placeholder life lessons:
  ```json
  [
    { "id": 1, "title": "Placeholder Lesson", "description": "Details to be added." },
    { "id": 2, "title": "Placeholder Lesson", "description": "Details to be added." }
  ]
  ```
- [x] Create `data/placeholders.json` for other placeholder content (e.g., bio, research text).

## 3. Python Content Generation
- [x] Create `scripts/generate-content.py` to process content:
  - Read `data/lessons.json` and validate JSON structure.
  - Optionally, support markdown/CSV input for future content (e.g., publications).
  - Output processed JSON to `data/` for frontend use.
- [x] Test the script locally: `python scripts/generate-content.py`.
- [x] Document usage in `README.md` (e.g., how to update content).

## 4. Frontend Development

### 4.1 Homepage
- [x] Create `index.html`:
  - Add basic HTML5 structure with meta tags for responsiveness (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`).
  - Include navigation bar with links to all pages and light/dark mode toggle button.
  - Add hero section with placeholder profile picture and text: “Victor Yu, EE Undergraduate and undergraduate quantum science researcher at UCLA.”
  - Add placeholder bio paragraph.
  - Include footer with placeholder social media links.
- [ ] Style `index.html` in `assets/css/styles.css`:
  - Use light blue accents (e.g., `#E0F7FA`, `#4FC3F7`) and white background.
  - Apply minimalistic sans-serif font (e.g., Inter via Google Fonts).
  - Ensure mobile responsiveness with CSS media queries.
- [ ] Add subtle cursor effect in `assets/js/main.js` (e.g., trailing particles).

### 4.2 Research and Academic Work Page
- [x] Create `pages/research.html`:
  - Copy navigation and footer from `index.html`.
  - Add header: “Research and Academic Work.”
  - Add placeholder text: “This section will soon feature my publications, projects, and academic achievements.”
- [ ] Style `research.html` in `assets/css/styles.css`:
  - Maintain consistent minimalistic design.
  - Reserve space for future card-based or accordion layout.

### 4.3 Hobbies Page
- [x] Create `pages/hobbies.html`:
  - Copy navigation and footer.
  - Add header: “Hobbies.”
  - Add placeholder text: “I’ll soon share my personal interests and passions here.”
- [ ] Style `hobbies.html`:
  - Prepare grid layout for future hobby cards.
  - Add fun cursor effect (e.g., ripple on hover) in `assets/js/cursor-effects.js`.

### 4.4 Life Lessons Page
- [x] Create `pages/life-lessons.html`:
  - Copy navigation and footer.
  - Add header: “Life Lessons I’ve Learned.”
  - Dynamically load lessons from `data/lessons.json` using JavaScript.
  - Display lessons in numbered boxes (e.g., `<div class="lesson-box">1. Placeholder Lesson</div>`).
- [ ] Style `life-lessons.html`:
  - Design aesthetic numbered boxes with hover effects (e.g., scale-up, shadow).
  - Use light blue borders or backgrounds for boxes.
  - Add fun cursor effect (e.g., color-changing trail).
- [ ] Add JavaScript in `assets/js/main.js` to fetch and render `lessons.json`.

### 4.5 Light/Dark Mode
- [ ] Implement toggle in `assets/js/main.js`:
  - Add event listener to toggle button.
  - Switch between light (white, `#E0F7FA`) and dark (dark gray, `#63B3ED`) themes.
  - Save preference in `localStorage`.
- [ ] Define dark mode styles in `assets/css/styles.css`:
  - Use CSS custom properties (e.g., `--bg-color`, `--text-color`).
  - Apply dark mode via `[data-theme="dark"]` selector.

### 4.6 Interactivity and Accessibility
- [x] Implement cursor effects in `assets/js/cursor-effects.js`:
  - Use Canvas API or CSS for effects like trailing particles or ripples.
  - Disable effects on mobile (detect via `window.matchMedia`).
- [ ] Add smooth scroll animations in `assets/js/main.js`:
  - Use `scroll-behavior: smooth` in CSS or JavaScript for section transitions.
- [ ] Ensure accessibility:
  - Add alt text for all images (e.g., “Victor’s profile picture”).
  - Use ARIA labels for navigation (e.g., `aria-label="Main navigation"`).
  - Test keyboard navigation for toggle button and links.

## 5. Testing
- [ ] Test responsiveness:
  - Open site on mobile, tablet, and desktop browsers.
  - Verify layout and cursor effects (disabled on mobile).
- [ ] Test performance:
  - Run Lighthouse in Chrome DevTools.
  - Aim for performance score > 90.
  - Optimize images (e.g., compress `profile-placeholder.jpg`).
- [ ] Test accessibility:
  - Use screen reader (e.g., NVDA, VoiceOver) to navigate site.
  - Check contrast ratios for text and backgrounds.
- [ ] Test cross-browser compatibility:
  - Test in Chrome, Firefox, Safari, and Edge.
  - Verify cursor effects and light/dark mode functionality.

## 6. Deployment
- [ ] Commit all changes: `git add . && git commit -m "Initial webpage build"`.
- [ ] Push to GitHub: `git push origin main`.
- [ ] Verify GitHub Pages deployment:
  - Visit `https://<username>.github.io/personal-webpage`.  
  - Check all pages and interactive features.
- [ ] Update `README.md`:
  - Document project overview, setup instructions, and content update process (e.g., running `generate-content.py`).

## 7. Documentation and Maintenance
- [ ] Document content updates in `README.md`:
  - Explain how to edit `data/lessons.json` and run `generate-content.py`.
  - Note placeholder image replacement process.
- [ ] Set up GitHub Issues for tracking:
  - Create issues for future tasks (e.g., adding publications, hobbies).
  - Label bugs or enhancements (e.g., “fix cursor effect in Safari”).
- [ ] Plan for profile picture integration:
  - Replace `profile-placeholder.jpg` when provided.
  - Update alt text and ensure image optimization.
