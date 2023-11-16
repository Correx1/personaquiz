import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container ">
          <div className="row py-2 text-center text-md-start">
            <div className="col-md-6 pt-3">
              <p>
                Designed and Developed by <a href="/">Chukwu Raphael</a>
              </p>
            </div>

            <div className="col-md-6  pt-3">
              <div className="icons d-flex align-items-center justify-content-center">
                <a href="https://www.facebook.com/raphael.peter.1044">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://github.com/Correx1">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/raphael-chukwu-8893a6249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
