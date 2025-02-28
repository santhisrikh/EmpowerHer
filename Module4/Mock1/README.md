## **Problem Statement: React Redux E-Commerce App with Routing and Thunk**

### **Objective:**

Build a simple e-commerce web application using **React, Redux (without RTK), Thunk, and Chakra UI**. The app should allow users to:

✅ View a list of products

✅ Add products to the cart (without duplicates; only quantity should increase)

✅ View the cart with total price and update item quantities

✅ Proceed to checkout and place an order

✅ See a success message after placing the order

✅ Navigate through the app using a Navbar with a **cart item count badge**

[Demo Link](https://www.loom.com/share/daad3310111d4017a5f144b3a7bf3cc7?sid=26bf4316-0e10-4061-926f-23b35f8c0823)

### Folder Structure

```
src/
│── assets/                   # Static assets like images, icons, etc.
│
│── components/               # UI Components
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Navbar.jsx
│   ├── OrderSuccess.jsx
│   ├── ProductList.jsx
│
│── redux/                    # Redux State Management
│   ├── actions.js            # Contains Redux action creators
│   ├── cartReducer.js        # Cart-related state reducer
│   ├── productReducer.js     # Product-related state reducer
│   ├── store.js              # Redux store configuration
│
│── App.css                   # Global styles
│── App.jsx                   # Main application component
│── index.css                 # Additional global styles
│── main.jsx                  # Application entry point
│── .gitignore                # Git ignored files
│── eslint.config.js          # ESLint configuration
│── index.html                # Main HTML file

```

## **Features & Requirements:**

### **1\. Product Listing Page (/)**

- Fetch products from an API and display them.
- Each product should have:

  - Image
  - Title
  - Price
  - “Add to Cart” button

- Clicking "Add to Cart" should add the product to the cart.
- If a product is already in the cart, only its **quantity** should increase (instead of adding a duplicate).
- Users can navigate to the **Cart** page.

### **2\. Cart Page (/cart)**

- Display all products added to the cart.
- Each product in the cart should have:

  - Title
  - Price
  - Quantity (editable using an input field)
  - "Remove" button

- Display **total cart price** at the bottom.
- "Proceed to Checkout" button should navigate to the **Checkout** page.
- If the cart is empty, display a message: **"Your cart is empty"**.

### **3\. Checkout Page (/checkout)**

- Display an **Order Summary** with:

  - Product names
  - Quantities
  - Total price

- "Place Order" button should submit the order, clears the cart Items and navigate to **Order Success** page.

### **4\. Order Success Page (/order-success)**

- Show a message: **"Order Placed Successfully!"**
- Provide a link to go back to the **Product Listing** page.

### **5\. Navbar (Persistent Across All Pages)**

- Shows a **cart icon with the total count of items in the cart**.
- Links to **Products** and **Cart** pages.

### \*\*State Management

## **🛠️ State Management Guidelines**

### **🔹 1. Redux Store Setup**

- Configure a **Redux store** that combines multiple reducers.
- Use middleware like `redux-thunk` to handle asynchronous actions.

### **🔹 2. Product Reducer**

- Maintain a state that stores:
- A list of products.
- A loading state for API calls.
- An error state for failed API requests.

```json
const initialProductState = {
products: [],
loading: false,
error: null
};
```

- Define actions for:
  - Fetching products (request, success, failure).

### **🔹 3. Cart Reducer**

- Maintain a state that tracks: - Cart items with their quantities.

  ```
  const initialCartState = {
  items: []
  };
  ```

- Define actions for:
  - Adding a product to the cart.
  - Removing a product from the cart.
  - Updating the quantity of an item.
  - Clearing the cart upon place order.

### **🔹 4. Actions**

- Define and dispatch actions for:
  - Fetching products from an API.
  - Managing cart operations (add, remove, update quantity, place order (which clears the cart)).

### **🔹 5. Navbar Cart Count**

- Ensure the **cart count** in the navbar dynamically updates based on the total number of items in the cart.

-   **Actions & Reducers:**

- **Load product data (from API)**
  -   `FETCH_PRODUCTS_SUCCESS`:
- `FETCH_PRODUCTS_FAILURE`
- `FETCH_PRODUCTS_LOADING`

-   `ADD_TO_CART`: Add a product to the cart.

-   `REMOVE_FROM_CART`: Remove a product from the cart.

-   `UPDATE_QUANTITY`: Increase/decrease product quantity.

-   `PLACE_ORDER`: Simulate order placement (clear cart).

## **API Endpoints:**

The app should use **FakeStore API** for fetching products.

1️⃣ \*\*Fetch Products (GET):

\***\*URL:** https://fakestoreapi.com/products

**Response:**

```

[
{
"id": 1,
"title": "Product 1",
"price": 29.99,
"image": "https://example.com/product1.jpg"
},
{
"id": 2,
"title": "Product 2",
"price": 19.99,
"image": "https://example.com/product2.jpg"
}
]

```

### **2\. Add to Cart (Client-Side Only, No API Call Required)**

Since the cart is managed via Redux, this action updates the Redux store locally.

**Redux Action:**

```

{
"type": "ADD_TO_CART",
"payload": {
"id": 1,
"title": "Fjallraven Backpack",
"price": 109.95,
"quantity": 1
}
}

```

---

### **3\. Remove from Cart (Client-Side Only, No API Call Required)**

This will simply update Redux state.

**Redux Action:**

```

{
"type": "REMOVE_FROM_CART",
"payload": {
"id": 1
}
}

```

---

### **4\. Update Quantity in Cart (Client-Side Only, No API Call Required)**

**Redux Action:**

```

{
"type": "UPDATE_QUANTITY",
"payload": {
"id": 1,
"quantity": 2
}
}

```

---

### **5\. Place Order**

```

{
"type": "PLACE_ORDER",
}

```

#### **Submission:**

- Ensure that your code is well-commented.
- Submit the github repository with complete code including components, styles, and any additional files required to run the app.
- Make sure the app is fully functional and runs without errors.
