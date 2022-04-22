import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function TeamDiv() {
  const [flag, setFlag] = useState(false);
  var cursor;

  useEffect(() => {
    if (flag) {
      cursor = document.getElementById("myimg");
      var cursor2 = document.getElementById("cursor");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.left = e.clientX + "px"),
          (cursor.style.display = "block"),
          cursor.classList.remove("show"),
          cursor.classList.add("show"),
          cursor2.classList.remove("cursor"),
          (cursor.style.top = e.clientY + "px");
      });
    } else {
      var cursor2 = document.getElementById("cursor");
      cursor = document.getElementById("myimg");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.left = e.clientX + "px"),
          (cursor.style.display = "none"),
          cursor.classList.remove("show"),
          cursor2.classList.add("cursor"),
          (cursor.style.top = e.clientY + "px");
      });
    }
  }, [flag]);

  return (
    <div
      className={styles.teamContainer}
      style={{ zIndex: 100 }}
      onMouseEnter={() => {
        setFlag(true);
      }}
      onMouseLeave={() => {
        setFlag(false);
      }}
    >
      <div className={styles.leftContainer}>
        <img
          className="myimg"
          id="myimg"
          src={
            "https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/tony-stark-robert-downey-jr.jpg"
          }
          style={{ display: !flag && "none" }}
        />

        <p className={styles.headingName}>NAME 1</p>
      </div>
      <div className={styles.rightContainer}>
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
