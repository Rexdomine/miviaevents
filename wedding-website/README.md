# Luxe Nigeria - Luxury Wedding Planning Platform

## 📌 Project Overview
Luxe Nigeria is a bespoke luxury wedding planning web application built for a premium clientele. The platform showcases editorial-style portfolios, grand event services, and facilitates client consultations.

## 🛠 Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Deployment:** Render (Auto-deploys via `main` branch)

## 🏗 Architecture & Component Structure
This project is built with scalability in mind, using highly modular React components.

### Global Layout (`src/components/layout/`)
* `Navbar.tsx`: Sticky global header with mobile-responsive menu, Glassmorphism UI, and active path routing.
* `Footer.tsx`: 4-column informational footer.

### Page Components (`src/components/home/` & `src/app/contact/`)
* `Hero.tsx`: Dynamic full-screen landing section.
* `BrandPositioning.tsx`: Editorial text section.
* `ServicesGrid.tsx`: 3-column interactive services display.
* `PortfolioPreview.tsx`: Masonry-style image grid for past events.
* `ContactForm.tsx`: Custom inquiry form integrated with Formspree for direct client email routing.

### Reusable UI (`src/components/ui/`)
* `Section.tsx`: Standardized padding and margin wrapper for consistent vertical rhythm across all future pages.

## 🎨 Design System
Global tokens are configured inside `tailwind.config.ts`:
* **Typography:** `Newsreader` (Serif) for an editorial feel.
* **Colors:**
  * Primary Gold: `#eebd2b`
  * Background Light: `#f8f7f6`
  * Background Dark: `#221d10`
  * Text Dark: `#1b180d`

## 🚀 Local Development
To run this project locally:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server on `localhost:3000`.

---
*Documentation updated iteratively as new features are merged.*
