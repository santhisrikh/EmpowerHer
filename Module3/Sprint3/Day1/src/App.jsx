import { createContext } from "react";
import Layout from "./components/Day2/Layout";
import CleanupEx from "./components/Day2/AssignmentDisc/Cleanup";
import UserFeedback from "./components/Day2/AssignmentDisc/UserFeedback";

// export const UserContext = createContext(); // created the context
const App = () => {
	// const username = "John";
	// const user = {
	// 	username: "John",
	// 	userEmail: "jon@gmail.com",
	// 	userRole: "Admin",
	// };
	return (
		<>
			{/* <Layout /> */}
			{/* <CleanupEx /> */}
			<UserFeedback />
		</>
	);
};

export default App;

// context api

// create Context
// provider
