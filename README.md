# Major Idris Political Website

A modern, responsive political website for Major Idris built with Next.js, Tailwind CSS, and Framer Motion. The site showcases Major Idris's vision, The Walk Movement, and community initiatives for Nyali constituency.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Static Export**: Ready for GitHub Pages deployment
- **Multi-language Ready**: English with Swahili placeholders

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
- **Deployment**: GitHub Pages (Static Export)

## 📁 Project Structure

```
major-idris-website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── news/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── vision/
│   │   └── page.tsx
│   ├── walk-movement/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   └── (static assets)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: #2dabe1 (Blue)
- **Secondary**: #ec1c26 (Red)
- **Accent**: #64748b (Gray)
- **Background**: #ffffff (White)
- **Text**: #000000 (Black)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 📱 Pages

1. **Home** - Hero banner with slogan and The Walk Movement highlights
2. **About** - Biography and achievements of Major Idris
3. **Vision** - Five pillars of progress (Healthcare, Youth, Infrastructure, Governance, Environment)
4. **The Walk Movement** - History, partnerships, and SDG alignment
5. **Gallery** - Responsive image grid with lightbox
6. **News** - Blog posts with categories and individual post pages
7. **Contact** - Contact form, information, and WhatsApp integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/major-idris-website.git
   cd major-idris-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

1. **Build the static site**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Export static files**
   ```bash
   npm run export
   # or
   yarn export
   ```

The static files will be generated in the `out` directory.

## 🌐 Deployment to GitHub Pages

### Method 1: GitHub Actions (Recommended)

1. **Create a GitHub repository** and push your code

2. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   concurrency:
     group: "pages"
     cancel-in-progress: false
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Export
           run: npm run export
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out
   
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

### Method 2: Manual Deployment

1. **Build and export the site**
   ```bash
   npm run build
   npm run export
   ```

2. **Push to gh-pages branch**
   ```bash
   # Install gh-pages if not already installed
   npm install --save-dev gh-pages
   
   # Add deploy script to package.json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   
   # Deploy
   npm run deploy
   ```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization

1. **Update content**: Edit the content in each page component
2. **Change colors**: Modify the color scheme in `tailwind.config.js`
3. **Add pages**: Create new pages in the `app` directory
4. **Update images**: Replace images in the `public` directory or update URLs

## 📊 SEO Features

- Meta tags and Open Graph data
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Image optimization
- Mobile-first responsive design

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Alt text for images
- Color contrast compliance

## 🌍 Multi-language Support

The site is prepared for multi-language support with:
- English content (current)
- Swahili placeholders ready for translation
- Language switcher component structure

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interface
- Optimized images for different screen sizes
- Fast loading on mobile networks

## 🔍 Performance

- Static site generation for fast loading
- Image optimization with Next.js
- Minimal JavaScript bundle
- CSS purging with Tailwind
- Lazy loading for images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions:
- Email: info@majoridris.com
- Phone: +254 700 000 000
- Website: [major-idris.com](https://major-idris.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons
- The community for inspiration and support

---

**Built with ❤️ for Major Idris and the Nyali community**
