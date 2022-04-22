import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

function MovingComponent() {
  return (
    <div className={styles.container}>
      <p className={styles.smallText}>SHIFT THE</p>
      <div style={{ margin: "4rem", borderBottom: "2px solid #222" }}></div>
      <Marquee speed={100} pauseOnClick={true} gradient={false}>
        <p className={styles.specialText}>
          Perspective Boundaries Future Play .
        </p>
      </Marquee>
      <Marquee
        direction={"right"}
        speed={100}
        pauseOnClick={true}
        gradient={false}
      >
        <p className={styles.specialText}>
          Perspective Boundaries Future Play.
        </p>
      </Marquee>
    </div>
  );
}

export default MovingComponent;
