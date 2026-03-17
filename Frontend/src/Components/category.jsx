import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

const CARDS = [
  {
    title: 'Landslides',
    route: '/landslide',
    image: 'https://icdo.org/files/Landslides.jpg',
    theme: 'warm',        // earthy browns → amber accent
  },
  {
    title: 'Fog',
    route: '/fog',
    image: 'https://images.stockcake.com/public/7/0/3/70351657-d871-473a-9d9f-f276c5a2a624_large/foggy-road-ahead-stockcake.jpg',
    theme: 'cool',        // grey-blue mist → ice-white accent
  },
  {
    title: 'Danger Zone',
    route: '/danger-zone',
    image: 'https://media.istockphoto.com/id/2157089736/photo/red-car-on-a-winding-road.jpg?s=2048x2048&w=is&k=20&c=qHm9ilJMaWc8ESj6-ZPpVfLVAy2-gJ-pUHN2Dc2P6lQ=',
    theme: 'danger',      // deep red overlay → bright red accent
  },
  {
    title: 'Floody-Roads',
    route: '/flood',
    image: 'https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/flooded-road-621c60ec1dccd.jpg',
    theme: 'blue',        // deep blue overlay → cyan accent
  },
  
  {
    title: 'Snowy-Roads',
    route: '/snow-app',
    image: 'https://images.unsplash.com/photo-1518203441944-e9578e4b1635?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    theme: 'snow',        // near-white overlay → deep navy accent
  },
  {
    title: 'Global View',
    route: '/global-view',
    image: 'https://i0.wp.com/www.circleofblue.org/wp-content/uploads/2014/03/2013_6img18_Jun_2013_PTI6_18_2013_000174B-1000.jpg?w=1000&ssl=1',
    theme: 'teal',        // teal-night overlay → lime accent
  }
];

const CombinedCategory = () => {
  const navigate = useNavigate();

  return (
    <div id="category-section" className="combined-category-container">
      <div className="section-header">
        <h2 className="section-title">Explore the different hazard types in Uttarakhand</h2>
        <div className="section-divider"></div>
      </div>

      <div className="state-grid">
        {CARDS.map((card) => (
          <div
            key={card.route}
            className={`state-card theme-${card.theme}`}
            style={{ '--card-bg': `url("${card.image}")` }}
          >
            {/* actual background image layer */}
            <div className="card-bg-image" />

            {/* gradient scrim for contrast */}
            <div className="card-scrim" />

            <div className="state-image-container">
              <div className="state-content">
                <h3 className="state-title">{card.title}</h3>
                <button
                  className="state-button"
                  onClick={() => navigate(card.route)}
                >
                  Analyze
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedCategory;