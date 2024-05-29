import React from 'react';
const Contact = () => {
  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Contact Us</h2>
        <p>Please fill out the form below to get in touch with us.</p>
        <form>
        <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email" required />
          <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="image-container">
        <img src="https://th.bing.com/th/id/OIP.6o3zLLHqB13Xb3MoB--KzgHaE8?w=2120&h=1414&rs=1&pid=ImgDetMain" alt="Person working on laptop" />
      </div>
      <div className="text-container">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Whether you have a question about our services or need assistance, we're here to help.</p>
      </div>
    </div>
  );
};

export default Contact;
