import React from 'react';

function navTabs({ currentPage, handlePageChange }) {
    return (
        <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">TH</a></h1>    
     

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <a 
            class="nav-link scrollto active" 
            href="#hero" 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >Home</a>
            </li>
          <li>
            <a class="nav-link scrollto" 
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >About</a></li>          
          <li>
            <a 
            class="nav-link scrollto " 
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            >Work</a></li>
          <li>
            <a 
            class="nav-link scrollto " 
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a>
         </li>
          <li>
            <a 
            class="nav-link scrollto"
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >Contact</a>
            </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    );

}

export default navTabs;