# JEOLAD Portfolio

A personal portfolio website built with React and styled-components. This repo contains the code for the first version of the site, with reusable components, project/experience sections, and responsive styling.

## Overview

- **Project:** Personal portfolio website for Jesse Adesina
- **Purpose:** Showcase projects, skills, work experience, and contact information
- **Stack:** React, Styled Components, JavaScript, Netlify deployment

## Key folders

- `src/` - main application source code
  - `components/` - page and layout components like `hero`, `navbar`, `projects`, and `footer`
  - `content/` - structured data for companies, project list, skills, and technologies
  - `hooks/` - reusable hooks for loading state, navbar state, and page behavior
  - `styles/` - styled component definitions and theme variables
- `public/` - static assets and HTML template

## Notable files

- `src/App.js` - root React component with top-level layout
- `src/index.js` - React entry point
- `src/styles/GlobalStyle.js` - global styling and CSS reset
- `src/components/navbar.js` - site navigation, responsive menu handling
- `src/components/projects.js` and `src/content/projectlist.js` - project display logic and content data

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open the local app in the browser at `http://localhost:3000`

## Build and deploy

- Build for production:
  ```bash
  npm run build
  ```
- This project can be deployed to Netlify or any static hosting provider.

## Future notes

- Keep content data in `src/content/` for easy updates to projects, companies, skills, and technologies.
- Add new sections as standalone components inside `src/components/` and style them in `src/styles/`.
- Reuse hooks from `src/hooks/` when adding interactive site behavior.
- If adding more pages, keep routing simple and maintain the single-page layout if possible.

## Contact

This README is intended as a quick refresher for returning to the code later. Update it if the site structure changes significantly.
