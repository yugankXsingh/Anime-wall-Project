# 🎌 Anime Wall

A stunning interactive web gallery showcasing iconic anime characters with immersive visual effects and smooth animations. This project creates an engaging visual experience for anime enthusiasts through dynamic image displays and creative user interactions.

![Anime Wall Preview](./assets/coverpage1.jpg)

## ✨ Features

### 🎭 Interactive Character Gallery
- **Multiple themed sections** featuring different character categories:
  - The Badasses
  - Supreme Adversary  
  - Admire Them
  - Divine Standouts
  - Iconic Side Stars

### 🎪 Dynamic Visual Effects
- **Mouse-following image animations** in the hero section
- **3D perspective transformations** on character cards
- **Hover effects** with depth and rotation animations
- **Scroll-based animations** for smooth reveals
- **Rotating shuriken elements** that respond to scroll

### 🎠 Image Carousel
- **Automatic slideshow** with manual navigation controls
- **Smooth transitions** between anime cover images
- **Previous/Next buttons** for user control

### 🎨 Visual Enhancements
- **Custom scroll indicators** on all four edges
- **Throttled mouse interactions** for optimal performance
- **GSAP-powered animations** for fluid motion
- **Responsive design** across different screen sizes

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Advanced styling, animations, and effects
  - CSS Grid & Flexbox for layouts
  - CSS Animations & Keyframes
  - 3D Transforms and Perspectives
  - Custom scroll animations
- **JavaScript (ES6+)** - Interactive functionality
  - Event handling and DOM manipulation
  - Throttling for performance optimization
  - Dynamic image generation
- **GSAP (GreenSock)** - Professional-grade animations
- **Font Awesome** - Icon library

## 📁 Project Structure

```
anime-wall-project/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── index.js                # JavaScript functionality
├── README.md               # Project documentation
├── assets/                 # Image assets
│   ├── cover*.jpg/png      # Carousel cover images
│   ├── character images/   # Character portraits
│   ├── background*.jpg     # Section backgrounds
│   └── shuriken.svg        # Rotating decorative elements
└── topAssets/              # Hero section images (001-200)
    ├── 001.jpeg - 009.jpeg
    └── 010.jpeg - 200.jpeg
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for optimal performance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yugankXsingh/Anime-wall-Project.git
   cd Anime-wall-Project
   ```

2. **Serve the project**
   
   **Option A: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js (http-server)**
   ```bash
   npx http-server
   ```
   
   **Option C: Using Live Server (VS Code)**
   - Install Live Server extension
   - Right-click on `index.html` → "Open with Live Server"

3. **Open in browser**
   - Navigate to `http://localhost:8000`
   - Enjoy the interactive anime experience!

## 🎮 User Guide

### Navigation
- **Mouse Movement**: Hover over the hero section to see dynamic image effects
- **Carousel Controls**: Use Prev/Next buttons to browse anime covers
- **Character Galleries**: Hover over character images to see 3D effects
- **Scroll**: Smooth scroll to explore different character sections

### Sections Overview
1. **Hero Section**: Interactive image wall that responds to mouse movement
2. **Carousel**: Rotating showcase of anime cover art
3. **The Badasses**: Featuring powerful characters like Gojo, Itachi, Madara
4. **Supreme Adversary**: Iconic villains and antagonists
5. **Admire Them**: Beloved protagonists and heroes
6. **Divine Standouts**: Exceptional supporting characters
7. **Iconic Side Stars**: Extended gallery of memorable characters

## 🎨 Customization

### Adding New Characters
1. Add character images to the `assets/` folder
2. Update the HTML structure in the respective section:
   ```html
   <div class="image-container">
       <p>Character Name</p>
       <img src="./assets/character-image.jpg" alt="Character Name">
   </div>
   ```

### Modifying Animations
- **Scroll animations**: Edit keyframes in `styles.css`
- **Hover effects**: Adjust transform values in CSS
- **GSAP animations**: Modify parameters in `index.js`

### Color Themes
Each section uses different color schemes defined in the CSS:
- Section 1: Blue theme (`#7D8ABC`)
- Section 2: Orange theme 
- Section 3: Green theme (`#06D001`)
- Section 4: Teal theme
- Section 5: Mixed theme

## ⚡ Performance Features

- **Image lazy loading** for faster initial load times
- **Throttled event handlers** to prevent excessive function calls
- **Optimized animations** using GSAP for smooth 60fps performance
- **Efficient DOM manipulation** with minimal reflows

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Ideas
- Add more anime characters
- Implement new animation effects
- Add mobile-responsive improvements
- Create additional themed sections
- Optimize performance further

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Anime Studios** - For creating the amazing characters featured
- **GSAP** - For the powerful animation library
- **Font Awesome** - For the beautiful icons
- **Anime Community** - For the inspiration and character images

## 📬 Contact

**Yugank Singh**
- GitHub: [@yugankXsingh](https://github.com/yugankXsingh)
- Project Link: [https://github.com/yugankXsingh/Anime-wall-Project](https://github.com/yugankXsingh/Anime-wall-Project)

---

### 🎯 Future Enhancements

- [ ] Add character information modals
- [ ] Implement search and filter functionality
- [ ] Add sound effects and background music
- [ ] Create mobile touch gestures
- [ ] Add character categories filter
- [ ] Implement favorites system
- [ ] Add social sharing features

**Made with ❤️ by anime fans, for anime fans**
