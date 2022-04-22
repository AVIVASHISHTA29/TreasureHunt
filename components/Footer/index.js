import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Footer() {
  var date = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <p className={styles.smallText}>
          Based in India
          <br />
          Working Worldwide
        </p>
      </div>
      <h1 className={styles.mainHeading}>GET IN TOUCH</h1>
      <div className={styles.bottomContainer}>
        <p
          className={styles.smallText}
          style={{ position: "absolute", left: "2rem" }}
        >
          © {date}
        </p>
        <div className={styles.links}>
          <Link href={"/"} passHref={true}>
            <p className={styles.navLink}>INSTAGRAM</p>
          </Link>
          <Link href={"/"} passHref={true}>
            <p className={styles.navLink}>TWITTER</p>
          </Link>
          <Link href={"/"} passHref={true}>
            <p className={styles.navLink}>LINKEDIN</p>
          </Link>
        </div>
        <div className={styles.links}></div>
      </div>
    </div>
  );
}

export default Footer;
