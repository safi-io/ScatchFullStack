# Scatch - Bag E-Commerce Website

Scatch is a full-stack e-commerce platform designed for selling bags. The website is built using the MERN stack (MongoDB, Express.js, Node.js) with EJS as the templating engine instead of React. The project includes essential e-commerce functionalities such as user authentication, authorization, product management, and a shopping cart.

## Features

- **User Authentication and Authorization**: Secure login and registration system with role-based access control.
- **Product Management**: Admin panel for adding, updating, and deleting products.
- **Shopping Cart**: Users can add products to the cart and proceed to checkout.
- **Order Management**: Users can view their orders and order history.
- **Responsive Design**: Optimized for mobile and desktop viewing.
- **Templating with EJS**: Server-side rendering using EJS templates for dynamic content.

## Tech Stack

- **Frontend**: EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Authorization**: Role-based access control
- **CSS Framework**: Bootstrap

## Installation

1. Clone the repository:
2. git clone https://github.com/safi-io/scatchFullStack.git
3. Set up environment variables.
   - PORT=3000
   - MONGODB_URI=your-mongodb-uri
   - JWT_SECRET=your-secret-key
4. npm start (Start Development Server)

## Usage
- User Registration: Users can create an account to start shopping.
- Admin Access: Admin users can manage products, view orders, and manage users.
- Product Browsing: Users can browse through a variety of bags, view details, and add items to the cart.

## File Structure
`
scatchFullStack/
├── public/              # Static files (CSS, images, etc.)
├── routes/              # Application routes
├── views/               # EJS templates
├── models/              # Mongoose models
├── controllers/         # Route handlers
├── middleware/          # Custom middleware (auth, error handling)
├── config/              # Configuration files (DB connection, etc.)
└── app.js               # Main application entry point
`

## License
This project is licensed under the MIT License.

## Contributing
Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.
