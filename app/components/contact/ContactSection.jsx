import React from "react";

const ContactSection = () => {
  return (
    <div className="text-white">
      <div>
        <label htmlFor="emailInput">Your Email</label>
        <input type="text" id="emailInput" />
      </div>
      <div>
        <label htmlFor="subjectInput">Subject</label>
        <input type="text" id="subjectInput" />
      </div>
      <div>
        <label htmlFor="messageInput">Message</label>
        <textarea id="messageInput" />
      </div>
      <button>Send Message</button>
    </div>
  );
};

export default ContactSection;
