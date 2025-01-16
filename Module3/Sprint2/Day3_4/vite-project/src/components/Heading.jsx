import styles from "./Heading.module.css";
const Heading = () => {
	console.log(styles.title, "Heading Compo");
	return <h1 className={styles.title}>Welcome to vite tool</h1>;
};
export default Heading;

// 