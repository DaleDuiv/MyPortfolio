import React from "react";


export default function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />
        <a href="https://github.com/DaleDuiv/reactportfolio/raw/main/public/img/DaleResume24022023.pdf" download className="button is-primary">
          <span className="icon"> <i className="fas fa-download"></i> </span>  
        </a>
      </div>
    </div>
  );
  
}