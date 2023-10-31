import React from "react";
import '../index.css';

function AboutSection(){
    return(
        <section id="About-section">
      
        <div class="about-section">
         <div className="about">
         <h2>About OutBank</h2>
          <p>Welcome to OutBank, your trusted partner for secure and convenient online banking. We're more than just a financial institution; we're your gateway to a seamless and modern banking experience.</p>
         </div>
          
          <div className="mission"> 
          <h2>Our Mission</h2>
          <p>At OutBank, our mission is simple: to empower you with the tools and resources you need to manage your finances efficiently and securely. We understand that your financial well-being is paramount, and we're dedicated to making your banking experience as straightforward as possible.</p>
          </div>
         <div className="whom-i"> 
          <h2>Who We Are</h2>
          <p>OutBank is a leading internet banking service that has been serving customers for over a decade. We're known for our commitment to excellence, reliability, and cutting-edge technology. Our team of experts is passionate about delivering innovative solutions that simplify your banking journey.</p>
          </div>
          <div className="details"> 
          <h2>What Sets Us Apart</h2>
          <ul>
            <li><strong>Security First:</strong> Your financial security is our top priority. We employ the latest encryption and security measures to ensure your data remains safe and protected.</li>
            <li><strong>User-Friendly Experience:</strong> We've designed our platform with you in mind. OutBank is intuitive, easy to use, and accessible across all devices, giving you full control of your finances, whenever and wherever you need it.</li>
            <li><strong>24/7 Support:</strong> Our dedicated customer support team is available around the clock to assist you with any questions or concerns. We believe in providing the best service, always.</li>
            <li><strong>Innovation:</strong> We're constantly evolving to bring you the latest banking features and technologies. From mobile banking to online account management, we're here to make your life simpler.</li>
            <li><strong>Community Engagement:</strong> At OutBank, we're committed to giving back to the community. We actively participate in charitable initiatives and support local causes.</li>
          </ul>

        </div>
          
          <div className="join"> 
          <h2>Join the OutBank Family</h2>
          <p>We invite you to become a part of the OutBank family. Whether you're a seasoned investor, a new saver, or someone looking for a trusted financial partner, we have the solutions to meet your needs. Join us, and experience banking the OutBank way.</p>
          </div>
         
        </div>
      

    </section>
    );
}

export default AboutSection;