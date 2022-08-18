import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  //  setting initial values to empty string
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of email, name, or message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    };

          // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !contactName) {
        setErrorMessage('Email or name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      return;
    }
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
    alert(`Hello ${contactName}. Thanks for getting in touch!. `);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setContactName('');
    setEmail('');
    setMessage("");
  };
  return (
    <div>
      <p>Get in Touch!</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );


 
}; 
export default ContactForm;
