### Topics to be discussed


- **Routing in React**
  - Introduction to routing and its importance in React applications.
  - Installation and setup of react-router-dom.
  - Usage of BrowserRouter, Routes, Route, and Link components with code examples.
  - Demonstrating navigation between different pages using Link and handling route changes.

- **NavLink Component**
  - What is the NavLink Component?
  - Why is it Useful?

- **Routing - Dynamic Links, Dynamic Routes, and useParams Hook**
  - Dynamic Routing in React
  - Dynamic Links Implementation
  - Dynamic Routes Implementation
  - useParams Hook Implementation

- **Routing - Navigate Component and useNavigate Hook**
  - Navigate Component
  - useNavigate Hook

- **Creating a Custom Private Route Component in React Project**
  - Concept of Private Routes
  - Using Navigate for Redirection
  - Building PrivateRoute Component

- **Query Params and useSearchParams Hook**
  - Difference Between URL Parameters and Query Parameters
  - The useSearchParams Hook
  - Comparison with useParams
  - Persistence Across Refreshes
  - Implement useSearchParams

- **Environment Variables**
  - What are Environment Variables?
  - Use-case & Benefits


- **Advanced ChakraUI Features**  
  - Hooks in Chakra UI
    - `useDisclosure`
    - `useToast`

  - Style Props and Responsiveness
    - Basics of Style Props
    - Common Style Props Categories: Layout Props, Color and Background, Typography, Spacing, Flexbox and Grid, Borders
    - Responsive Styling: Array Syntax, Object Syntax

  - Customizing Themes in Chakra UI
    - What is a Custom Theme?
    - Why Customize Your Theme?
    - How to Customize Your Theme: Import `extendTheme`, Define Your Custom Theme, Use Your Custom Theme


https://experience-admin.masaischool.com/lectures/detail/?id=76524&tab=notes

---

# Routing - Introduction, Installation & Setup,BrowserRouter, Routes, Route and Link

## Introduction

Routing basically means you navigate between different pages of your application.

## Detailed Explanation

Routing in React enables navigation between different components in an application, simulating the experience of moving between pages in a multi-page web application. `react-router-dom` is a popular library that facilitates routing in React applications.

##  Code Implementation | Examples

**A quick overview of steps we are gonna follow to build an application using `react-router-dom` library**

**Step 1 - Installation:**

To use `react-router-dom`, first, install it in your React project. If you're using Vite, create a new project and install `react-router-dom`:

- Create a react project using vite

  ```jsx
  npm init vite@latest <application-name> -- --template react
  ```

- Install `react-router-dom` library

  ```jsx
  npm install react-router-dom
  ```

**Step 2 - `BrowserRouter`:**

`BrowserRouter` is a router implementation that uses the HTML5 history API to keep your UI in sync with the URL.

Open `src/main.jsx` and set `BrowserRouter` component.

src/main.jsx

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

`BrowserRouter` is a provider component from react-router-dom library. All routing logic should be wrapped inside it. So only by wrapping your application ( App ) with BrowserRouter, you'll be able to use lot of tools that `react-router-dom` gives

![browser-router-tree.png](images/browser-router-tree.png)

**Step 3 - `Routes` and `Route` Component:**

`Routes` is used to declare routes in your application. `Route` components inside `Routes` define individual routes.

Note : `Routes` replaces the older `Switch` component and is used to declare routes in your application. `Route` components inside `Routes` define individual routes.

Before we begin, create multiple pages in your application like `Home` `About` `Contact` `Users` . A better convention would be to maintain a folder with `src` folder called `pages`

Project Structure :

```jsx
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Home.jsx
│       └── Users.jsx
```

src/pages/Home.jsx

```jsx
function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

export default Home;
```

src/pages/About.jsx

```jsx
function About() {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

export default About;
```

src/pages/Contact.jsx

```jsx
function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
    </>
  );
}

export default Contact;
```

src/pages/Users.jsx

```jsx
function Users() {
  return (
    <>
      <h1>Users Page</h1>
    </>
  );
}

export default Users;
```

- Elaborated Explanation
  `Routes` - Wrapper component for Route component
  `Route` - This component from `react-router-dom` takes two props.
  1. **path** - On which path ?? .
     It’s like “when the typed in url in the address bar has the endpoint
     `“/”` , `“/contact”`
  2. **element** - What to render ??
     Which particular component to render when the path is `"/"` `"/contact"` …
     `<Home/>` , `<Contact/>`

