<div align="center">
  <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=150&h=150&q=80" alt="Lumière Logo" width="120" style="border-radius: 50%; border: 4px solid #C59D5F;" />
  
  # Lumière Cafe Experience

  **An elegant, high-performance web application designed for a premium artisanal coffee brand.**

  [![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

  <br />

  [**View Live Demo**](https://cafe-website-demo.vercel.app/) • 
  [**Report Bug**](https://github.com/dhanush200322/cafe-website/issues) • 
  [**Request Feature**](https://github.com/dhanush200322/cafe-website/issues)
</div>

---

## ✦ Project Overview

**Lumière Cafe** is a production-ready frontend architecture engineered to deliver a luxury, immersive digital experience. Built entirely without heavy animation libraries like Framer Motion, it relies exclusively on heavily optimized, native CSS keyframes and Intersection Observers to achieve buttery-smooth 60fps micro-interactions.

---

## ✦ Showcase

<div align="center">
  <table>
    <tr>
      <td align="center"><b>Hero Section</b></td>
      <td align="center"><b>Menu Experience</b></td>
    </tr>
    <tr>
      <td><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80" alt="Hero Interface" /></td>
      <td><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" alt="Menu Interface" /></td>
    </tr>
  </table>
</div>

---

## ✦ Core Features

| Feature | Description | Technical Implementation |
| :--- | :--- | :--- |
| **Glassmorphism UI** | Premium translucent navigation and card overlays. | `backdrop-blur-md` alongside precision opacity scales. |
| **Zero-Dependency Animations** | Cinematic scroll reveals and Ken Burns zoom effects. | Intersection Observer API + Custom Tailwind Keyframes. |
| **Robust Error Handling** | Zero layout shifts during network throttling. | React Synthetic `onError` events with persistent fallbacks. |
| **Strict Form Validation** | Real-time, accessible form validation with haptic visual feedback. | Pure React State paired with `animate-shake`. |

---

## ✦ Technical Architecture

### ⚡ Technology Stack
- **Core:** React 18, DOM Manipulation via Refs
- **Build Tool:** Vite (ESBuild)
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v6
- **Iconography:** Lucide React

### 📂 Directory Structure
```text
src/
├── assets/           # Static local assets (SVGs, core images)
├── components/
│   └── common/       # Reusable atomic UI (Button, Card, SectionHeader)
├── data/             # JSON-structured constants (Gallery & Menu Data)
├── pages/            # Core routing views (Home, About, Menu, Contact)
├── styles/           # Global Tailwind directives & configurations
├── utils/            # Shared logic (useScrollReveal Hook)
└── main.jsx          # React DOM mounting and router configuration
```

---

## ✦ Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhanush200322/cafe-website.git
   cd cafe-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   > The application will automatically open at `http://localhost:5173`

4. **Production Build**
   ```bash
   npm run build
   ```

---

## ✦ Engineering Standards

### 🏎️ Performance
The application is aggressively optimized to maintain a `< 300kB` JavaScript bundle payload. Images are strictly lazy-loaded below the fold, resulting in perfect Core Web Vitals on mobile and desktop environments.

### 📱 Responsive Design
The UI architecture utilizes a fluid grid system breaking natively at `375px`, `768px`, `1024px`, and `1536px` to ensure visual perfection across all mobile, tablet, and ultrawide interfaces.

### ♿ Accessibility (a11y)
Semantic HTML5 tags (`<article>`, `<nav>`, `<main>`) form the structure. All interactive elements possess explicit `aria-labels`, `aria-describedby` error bindings, and high-contrast focus rings for keyboard navigation.

---

## ✦ Roadmap & Future Improvements

- [ ] **E-Commerce Integration:** Headless Shopify or Stripe integration for bean purchases.
- [ ] **Headless CMS:** Sanity.io implementation for dynamic menu curation.
- [ ] **Table Reservations:** Supabase/PostgreSQL backend for booking tables.
- [ ] **Internationalization:** i18next integration for FR/EN language toggling.

---

## ✦ Author

**Dhanush**
- GitHub: [@dhanush200322](https://github.com/dhanush200322)

---

## ✦ License

This project is licensed under the **MIT License**. See the `LICENSE` file for full documentation.

<br />

<div align="center">
  <i>Designed and engineered with passion.</i>
</div>
