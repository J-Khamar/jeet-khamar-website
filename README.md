# Jeet Khamar - Personal Website

A clean, minimal personal website built with Next.js, inspired by simple, elegant design.

## Features

- **Home Page**: Personal introduction and social links
- **Thoughts**: Personal reflections and life insights
- **Engineering**: Deep-dive technical articles and engineering insights
- **Responsive Design**: Works on all device sizes
- **Clean Typography**: Readable and elegant fonts

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Project Structure

```
├── pages/
│   ├── index.tsx        # Home page
│   ├── thoughts.tsx     # Personal thoughts page
│   ├── engineering.tsx  # Engineering writing page
│   └── _app.tsx         # Next.js app wrapper
├── styles/
│   ├── globals.css      # Global styles
│   ├── Home.module.css  # Home page styles
│   └── Page.module.css  # Thoughts & Engineering page styles
└── package.json
```

## Customization

- Update the content in each page file to reflect your personal information
- Modify the social links in the home page
- Add your own personal thoughts and engineering articles
- Customize colors and typography in the CSS modules

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider of choice.
