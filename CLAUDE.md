# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
My name is Cormac O Connnor
This is a **Netherlands-focused eCommerce platform** for a clothing artist, built as a modern React 19 + Vite 7 application optimized for 2025 best practices. The site follows a simple, clean architecture similar to the developer's portfolio project style.

**Key Business Context:**
- Target market: Netherlands (VAT compliance required at 21%)
- Product focus: Artistic clothing designs (t-shirts, hoodies, tank tops, polos)
- Payment integration: Designed for Mollie (Netherlands-based) and Stripe
- Deployment target: AWS (S3 + CloudFront + API Gateway architecture)

## Development Commands

```bash
# Development server (runs on http://localhost:5173)
npm run dev

# Production build (outputs to ./dist/)
npm run build

# Production preview
npm run preview

# Code linting
npm run lint
```

**Note:** This project uses **JSX only** (no TypeScript). All TypeScript dependencies and configs have been intentionally removed for simplicity.

## Architecture Overview

### Application Structure
The app follows a **component-as-pages** pattern where page components live in `src/components/` alongside UI components:

```
src/
├── components/          # Both pages and UI components
│   ├── HomePage.jsx     # Landing page with hero + featured products
│   ├── ProductsPage.jsx # Product catalog with filtering/search
│   ├── CartPage.jsx     # Shopping cart with VAT calculation
│   ├── Header.jsx       # Navigation with cart counter
│   └── Footer.jsx       # Footer with Netherlands-specific info
├── data/               # Static data and sample content
│   └── products.js     # Product catalog + categories
├── styles/            # Modular CSS architecture
│   ├── index.css      # Base styles + CSS custom properties
│   ├── components.css # Header, footer, UI component styles
│   └── pages.css      # Page-specific styles
└── App.jsx           # Main app with React Router setup
```

### State Management Philosophy
**Simple React state only** - no external state management libraries:
- Shopping cart: Local state with localStorage persistence (to be implemented)
- Product filtering: Component-level useState
- Form handling: React state + simple validation

### Styling System
**Custom CSS with modern practices:**
- CSS custom properties for theming (defined in `styles/index.css`)
- Semantic class names (not utility-based)
- Responsive design with standard media queries
- Clean import order: Base → Components → Pages

### Router Configuration
Uses React Router v7 (latest) with simple flat routing structure. All routes defined in `App.jsx` with placeholder pages for future development:
- `/` - HomePage
- `/products` - ProductsPage (functional)
- `/cart` - CartPage (functional)
- `/collections`, `/artist`, `/about`, `/wishlist`, `/account` - Placeholder pages

## Netherlands eCommerce Requirements

When implementing eCommerce features, ensure compliance with Dutch regulations:

1. **VAT Handling:** 21% standard rate for clothing
2. **Distance Selling:** €10,000 threshold for EU cross-border sales
3. **Payment Methods:** iDEAL support is essential for Dutch customers
4. **Consumer Protection:** Return/refund policies must comply with EU consumer law

## Product Data Structure

Products follow this schema (see `src/data/products.js`):
```javascript
{
  id: string,
  name: string,
  description: string,
  price: number,
  image: string,           // Single image URL (Unsplash placeholders)
  category: string,        // 't-shirts', 'hoodies', 'tank-tops', 'polo-shirts'
  sizes: string[],         // ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  colors: string[],        // Color names
  inStock: boolean,
  stockCount: number,
  featured: boolean,       // For homepage display
  tags: string[]          // For search/filtering
}
```

## Vite Configuration

Optimized for 2025 with:
- Manual chunk splitting (vendor/router separation)
- Host exposure for network access
- No sourcemaps in production
- React plugin with fast refresh

## AWS Infrastructure (shop.cormacoconnor.net)

**Production Deployment:** https://shop.cormacoconnor.net

### Current AWS Resources
- **SSL Certificate:** `arn:aws:acm:us-east-1:756497581247:certificate/be00532c-f704-4269-abff-ed494a39d839`
- **S3 Bucket:** `shop-cormacoconnor-net` (eu-north-1)
- **CloudFront Distribution:** `E3M9R3VIPZSDN0`
- **CloudFront Domain:** `d2duxgpsor3vay.cloudfront.net`
- **Origin Access Control:** `E346WZQFVBC4VP` (OAC - modern security)
- **Route53 Hosted Zone:** `Z0031325X8MSLGEZWNHM` (cormacoconnor.net)

