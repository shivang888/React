# EShop E-Commerce Project

A complete e-commerce website built with React, using Vite, Tailwind CSS, React Router DOM, Axios, and JSON Server.

## Features

- **User Authentication**

  - Login and signup functionality
  - Protected routes for authenticated users
  - Admin role with special privileges

- **Product Management (Admin)**

  - Add, update, and delete products
  - Dashboard to manage all products

- **Shopping Experience**
  - Browse products
  - Add products to cart
  - Manage cart items (increase/decrease quantity, remove)
  - Checkout process

## Tech Stack

- React (Vite)
- Tailwind CSS for styling
- React Router DOM for navigation
- Axios for API calls
- JSON Server as a mock backend

## Getting Started

1. **Clone the repository**

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start the JSON Server** (in one terminal)

   ```
   npm run server
   ```

4. **Start the React development server** (in another terminal)

   ```
   npm run dev
   ```

5. **Open your browser** at http://localhost:5173

## Default Users

- **Admin User**
  - Email: admin@example.com
  - Password: admin123

## Project Structure

- `/src`
  - `/components` - Reusable UI components
  - `/context` - React context for state management
  - `/pages` - Application pages
    - `/admin` - Admin-specific pages
  - `/services` - API service functions

## License

This project is for learning purposes only.
