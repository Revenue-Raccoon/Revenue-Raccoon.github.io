import React, { useState } from 'react';
import layout from '/src/components/layout.jsx'

function LinkDetailsPage({ link }) {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('details');

  // Define tab content for 'details', 'price', and 'information'
  const tabContent = {
    details: (
      <div>
        {/* Display details content */}
        <p>Details: {link.details}</p>
      </div>
    ),
    price: (
      <div>
        {/* Display price content */}
        <p>Price: {link.price}</p>
      </div>
    ),
    information: (
      <div>
        {/* Display information content */}
        <p>Information: {link.information}</p>
      </div>
    ),
  };

  return (
    <layout>
    <div>
      <div className="image">
        <img src={link.image} alt="Link" />
      </div>
      <div className="tabs">
        <ul className="tab-navigation">
          <li
            className={activeTab === 'details' ? 'active' : ''}
            onClick={() => setActiveTab('details')}
          >
            Details
          </li>
          <li
            className={activeTab === 'price' ? 'active' : ''}
            onClick={() => setActiveTab('price')}
          >
            Price
          </li>
          <li
            className={activeTab === 'information' ? 'active' : ''}
            onClick={() => setActiveTab('information')}
          >
            Information
          </li>
        </ul>
        <div className="tab-content">{tabContent[activeTab]}</div>
      </div>
    </div>
    </layout>
  );
}

export default LinkDetailsPage;
