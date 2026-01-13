# Portfolio Website - Complete Code Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [HTML Structure Explained](#html-structure-explained)
4. [CSS Styling Explained](#css-styling-explained)
5. [JavaScript Functionality Explained](#javascript-functionality-explained)
6. [How Everything Works Together](#how-everything-works-together)
7. [Customization Guide](#customization-guide)
8. [Usage Instructions](#usage-instructions)

---

## 🎯 Project Overview

This is a modern, responsive portfolio website built with **HTML5**, **CSS3**, and **JavaScript**. It features a red color theme, smooth animations, and a mobile-first responsive design. The portfolio showcases information about Mohit Janotiya, a Computer Science student at Poornima University.

**Key Features:**
- Fully responsive design (works on all devices)
- Smooth scrolling navigation
- Animated skill bars
- Typing effect on hero text
- Mobile hamburger menu
- Contact form
- Scroll-to-top button
- Fade-in animations

---

## 📁 File Structure

```
portfolioau/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and layout
├── script.js           # All interactive functionality
├── IMG_8554.jpg        # Profile image
└── README.md           # This documentation file
```

---

## 📄 HTML Structure Explained

### **1. Document Head (`<head>`)**
```html
<head>
    <meta charset="UTF-8">                    <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- Mobile responsive -->
    <title>Mohit Janotiya - Portfolio</title>  <!-- Browser tab title -->
    <link rel="stylesheet" href="style.css">   <!-- Link to CSS file -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">  <!-- Font Awesome icons -->
</head>
```

**Why:** 
- `charset="UTF-8"` ensures special characters display correctly
- `viewport` meta tag makes the site responsive on mobile devices
- Font Awesome provides icons (GitHub, LinkedIn, etc.)

---

### **2. Navigation Bar (`<nav>`)**
```html
<nav class="navbar">
    <div class="container">
        <div class="nav-brand">Mohit Janotiya</div>  <!-- Logo/Brand name -->
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <!-- Other navigation links -->
        </ul>
        <div class="hamburger">  <!-- Mobile menu button -->
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
```

**Why:**
- Fixed navigation bar stays visible while scrolling
- `#home`, `#about`, etc. are anchor links for smooth scrolling
- Hamburger menu (3 lines) appears on mobile devices
- `container` class centers content and limits width

**Where used:** Top of every page, always visible

---

### **3. Home Section**
```html
<section id="home" class="home">
    <div class="home-content">
        <div class="home-text">
            <h1 class="typing-text">Hi, I'm <span class="highlight">Mohit Janotiya</span></h1>
            <!-- Buttons and social links -->
        </div>
        <div class="home-image">
            <div class="floating-shape shape-1">
                <img src="IMG_8554.jpg" alt="image">
            </div>
        </div>
    </div>
</section>
```

**Why:**
- `id="home"` is the target for navigation links
- `typing-text` class triggers JavaScript typing animation
- `highlight` class makes the name stand out (white color)
- Floating shapes create visual interest
- Two-column layout: text on left, image on right

**Where used:** First section visitors see, creates first impression

---

### **4. About Section**
```html
<section id="about" class="about">
    <h2 class="section-title">About Me</h2>
    <div class="about-stats">
        <div class="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
        </div>
        <!-- More stats -->
    </div>
</section>
```

**Why:**
- Shows personal information and achievements
- Stats cards (50+, 10+, 100%) provide quick visual impact
- `section-title` class provides consistent styling for all section headings

**Where used:** After home section, provides context about the person

---

### **5. Education Section**
```html
<section id="education" class="education">
    <div class="education-timeline">
        <div class="timeline-item">
            <div class="timeline-dot"></div>  <!-- Visual dot on timeline -->
            <div class="timeline-content">
                <h3>Bachelor of Technology (B.Tech)</h3>
                <p class="institution">Poornima University</p>
            </div>
        </div>
    </div>
</section>
```

**Why:**
- Timeline design visually represents chronological education
- `timeline-dot` creates a visual marker on the timeline line
- Easy to add more education entries

**Where used:** Shows academic background

---

### **6. Skills Section**
```html
<section id="skills" class="skills">
    <div class="skill-item">
        <span class="skill-name">C++</span>
        <div class="skill-bar">
            <div class="skill-progress" data-width="85"></div>  <!-- 85% width -->
        </div>
    </div>
</section>
```

**Why:**
- `data-width="85"` stores the percentage for JavaScript
- `skill-bar` is the background container
- `skill-progress` is the colored bar that animates
- JavaScript reads `data-width` and animates the bar to that width

**Where used:** Demonstrates technical abilities visually

---

### **7. Projects Section**
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">  <!-- Appears on hover -->
            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="project-content">
        <h3>E-Commerce Website</h3>
        <div class="project-tags">
            <span>React</span>  <!-- Technology tags -->
        </div>
    </div>
</div>
```

**Why:**
- `project-overlay` is hidden by default, appears on hover
- Shows links to live project and GitHub code
- Tags show technologies used
- Grid layout displays multiple projects

**Where used:** Showcases portfolio work

---

### **8. Contact Section**
```html
<form class="contact-form">
    <div class="form-group">
        <input type="text" placeholder="Your Name" required>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

**Why:**
- `required` attribute ensures fields are filled
- `form-group` provides consistent spacing
- JavaScript handles form submission
- Two-column layout: contact info on left, form on right

**Where used:** Allows visitors to get in touch

---

### **9. Footer**
```html
<footer class="footer">
    <p>&copy; 2024 Mohit Janotiya. All rights reserved.</p>
    <div class="footer-social">
        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
    </div>
</footer>
```

**Why:**
- `aria-label` helps screen readers (accessibility)
- Copyright notice
- Social media links

**Where used:** Bottom of page, on every section

---

## 🎨 CSS Styling Explained

### **1. CSS Reset & Variables**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Why:**
- Removes default browser margins/padding
- `box-sizing: border-box` includes padding/border in element width
- Ensures consistent styling across browsers

---

### **2. CSS Variables (`:root`)**
```css
:root {
    --primary-color: #ef4444;      /* Red color */
    --secondary-color: #dc2626;     /* Darker red */
    --text-color: #1f2937;          /* Dark gray text */
    --bg-color: #ffffff;            /* White background */
}
```

**Why:**
- Store colors in variables for easy theme changes
- Change `--primary-color` once, updates everywhere
- Makes code maintainable and consistent

**Where used:** Throughout the entire stylesheet via `var(--primary-color)`

---

### **3. Container Class**
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

**Why:**
- `max-width: 1200px` prevents content from being too wide on large screens
- `margin: 0 auto` centers the container
- `padding: 0 20px` adds space on mobile devices

**Where used:** Wraps content in every section for consistent width

---

### **4. Navigation Bar Styling**
```css
.navbar {
    position: fixed;        /* Stays at top when scrolling */
    top: 0;
    width: 100%;
    z-index: 1000;         /* Above other content */
    backdrop-filter: blur(10px);  /* Glass effect */
}
```

**Why:**
- `position: fixed` keeps navbar visible while scrolling
- `z-index: 1000` ensures it's above all content
- `backdrop-filter: blur(10px)` creates modern glass effect

**Where used:** Navigation bar at top of page

---

### **5. Navigation Link Hover Effect**
```css
.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;              /* Starts at 0 */
    height: 2px;
    background: linear-gradient(...);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;            /* Expands to 100% on hover */
}
```

**Why:**
- `::after` creates a pseudo-element (underline)
- Starts at `width: 0`, expands to `100%` on hover
- Creates smooth animated underline effect

**Where used:** Navigation links

---

### **6. Home Section Gradient Background**
```css
.home {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    min-height: 100vh;      /* Full viewport height */
}
```

**Why:**
- `linear-gradient` creates smooth color transition
- `135deg` is the angle (diagonal)
- `100vh` means 100% of viewport height (full screen)

**Where used:** Home/hero section background

---

### **7. Floating Animation**
```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.floating-shape {
    animation: float 6s ease-in-out infinite;
}
```

**Why:**
- `@keyframes` defines animation steps
- `translateY(-20px)` moves element up 20px
- `infinite` repeats forever
- `ease-in-out` makes animation smooth

**Where used:** Floating shapes in home section

---

### **8. Skill Bar Animation**
```css
.skill-bar {
    width: 100%;
    height: 8px;
    background: var(--border-color);  /* Gray background */
}

.skill-progress {
    height: 100%;
    background: linear-gradient(...);
    width: 0;              /* Starts at 0, JavaScript animates to data-width */
    transition: width 1s ease;
}
```

**Why:**
- Background bar shows full width
- Progress bar starts at 0, JavaScript animates to percentage
- `transition` makes animation smooth

**Where used:** Skills section, shows proficiency levels

---

### **9. Project Card Hover Effect**
```css
.project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);  /* Moves up 10px */
    box-shadow: var(--shadow-lg);  /* Larger shadow */
}
```

**Why:**
- `transform: translateY(-10px)` lifts card on hover
- Larger shadow creates depth effect
- Makes cards interactive and engaging

**Where used:** Project cards in projects section

---

### **10. Responsive Design (Media Queries)**
```css
@media (max-width: 768px) {
    .home-content {
        grid-template-columns: 1fr;  /* Single column on mobile */
    }
    
    .hamburger {
        display: flex;  /* Show hamburger menu */
    }
    
    .nav-menu {
        display: none;  /* Hide regular menu */
    }
}
```

**Why:**
- `@media` queries apply styles at specific screen sizes
- On mobile (< 768px), layout changes to single column
- Hamburger menu replaces full navigation

**Where used:** Throughout CSS for mobile responsiveness

---

## ⚡ JavaScript Functionality Explained

### **1. Mobile Navigation Toggle**
```javascript
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
```

**Why:**
- `querySelector` finds the hamburger button and menu
- `addEventListener('click')` listens for clicks
- `classList.toggle('active')` adds/removes 'active' class
- CSS shows/hides menu based on 'active' class

**Where used:** Mobile devices, when hamburger is clicked

---

### **2. Smooth Scrolling**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Stop default jump behavior
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',  // Smooth scroll instead of jump
            block: 'start'
        });
    });
});
```

**Why:**
- `href^="#"` selects all links starting with #
- `e.preventDefault()` stops default anchor jump
- `scrollIntoView({ behavior: 'smooth' })` creates smooth scroll

**Where used:** All navigation links (Home, About, Skills, etc.)

---

### **3. Navbar Background on Scroll**
```javascript
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});
```

**Why:**
- `window.scrollY` gets scroll position
- When scrolled > 50px, navbar becomes more opaque
- Creates visual feedback that user has scrolled

**Where used:** Navigation bar, updates as user scrolls

---

### **4. Active Navigation Link**
```javascript
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
```

**Why:**
- Loops through sections to find which is currently visible
- `offsetTop` gets section's position from top
- Adds 'active' class to corresponding nav link
- Highlights current section in navigation

**Where used:** Navigation menu, updates as user scrolls

---

### **5. Typing Effect**
```javascript
const typingText = document.querySelector('.typing-text');
const prefix = 'Hi, I\'m ';
const highlightText = 'Mohit Janotiya';

