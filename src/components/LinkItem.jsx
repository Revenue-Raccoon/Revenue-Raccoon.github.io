// LinkItem.jsx

import React from 'react';

class LinkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {
        id: '1',
        price: 19.99,
        image: 'link-image.jpg',
        // You can add more properties like 'details', 'information', etc.
      },
    };
  }

  render() {
    const { link } = this.state;

    return (
      <div className="link-item">
        {/* Display rank, price, and image */}
        <p>Rank: {link.rank}</p>
        <p>Price: ${link.price}</p>
        <img src={link.image} alt="Link" />
        <Link to={`/link/${link.id}`}>View Details</Link>
      </div>
    );
  }
}

export default LinkItem;
