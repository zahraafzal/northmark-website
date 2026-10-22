# NORTHMARK - Premium Men's Apparel E-commerce Website

A modern, premium e-commerce website for men's streetwear apparel with a dark, minimal aesthetic.

## 📁 Project Structure

```
monarch-website/
├── index.html          # Homepage
├── product.html        # Product detail page (to be added)
├── shop.html           # Shop/collection page (to be added)
├── cart.html           # Shopping cart (to be added)
├── about.html          # About/Our Story (to be added)
├── contact.html        # Contact page (to be added)
├── css/
│   └── style.css       # Main stylesheet (organized & commented)
├── js/
│   └── main.js         # Main JavaScript (organized & commented)
└── images/             # Product & brand images
```

## 🎨 Design Features

- **Dark, Masculine Aesthetic** - Premium streetwear look
- **Document-Based Color Palette:**
  - Primary Black: #0B0B0B
  - Varsity Gold: #C9A227
  - Warm Ivory: #F4F1EA
  - Signal Red: #C8102E
- **Fully Responsive** - Mobile-first design
- **Dropdown Navigation** - Collections and categories
- **Mobile Menu** - Slide-in navigation for mobile devices

## ⚡ Features

### Implemented:
- ✅ Homepage with hero section
- ✅ Navigation with dropdowns
- ✅ Mobile responsive menu
- ✅ Product grid with hover effects
- ✅ Collection cards
- ✅ Add to cart functionality
- ✅ Newsletter signup
- ✅ Footer with links

### To Be Added:
- ⏳ Product detail page
- ⏳ Shopping cart page
- ⏳ Shop/collection page with filters
- ⏳ About page
- ⏳ Contact page with form
- ⏳ Search functionality
- ⏳ User account pages

## 🚀 Getting Started

1. **Open the project:**
   - Simply open `index.html` in a web browser
   - No build process or dependencies required

2. **For development:**
   - Use a local server (optional but recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
   - Then open `http://localhost:8000`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Requirements Document

This website is built according to the "Men's Apparel E-commerce Website Requirements Document v0.1" which specifies:

- Premium quality, dark streetwear aesthetic
- Worldwide shipping capability
- 14-day return policy
- Multi-currency support (to be implemented)
- Mobile-first responsive design
- SEO optimization
- WCAG AA accessibility compliance

## 📝 Code Organization

### CSS (`css/style.css`)
- Organized by sections with clear comments
- Uses CSS custom properties (variables)
- BEM-like naming convention
- Mobile-first responsive design
- Documented sections:
  1. Base & Reset
  2. Typography
  3. Layout & Grid
  4. Header & Navigation
  5. Hero Section
  6. Features
  7. Products
  8. Collections
  9. Story Section
  10. Newsletter
  11. Footer
  12. Responsive

### JavaScript (`js/main.js`)
- Modular organization
- Clear function naming
- Commented sections:
  1. Mobile Menu
  2. Cart Functionality
  3. Newsletter Form
  4. Smooth Scroll
  5. Product Interactions

## 🔧 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary-black: #0B0B0B;
    --color-varsity-gold: #C9A227;
    /* ... etc */
}
```

### Content
- Update text directly in HTML files
- Replace images with your product photos
- Modify navigation links in header section

### Fonts
Currently using system fonts. To add custom fonts:
1. Add font files to a `fonts/` folder
2. Add `@font-face` rules in CSS
3. Update `--font-sans` and `--font-serif` variables

## 📄 License

Private/Confidential - Initial Draft v0.1

## 📞 Support

For questions or issues, contact the development team.

---

**Version:** 1.0  
**Last Updated:** October 2026  
**Status:** In Development
