import React, { useState } from "react";
import Question from "./Questions";
import Aos from "../Others/Aos";





function Home() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setName(enteredName);
    setIsNameValid(/^[a-zA-Z]{3,}$/.test(enteredName));
    setErrorMessage("");
  };

  const handleEnterClick = () => {
    if (!name.trim()) {
      setErrorMessage("Name cannot be blank");
    } else if (!isNameValid) {
      setErrorMessage("Enter a valid Name");
    } else {
      setTimeout(() => {
        setShowQuestion(true);
      }, 1000);
    }
  };


 
   
 

  return (
    <div>
      <Aos />
      {showQuestion ? (
        <Question name={name} onNameChange={handleNameChange} />
      ) : (
        <section className="home" data-aos="zoom-in" data-aos-delay="300">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wrap text-center px-5">
                  <div className="intro">
                    <img src="/images/1.png" alt="" />
                    <h4>Enter your Name to get Started</h4>
                    <h4></h4>
                  </div>
                  <form action="">
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </form>
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                  <button className="btn enter" onClick={handleEnterClick}>
                    Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
   
    </div>
  );
}

export default Home;
