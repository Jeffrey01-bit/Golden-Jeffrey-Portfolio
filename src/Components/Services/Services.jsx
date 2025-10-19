import React, { useState, useEffect } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [fadingOut, setFadingOut] = useState([]);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleLoadMore = () => {
    if (showAll) {
      setIsLoading(true);
      const servicesToHide = Services_Data.length - 3;
      for (let i = 0; i < servicesToHide; i++) {
        setTimeout(() => {
          setVisibleCount(prev => prev - 1);
          if (i === servicesToHide - 1) {
            setShowAll(false);
            setIsLoading(false);
          }
        }, i * 200);
      }
    } else {
      setIsLoading(true);
      const remainingServices = Services_Data.length - 3;
      for (let i = 0; i < remainingServices; i++) {
        setTimeout(() => {
          setVisibleCount(prev => prev + 1);
          if (i === remainingServices - 1) {
            setShowAll(true);
            setIsLoading(false);
          }
        }, i * 200);
      }
    }
  };
  
  const servicesToShow = isDesktop ? Services_Data : Services_Data.slice(0, showAll ? Services_Data.length : visibleCount);

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {servicesToShow.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      {!isDesktop && (
        <div className="services-loadmore" onClick={handleLoadMore}>
          <p>{showAll && !isLoading ? 'Show Less' : 'Load More'}</p>
          <img src={arrow_icon} alt="" style={{transform: showAll && !isLoading ? 'rotate(180deg)' : 'rotate(0deg)'}} />
        </div>
      )}
    </div>
  );
};

export default Services;
