## Problem Statement: Workout Tracker with Category Filtering

### **Context:**

You are developing a **Workout Tracker** application where users can add, view, and delete workouts. Each workout has details such as **name, category, duration, calories burned, difficulty level, and an image**. Users should be able to filter workouts by category and add new custom workouts and delete.

### **Requirements:**

1. **Fetching Data:**
   - Fetch workout categories and workout data from the Redux store.
   - Use `useEffect` to dispatch actions that load workouts and categories when the component mounts.
2. **Adding Workouts:**
   - Allow users to input a workout name and add it with default values for duration, calories, difficulty, and an image.
   - Dispatch an action to store the workout in Redux.
3. **Filtering Workouts:**
   - Provide a dropdown to filter workouts based on categories.
   - On selection, update the displayed workouts.
4. **Displaying Workouts:**
   - Show workouts in a **responsive grid**.
   - Each workout should display:
     - **Image** (Placeholder if unavailable)
     - **Name**
     - **Duration & Calories**
     - **Category & Difficulty Level**
     - **Description**
     - **Delete Button** to remove the workout
5. **Skeleton Loading State:**
   - While fetching workouts, display **Chakra UI's Skeleton** component to improve UX.

### **Constraints:**

- The app should use **Chakra UI for UI components**.
- The **Redux store** should manage state (workouts & categories).
- Implement **responsive design** with Chakra UI's `Grid`.
- Dispatch **Redux actions** for adding, filtering, and deleting workouts.
