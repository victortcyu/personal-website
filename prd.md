# Product Requirements Document (PRD): GitHub Personal Webpage

## 1. Introduction

### 1.1 Purpose
This PRD outlines the requirements for a personal webpage hosted on GitHub Pages for Victor Yu, an Electrical Engineering undergraduate and quantum science researcher at UCLA. The site will showcase Victor’s identity, academic work, hobbies, and life lessons in a minimalistic, professional, and aesthetically pleasing manner with a focus on light colors and blue accents.

### 1.2 Scope
The webpage will consist of four pages: Homepage, Research and Academic Work, Hobbies, and Life Lessons. It will feature a light/dark mode toggle, interactive cursor effects in relaxed sections, and mobile responsiveness. The site will be static, hosted on GitHub Pages, with Python used for local content generation (e.g., JSON data for dynamic content).

### 1.3 Target Audience
- Academic peers, professors, and potential employers in quantum science and electrical engineering.
- Personal connections and general visitors interested in Victor’s work and personality.

## 2. Requirements

### 2.1 Functional Requirements

#### 2.1.1 Homepage
- **Description**: Introduce Victor Yu and provide navigation to other pages.
- **Content**:
  - Hero section with a professional profile picture (placeholder until provided) and text: “Victor Yu, EE Undergraduate and undergraduate quantum science researcher at UCLA.”
  - Brief bio (placeholder: “I’m passionate about quantum science, electrical engineering, and pushing the boundaries of technology.”).
  - Navigation bar linking to Home, Research, Hobbies, and Life Lessons.
  - Footer with placeholder social media links (GitHub, LinkedIn, to be updated later).
- **Features**:
  - Light/dark mode toggle button in the navigation bar.
  - Subtle cursor effect (e.g., trailing particles) for a relaxed feel.

#### 2.1.2 Research and Academic Work
- **Description**: Placeholder page for future academic content.
- **Content**:
  - Header: “Research and Academic Work.”
  - Placeholder text: “This section will soon feature my publications, projects, and academic achievements.”
  - Space reserved for future links to external sites (e.g., Google Scholar) and publications.
- **Features**:
  - Minimalistic layout with room for future card-based or accordion-style content.

#### 2.1.3 Hobbies
- **Description**: Placeholder page for future hobby content.
- **Content**:
  - Header: “Hobbies.”
  - Placeholder text: “I’ll soon share my personal interests and passions here.”
  - Space reserved for future hobby descriptions and images/videos.
- **Features**:
  - Fun cursor effect (e.g., ripple or glow on hover) to enhance the relaxed vibe.
  - Grid layout for future hobby cards.

#### 2.1.4 Life Lessons
- **Description**: Display life lessons in aesthetically pleasing numbered boxes.
- **Content**:
  - Header: “Life Lessons I’ve Learned.”
  - Placeholder lessons in numbered boxes (e.g., “1. Placeholder Lesson: Details to be added.”).
  - Each box contains a lesson title and a 1-2 sentence description.
- **Features**:
  - Interactive hover effects on boxes (e.g., slight scale-up or shadow).
  - Fun cursor effect (e.g., color-changing trail) for engagement.

#### 2.1.5 General Features
- **Light/Dark Mode**: Toggle between light (blue-centric, light aesthetic) and dark (blue accents, dark background) modes, with user preference saved in local storage.
- **Mobile Responsiveness**: Fully responsive design for mobile, tablet, and desktop.
- **Interactive Elements**:
  - Cursor effects in Hobbies and Life Lessons pages (e.g., trailing particles, ripple effects).
  - Smooth scroll animations for section transitions.
- **Accessibility**: Alt text for images, ARIA labels for navigation, high-contrast text.

## 2.2 Non-Functional Requirements
- **Performance**: Page load time < 2 seconds, Lighthouse score > 90.
- **Scalability**: Easy to add content (e.g., publications, hobbies) via JSON files.
- **Maintainability**: Clear file structure, well-commented code.
- **Security**: No dynamic backend, minimizing vulnerabilities; sanitize any future user inputs (e.g., if a contact form is added).

