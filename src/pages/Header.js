import React from 'react';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/main.css';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { json } from "react-router-dom";
import Cookies from 'js-cookie';

function Header() {
  const toggleDisplay = (elementId) => {
    const element = document.getElementById('exampleModalLong');
    if (element.style.display === 'none') {
      element.style.display = 'block';
      element.style.opacity = '1';
    } else {
      element.style.display = 'none';
      element.style.opacity = '0';
    }
  };

 
  const [formData,setFormData]=useState({
    name:"",
    email: "",
    phone:"",
    course:""
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    
  };
   
  const hsubmit=(e)=>{
    e.preventDefault();
    createuser(formData);
   }
  

   const createuser = async (name , email , phone,  course)=>{
   
    try {
      const response = await fetch('http://localhost:5000/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add other headers if needed
        },
        body: JSON.stringify(name , email , phone , course)     ,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if(data.status){
        Cookies.set('username', data.name, { expires: 7 });
        window.location.href ="Thanks";

      }
      // Log the response data or do something with it
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    // const json= response.json();
 //   const msg= json;
 //   console.log(msg)
  }

  return (
    <>
        
        <div className="modal fade" id="exampleModalLong" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                <button
                onClick={toggleDisplay}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{
                    background: 'transparent',
                    borderColor: 'transparent',
                    fontSize: '31px',
                    fontWeight: '700',
                  }}
                
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="" method="post" className="px-2 " onSubmit={hsubmit}>
                  <label htmlFor="name">Name</label>
                  <input  onChange={handleChange}
                    type="text"
                    id="name" 
                    name="name" required
                    className="form-control w-100 my-2 border-dark"
                  />
                  <label htmlFor="email">Email</label>
                  <input  onChange={handleChange}
                    type="text"
                    id="email"
                    name="email" required
                    className="form-control w-100 my-2 border-dark"
                  />
                  <label htmlFor="phone">Phone</label>
                  <input  onChange={handleChange}
                    type="text"
                    id="phone"
                     name="phone"
                    maxLength="10" required
                    className="form-control w-100 my-2 border-dark" 
                  />
                  <label htmlFor="course">Course</label>
                  <input  onChange={handleChange}
                    type="text"
                    id="course"
                    name="course"
                    className="form-control w-100 my-2 border-dark " required
                  />
<div className='w-100 my-2'>
<center>
  <button className='btn btn-primary'>submit</button>
</center>
</div>


                </form>
              </div>
             
            </div>
          </div>
        </div>

        {/* Header */}
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid container-xl position-relative d-flex align-items-center">
            <a href="/" className="logo d-flex align-items-center me-auto">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="../assets/img/logo.png" alt=""> */}
              <h1 className="sitename">accredian</h1>
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active">
                  Refer & Earn
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Resources</a>
                </li>
               
           
                <li>
                  <button
                    className="btns"
                  onClick={toggleDisplay}
                    style={{
                      background: 'transparent ',
                      borderColor: 'transparent',
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                  >
                   Login
                  </button>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

          
          </div>
        </header>

        <Outlet />
      
      
        
    </>
  );
}

export default Header;
