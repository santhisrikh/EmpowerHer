### **Problem Statement: Movie Database Application**

**Objective:**\
Build a dynamic, responsive, and fully functional Movie Database application that allows users to browse movies, view detailed information about a specific movie, and manage movie data by adding, editing, and deleting movies. This project will provide students with hands-on experience in **React**, **React Router**, and **CRUD operations**.

**Features:**

-   Display a list of movies.
-   Display a "View More" button for each movie that navigates to a separate page with detailed movie information.
-   Implement basic CRUD operations: Create, Read, Update, and Delete movies.
-   Responsive design that adjusts to various screen sizes (e.g., mobile, tablet, desktop).
-   Use an API or mock data for fetching movie details. 
-   use [Fake store API for Login](https://fakestoreapi.com/docs)
-  sample movie data
```json

[
  {
    "id": 1,
    "title": "Inception",
    "poster": "https://placehold.co/150",
    "releaseDate": "2010-07-16",
    "genre": "Sci-Fi",
    "description": "A mind-bending thriller by Christopher Nolan."
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "poster": "https://placehold.co/150",
    "releaseDate": "2008-07-18",
    "genre": "Action",
    "description": "The Caped Crusader takes on the Joker."
  },
  {
    "id": 3,
    "title": "The Matrix updated",
    "poster": "https://placehold.co/150",
    "releaseDate": "1999-03-31",
    "genre": "Sci-Fi",
    "description": "A hacker learns the true nature of reality and his role in the war against its controllers."
  }

```


### **Components of the Application**
1. **Navbar.jsx** 
    - It is comman across the application and its should have Home, Movies and Login/logout Links
2. **Footer.jsx**
    - Keep a basic Fotter content
3. **PrivateRoute.jsx**
    - Create re usable private route which can be wrapped around various component that need to be protectd.

### **Pages of the Application**
1. **Login Page (`Login.jsx`** 
    - A Login page where user can enter the `username` ans `password` on submit navigate the user to the Home page
    - Show the error message if the credentials are in valid

2.  **Home Page (`Home.jsx`)**

    -   A welcome page with basic information about the app.
    -   Includes a navigation bar to direct the user to the Movies page.
3.  **Movies Page (`Movies.js`)** (Private)

    -   Displays a list of movies fetched from an API or static data.
    -   Each movie card will have a "View More" button that navigates to the Movie Details page.
    -   Implement pagination or "Load More" functionality if there are too many movies.
4.  **Movie Details Page (`MovieDetails.js`)** (Private)

    -   Displays detailed information about the selected movie.
    -   Information like the title, description, release date, genre, and rating.
    -   Optionally, a "Back to Movies" button to return to the Movies page.
5.  **404 Page (`NotFound.js`)**

    -   A page that is displayed if the user navigates to an unknown route.
    -   Can include a message like "Page Not Found" with a link to return to the Movies page.

* * * * *

### **Features to Implement**

1.  **Movie Listing (Read)**

    -   The Movies page should display a list of movies with:
        -   Movie title, poster, and short description.
        -   A button for "View More" which navigates to the movie detail page.
2.  **Movie Details (Read)**

    -   Clicking on a movie card should navigate to a new page (`/movies/:id`).
    -   Display detailed information about the movie:
        -   Full description, release date, genre, rating, and poster.
    -   A "Back to Movies" button that returns the user to the Movies page.
3.  **Add New Movie (Create)**

    -   Provide a form on the Movies page or a separate "Add Movie" page for users to add new movies.
    -   The form should allow users to input the movie's title, description, poster URL, release date, and genre.
    -   On submission, the movie should be added to the list of movies and saved.
4.  **Edit Movie (Update)**

    -   Provide an option to edit an existing movie's details.
    -   Allow the user to edit the movie's title, description, poster URL, release date, and genre.
5.  **Delete Movie (Delete)**

    -   Provide a "Delete" button on each movie card.
    -   Upon confirmation, the selected movie should be deleted from the list.
6.  **Dynamic Routing**

    -   Use **React Router** for dynamic routing to navigate between the Movies page and the Movie Details page.
    -   Example route: `/movies/:id`, where `:id` is the unique identifier for each movie.
7.  **Responsive Design**

    -   Ensure the app is mobile-friendly by using responsive CSS techniques or libraries (like **CSS Grid** or **Flexbox**).
    -   Movie cards should be arranged in a grid layout, adjusting the number of columns based on the screen size.
8.  **Error Handling**

    -   Show appropriate error messages if the API request fails (e.g., "Failed to fetch movies").
    -   Display a user-friendly 404 page if the user navigates to an unknown route.
9.  **Pagination/Infinite Scroll**

    -   Optionally, implement pagination on the Movies page to limit the number of movies displayed at once.
    -   Alternatively, implement an infinite scroll feature that loads more movies when the user scrolls down.
10. **Bonus Features (Optional)**

    -   Implement a search bar to filter movies by title or genre.
    -   Add movie ratings and sorting options (e.g., sort by release date or rating).
    -   Allow users to like or favorite movies.