## 2.3 Design Requirements
- **Color Scheme**:
  - Light Mode: White background, light blue accents (e.g., #E0F7FA, #4FC3F7), and soft pastels.
  - Dark Mode: Dark gray background (e.g., #1A202C), blue accents (e.g., #63B3ED).
- **Typography**: Minimalistic, professional sans-serif font (e.g., Inter or Poppins).
- **Style**: Clean, minimalistic, and professional with rounded edges and subtle shadows.
- **Imagery**: Professional profile picture (placeholder until provided); placeholder images for hobbies and lessons.

## 3. Technical Specifications

### 3.1 Tech Stack
- **Frontend**:
  - HTML, CSS, JavaScript for static site structure.
  - Vanilla JS for interactivity (e.g., light/dark mode, cursor effects).
  - CSS framework: Plain CSS or lightweight option like Pico.css for minimalism.
- **Backend**:
  - Python for local content generation (e.g., script to convert markdown/CSV to JSON).
  - JSON files for content (e.g., life lessons, future publications).
- **Hosting**: GitHub Pages for static site deployment.
- **Build Tool**: None (static site, no bundler needed for simplicity).
- **Version Control**: Git, managed via GitHub repository.

### 3.2 File Structure
```
personal-webpage/
├── assets/
│   ├── images/
│   │   ├── profile-placeholder.jpg
│   │   └── placeholder-hobby.jpg
│   ├── css/
│   │   ├── styles.css
│   │   └── cursor-effects.css
│   └── js/
│   │   ├── main.js
│   │   └── cursor-effects.js
├── data/
│   ├── lessons.json
│   └── placeholders.json
├── pages/
│   ├── research.html
│   ├── hobbies.html
│   └── life-lessons.html
├── scripts/
│   └── generate-content.py
├── index.html
├── README.md
└── .gitignore
``` 

### 3.3 Content Generation
- Python script (`generate-content.py`) to convert markdown or CSV files into JSON for easy content updates.
- Example JSON for Life Lessons:
  ```json
  [
    { "id": 1, "title": "Placeholder Lesson", "description": "Details to be added." },
    { "id": 2, "title": "Placeholder Lesson", "description": "Details to be added." }
  ]
  ```

## 4. Development Plan

### 4.1 Milestones
1. **Setup (1-2 days)**:
   - Initialize GitHub repository and configure GitHub Pages.
   - Set up basic HTML/CSS/JS structure.
   - Create Python script for JSON content generation.
2. **Core Development (3-5 days)**:
   - Build Homepage with hero, navigation, and light/dark mode toggle.
   - Create placeholder pages for Research and Hobbies.
   - Develop Life Lessons page with numbered box layout and hover effects.
   - Implement cursor effects in Hobbies and Life Lessons.
3. **Styling and Interactivity (2-3 days)**:
   - Apply blue-centric, light aesthetic with minimalistic design.
   - Ensure mobile responsiveness using CSS media queries.
   - Add accessibility features (ARIA, alt text).
4. **Testing (1-2 days)**:
   - Test across devices (mobile, tablet, desktop).
   - Run Lighthouse for performance and accessibility.
   - Validate cursor effects in supported browsers (Chrome, Firefox, Safari).
5. **Deployment (1 day)**:
   - Push to GitHub and verify GitHub Pages deployment.
   - Document update process in README.md.

### 4.2 Acceptance Criteria
- Homepage displays Victor’s name, title, and placeholder bio.
 clinics
- Light/dark mode toggle works and persists across sessions.
- All pages are accessible and responsive on mobile and desktop.
- Life Lessons page shows numbered boxes with hover effects.
- Cursor effects are active in Hobbies and Life Lessons, disabled on mobile.
- Site achieves Lighthouse performance score > 90.
- Content can be updated by modifying JSON files and running Python script.

## 5. Maintenance
- **Content Updates**: Edit JSON files or source markdown/CSV, then run `generate-content.py`.
- **Bug Tracking**: Use GitHub Issues for reporting and resolving issues.
- **Future Enhancements**:
  - Add publications and external links to Research page.
  - Populate Hobbies page with content and media.
  - Integrate real profile picture when provided.

## 6. Risks and Mitigations
- **Risk**: Cursor effects may not work on all browsers.
  - **Mitigation**: Use feature detection and fallback to standard cursor.
- **Risk**: GitHub Pages limitations for dynamic content.
  - **Mitigation**: Rely on static JSON and Python for local processing.
- **Risk**: Accessibility issues for interactive elements.
  - **Mitigation**: Test with screen readers and ensure keyboard navigation.

## 7. Next Steps
- Confirm tech stack and design preferences with Victor.
- Develop initial prototype for Homepage and Life Lessons page.
- Await profile picture and further content for Hobbies and Research.
