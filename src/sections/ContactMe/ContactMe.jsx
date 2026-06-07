import styles from "./ContactMeStyles.module.css";

function ContactMe() {
  return (
    <section id="contactme" className={styles.container}>
      <div className={styles.info}>
        <h1>Contact</h1>
        <p>Email: folk446@gmail.com</p>
        <p>Tel: 083-473-3264</p>
        <p>Address: V&P Apartment</p>
      </div>
    </section>
  );
}

export default ContactMe;
