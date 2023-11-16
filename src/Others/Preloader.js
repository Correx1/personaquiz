import React, { useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
  useEffect(() => {
   
    let preloader = document.getElementById("preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  }); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <div id="preloader"></div>
    </div>
  );
};

export default Preloader;
