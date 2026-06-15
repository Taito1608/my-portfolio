import Container from "../Container/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Taito Yusa
          </p>

          <p className={styles.tech}>
            Built with Next.js
          </p>
        </div>
      </Container>
    </footer>
  );
}
