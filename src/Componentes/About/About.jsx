import React from "react";
import "./about.css";
import image from "./image1.jpeg";
const About = () => {
  return (
    <div className="container">
      <img src={image} alt="image" width="500px" height="500px"></img>
      <div className="description">
        <h1 className="about"> About Us </h1>
        <p >
            At TechShop, we are committed to providing the latest, most advanced
            technologies to drive our customers' success. We are a company
            passionate about connecting people and organizations with cutting-edge
            solutions that transform the way we live, work and relate. Our wide
            range of products includes cutting-edge electronic devices, hardware and
            software designed to meet the needs of individuals and businesses across
            all industries. 
        </p>

        <p >
            From smartphones and laptops to advanced security
            systems and home automation solutions, we are constantly updating our
            inventory to offer the best in technology. Plus, our dedicated team of
            technology experts are always on hand to provide personalized support
            and expert guidance, ensuring our customers get the maximum benefit from
            their purchases with us. At InovaTech Solutions, we don't just sell
            technology - we empower the future. Join us as we embark on this
            exciting journey of innovation and technological progress.
        </p>
        </div>
    </div>
  );
};

export default About;
