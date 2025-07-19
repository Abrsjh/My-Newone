# 🏥 MedCenter Excellence - Hospital Portfolio

A stunning, responsive hospital advertisement portfolio frontend built with Vite, React, and TypeScript. This modern web application showcases healthcare services, medical team, facilities, and provides an exceptional user experience for patients and visitors.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with medical-themed color palette
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ High Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Engaging transitions using Framer Motion
- **♿ Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **🔍 SEO Optimized**: Meta tags, Open Graph, and semantic HTML structure
- **💼 Professional Components**: Reusable UI components for scalability

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Forms**: React Hook Form with Yup validation
- **SEO**: React Helmet Async
- **Deployment**: Vercel

## 📁 Project Structure

```
hospital-portfolio/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/        # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # UI components
│   │       ├── ServiceCard.tsx
│   │       └── DoctorCard.tsx
│   ├── data/              # Static data
│   │   └── index.ts
│   ├── pages/             # Page components
│   │   └── Home.tsx
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── theme.ts           # MUI theme configuration
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings (Vite preset should be auto-detected)
   - Click "Deploy"

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

## 🎨 Customization

### Colors & Branding

Edit `src/theme.ts` to customize the color palette:

```typescript
palette: {
  primary: {
    main: '#2E7D9A', // Your primary color
  },
  secondary: {
    main: '#4CAF50', // Your secondary color
  },
}
```

### Content

Update hospital information in `src/data/index.ts`:

```typescript
export const hospitalInfo: HospitalInfo = {
  name: "Your Hospital Name",
  tagline: "Your Tagline",
  description: "Your description",
  // ... other details
};
```

## 📊 Performance Features

- **Code Splitting**: Automatic chunking for optimal loading
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Analysis**: Optimized vendor chunking
- **SEO**: Meta tags and Open Graph support

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@medcenterexcellence.com
- 📞 Phone: +1 (555) 123-4567
- 🌐 Website: [medcenter-excellence.vercel.app](https://medcenter-excellence.vercel.app)

---

<div align="center">
  <strong>Built with ❤️ for healthcare excellence</strong>
</div>
