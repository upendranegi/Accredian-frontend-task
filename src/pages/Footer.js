import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">accredian</span>
            </a>
            <div className="footer-contact pt-3">
                <p>
                Email us (For Data Science Queries): admissions@accredian.com 
                </p>
                <p>  Email us (For Product Management Queries):pm@accredian.com</p>
               


                <p>
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM) 
                Product Management Admission Helpline:+91 9625811095 Enrolled 
                Student Helpline: +91 7969322507

                </p>
                <p>

                </p>

              <p><b>office Address :</b>  4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
             
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#header">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Refer & Earn</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Resources</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Program</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Data Science and AI</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Fintech</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Digital  Marketing</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
           
            <div className="social-links d-flex">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Arsha</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
