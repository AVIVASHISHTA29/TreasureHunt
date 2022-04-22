import React from "react";
import styles from "./styles.module.css";
import TeamDiv from "./TeamDiv";
function TeamComponent() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>TEAM</p>
      <TeamDiv />
      <TeamDiv />
      <TeamDiv />
      <TeamDiv />
    </div>
  );
}

export default TeamComponent;