src/App.jsx

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
```

**Step 4 - `Link` Component:**

`Link` is used for navigation within your app. It's similar to HTML's `<a>` tag but is designed for React Router.

Remember anchor `a` element. The `Link` component here works in similar manner.

| a    | Link |
| ---- | ---- |
| href | to   |

```jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
```

**Elaborated explanation :**

Remember `e.preventDefault` that prevents the default behavior of event target element . So it's just the same thing implemented internally wherein `a` tag prevents default behavior is prevented and some other is applied ( It makes use of browser history stack and kind of mutates it ).

Why can’t I just use `a` tag ???
you may use `a` tag but that will reload all the resources on every component changes that happens on route change ( that will defeat the purpose of having `react-router-dom` as it's similar to loading page every-time); but if you use Link that `react-router-dom` provides you wouldn't encounter that issue;

![tree-structure.png](images/tree-structure.png)

## Student Activities

1. Build an application which has the following pages
   1. Home
   2. About
   3. Contact
   4. Users
   5. Login
2. Your application should have Navbar with links to the above pages clicking on which redirects to that particular page.

## Conclusion

Routing in React enables navigation between different components in an application, simulating the experience of moving between pages in a multi-page web application. `react-router-dom` is a popular library that facilitates routing in React applications.

## Resources

- [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router)
- [Routes](https://reactrouter.com/en/main/components/routes)
- [Route](https://reactrouter.com/en/main/route/route)
- [Link](https://reactrouter.com/en/main/components/link)

---

# NavLink component

## Introduction

The `NavLink` component is a special type of `Link` provided by the React Router DOM library. It is designed to enhance navigation in React applications, offering additional features to style links dynamically based on their active state. Understanding how to use `NavLink` effectively can significantly improve the user experience by providing visual cues about their location within the app.

## Detailed Explanation

### What is the NavLink Component?

`NavLink` is an extension of the `Link` component that includes all the features of `Link` with added functionality for styling. The primary purpose of `NavLink` is to allow developers to apply different styles or classes to a link when it matches the current URL.

### Why is it Useful?

The ability to style links based on their active state is incredibly useful for:

- **Navigation Menus:** Visually indicating the current page or section helps users understand where they are in your application.
- **Accessibility:** Helps users with visual impairments or cognitive disabilities navigate your site more easily.
- **User Experience:** Enhances the overall aesthetic of the site and improves navigation clarity.

##  Code Implementation | Examples

Below is a basic implementation of the `NavLink` component in a React application:

- **File:** src/components/Navbar.jsx

First, we start with a simple `Navbar` component using the `Link` component from `react-router-dom`:

```jsx
import { Link } from "react-router-dom";

const listOfLinks = [
  { to: "/", displayText: "Home" },
  // Add other links here
];

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
      }}
    >
      {listOfLinks.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.displayText}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
```

Next, we upgrade the `Navbar` to use `NavLink` for dynamic styling:

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  const defaultStyle = { color: "black" };
  const activeStyle = { color: "red" };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "lightgray",
        padding: "10px",
      }}
    >
      {listOfLinks.map((link) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          key={link.to}
          to={link.to}
        >
          {link.displayText}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
```

To use `classNames` instead of inline styles, the syntax is slightly different but achieves the same goal:

```jsx
<NavLink
  key={link.to}
  to={link.to}
  className={({ isActive }) => (isActive ? "active" : "default")}
>
  {link.displayText}
</NavLink>
```

## Student Activities

1. **Modify the Navbar:** Start with the basic `Navbar` component and refactor it to use `NavLink`. Experiment with different styles or classes for the active state.
2. **Create a Sidebar:** Use `NavLink` to create a vertical sidebar for navigation, applying distinct styles for active links.
3. **Dynamic Theming:** Implement a feature that changes the active link's style based on a theme chosen by the user (e.g., dark mode vs. light mode).

## Conclusion

The `NavLink` component is a powerful tool in the React Router DOM library, enabling developers to create more intuitive and visually appealing navigational elements. By dynamically styling active links, `NavLink` improves user experience and accessibility, guiding users through your application with ease.

## Resources - Official Documentation and Other Resources

