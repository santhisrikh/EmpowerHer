## **Problem Statement: Collaborative Notes App with React, Redux, and Firebase**

### **Objective:**

Build a **real-time collaborative notes application** using **React, Redux (without RTK), Firebase Realtime Database, and Firebase Hosting**. The app should allow users to:

✅ Create and edit notes in real time\
✅ Store notes in Firebase Realtime Database\
✅ View all saved notes in a list\
✅ Delete notes\
✅ Host the app using Firebase Hosting\
✅ Maintain state management using Redux\
✅ Authenticate users using Firebase Authentication

### **Folder Structure**

```
src/
│── components/               # UI Components
│   ├── NoteForm.jsx
│   ├── NotesList.jsx
│
│── redux/                    # Redux State Management
│   ├── actions.js            # Contains Redux action creators
│   ├── notesReducer.js       # Notes-related state reducer
│   ├── authReducer.js        # Authentication-related state reducer
│   ├── store.js              # Redux store configuration
│
│── firebase/                 # Firebase Configuration
│   ├── firebaseConfig.js     # Firebase setup and initialization
│
│── App.css                   # Global styles
│── App.jsx                   # Main application component
│── index.css                 # Additional global styles
│── main.jsx                  # Application entry point
│── .gitignore                # Git ignored files
│── firebase.json             # Firebase hosting configuration
│── .firebaserc               # Firebase project settings
│── package.json              # Project dependencies
│── README.md                 # Project documentation
```

---

## **Features & Requirements:**

### \*\*1. Notes Dashboard \*\*

- Users should be able to **add, edit, and delete** notes.

- Each note should have:

  - Title
  - Content
  - Timestamp

- Notes should be **stored in Firebase Realtime Database** and synced across all users in real-time.

- Display the list of all saved notes.

- Clicking on a note should allow users to edit its content.

- Users can delete notes.

- Show notes only when a user is logged in.

### **2. Real-Time Collaboration**

- When a user **updates or deletes a note**, changes should reflect **instantly** for all users.
- Notes should be **persisted** even after page reloads.

### **3. Firebase Integration**

- Use **Firebase Realtime Database** for storing notes.
- Use **Firebase Authentication** for user login/logout.
- Use **Firebase Hosting** to deploy the application.

---

## **🛠️ State Management Guidelines**

### **🔹 1. Redux Store Setup**

- Configure a **Redux store** that combines multiple reducers.
- Use **Redux Thunk** to handle asynchronous actions for Firebase operations.

### **🔹 2. Notes Reducer**

- Maintain a state that stores:
  ```js
  const initialState = {
   notes: [],
   loading: false,
   error: null,
  };
  ```
- Define actions for:
  - Fetching notes (request, success, failure).
  - Adding a new note.
  - Updating an existing note.
  - Deleting a note.

### **🔹 3. Authentication State**

- Maintain a state that stores:
  ```js
  const initialState = {
   user: null,
   loading: false,
   error: null,
  };
  ```
- Define actions for:
  - Logging in a user.
  - Logging out a user.
  - Handling authentication state changes.

---

## **Authentication Guidelines**

### **1. Firebase Authentication Setup**

- Enable **Google Authentication** in Firebase.
- Implement login and logout using Firebase Auth.

### **2. Conditional Rendering for Authentication**

- If a user is **not logged in**, show only the login form.
- If a user is **logged in**, display the notes dashboard.

Example:

```jsx
const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? <NotesDashboard /> : <LoginForm />}
    </div>
  );
};
```

### **3. Firebase Authentication Actions**

**🔹 Log In User**

```js
{
  type: "LOGIN_SUCCESS",
  payload: user
  }
```

**🔹 Log Out User**

```js
{
  type: "LOGOUT"
}
```

---

## **Firebase Setup & API Endpoints**

### **1. Firebase Configuration**

- Create a **Firebase project** and enable:
  - **Realtime Database**
  - \*\*Google Authentication \*\*
  - **Hosting**

### **2. API Endpoints (Firebase Realtime Database)**

**🔹 Fetch Notes (GET Request)**

```
https://YOUR_PROJECT.firebaseio.com/notes.json
```

**🔹 Add Note (POST Request)**

```
https://YOUR_PROJECT.firebaseio.com/notes.json
```

**🔹 Update Note (PATCH Request)**

```
https://YOUR_PROJECT.firebaseio.com/notes/{noteId}.json
```

**🔹 Delete Note (DELETE Request)**

```
https://YOUR_PROJECT.firebaseio.com/notes/{noteId}.json
```

---

## **Deployment**

1️⃣ **Install Firebase CLI**

```
npm install -g firebase-tools
```

2️⃣ **Login to Firebase**

```
firebase login
```

3️⃣ **Initialize Firebase in your project**

```
firebase init
```

4️⃣ **Deploy the app**

```
firebase deploy
```

---

## **Submission:**

- Ensure that your code is well-commented.
- Submit a **GitHub repository** with the complete project.
- Include Firebase credentials **in a ****************\`\`**************** file** (Do not expose API keys in public repositories).
- Deploy the app using **Firebase Hosting** and share the live URL.

