import Link from "next/link";

import Container from "../Container/Container";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Taito Yusa
          </Link>

          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="#about">
                  About
                </a>
              </li>

              <li>
                <a href="#skills">
                  Skills
                </a>
              </li>

              <li>
                <a href="#works">
                  Works
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
