import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use EmailJS or a backend endpoint to handle email sending
    // This example assumes you’re using EmailJS (client-side)
    // Make sure to install emailjs-com and configure it
    // npm install emailjs-com
    // And then uncomment below after setup:

    /*
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_USER_ID'
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
    */

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="socials">
          <h3>Connect with me</h3>
          <a href="https://github.com/cesarWrites" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sarah-mukuti-10768b184/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsarahmukuti"target="_blank" rel="noopener noreferrer">X</a>
        </div>

        {/* <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Me</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form> */}
      </div>
      <p>© {new Date().getFullYear()} Sarah Mukuti. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
