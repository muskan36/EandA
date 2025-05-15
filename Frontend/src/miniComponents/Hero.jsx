import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
         Raising funds for animals, wildlife conservation, climate change, tree plantation, and ocean cleanup is crucial for protecting our planet. Donations help rescue endangered species, restore natural habitats, reduce carbon footprints, and clean polluted oceans. Every contribution supports sustainable initiatives, from planting trees to funding marine conservation projects. Together, we can create a healthier, greener, and more sustainable future for all living beings. 
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.jpg" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;