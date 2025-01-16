import styles from "./Footer.module.css";
const Footer = () => {
	console.log(styles.title,"Footer Comp")
	return <h3 className={styles.title}>This is Footer Section</h3>;
};

export default Footer;
