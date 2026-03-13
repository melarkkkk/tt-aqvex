# Product List App

This is a React + TypeScript + Vite project that displays a list of products fetched from a remote API. It includes search by name, sorting by popularity or price, reversing order, and pagination with responsive behavior.

## Features

- Fetch products from API and handle loading/errors
- Search products by name
- Sort products by popularity or price
- Reverse product order
- Pagination with dynamic items per page based on screen size
- Responsive layout
- Modular component structure with SCSS modules

## Tech Stack

- **React** + **TypeScript**
- **Vite** for bundling
- **SCSS modules** for component styling
- Functional components + React hooks
- Simple state management via `useState`

## File Structure
src/
├─ App.tsx
├─ components/
│ ├─ Header, Footer, Page, Pagination
│ ├─ ProductList, ProductCard, ProductControls
│ ├─ SortDropdown, StarRating
├─ styles/ (global.scss, mixins, variables)
├─ types/Product.ts


## How to Run

1. Clone the repository
```bash
git clone https://github.com/your-username/tt-aqvex.git
```

2. Navigate to the project folder
```bash
cd tt-aqvex
```

3. Install dependencies
```bash
npm install
```
4. Start the development server
```bash
npm run dev
```

5. Open http://localhost:5173
 in your browser.

## Future Improvements

- Sync filters and sorting with URL parameters
- Add React Router and replace pagination buttons with links
- Create a context to centralize state management
- Connect paid fonts from the design mockup
- Possible performance optimizations for large product lists
- Show loading skeletons or spinners while fetching products
- Display clear error messages if API fetch fails

This is an initial version. More polish and features can be added with additional time.