# flower-delivery-website

Welcome to the Flower Delivery Website! This platform allows users to order beautiful flowers for delivery, track their orders, and enjoy a seamless shopping experience. Whether it's for a special occasion or just to brighten someone's day, this website has you covered.


## Table of Contents
- [Project Name](#Project-Name)
- [Table of Contents](#Table-of-Contents)
- [Introduction](#Introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Learn more about my flower delivery app backend](#Learn-more-about-my-flower-delivery-app-backend)
- [Author(s)](#authors)

## Introduction
#  Flower Delivery Website

Welcome to the **Flower Delivery Website**, your go-to platform for sending love, joy, and beauty through flowers! This project is designed to make flower delivery effortless and delightful, whether you're brightening someone's day, celebrating a milestone, or expressing your feelings. With a user-friendly interface and a robust backend, this website ensures a seamless experience for both customers and administrators.

## Features
- **Browse Flowers**: View a catalog of flower arrangements with prices and details.
- **Search Functionality**: Find flowers based on categories, occasions, or custom keywords.
- **Add to Cart**: Simple and secure shopping cart feature.
- **Order Tracking**: Track the status of your flower orders in real-time.
- **Responsive Design**: Optimized for mobile, tablet, and desktop users.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (or React)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **File Uploads**: Multer for handling image uploads
- **Environment Management**: dotenv
- **Cross-Origin Requests**: CORS

## Setup Instructions
1. **Clone the repository**:
   ```sh
   git clone https://github.com/fauziyyanura/flower-delivery-website.git

   ```

2. **2\. **Navigate to the Project Directory:**

```sh
cd flower-delivery-website

```
In the project directory, you can run:

### `node server.js`


3. **Set Up Environments Variables**
Create a .env file in the root directory.

Add the following variables:
PORT=5000
MONGODB_URI=your-mongodb-atlas-uri

## API Endpoints
Base URL: http://localhost:5000/api
 https://flower-delivery-web.onrender.com/api/flowers

 http://localhost:5000/api/users/register

 http://localhost:5000/api/users/login
Get All Flowers: GET /flowers

-Add a Flower: POST /flowers

-Body (form-data):

-image (file): Flower image

-Additional fields (e.g., name, price, category)

-Delete a Flower: DELETE /flowers/:id

## Contributing
We welcome contributions! To contribute:

-Fork the repository.

-Create a new branch: git checkout -b feature-name.

-Make your changes and commit: git commit -m "Add feature-name".

-Push the branch: git push origin feature-name.

-Create a pull request.

## Licenses
This project is licensed under the MIT Licenses - See the [LICENSE](LICENSE) file for more details.

## Learn more about my flower delivery app backend
Watch my loom video: [video](https://www.loom.com/share/d3e613179fa44f31b0f9551f0a1fa174?sid=d8223c08-29b8-41bd-9729-7092e4421e53)


## Author(s)
If you have any questions or need further assistance, feel free to reach out:
- **Name:** Fauziyya Nura Ahmed
- **Email:** fauziyyanuraahmad@gmail.com
- **GitHub:** https://github.com/fauziyyanura
- **Website:** https://flower-delivery-app.onrender.com/api/flowers
                https://flower-delivery-web.onrender.com/api/flowers



Thank you for Visiting the Flower delivery Website Repository. We hope you find it useful and enjoy contributing to the project.



