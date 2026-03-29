# Mini Ecommerce App

A full‑stack eCommerce web application built with React (hooks + Context API) for the frontend and Node.js + Express + MongoDB (Mongoose) for the backend. The app provides user and admin experiences including authentication (JWT in HTTP-only cookies), product listing, search, filters, add-to-cart, and an admin dashboard for product management. The backend follows an MVC structure (routes, controllers, models) and exposes RESTful API endpoints consumed by the React frontend.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend setup](#backend-setup)
  - [Frontend setup](#frontend-setup)
- [Environment Variables (.env example)](#environment-variables-env-example)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## Features

User-facing

- User registration and login with JWT stored in HTTP-only cookies
- Protected user routes (profile, cart, checkout)
- Product listing, product details, search and server-side filtering
- Add to cart and view cart functionality
- Toast notifications for user feedback
- Image URLs support for product images

Admin-facing

- Role-based access control (Admin vs User)
- Admin dashboard to create, update and delete products
- Protected admin routes both on frontend and backend

Shared

- RESTful API
- Server-side validation and global error handling
- CORS support for frontend <-> backend communication

---

## Tech Stack

- Frontend: React.js (Functional components, Hooks, Context API)
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JSON Web Tokens (JWT) stored in HTTP-only cookies
- Form parsing: express-formidable (for product images / multipart data)
- Utilities: dotenv, morgan, cookie-parser, cors
- Dev tools: nodemon (optional), Postman / Insomnia for API testing

---

## Installation

Prerequisites:

- Node.js (v16+ recommended)
- npm (or yarn)
- MongoDB (local instance or cloud - MongoDB Atlas)

Clone the repo:

```bash
git clone https://github.com/premasagarbontula/mini-ecommerce-app.git
cd "Mini Ecommerce App"
```

### Backend setup

```bash
# from project root
cd backend || .   # if backend is root, stay in root
npm install
# copy example env and edit
cp .env.example .env
# start server
npm start          # production start
# or for development (if available)
npm run dev
```

### Frontend setup (development)

```bash
cd client
npm install
npm start          # React dev server on http://localhost:3000
```

### Frontend production build (served by Express)

```bash
cd client
npm install
npm run build
# move back to project root and start backend to serve build
cd ..
npm start
# Visit http://localhost:8080 (or your BACKEND PORT)
```

Notes:

- Backend serves the React build from `client/build` when you run a production server.
- Use Postman or Insomnia to test API endpoints.

---

## Environment Variables (.env example)

Create a `.env` file at project root and set values:

```env
# filepath: .env.example
PORT=8080
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

Adjust values for production (e.g., MongoDB Atlas connection, stronger JWT_SECRET).

---

## API Endpoints

Base path: `/api/v1`

Authentication

- POST /api/v1/auth/register — Register a new user
- POST /api/v1/auth/login — Log in a user
- POST /api/v1/auth/forgot-password — Request password reset
- GET /api/v1/auth/user-auth — Verify user token (protected)
- GET /api/v1/auth/admin-auth — Verify admin token (protected + admin)

Product

- POST /api/v1/product/create-product — Create product (admin only, multipart/form-data)
- PUT /api/v1/product/update-product/:pid — Update product by ID (admin only, multipart/form-data)
- GET /api/v1/product/get-products — Get all products (paginated if implemented)
- GET /api/v1/product/get-product/:slug — Get single product by slug
- DELETE /api/v1/product/delete-product/:pid — Delete product by ID (admin only)
- POST /api/v1/product/product-filters — Filter products (server-side filtering)
- GET /api/v1/product/search/:keyword — Search products by keyword

Authentication uses JWT stored in HTTP-only cookies; protected routes validate JWT and role.

---

## Folder Structure

Backend (server)

```
Mini Ecommerce App/
├── controllers/        # Request handlers / business logic
│   ├── authController.js
│   └── productController.js
├── models/             # Mongoose schemas
│   ├── userModel.js
│   └── productModel.js
├── routes/             # Express route definitions
│   ├── authRoute.js
│   └── productRoute.js
├── middlewares/        # Auth, error handling, etc.
│   └── authMiddleware.js
├── helpers/            # Small utilities
│   └── authHelper.js
├── config/             # DB connection, other configs
├── client/             # React app (served statically in production)
├── app.js               # Express app entry
└── package.json
```

Frontend (client/src)

```
client/
├── public/
├── src/
│   ├── components/     # Reusable UI components & layout
│   ├── context/        # React Contexts: auth, cart, search
│   ├── pages/          # Page views (Home, Product, Cart, Admin)
│   ├── styles/
│   ├── App.js
│   └── index.js
└── package.json
```

---

## Screenshots

Placeholders — replace with real screenshots in /docs or repo root.

- Home / Product listing
  ![Home Placeholder](./src/assets/product-listing.png.png)
- Product details
  ![Product Placeholder](./screenshots/product.png)
- Cart
  ![Cart Placeholder](./screenshots/cart.png)
- Admin dashboard (product management)
  ![Admin Placeholder](./screenshots/admin.png)

---

## Future Improvements

- Add product categories, tags, and pagination metadata
- User order management and checkout/payment integration (Stripe / PayPal)
- Product image uploads to cloud storage (AWS S3 / Cloudinary)
- Unit and integration tests (Jest, Supertest)
- CI/CD pipeline and deployment scripts
- Role management UI and audit logging
- Improve security headers (helmet) and rate limiting

---

## Author

Prema Sagar B  
Email: prem.b.sagar@gmail.com  
GitHub: https://github.com/premasagarbontula

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

````// filepath: d:\Company Assignments\Mini Ecommerce App\README.md
# Mini Ecommerce App

A full‑stack eCommerce web application built with React (hooks + Context API) for the frontend and Node.js + Express + MongoDB (Mongoose) for the backend. The app provides user and admin experiences including authentication (JWT in HTTP-only cookies), product listing, search, filters, add-to-cart, and an admin dashboard for product management. The backend follows an MVC structure (routes, controllers, models) and exposes RESTful API endpoints consumed by the React frontend.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend setup](#backend-setup)
  - [Frontend setup](#frontend-setup)
- [Environment Variables (.env example)](#environment-variables-env-example)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## Features

User-facing
- User registration and login with JWT stored in HTTP-only cookies
- Protected user routes (profile, cart, checkout)
- Product listing, product details, search and server-side filtering
- Add to cart and view cart functionality
- Toast notifications for user feedback
- Image URLs support for product images

Admin-facing
- Role-based access control (Admin vs User)
- Admin dashboard to create, update and delete products
- Protected admin routes both on frontend and backend

Shared
- RESTful API
- Server-side validation and global error handling
- CORS support for frontend <-> backend communication

---

## Tech Stack

- Frontend: React.js (Functional components, Hooks, Context API)
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JSON Web Tokens (JWT) stored in HTTP-only cookies
- Form parsing: express-formidable (for product images / multipart data)
- Utilities: dotenv, morgan, cookie-parser, cors
- Dev tools: nodemon (optional), Postman / Insomnia for API testing

---

## Installation

Prerequisites:
- Node.js (v16+ recommended)
- npm (or yarn)
- MongoDB (local instance or cloud - MongoDB Atlas)

Clone the repo:
```bash
git clone https://github.com/your-username/mini-ecommerce-app.git
cd "Mini Ecommerce App"
````

### Backend setup

```bash
# from project root
cd backend || .   # if backend is root, stay in root
npm install
# copy example env and edit
cp .env.example .env
# start server
npm start          # production start
# or for development (if available)
npm run dev
```

### Frontend setup (development)

```bash
cd client
npm install
npm start          # React dev server on http://localhost:3000
```

### Frontend production build (served by Express)

```bash
cd client
npm install
npm run build
# move back to project root and start backend to serve build
cd ..
npm start
# Visit http://localhost:8080 (or your BACKEND PORT)
```

Notes:

- Backend serves the React build from `client/build` when you run a production server.
- Use Postman or Insomnia to test API endpoints.

---

## Environment Variables (.env example)

Create a `.env` file at project root (copy from `.env.example`) and set values:

```env
# filepath: .env.example
PORT=8080
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
COOKIE_EXPIRE=7d
NODE_ENV=development
```

Adjust values for production (e.g., MongoDB Atlas connection, stronger JWT_SECRET).

---

## API Endpoints

Base path: `/api/v1`

Authentication

- POST /api/v1/auth/register — Register a new user
- POST /api/v1/auth/login — Log in a user
- POST /api/v1/auth/forgot-password — Request password reset
- GET /api/v1/auth/user-auth — Verify user token (protected)
- GET /api/v1/auth/admin-auth — Verify admin token (protected + admin)
- PUT /api/v1/auth/make-admin/:id — Promote a user to admin (admin only)

Product

- POST /api/v1/product/create-product — Create product (admin only, multipart/form-data)
- PUT /api/v1/product/update-product/:pid — Update product by ID (admin only, multipart/form-data)
- GET /api/v1/product/get-products — Get all products (paginated if implemented)
- GET /api/v1/product/get-product/:slug — Get single product by slug
- DELETE /api/v1/product/delete-product/:pid — Delete product by ID (admin only)
- POST /api/v1/product/product-filters — Filter products (server-side filtering)
- GET /api/v1/product/search/:keyword — Search products by keyword

Authentication uses JWT stored in HTTP-only cookies; protected routes validate JWT and role.

---

## Folder Structure

Backend (server)

```
Mini Ecommerce App/
├── controllers/        # Request handlers / business logic
│   ├── authController.js
│   └── productController.js
├── models/             # Mongoose schemas
│   ├── userModel.js
│   └── productModel.js
├── routes/             # Express route definitions
│   ├── authRoute.js
│   └── productRoute.js
├── middlewares/        # Auth, error handling, etc.
│   └── authMiddleware.js
├── helpers/            # Small utilities
│   └── authHelper.js
├── config/             # DB connection, other configs
├── client/             # React app (served statically in production)
├── app.js               # Express app entry
└── package.json
```

Frontend (client/src)

```
client/
├── public/
├── src/
│   ├── components/     # Reusable UI components & layout
│   ├── context/        # React Contexts: auth, cart, search
│   ├── pages/          # Page views (Home, Product, Cart, Admin)
│   ├── styles/
│   ├── App.js
│   └── index.js
└── package.json
```

---

## Screenshots

Placeholders — replace with real screenshots in /docs or repo root.

- Home / Product listing
  ![Home Placeholder](./screenshots/home.png)
- Product details
  ![Product Placeholder](./screenshots/product.png)
- Cart
  ![Cart Placeholder](./screenshots/cart.png)
- Admin dashboard (product management)
  ![Admin Placeholder](./screenshots/admin.png)

---

## Future Improvements

- Add product categories, tags, and pagination metadata
- User order management and checkout/payment integration (Stripe / PayPal)
- Product image uploads to cloud storage (AWS S3 / Cloudinary)
- Unit and integration tests (Jest, Supertest)
- CI/CD pipeline and deployment scripts
- Role management UI and audit logging
- Improve security headers (helmet) and rate limiting

---

## Author

Prema Sagar B  
Email: prem.b.sagar@gmail.com  
GitHub: https://github.com/premasagarbontula

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
