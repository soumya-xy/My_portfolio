# Developer Portfolio – soumya-jain-spark

A modern, responsive developer portfolio web application built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui. Showcase your projects, skills, experience, achievements, and contact information in a sleek, single-page app.

## Features

- **Hero Section**: Eye-catching introduction with your name and tagline
- **About Section**: Brief bio and background
- **Projects Section**: Highlight your best work and side projects
- **Experience Section**: Showcase your professional journey
- **Skills Section**: List your technical proficiencies
- **Achievements**: Display hackathons or awards
- **Contact Section**: Easy way for visitors to reach out
- **Portfolio Console**: Interactive sheet for extra details
- **Smooth Scrolling & Section Highlighting**: Enhanced navigation experience
- **Dark/Light Theme Toggle**: User-friendly appearance switch
- **Responsive Design**: Looks great on all devices

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd soumya-jain-spark

# Install dependencies
npm install
```

### Development

```sh
# Start the development server
npm run dev
```

Visit `http://localhost:5173` (or as indicated in your terminal) to view the app.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Customization

- Update content in `src/pages/Index.tsx` and section components under `src/components/sections/`.
- Edit navigation and branding in `src/components/MainNav.tsx`.
- Adjust styles in `tailwind.config.ts` and `src/App.css`.

## Deployment

You can deploy this app to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.) after building:

```sh
npm run build
# Then upload the contents of the 'dist' folder to your host
```

## Credits

- UI components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Animations: [Tailwind CSS](https://tailwindcss.com/docs/animation)

## License

This project is for personal or educational use. Add a LICENSE file if you wish to specify usage terms.
