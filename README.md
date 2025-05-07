# PDD Documentation Site

This is the official documentation site for Prompt-Driven Development (PDD), a methodology for building sustainable AI-powered applications.

## Features

- Modern, responsive design built with Next.js and Tailwind CSS
- Documentation and blog content written in MDX
- Full-text search (coming soon)
- Dark mode support
- Automatic table of contents generation
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pdd-net.git
cd pdd-net
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## Adding Content

### Documentation

Add new documentation pages in `src/content/docs/`. Each file should include frontmatter:

```md
---
title: Page Title
description: Page description
category: Category Name
published: true
order: 1
---

Content goes here...
```

### Blog Posts

Add new blog posts in `src/content/blog/`. Each file should include frontmatter:

```md
---
title: Post Title
description: Post description
date: YYYY-MM-DD
author: Author Name
published: true
---

Content goes here...
```

## Deployment

This site is configured for deployment on Netlify. Simply connect your GitHub repository to Netlify and it will automatically build and deploy when you push changes.

### Environment Variables

No environment variables are required for basic operation.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
