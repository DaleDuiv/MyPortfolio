import React, { useState } from "react";
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default: 
        return <About />;
    }
  };  

  return (
    <div >
      <nav className="navbar">
        <div className="navbar-brand">
            <a className="navbar-item is-justify-content-center" rel="noreferrer" target="_blank" href="https://github.com/DaleDuiv?tab=repositories"> 
            <span className="content is-large headerName">Dale Duivesteyn</span> 
            </a>
        </div>
      </nav>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="container">
        <div className="content">
          {renderPage(currentPage)}
        </div>
      </main>
    </div>
  );
}