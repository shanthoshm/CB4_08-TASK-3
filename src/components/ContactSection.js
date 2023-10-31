import React from "react";
import '../index.css';

function ContactSection(){
    return(
        <section id="Contact-section">
        <div className="contact-section">
          <div className="contact"> 
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, please don't hesitate to get in touch with our customer support team. We're here to help you.</p>
          </div>
          
          <div className="phone">
          <h3>Contact Information</h3>
          <ul>
            <li><strong>Phone:</strong> +91-800-123-4567</li>
            <li><strong>Email:</strong> info@ourbank.com</li>
          </ul>
          <h3>Customer Support Availability</h3>
          <p>Our customer support team is available around the clock, 24/7, to assist you with any questions or concerns.</p>
          </div>
          
      </div>
      </section>
    );
}

export default ContactSection;