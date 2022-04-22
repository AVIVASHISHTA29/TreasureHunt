import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <p className={styles.logo}>Treasure Hunt</p>
      </Link>
      <div className={styles.rightContainer}>
        <Link href="/">
          <p className={styles.navLink}>Home</p>
        </Link>
        <Link href="/about">
          <p className={styles.navLink}>About Us</p>
        </Link>
        <Link href="/contact-us">
          <p className={styles.navLink}>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
