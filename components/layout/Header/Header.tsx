"use client";

import { useEffect, useState } from "react";

import Container from "../Container/Container";

import styles from "./Header.module.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop;

        const bottom = top + section.offsetHeight;

        if (
          scrollY >= top &&
          scrollY < bottom
        ) {
          setActiveSection(id);
        }
      });
    };

    const sections = [
      "hero",
      "about",
      "skills",
      "works",
      "contact",
    ];

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Container>
        <div className={styles.inner}>
          <a
            href="#hero"
            className={styles.logo}
          >
            TY
          </a>

          <nav>
            <ul className={styles.nav}>
              <li>
                <a
                  href="#about"
                  className={
                    activeSection === "about" ? styles.active : ""
                  }
                >
                  About
                </a>
              </li>

              <li>
                <a href="#skills"
                  className={
                    activeSection === "skills" ? styles.active : ""
                  }
                >
                  Skills
                </a>
              </li>

              <li>
                <a href="#works"
                  className={
                    activeSection === "works" ? styles.active : ""
                  }
                >
                  Works
                </a>
              </li>

              <li>
                <a href="#contact"
                  className={
                    activeSection === "contact" ? styles.active : ""
                  }
                >
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
