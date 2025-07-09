import React from "react";
//import Navbar from "../components/Navbar";//
import './Home.css'; 

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactFormSection from "../components/ContactFormSection";
import ServiceSection from "../components/ServiceSection";
import ReviewSection from "../components/ReviewSection";


const Home = () => {
return (
    <>
    
    <Hero />
    <AboutSection />
    <WhyChooseUs  />
    <ContactFormSection />
    <ServiceSection />
    <ReviewSection />
    </>
);
};

export default Home;
