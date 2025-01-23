import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>,
	// </StrictMode>,
);
