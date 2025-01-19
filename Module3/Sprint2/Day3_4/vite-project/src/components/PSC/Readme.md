### **Problem Statement: Restaurant Finder App**

You are tasked with building a simple **Restaurant Finder App** using React. The app should allow users to view a list of restaurants, apply filters, and sort the results based on user input. This assignment aims to help you practice managing the state and working with React components.

---

### **Requirements**

1. **Display a List of Restaurants**:

   - Create a list of restaurants with the following details:
     - Restaurant Name
     - Rating (1 to 5)
     - Distance (in kilometers)

   Example data (you can create more entries as needed):

   ```json
  
   [
     { "id": 1, "name": "The Gourmet Kitchen", "rating": 4.5, "distance": 2.1 },
     { "id": 2, "name": "Sushi Heaven", "rating": 4.8, "distance": 3.2 },
     { "id": 3, "name": "Burger House", "rating": 3.9, "distance": 1.8 },
     { "id": 4, "name": "Pizza Palace", "rating": 4.2, "distance": 2.7 },
     { "id": 5, "name": "Taco Town", "rating": 3.5, "distance": 4.1 }
   ]

   ```

2. **Filters**:
   - **Rating Filter**: Allow the user to filter restaurants with a rating greater than or equal to the selected value (e.g., restaurants with a rating of 4 or higher).
   - **Sort by Distance**: Provide an option (e.g., a checkbox) to sort restaurants by distance from nearest to farthest.
3. **State Management**:
   - Use state to manage the rating filter and sorting option.
   - Lift the state to the parent component to share it between the filter and restaurant list components.
4. **Pagination**:
   - Display a maximum of 4 restaurants per page.
   - Allow the user to navigate between pages.
5. **Bonus** :

- Filter cuisine type
