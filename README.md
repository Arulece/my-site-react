## React Netlify App

Production-ready React application configured with Webpack, SCSS, Jest, and React Testing Library, optimized for deployment on Netlify.

### Tech Stack

- **React**: latest stable (installed via `react`, `react-dom`)
- **Bundler**: Webpack (custom config: `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`)
- **Styles**: SCSS (Sass) with variables, mixins, nesting, Flexbox layout, and strict BEM naming
- **Testing**: Jest + React Testing Library
- **Deployment**: Netlify (`netlify.toml` with SPA-friendly redirects)

### Project Structure

```text
react-netlify-app/
  public/
    index.html
  src/
    components/
      Header/
        Header.jsx
        Header.scss
        Header.test.jsx
    styles/
      _mixins.scss
      _variables.scss
      main.scss
    App.jsx
    index.jsx
    setupTests.js
  webpack.common.js
  webpack.dev.js
  webpack.prod.js
  babel.config.cjs
  jest.config.cjs
  netlify.toml
  package.json
  README.md
```

### Prerequisites

- **Node.js** and **npm**
- Fix npm cache permissions once (required on this machine due to root-owned cache):

```bash
sudo chown -R 503:20 "/Users/arulk/.npm"
```

Adjust UID/GID as appropriate for your user if different.

### Installation

From the project root:

```bash
cd /Users/arulk/Documents/personal/react-netlify-app
npm install
```

> If you see npm cache EACCES errors, re-run the `chown` command above, then retry `npm install`.

### Available Scripts

- **Start dev server** (Webpack dev server on `http://localhost:3000`):

```bash
npm start
```

- **Run tests** (Jest + React Testing Library):

```bash
npm test
```

- **Watch tests**:

```bash
npm run test:watch
```

- **Build for production**:

```bash
npm run build
```

The optimized production bundle is output to the `dist` directory, which Netlify uses as the publish directory.

### Architecture & Conventions

- **Mobile-first**: Layout and typography start from small screens, with enhancements at `768px` and above.
- **Flexbox layout**: Header and layout sections use Flexbox (no CSS Grid).
- **BEM Naming**: All classes follow `Block__Element--Modifier`, e.g.:
  - `header`
  - `header__nav`
  - `header__nav--open`
- **SCSS**:
  - `src/styles/_variables.scss` for colors, spacing, typography, breakpoints
  - `src/styles/_mixins.scss` for reusable Flexbox and media query helpers
  - `src/styles/main.scss` as the global entry imported in `index.jsx`
  - Component-level SCSS (e.g. `Header.scss`) imported directly into the component

### Header Component

- **Location**: `src/components/Header/Header.jsx`
- **Features**:
  - Logo placeholder (`MyLogo`)
  - Navigation links: Home, About, Services, Blog
  - Contact link: `contact@example.com`
  - Mobile-first stacked navigation that collapses behind a toggle button
  - Horizontal navigation on desktop (`min-width: 768px`)
  - Uses Flexbox for alignment and spacing

### Testing

- **Config**:
  - `jest.config.cjs` (uses `babel-jest`, `jest-environment-jsdom`)
  - `src/setupTests.js` (adds `@testing-library/jest-dom`)
- **Sample tests**:
  - `src/components/Header/Header.test.jsx`
    - Verifies header logo and all navigation links render
    - Verifies mobile nav toggles open/closed via the toggle button

Run tests with:

```bash
npm test
```

### Netlify Deployment

This project includes a Netlify configuration file:

- **`netlify.toml`**:
  - **Build command**: `npm run build`
  - **Publish directory**: `dist`
  - **SPA redirect**: All routes (`/*`) redirect to `/index.html` with status `200`

#### Deploy Steps

1. **Push** the project to a Git repository (GitHub, GitLab, etc.).
2. In the Netlify UI:
   - Create a new site from Git.
   - Choose your repository.
   - Set:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
3. Save and deploy.

Netlify will install dependencies, run the build, and serve the files from `dist` based on `netlify.toml`.


