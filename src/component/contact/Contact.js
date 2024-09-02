import React, { useRef } from 'react';
import './Contact.css'; // Import the CSS file

export default function Contact() {
  const formRef = useRef(null); // Create a ref for the form

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted');

    const formData = new FormData(formRef.current); // Use ref to get the form element

    fetch(
      'https://script.google.com/macros/s/AKfycbwFDvIrLfoYWSZnU5tQaf7PIdjnbQCtjE-XJ6CjlsH7ppT0xDKHBp4ud4oDGC7UjJaP/exec',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Form submission was successful. Thank you. We will get back to you.');
      })
      .catch((error) => {
        console.error('Error during form submission:', error);
      });
  }

  return (
    <div className="contact-container">
      <img
        className="contact-bg-image"
        src="https://t4.ftcdn.net/jpg/05/08/77/97/360_F_508779720_mevGw0UiCDurA6A195ayIk5sxaGFwuEu.jpg"
        alt="Background"
      />
      <div className="contact-form-overlay">
        <div className="contact-form-background"></div>
      </div>
      <div className="contact-form-overlay">
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-content">
            <div className="contact-form-header">
              <div className="contact-form-title">
                <p>Get a Free Demo</p>
              </div>
            </div>
            <div className="contact-form-subtitle">
              <div className="contact-form-description">
                <p className="text-center">
                  We will help you save time, money, and resources and improve productivity at scale - all on one powerful, easy-to-use platform.
                </p>
              </div>
            </div>
            <div className="contact-form-fields1">
              <div className="contact-input-group">
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  required
                />
              </div>
              <div className="contact-input-group">
                <input
                  className="contact-input"
                  type="email"
                  placeholder="Professional Email"
                  name="Email"
                  required
                />
              </div>
              
              <div className="contact-input-group">
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                  required
                />
              </div>
              <div className="contact-input-group">
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Company Name"
                  name="CompanyName"
                  required
                />
              </div>
            </div>
            <div className="contact-form-submit">
              <input
                className="contact-submit-button"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
