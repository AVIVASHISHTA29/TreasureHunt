import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function BlogComponent() {
  const [flag, setFlag] = useState(false);
  var cursor;

  useEffect(() => {
    if (flag) {
      cursor = document.getElementById("myBlogImg");
      var cursor2 = document.getElementById("cursor");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.left = e.clientX + "px"),
          (cursor.style.display = "block"),
          cursor.classList.remove("show"),
          cursor.classList.add("show"),
          cursor2.classList.add("cursor2"),
          (cursor.style.top = e.clientY + "px");
      });
    } else {
      var cursor2 = document.getElementById("cursor");
      cursor = document.getElementById("myBlogImg");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.left = e.clientX + "px"),
          (cursor.style.display = "none"),
          cursor.classList.remove("show"),
          cursor2.classList.remove("cursor2"),
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
      <div className="cursor2" id="cursor2"></div>
      <div className={styles.leftContainer}>
        <img
          className="myBlogImg"
          id="myBlogImg"
          src={
            "https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/tony-stark-robert-downey-jr.jpg"
          }
          style={{ display: !flag && "none" }}
        />
        <p className={styles.list}>01</p>
        <p className={styles.headingName}>NAME 1</p>
      </div>
    </div>
  );
}

export default BlogComponent;
