import React from "react";

export default function Footer() {
  return (
    <footer className="footer is-sticky-bottom">
      <div className="content has-text-centered">
      <hr className="footerHr"/>
        <p>
          <strong>Dale's Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/Daleduiv" target="_blank" rel="noreferrer">
            Dale Duivesteyn
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/in/dale-duivesteyn/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          <br></br>
          <a
            href="https://github.com/daleduiv"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
          <br></br>
          <a
            href="mailto: daduivesteyn@gmail.com"
            target="_blank" rel="noreferrer"
          >
          Email me
          </a>
          <br></br>
          <a
            href="https://stackoverflow.com/users/19672815/daleduiv"
            target="_blank" rel="noreferrer"
          >
          Stack Overflow
          </a>
        </p>
      </div>
    </footer>
  );
}