### Security Configuration (2025 Best Practices)
- **Individual SSL Certificate:** shop.cormacoconnor.net (not wildcard - enhanced security)
- **Origin Access Control (OAC):** Replaces deprecated OAI, supports all AWS regions
- **S3 Bucket Policy:** CloudFront service principal with source ARN condition
- **Public Access:** Completely blocked on S3, access only via CloudFront

### Caching Strategy
- **Static Assets (.js/.css):** `Cache-Control: max-age=31536000,public,immutable`
- **HTML Files:** `Cache-Control: no-cache`
- **Vite Build:** Automatic content hashing for cache busting
- **CloudFront:** Custom error responses (403/404 → index.html) for SPA routing

### CI/CD Pipeline (GitHub Actions)
**Automated Deployment:** Triggers on push/merge to `master` branch

**Workflow File:** `.github/workflows/deploy.yml`
- Install dependencies (npm ci)
- Run linting (npm run lint)
- Run tests (npm run test:run)
- Build application (npm run build)
- Deploy static assets with long-term cache headers
- Deploy HTML with no-cache headers
- CloudFront cache invalidation

**IAM User:** `github-actions-deploy` (minimal permissions)
- Policy: `GitHubActionsDeployPolicy`
- Access: S3 bucket + CloudFront invalidation only

**GitHub Secrets Required:**
- `AWS_ACCESS_KEY_ID`: `AKIA3AIWFAS77EI4URGH`
- `AWS_SECRET_ACCESS_KEY`: [configured in repo settings]

### Manual Deployment Commands
```bash
# Manual build and deploy (if needed)
npm run build
aws s3 sync dist/ s3://shop-cormacoconnor-net --cache-control "max-age=31536000,public,immutable" --exclude "*.html"
aws s3 sync dist/ s3://shop-cormacoconnor-net --cache-control "no-cache" --include "*.html"
aws cloudfront create-invalidation --distribution-id E3M9R3VIPZSDN0 --paths "/*"
```

### Cost Estimate
- **S3:** ~$0.50/month (5GB storage + requests)
- **CloudFront:** ~$1.00/month (1GB transfer)
- **ACM Certificate:** Free
- **Route53:** ~$0.50/month (hosted zone queries)
- **Total:** ~$2/month

### Migration Path
To migrate to a different domain later:
1. Request new ACM certificate for target domain
2. Update CloudFront distribution aliases
3. Update Route53 DNS records
4. No S3 or infrastructure changes needed

## Future Implementation Priorities

Based on the original plan, these areas need development:
1. **Payment Integration:** Mollie (primary) + Stripe (international)
2. **User Authentication:** AWS Cognito integration
3. **Cart Persistence:** localStorage or backend integration
4. **Product Management:** Dynamic catalog (replace static data)
5. **Wishlist Feature:** User-specific saved items
6. **Artist Portfolio:** Showcase section for the clothing artist

## Development Notes

- **Node.js:** Requires v20.19+ (currently running v24.8.0)
- **Image Assets:** Currently using Unsplash placeholders
- **Emoji Icons:** Used instead of icon libraries for simplicity
- **Build Output:** Optimized chunks with ~1.6s build time
- **CSS Architecture:** Modular imports prevent PostCSS warnings

## Code Style Guidelines

- **Emoji Usage:** Avoid excessive emoji usage in code and comments. Only use emojis if explicitly requested by the user
- **Testing:** Tests should avoid emojis where possible and focus on functional text content
- **JSX Only:** This project intentionally uses JSX instead of TypeScript for simplicity
- **Linting:** ESLint configured for React/JSX with modern standards (ES2020+)

## Quality Assurance

### Linting Commands
```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Automatically fix linting issues where possible
```

### Testing Commands
```bash
npm run test          # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:coverage # Run tests with coverage report
```

### Pre-Deployment Checklist
1. Run `npm run lint` - ensure no linting errors
2. Run `npm run test:run` - ensure all tests pass
3. Run `npm run build` - ensure build succeeds
4. Manual testing of key functionality