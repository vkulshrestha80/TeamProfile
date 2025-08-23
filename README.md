# Basic Test React

A simple React app bootstrapped with Vite, using React Router and a small component structure.

## Features
- Vite dev server
- React Router (Home, Teams, About)
- Team Profile grid with images and like button
- Figtree Google Font

## Requirements
- Node.js 18+ and npm

## Install
```bash
npm install
# If needed:
# npm install react react-dom
# npm install -D @vitejs/plugin-react
```

## Run
```bash
npm start
```
Open http://localhost:3000

## Routes
- / → Home
- /teams → Team Profile
- /about → About

## Data
Team members are stored in:
- data/teamMembers.json

Images use randomuser.me placeholders. Add/edit members in that JSON.

## Structure
```
components/
  About/
  Home/
  Menu/
  TeamMember/
  TeamProfile/
data/
  teamMembers.json
index.html
index.jsx
vite.config.js
```

## Notes
- Font is added via a link tag in index.html (Figtree).
- Ensure vite.config.js includes the React plugin:
  ```js
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  export default defineConfig({ plugins: [react()], server: { port: 3000 } });
  ```

## Troubleshooting
- Missing plugin: npm install -D @vitejs/plugin-react
- Missing React: npm install react react-dom
- Router not working: ensure <BrowserRouter> wraps your Routes in index.jsx

## License