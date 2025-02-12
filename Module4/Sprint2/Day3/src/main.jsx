import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as ChakraUIProvider } from "@/components/ui/provider";

import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ChakraUIProvider>
					<App />
				</ChakraUIProvider>
			</Provider>
		</BrowserRouter>
	</StrictMode>,
);