- [React Router: NavLink Documentation](https://reactrouter.com/en/main/components/nav-link)

---

# Routing - Dynamic Links, Dynamic Routes, and useParams Hook

## Introduction

In today's lesson, we delve into the core of dynamic routing within React applications, harnessing the power of the `react-router-dom` library. Our focal point will be the `useParams` hook, a pivotal tool for rendering pages that display content uniquely tailored to the URL parameters. This capability is fundamental for developing features like user profiles or detailed product pages, enhancing the navigability and interactivity of your application.

## Detailed Explanation

### Dynamic Routing in React

Dynamic routing enables a single route configuration to match multiple pathnames. For instance, a route defined as `/users/:id` can match various paths like `/users/1`, `/users/2`, and so forth. The portion `:id` represents a variable segment within the URL, commonly referred to as a URL parameter.

React Router's `useParams` hook is specifically designed to let components access these parameters, making it straightforward to dynamically render content based on the current URL.

### Use-case & Benefits

Dynamic routing brings several advantages to the table:

- **User Experience**: It promotes a cleaner and more intuitive URL structure, guiding users through their navigation with clear, meaningful links.
- **Flexibility**: Developers can effortlessly create pages that adapt their content based on the parameters passed through the URL, such as displaying specific user details.
- **Scalability**: This approach simplifies the process of adding new routes as your application's content grows, ensuring your project remains organized and manageable.

### Real-world Examples

Imagine browsing an online platform:

- A profile page at `/users/123` might display information specific to user 123.
- On an e-commerce site, visiting `/products/xyz` would show details for the product identified by `xyz`.

##  Code Implementation | Examples

### Dynamic Links

We'll start by constructing a Users page located at `/src/pages/Users`. This page will retrieve and display a list of users fetched from an API, creating dynamic links for each user:

```jsx
// src/pages/Users.jsx
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { Link } from "react-router-dom";

// Function to fetch data from an API
async function getData(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch users and update state
  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      setUsers(apiResponse.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users`);
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <div>
      <h1>Users Page</h1>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <Link to={`/users/${user.id}`}>Click to view user details</Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
```

Clicking on a user link dynamically changes the URL, guiding you to detailed views based on the user ID.

### Dynamic Routes

To facilitate dynamic routing, we define our application routes in `AllRoutes` component:

```jsx
// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:user_id" element={<SingleUser />} />
    </Routes>
  );
}

export default AllRoutes;
```

### useParams Hook

The `useParams` hook enables components to access URL parameters. Below is the `SingleUser` component, which uses `useParams` to fetch and display details for a specific user:

```jsx
// src/pages/SingleUser.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

function SingleUser() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user_id } = useParams();

  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      setUser(apiResponse.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users/${user_id}`);
  }, [user_id]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <>
      <h1>Single User Page</h1>
      <div style={{ margin: "25px", border: "1px solid black" }}>
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <h5>
          Name: {user.first_name} {user.last_name}
        </h5>
        <h5>Email: {user.email}</h5>
      </div>
    </>
  );
}

export default SingleUser;
```

## Conclusion

Implementing dynamic routing and leveraging the `useParams` hook in React applications significantly enhances the user interface and experience, allowing for the seamless integration of unique, content-specific pages based on URL parameters. This feature is integral to building sophisticated and intuitive web applications.

## Reference

- [useParams Hook Documentation](https://reactrouter.com/en/main/hooks/use-params)

---

# Routing - Navigate Component and useNavigate Hook

## Introduction

This lesson aims to broaden our understanding of React's routing capabilities by diving into two pivotal features of the `react-router-dom` library: the `Navigate` component and the `useNavigate` hook. These functionalities are instrumental in enabling programmatic navigation within React applications, offering developers the means to redirect users based on specific conditions or events.

## Detailed Explanation

### Navigate Component

The `Navigate` component is designed for immediate redirection within a React application. When rendered, it instructs the browser to navigate to a specified route, effectively redirecting the user to a new page without requiring any user interaction.

### useNavigate Hook

The `useNavigate` hook, on the other hand, provides a more flexible approach to navigation. It returns a function that can be invoked at any point to programmatically navigate the user to a different route. This function can be integrated into event handlers or lifecycle effects, offering a dynamic way to control navigation based on the application's logic.

### Use-case & Benefits

Programmatic navigation with the `Navigate` component and `useNavigate` hook serves several practical purposes:

- **Conditional Redirects**: Implement redirection based on specific conditions, such as the user's authentication status, to protect private routes or ensure a seamless user experience.
- **Event-Driven Navigation**: Facilitate navigation following certain user actions, such as submitting a form or completing a task, enhancing the application's interactivity.
- **Enhanced User Experience**: Smoothly guide users through the application's flow, improving usability and satisfaction by ensuring users are always where they need to be.

### Real World Examples

- Automatically redirecting users who are not authenticated to a login page, ensuring secure access to certain parts of the application.
- Navigating to a confirmation page after a user successfully submits a form or completes an action, providing immediate feedback and next steps.

### Simplified Explanation

While the `Link` component allows users to navigate to different pages by clicking on links (user-initiated navigation), the `Navigate` component and `useNavigate` hook enable developers to programmatically redirect users based on application logic (developer-initiated navigation).

For instance, if a user attempts to access a protected route without being authenticated, the application can automatically redirect them to the login page, rather than relying on the user to navigate there themselves.

##  Code Implementation | Examples

Redirecting to the about page if the user is not logged in, using the `Navigate` component:

```jsx
// src/pages/Home.jsx
import { Navigate } from "react-router-dom";

function Home() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/about" />;
  }

  return <h1>Home Page</h1>;
}

export default Home;
```

Navigating to the contact page in response to a button click, using the `useNavigate` hook:

```jsx
// src/pages/About.jsx
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Navigating to contact page`);
    navigate("/contact");
  };

  return (
    <>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </>
  );
}

