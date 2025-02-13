## **Problem Statement: Todo List Application with React, Redux, Redux Thunk, and Chakra UI**

### **Objective:**

Develop a **Todo List Application** using **React, Redux, Redux Thunk, React Router, and Chakra UI** that allows users to manage their tasks efficiently. The application should support **CRUD operations** while maintaining state management through Redux and handling asynchronous API calls with proper loading, success, and error states.

---

## **Requirements:**

### **1\. Functional Requirements:**

- **Fetch Todos**: Fetch and display todos from an API (or mock API).
- **Add Todo**: Users can add new todos.
- **View Todos**: Display all todos in a list.
- **Toggle Completion**: Users can mark a todo as completed or incomplete.
- **Edit Todo**: Users can modify an existing todo.
- **Delete Todo**: Users can remove a todo from the list.

### **2\. Technical Requirements:**

- Use **React** for building UI components.
- Use **React Router** for navigation.
- Implement **Redux with Redux Thunk** for asynchronous state management.
- Use **Redux DevTools** for debugging state changes.
- Handle **loading, success, and error states** for each asynchronous action (**GET, POST, UPDATE, DELETE**).
- Use **Chakra UI** for styling and UI components.
- Use **React-Redux hooks (`useSelector`, `useDispatch`)** for managing global state.
- Define **Redux action constants** to maintain consistency in action types.

---

## **3\. Redux Action Constants**

Define the following **action constants** for Redux actions:

```javascript
// Fetch todos
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

// Add todo
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

// Edit todo
export const EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST";
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
export const EDIT_TODO_FAILURE = "EDIT_TODO_FAILURE";

// Toggle completion
export const TOGGLE_TODO_REQUEST = "TOGGLE_TODO_REQUEST";
export const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS";
export const TOGGLE_TODO_FAILURE = "TOGGLE_TODO_FAILURE";

// Delete todo
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";
```

---

## **4\. Redux Thunk Actions**

Each Redux action will handle **asynchronous API calls** using Redux Thunk.

### Example: Fetch Todos

```javascript
export const fetchTodos = () => async (dispatch) => {
	dispatch({ type: FETCH_TODOS_REQUEST });
	try {
		const response = await fetch("https://api.example.com/todos");
		const data = await response.json();
		dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
	}
};
```

---

## **5\. Routing Requirements:**

- **Home (`/`)**: Displays the Todo List.
- **Todo (`/todo`)**: Page for **fetching, adding, toggling, editing, and deleting** todos.

---

## **Folder Structure**

```
📂 todo-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TodoList.js
 ┃ ┃ ┣ 📜 TodoItem.js
 ┃ ┃ ┗ 📜 AddTodo.js
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.js
 ┃ ┃ ┗ 📜 TodoPage.js
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📂 actions
 ┃ ┃ ┃ ┗ 📜 todoActions.js
 ┃ ┃ ┣ 📂 reducers
 ┃ ┃ ┃ ┗ 📜 todoReducer.js
 ┃ ┃ ┣ 📂 store
 ┃ ┃ ┃ ┗ 📜 store.js
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 theme.js
```

---

## **6\. Expected Outcome:**

A fully functional **Todo List Application** with:
✅ CRUD operations (**Add, View, Edit, Toggle, Delete**)
✅ **State management via Redux**
✅ **Asynchronous API calls using Redux Thunk**
✅ **Redux DevTools for debugging**
✅ **Proper handling of loading, success, and error states**
✅ **Intuitive UI using Chakra UI**

---

This ensures a **scalable**, **maintainable**, and **performant** Todo application. Let me know if you need further refinements! 🚀
