# Pizzeria Website
This project is a static website for a pizzeria, built using React.

## Description
The website has the following sections and pages:

1) **Navbar**:
  - A "Home" button.
  - A "Total" button showing the total amount to be paid (based on products added to the cart).
  - "Login" and "Register" buttons if the user is not logged in, "Profile" and "Logout" buttons if the user is logged in.

2) **Main Page**:
- Includes a header and a section showing the products.
- Each product is displayed inside a card containing:
  - The product's image, name, price and a list of ingredients.
  - Two buttons: "Ver más" (redirects to the corresponding pizza's detail page) and "Add to Cart" (Adds the product to the shopping cart).
- The product data is fetched dynamically from an internal API provided by the project's backend using React's `useEffect` and `useState` hooks.

3) **Pizza Page**:
- This page displays detailed information about a specific pizza.
- The `useParams` hook from React Router is used to retrieve the pizza ID from the URL and fetch the corresponding data from the API.
- "Add to Cart" button.

4) **Cart Page**:
- The user can see the items added to the cart.
- Each item in the cart displays the product details (image, name, price), along with buttons to increase or decrease the quantity of the item.
- The total section at the bottom of the cart dynamically calculates and displays the total price based on the prices and quantities of the items in the cart.
- If users are logged out they cannot see the button to pay.

5) **Forms - Login & Register Page**:
- Contains two forms, one for creating an account and one for logging in.
- Error messages are displayed in the following cases:
   - If the user does not fill in all required fields.
   - If the password entered is less than 6 characters long.
   - In the registration form, if the password and confirm password fields do not match.

6) **Footer**

## How to Run the Project

- **Clone the repository:**
   git clone [https://github.com/Micolia/pizzeria-website-react](https://github.com/Micolia/pizzeria-website-react)


- **Backend:**
    - Navigate to the backend folder

     - Install dependencies: **npm install**

     - Run the backend: **npm start**


- **Frontend:**
    - Navigate to the frontend folder

    - Install dependencies: **npm install**

    - Start the server: **npm run dev**




## Preview

![Website Preview](./frontend/src/assets/img/preview.png)