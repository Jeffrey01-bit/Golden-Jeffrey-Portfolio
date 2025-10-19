import React, { useState, useEffect } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  
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
      const worksToHide = mywork_data.length - 3;
      for (let i = 0; i < worksToHide; i++) {
        setTimeout(() => {
          setVisibleCount(prev => prev - 1);
          if (i === worksToHide - 1) {
            setShowAll(false);
            setIsLoading(false);
          }
        }, i * 200);
      }
    } else {
      setIsLoading(true);
      const remainingWorks = mywork_data.length - 3;
      for (let i = 0; i < remainingWorks; i++) {
        setTimeout(() => {
          setVisibleCount(prev => prev + 1);
          if (i === remainingWorks - 1) {
            setShowAll(true);
            setIsLoading(false);
          }
        }, i * 200);
      }
    }
  };
  
  const worksToShow = isDesktop ? mywork_data : mywork_data.slice(0, showAll ? mywork_data.length : visibleCount);

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {worksToShow.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      {!isDesktop && (
        <div className="mywork-showmore" onClick={handleLoadMore}>
          <p>{showAll && !isLoading ? 'Show Less' : 'Show More'}</p>
          <img src={arrow_icon} alt="" style={{transform: showAll && !isLoading ? 'rotate(180deg)' : 'rotate(0deg)'}} />
        </div>
      )}
    </div>
  );
};

export default MyWork;