function typeWriter() {
    if (i < prefix.length) {
        typingText.textContent += prefix.charAt(i);
        i++;
        setTimeout(typeWriter, 100);  // Call again after 100ms
    }
    // Then types the highlighted name
}
```

**Why:**
- Types text character by character
- `setTimeout` delays each character by 100ms
- Creates typewriter animation effect
- Makes hero section more engaging

**Where used:** Home section, "Hi, I'm Mohit Janotiya" text

---

### **6. Animated Skill Bars**
```javascript
const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');  // Get percentage
        const barTop = bar.getBoundingClientRect().top;
        
        if (barTop < window.innerHeight - barVisible) {
            bar.style.width = width + '%';  // Animate to percentage
        }
    });
};

window.addEventListener('scroll', animateSkills);
```

**Why:**
- Reads `data-width` attribute (e.g., "85" for 85%)
- Checks if bar is visible on screen
- Sets width to percentage, CSS transition animates it
- Only animates when scrolled into view

**Where used:** Skills section, animates when user scrolls to it

---

### **7. Scroll to Top Button**
```javascript
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');  // Show button
    } else {
        scrollTopBtn.classList.remove('show');  // Hide button
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

**Why:**
- Shows button when scrolled > 300px
- Hides when near top
- Clicking smoothly scrolls to top
- Improves user experience on long pages

**Where used:** Bottom-right corner, appears when scrolling down

---

### **8. Form Submission**
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Stop form from submitting normally
    
    const name = contactForm.querySelector('input[type="text"]').value;
    // Get other form values...
    
    if (name && email && subject && message) {
        alert('Thank you for your message!');
        contactForm.reset();  // Clear form
    }
});
```

**Why:**
- `e.preventDefault()` stops page reload
- Gets form values for validation
- Shows alert (in real app, would send to server)
- Resets form after submission

**Where used:** Contact form submission

---

### **9. Intersection Observer (Fade-in Animations)**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // Element is visible
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';  // Start invisible
    observer.observe(section);  // Watch for visibility
});
```

