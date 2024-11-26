# Ecommerce-Store
An e-commerce web application that allows users to browse products, filter by categories, add items to a cart, and proceed to checkout. Built with a full-stack architecture featuring GraphQL, Apollo Server, React, and Cypress for testing.

## Table of Contents
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Technologies](#technologies)
- [How to Contribute](#how-to-contribute)

## Installation

1. Clone the repository:

    ```git clone git@github.com:usamabadarr/Ecommerce-Store.git```

    cd ecommerce-store
    Set up environment variables:

    Copy .env.example to .env in both server and client directories.
    Update database credentials, JWT secret, and API URLs.

2. Install dependencies:

    ```npm install```

    ```cd server && npm install```

    ```cd ../client && npm install```

3. Run the Application

    Start the development servers:

    ```npm run start:dev```

    Open your browser and navigate to:

    ```http://localhost:3000```

    The backend GraphQL server runs on:

    ```http://localhost:3001/graphql```

## Credits

    Made by Cameron Bukoski, XiangZhen(Jason) Wu, RICARDO RAPHAEL, Usama Badar, and Chris Crumbley

   1. [Jason's GitHub](https://github.com/AdminChatter)

   2. [RICARDO RAPHAEL's GitHub](https://github.com/rphilippe2) 

   3. [Chris Crumbley's GitHub](https://github.com/RealChillyPalmer)

   4. [Usama Badar's GitHub](https://github.com/usamabadarr)

## License

    This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.<BR>
    Click the license above to learn more about this license.

## Badges

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)
![Javascript](https://img.shields.io/badge/Javascript-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-green.svg)
![Mongoose](https://img.shields.io/badge/Mongoose-green.svg)
![Apollo Server](https://img.shields.io/badge/ApolloServer-green.svg)

## Features

    Product Listing: Browse available products with essential details (name, price, description, stock).

    Search and Filters: Search products by name and filter by categories like "Electronics" or "Clothing."

    Shopping Cart: Add/remove items from the cart and view totals.

    User Authentication: Register, log in, and maintain user sessions securely.

    GraphQL API: Fast and flexible queries/mutations for managing users, products, and orders.

    Responsive Design: Optimized for desktops, tablets, and mobile devices.

    End-to-End Testing: Validates functionality with Cypress.

## Technologies
1. Backend
    Node.js with Express

    Apollo Server for GraphQL

    MongoDB and Mongoose

    JWT for authentication

2. Frontend
    React with TypeScript

    Apollo Client for GraphQL queries

    Styled Components for UI styling


## How to Contribute
    We welcome contributions! To contribute:

    Fork the repository.

    Create a new branch:

    ```git checkout -b feature-name```

    Commit your changes and push:

    ```git push origin feature-name```

    Open a Pull Request.