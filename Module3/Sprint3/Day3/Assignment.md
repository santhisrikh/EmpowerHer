### **Assignment: Implement Private Routing**

#### **Objective**

Create a React application with private routing, where users can only access the "Dashboard" page if they are logged in. If not logged in, they should be redirected to the login page.

- use this `https://fakestoreapi.com/docs` dor the APIS
-

---

### **Requirements**

1.  **Pages**:

    - `Home`: A public page accessible to everyone.
    - `Login`: A page where the user can log in.
      - Use Login creedentials provide in the above fake store api doc to build the Login component
      - Use context API to handlethe Login token and athunticate the user/
    - `Dashboard`: A private page that requires authentication to access.

2.  **Authentication**:

    - Implement a simple login mechanism using React state.
    - Add a login button on the login page that sets the user as logged in.

3.  **PrivateRoute Component**:

    - Create a `PrivateRoute` component that checks if the user is logged in.
    - If logged in, allow access to the "Dashboard" page.
    - If not logged in, redirect the user to the "Login" page.

4.  **Navigation**:

    - Include a simple navigation bar with links to `Home`, `Login`, and `Dashboard`.

---

### **Tasks**

1.  Create the following components:

    - **Navbar**: Contains links to the `Home`, `Login`, and `Dashboard` pages.
    - **Home**: A simple page with a welcome message.
    - **Login**: Contains a login button that toggles the user's logged-in state.
    - **Dashboard**: A page that displays "Welcome to the Dashboard" (only accessible if logged in).
    - **PrivateRoute**: A higher-order component to protect the "Dashboard" route.

2.  Implement routing using `react-router-dom`:

    - Use `BrowserRouter`, `Routes`, and `Route`.

3.  Use React's `useState` to manage authentication state:

    - Use a `loggedIn` state to track if the user is logged in.
    - Pass the authentication state through a `Context`