**Why:**
- `IntersectionObserver` detects when element enters viewport
- Starts sections invisible (`opacity: 0`)
- When visible, fades in and slides up
- Creates smooth entrance animations

**Where used:** All sections fade in when scrolled into view

---

### **10. Project Cards Staggered Animation**
```javascript
projectCards.forEach((card, index) => {
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s`;
    // Each card has increasing delay (0s, 0.1s, 0.2s, 0.3s)
});
```

**Why:**
- Each card animates with slight delay
- `index * 0.1s` creates staggered effect
- Cards appear one after another
- More visually appealing than all at once

**Where used:** Projects section, cards animate in sequence

---

## 🔗 How Everything Works Together

### **1. Page Load Sequence:**
1. HTML loads → Structure appears
2. CSS loads → Styling applied
3. JavaScript loads → Interactivity added
4. Typing effect starts automatically
5. Sections start invisible (opacity: 0)

### **2. User Interaction Flow:**
1. **Click navigation link** → JavaScript smooth scrolls to section
2. **Scroll page** → JavaScript updates active nav link, shows scroll button
3. **Scroll to skills** → Skill bars animate when visible
4. **Hover project card** → CSS hover effect lifts card
5. **Click hamburger** → JavaScript toggles mobile menu
6. **Submit form** → JavaScript validates and shows alert

### **3. Responsive Behavior:**
- **Desktop (> 768px):** Full navigation, two-column layouts
- **Tablet (768px):** Adjusted spacing, single column where needed
- **Mobile (< 768px):** Hamburger menu, single column, stacked content

---

## 🎨 Customization Guide

### **Change Colors:**
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #ef4444;      /* Change to your color */
    --secondary-color: #dc2626;     /* Change to your color */
}
```

