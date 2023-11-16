import React, {useEffect} from 'react'
import AOS from "aos/dist/aos"
import "aos/dist/aos.css";

function Aos() {

useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }); // Empty dependency array ensures this runs only once when the component mounts

  return null; // This component doesn't render anything, as it's only responsible for initialization
};

export default Aos


