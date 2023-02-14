import React from "react";
// import Portrait from "../images/portrait";

export default function About()  {
  return (
    <div className='about content is-medium' >
        <h2>About Me</h2>
        <hr />
        <div className='about-body'>
          <img src={process.env.PUBLIC_URL + '/img/portrait.jpg'} alt="Dale Duivesteyn" className="myPortrait" />
          <p>I am an up and coming web developer currently undertaking a Coding Bootcamp through the University of Adelaide. I am enjoying my time as a student and I love learning about web development, it is engaging and the content really sticks with me. This portfolio is my first project made with React. I am constantly studying and coding to expand my knowledge of React and other technologies.</p>
        </div>

    </div>
)
}