### **Update Personal Information:**
Edit `index.html`:
- Name: Line 14, 36
- University: Line 100
- Email: Line 279
- Phone: Line 286
- Location: Line 293

### **Add/Remove Skills:**
In `index.html`, find skills section and add:
```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="80"></div>
    </div>
</div>
```

### **Add Projects:**
Copy a project card and update:
```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description</p>
        <div class="project-tags">
            <span>Technology</span>
        </div>
    </div>
</div>
```

### **Change Profile Image:**
Replace `IMG_8554.jpg` with your image, or update the path in HTML line 53.

---

## 🚀 Usage Instructions

### **1. Local Development:**
1. Open `index.html` in a web browser
2. All files must be in the same folder
3. Ensure `IMG_8554.jpg` exists (or update path)

### **2. Hosting Online:**
1. Upload all files to web hosting (GitHub Pages, Netlify, etc.)
2. Keep file structure intact
3. Update social media links in HTML (lines 44-47, 322-325)

### **3. Customization Steps:**
1. **Update personal info** → Edit HTML
2. **Change colors** → Edit CSS variables
3. **Add projects** → Copy project card HTML
4. **Modify animations** → Edit JavaScript timing values

### **4. Testing:**
- Test on different screen sizes (mobile, tablet, desktop)
- Check all navigation links work
- Verify form submission
- Test smooth scrolling

---

## 📝 Key Concepts Summary

| Concept | Purpose | Location |
|---------|---------|----------|
| **CSS Variables** | Store reusable colors | `style.css` line 7-17 |
| **Flexbox/Grid** | Layout elements | Throughout CSS |
| **Media Queries** | Responsive design | `style.css` bottom |
| **Event Listeners** | Handle user interactions | `script.js` |
| **Intersection Observer** | Detect element visibility | `script.js` line 164 |
| **CSS Animations** | Create movement effects | `style.css` @keyframes |
| **Smooth Scrolling** | Better navigation UX | `script.js` line 18 |
| **Form Validation** | Ensure data quality | `script.js` line 139 |

---

## 🐛 Common Issues & Solutions

**Issue:** Image not showing
- **Solution:** Check image path matches filename exactly

**Issue:** Animations not working
- **Solution:** Ensure JavaScript file is linked correctly

**Issue:** Mobile menu not opening
- **Solution:** Check JavaScript is loaded, hamburger has click listener

**Issue:** Colors not changing
- **Solution:** Clear browser cache, check CSS variable names

---

## 📚 Learning Resources

- **HTML:** Structure and semantics
- **CSS:** Styling, layouts, animations
- **JavaScript:** DOM manipulation, event handling
- **Responsive Design:** Media queries, flexible layouts

---

## ✨ Final Notes

This portfolio is fully functional and ready to use. All code is commented and organized for easy understanding. Feel free to customize it to match your personal brand and style!

**Happy Coding! 🚀**

