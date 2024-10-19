import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Linkbox from "../Linkbox/Linkbox";
import icon1 from "../../assets/Pictures/icons/pc.png";
import icon2 from "../../assets/Pictures/icons/settings.png";
import icon3 from "../../assets/Pictures/icons/shirt.png";
import icon4 from "../../assets/Pictures/icons/running-shoe.png";
import icon5 from "../../assets/Pictures/icons/sofa.png";
import icon6 from "../../assets/Pictures/icons/cologne.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Add the 'visible' class when in view
            observer.disconnect(); // Stop observing after the animation triggers
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current); // Cleanup the observer
      }
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={heroSectionRef}
      className={isVisible ? "visible" : ""}
    >
      <div className="hero-container">
        <h2>Whatever You Are Looking For WE HAVE IT</h2>
        <div className="category-links">
          <Linkbox icon={icon1} title="Technique" />
          <Linkbox icon={icon2} title="Tools" />
          <Linkbox icon={icon3} title="Clothes" />
          <Linkbox icon={icon4} title="Shoes" />
          <Linkbox icon={icon5} title="Furniture" />
          <Linkbox icon={icon6} title="Cologne" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
