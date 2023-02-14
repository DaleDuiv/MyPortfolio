import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <hr />
        <p>
          <strong>Dale's Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/Dalduiv" target="_blank" rel="noreferrer">
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
        </p>
      </div>
    </footer>
  );
}