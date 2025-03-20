const BASE_URL = "http://localhost:8080";
let accessToken = localStorage.getItem("accessToken");

// Register User
async function register() {
	const name = document.getElementById("reg-name").value;
	const email = document.getElementById("reg-email").value;
	const password = document.getElementById("reg-password").value;

	const res = await fetch(`${BASE_URL}/auth/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, email, password }),
	});

	const data = await res.json();
	console.log(data);
	alert(data.message || data.error);
}

// Login User
async function login() {
	const email = document.getElementById("login-email").value;
	const password = document.getElementById("login-password").value;

	const res = await fetch(`${BASE_URL}/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
		// credentials: "include", // ✅ Important for sending cookies
	});

	const data = await res.json();
	console.log(data, "data");
	if (data.accessToken) {
		accessToken = data.accessToken;
		localStorage.setItem("accessToken", accessToken);
		document.getElementById("auth-section").style.display = "none";
		document.getElementById("task-section").style.display = "block";
		fetchTasks();
	} else {
		alert(data.error);
	}
}

// Fetch Tasks
async function fetchTasks() {
	const res = await fetch(`${BASE_URL}/tasks`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});

	const tasks = await res.json();
	const taskList = document.getElementById("task-list");
	taskList.innerHTML = "";

	tasks.forEach((task) => {
		const li = document.createElement("li");
		li.innerText = `${task.title} - ${task.completed ? "✅" : "❌"}`;
		taskList.appendChild(li);
	});
}

// Add Task
async function addTask() {
	const title = document.getElementById("task-title").value;
	const description = document.getElementById("task-desc").value;

	const res = await fetch(`${BASE_URL}/tasks`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({ title, description }),
	});

	const data = await res.json();
	alert(data.message || "Task added!");
	fetchTasks();
}

// Logout
function logout() {
	localStorage.removeItem("accessToken");
	accessToken = null;
	document.getElementById("auth-section").style.display = "block";
	document.getElementById("task-section").style.display = "none";
}
