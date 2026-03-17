import React from 'react';
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './sliding.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidingData = [
  {
    id: 1,
    title: "Landslide",
    description: "Early warning and monitoring of landslide-prone highway corridors to support safer travel and faster response.",
    image: "https://images.unsplash.com/photo-1621315898086-0e940d7a221e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Flood",
    description: "Detection of surface water and flooding on highways to identify risky stretches and potential closures.",
    image: "https://images.unsplash.com/photo-1657069345471-c54f2432b79c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 3,
    title: "Fog",
    description: "Detection of highways with fog presence to highlight low-visibility zones and improve route awareness.",
    image: "https://images.unsplash.com/photo-1534307965816-94396c7de0d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 4,
    title: "Snow",
    description: "Detection of snow and ice conditions on highways to flag winter hazards and prioritize maintenance.",
    image: "https://images.unsplash.com/photo-1676987479987-555d2401d1dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 5,
    title: "Danger Zones",
    description: "Identify vulnerable highway segments using terrain and hazard indicators to support safer planning and operations.",
    image: "https://images.unsplash.com/photo-1590865616814-02ceb702269a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Sliding = () => {
  const handleGetStartedClick = () => {
    const categorySection = document.getElementById('category-section');
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const SamplePrevArrow = ({ onClick }) => {
    return (
      <div 
        onClick={onClick}
        className="sliding-arrow sliding-arrow-prev"
      >
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const SampleNextArrow = ({ onClick }) => {
    return (
      <div 
        onClick={onClick}
        className="sliding-arrow sliding-arrow-next"
      >
        <AiOutlineArrowRight />
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  return (
    <div className="sliding-container">
      <Slider {...sliderSettings}>
        {slidingData.map((slide) => (
          <div key={slide.id} className="sliding-slide">
            <div className="sliding-content">
              <div className="sliding-text-content">
                <h3 className="sliding-subtitle">Welcome to Uttarakhand Hazard Monitoring Dashboard</h3>
                <h1 className="sliding-title">{slide.title}</h1>
                <p className="sliding-description">{slide.description}</p>
                <button
                  className="sliding-button"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </div>
              <div className="sliding-image-wrapper">
                <div className="sliding-image-container">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="sliding-image" 
                    loading="lazy"
                  />
                  <div className="sliding-image-glow"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliding;