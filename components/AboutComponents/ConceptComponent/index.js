import React from "react";
import styles from "./styles.module.css";

function ConceptComponent() {
  return (
    <div className={styles.container}>
      <p className={styles.smallText}>Concept</p>
      <p className={styles.rightLabel}>(01)</p>
      <p className={styles.tagLine}>
        To <span style={{ color: "var(--red)" }}>Driving </span>a new fashion
        era - <br />{" "}
        <span style={{ fontSize: "3.5rem" }}>
          Are you ready to <span style={{ color: "var(--red)" }}>jump in?</span>
        </span>
      </p>
      <p className={styles.rightText}>
        When you tell someone that your interests lie in fashion and design and
        luxury, more often than not, they think you are yet another
        unintelligent BRAT contributing to the peril of the earth. While it may
        be true that the very clothes that we take shelter in continues to take
        from nature, we believe that it is better late than never to rise to the
        challenge before us and do our bit in reducing our impact on the
        environment. <br /> <br />
        Here at <span style={{ color: "var(--red)" }}>The Shift</span>, we are
        focused on revolutionising the fashion industry to be one that we are
        proud of, one that respects nature and one that honours the effort that
        goes into manufacturing our clothes. We are driving a new fashion era -
        <span style={{ color: "var(--red)" }}> Are you ready to jump in?</span>
      </p>
    </div>
  );
}

export default ConceptComponent;
