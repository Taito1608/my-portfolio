"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import styles from "./Header.module.scss";

const subscribeNoop = () => () => {};

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // サーバー描画時はfalse、クライアントではtrue（テーマはクライアントでしか確定しないため）
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      setIsScrolled(window.scrollY > 10);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
        }
      });
    };

    const sections = ["hero", "about", "skills", "works", "contact"];
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 589.8 499.7"
              className={styles.logoSvg}
              fill="none"
              stroke="currentColor">

              <path d="M235.8,145.4c4.8-23.1,9.5-46.1,14.3-69.2-37.1,82.7-53.9,175.1-84.6,261.1-6.6,18.4-14.7,37.7-29.6,47.9,35.3-66.4,56.1-149,32.8-222-4.1-12.9-9.8-25.6-19.1-34.2-13.4-12.4-32.7-14.2-49.3-8.9-16.7,5.3-31.2,16.8-44.8,29.1C192.3,71.8,342.2,24.2,494.6,9.8c29.3-2.8,59-4.3,87.7,3"/>
              <path d="M270.1,216.8c11.9-.3,23.8-5.1,33.1-13.6-5,9.6-8.8,19.9-11.3,30.7-.8,3.7-1.4,8.1.8,11,3,4,8.5,2.4,12.8.4,20.5-9.8,39.7-23.2,56.7-39.6-18.1,95.1-37.6,193.5-89.2,271-6.1,9.1-15.8,18.9-24.9,14-3.7-1.9-6.2-5.9-8-10-11.2-25.7,1.1-56.5,15.7-79.9,36.3-58.3,87.4-103,142.5-137.4,55-34.4,114.2-59.1,173.2-83.6"/>
            </svg>
          </a>

          <div className={styles.right}>
            <nav>
              <ul
                id="global-nav"
                className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={activeSection === item.id ? styles.active : ""}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="テーマ切り替え"
            >
              {mounted ? (resolvedTheme === "dark" ? "☼" : "❍") : "❍"}
            </button>
            <button
              type="button"
              className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={isMenuOpen}
              aria-controls="global-nav"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
    </header>
  );
}