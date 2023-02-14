import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    name:"",
    email:"",
    message:"",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Invalid email");
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }
  if (!errorMessage) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
}
  function handleBlank(e) {
    if (e.target.name === "Name" || e.target.name === "Message") {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
          setErrorMessage("");
      }
    } if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
	return (
		<section >
			<div className="center content is-medium contact">
				<h2 className="page-header">Contact Me</h2>
			</div>
			<div>
				<form id="contact-form">
					<div>
                        <br></br>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
                        <br></br>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
                        <br></br>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<br></br>
					<button className="button is-small is-primary" data-testid="button" type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}