import React from 'react';

class LinkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: {
        id: '1',
        title: 'Example Link',
        price_per_customer: 19.99,
        profit_for_sale: 5.0,
        link: 'https://example.com',
        description: 'A sample link description',
        money_made: 1000.0,
        related_tags: ['tag1', 'tag2', 'tag3'],
        image: 'link-image.jpg',
        people_using_link: 0,
        // You can add more properties as needed
      },
    };
  }

  render() {
    const { link } = this.state;

    return (
      <div className="link-item">
        {/* Display title, price, image, and other attributes */}
        <p>Title: {link.title}</p>
        <p>Price per Customer: ${link.price_per_customer}</p>
        <p>Profit for Sale: ${link.profit_for_sale}</p>
        <p>Description: {link.description}</p>
        <p>Money Made: ${link.money_made}</p>
        <p>Related Tags: {link.related_tags.join(', ')}</p>
        <img src={link.image} alt="Link" />
        <p>People Using Link: {link.people_using_link}</p>
        <a href={link.link} target="_blank" rel="noopener noreferrer">View Details</a>
      </div>
    );
  }
}

export default LinkItem;
