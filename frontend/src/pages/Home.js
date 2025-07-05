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
    {/*<Navbar />*/}
    < div className="home-shell">
    <div className="vertical-slice">
    <Hero />
    <AboutSection />
    <WhyChooseUs  />
    <ContactFormSection />
    </div>
    <ServiceSection />
    <ReviewSection />
    </div>
    </>
);
};

export default Home;