export default About;
```

## Student Activities

Implementing the `Navigate` component and `useNavigate` hook in the Any one of your page

### Conclusion

The `Navigate` component and `useNavigate` hook are indispensable tools in the React routing arsenal, granting developers the power to programmatically control user navigation. By leveraging these features, developers can enhance the security, usability, and overall user experience of their applications.

## Resources

- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
- [Navigate](https://reactrouter.com/en/main/components/navigate)

---

# Creating a Custom Private Route Component in React Project

## Introduction

Securing specific parts of a React application is crucial for enhancing both security and user experience. This lesson focuses on the creation of a `PrivateRoute` component, utilizing the `Navigate` component from the `react-router-dom` library. This approach ensures that only authenticated users have access to certain routes, protecting sensitive content and features from unauthorized access.

## Detailed Explanation

### Concept of Private Routes

Private routes are essentially gatekeepers in React applications, designed to restrict access to certain components based on the user's authentication status. The goal is to create a seamless and secure user experience by ensuring that only authorized users can view certain pages or perform specific actions.

### Using `Navigate` for Redirection

The `Navigate` component plays a pivotal role in the implementation of private routes. It is responsible for redirecting unauthenticated users to a designated route, typically a login page, thereby preventing access to protected content.

### Building `PrivateRoute.jsx`

The `PrivateRoute` component acts as a wrapper around protected routes. It evaluates the user's authentication status (`isAuth`) and decides whether to render the desired content or redirect to a login page.

### Use-case & Benefits

- **DRY Principle**: By centralizing the authentication logic within the `PrivateRoute` component, we eliminate redundancy and keep the codebase clean and maintainable.
- **Scalability**: Adding new private routes becomes straightforward, making the application more scalable and adaptable to future requirements.
- **Security**: Centralizing route protection enhances the overall security of the application, ensuring consistent behavior across all protected routes.

### Real World Examples

- **Member-Only Content**: Platforms offering exclusive content to members, such as online courses or premium articles, benefit greatly from private routes to ensure access is limited to authorized users.
- **User Profile Pages**: Websites that provide personal user areas, such as profile pages or dashboards, use private routes to secure user-specific information.

##  Code Implementation | Examples

```jsx
// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = true; // Replace with real authentication logic

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
```

Incorporating the `PrivateRoute` component into the application's routing structure involves wrapping the protected routes with `PrivateRoute`, thus applying the authentication check to any content rendered within.

```jsx
// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:user_id"
        element={
          <PrivateRoute>
            <SingleUser />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
```

## Student Activities

1. Create your own Custom PrivateRoute component
2. Privatize all the pages except Login page

## Conclusion

This `PrivateRoute` pattern offers the flexibility to easily update the authentication logic as needed without modifying each protected route individually.

By mastering the implementation of the `PrivateRoute` component, developers can effectively manage access within React applications, ensuring a secure and user-friendly environment.

## Resources

NA

---

# Query Params and useSearchParams hook

## Introduction

Understanding how to manage query parameters in a React application is crucial for tasks like filtering, sorting, and sharing specific views or states of a page. React Router provides hooks like `useSearchParams` to efficiently handle these parameters. This lesson focuses on the distinction between URL parameters and query parameters, and teaches how to use the `useSearchParams` hook in React applications.

## Detailed Explanation

### What is the difference between URL parameters and query parameters?

- **URL Parameters**: Parts of the URL path that specify a resource or page directly. For example, `https://localhost:3000/products/<someProductId>` uses a URL parameter to fetch a specific product by its ID.
- **Query Parameters**: Key-value pairs attached to the URL, used to filter or sort resources. For instance, `https://localhost:3000/products?category=electronics` filters products by the category query parameter.

### The `useSearchParams` Hook

- **Purpose**: This hook facilitates the retrieval and modification of query parameters in the URL.
- **Advantage**: Simplifies the otherwise complex manual process of reading and updating the URL's query parameters.

### Comparison with `useParams`

- `useParams` fetches URL parameters, whereas `useSearchParams` is used for handling query parameters.

### Use-case & Benefits

- **Consistent User Experience**: Maintains state (e.g., page number, filters) in the URL for consistency after page reloads.
- **Shareability**: Enables sharing URLs that represent specific application states.
- **Flexibility**: Offers dynamic and straightforward manipulation of URL's query parameters.

##  Code Implementation | Examples

The `useSearchParams` hook in this React component is used to manage query parameters in the URL. Here's a detailed explanation of how it works in this specific code:

### 1\. **Setting up `useSearchParams`**

```jsx

`const [searchParams, setSearchParams] = useSearchParams();
const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");`

-   **`useSearchParams`**: This hook is used to get the current query parameters from the URL (`searchParams`) and to update them (`setSearchParams`).
-   **`searchParams.get("q")`**: Retrieves the value of the `q` query parameter from the URL. If `q` doesn't exist in the URL, it returns `null`.
-   **`setSearchQuery`**: Initializes the state `searchQuery` with the value of the `q` parameter or an empty string if it doesn't exist.

For example, if the URL is `https://example.com/users?q=gra`, `searchParams.get("q")` will return `"gra"`.

* * * * *

### 2\. **Handling Search Input**

```jsx
`const handleSearchQuery = (e) => {
	const { value } = e.target;
	setSearchQuery(value);
	setSearchParams(value ? { q: value } : {});
};

-   When the user types in the search input field, the `handleSearchQuery` function is triggered.
-   **`setSearchQuery(value)`**: Updates the local `searchQuery` state to reflect the user's input.
-   **`setSearchParams(value ? { q: value } : {})`**: Updates the query parameter in the URL dynamically.
    -   If `value` is not empty, it sets the `q` parameter (e.g., `?q=gra`).
    -   If `value` is empty, it removes the `q` parameter from the URL.

* * * * *

### 3\. **Effect Dependency**

```jsx

`useEffect(() => {
	setLoading(true);
	let url = `https://jsonplaceholder.typicode.com/users`;
	if (searchQuery) {
		url = `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`;
	}
	axios
		.get(url)
		.then((res) => setUsers(res.data))
		.catch((err) => setError(err.response ? err.response.data : err.message))
		.finally(setLoading(false));
}, [searchQuery]);`

-   **Dependency on `searchQuery`**: The `useEffect` hook is triggered whenever the `searchQuery` state changes.
-   Based on the `searchQuery`, it builds the URL:
    -   If `searchQuery` is empty, it fetches all users.
    -   If `searchQuery` has a value, it fetches users filtered by that value using the `q` query parameter.
-   The results are then displayed in the UI.

* * * * *

### 4\. **User Flow**

Here's how the `useSearchParams` workflow is implemented:

1.  When the component loads, the `q` parameter from the URL (if present) is used to initialize the `searchQuery` state.
2.  When the user types in the search input:
    -   The `searchQuery` state is updated.
    -   The URL is updated dynamically to include the search term as a query parameter.
3.  The `useEffect` hook reacts to the `searchQuery` change and fetches filtered data accordingly.