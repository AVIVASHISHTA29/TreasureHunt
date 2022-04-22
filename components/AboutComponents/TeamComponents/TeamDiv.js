import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function TeamDiv() {
  const [flag, setFlag] = useState(false);
  var cursor;

  useEffect(() => {
    if (flag) {
      cursor = document.getElementById("myimg");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.left = e.clientX + "px"),
          (cursor.style.display = "block"),
          cursor.classList.remove("show"),
          cursor.classList.add("show"),
          (cursor.style.top = e.clientY + "px");
      });
    } else {
      cursor = document.getElementById("myimg");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.left = e.clientX + "px"),
          (cursor.style.display = "none"),
          cursor.classList.remove("show"),
          (cursor.style.top = e.clientY + "px");
      });
    }
  }, [flag]);

  return (
    <div
      className={styles.teamContainer}
      style={{ zIndex: 100 }}
      onMouseLeave={() => {
        setFlag(false);
      }}
    >
      <div className={styles.leftContainer}>
        <img
          class="myimg"
          id="myimg"
          src={
            "https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/tony-stark-robert-downey-jr.jpg"
          }
          style={{ display: !flag && "none" }}
        />

        <p
          className={styles.headingName}
          onMouseEnter={() => {
            setFlag(true);
          }}
        >
          NAME 1
        </p>
      </div>
      <div
        className={styles.rightContainer}
        onMouseEnter={() => {
          setFlag(false);
        }}
      >
        <p className={styles.rightText}>
          When you tell someone that your interests lie in fashion and design
          and luxury, more often than not, they think you are yet another
          unintelligent BRAT contributing to the peril of the earth.
        </p>
      </div>
    </div>
  );
}

export default TeamDiv;
