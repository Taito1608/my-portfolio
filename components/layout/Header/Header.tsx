"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Logo from "@/components/common/Logo/Logo";
import styles from "./Header.module.scss";

const subscribeNoop = () => () => {};

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Works" },
  { id: "articles", label: "Articles" },
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

    const sections = ["hero", "about", "skills", "works", "articles", "contact"];
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
          <Link href="/#hero" className={styles.logo}>
            <Logo size={40} alt="Taito Yusa" priority />
          </Link>

          <div className={styles.right}>
            <nav>
              <ul
                id="global-nav"
                className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/#${item.id}`}
                      className={activeSection === item.id ? styles.active : ""}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
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