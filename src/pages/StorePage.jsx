import React, { useState, useEffect, useRef } from 'react';
import LinkItem from '/src/components/LinkItem.jsx';
import socket from '/src/functions/socketConfig.js';

function StorePage() {
  // State for links, sorting, and filtering
  const [links, setLinks] = useState([]);
  const [sortBy, setSortBy] = useState('rank');
  const [filterBy, setFilterBy] = useState(0); // Initialize filterBy as 0 for no filter
  const [batchIndex, setBatchIndex] = useState(1); // Track the batch index
  const [loadedCount, setLoadedCount] = useState(10); // Number of links loaded initially and on scroll

  // Ref for the observer
  const observerRef = useRef(null);

  // Function to fetch and update links with the given batch index
  const fetchAndUpdateLinks = (batchIndex) => {
    // Send a request to the server to fetch data for the specified batch index
    socket.emit('fetchLinks', batchIndex);

    // Listen for updates from the server and update the links state
    socket.on('updateLinks', (data) => {
      setLinks(data);
    });
  };

  // Use the useEffect hook to fetch and update links when the component mounts
  useEffect(() => {
    fetchAndUpdateLinks(batchIndex);

    // Clean up the socket listener when the component unmounts
    return () => {
      socket.off('updateLinks');
    };
  }, [batchIndex]);

  // Use the Intersection Observer to handle lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Increment the batch index and load more links when the end of the list is in view
          setBatchIndex((prevIndex) => prevIndex + 1);
          setLoadedCount((prevCount) => prevCount + 10);
        }
      },
      { rootMargin: '0px 0px 100% 0px' } // Adjust the rootMargin as needed
    );

    if (observerRef.current && sortedAndFilteredLinks.length > loadedCount) {
      observerRef.current.observe(document.querySelector('.load-more-trigger'));
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadedCount, batchIndex]);

  // Handle sorting and filtering
  const sortedAndFilteredLinks = [...links]
    .sort((a, b) => {
      if (sortBy === 'rank') {
        return a.rank - b.rank;
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'mostVisited') {
        // Add your logic for sorting by most visited
      }
    })
    .filter((link) => link.rank >= filterBy)
    .slice(0, loadedCount);

  return (
    <div>
      {/* Sorting and Filtering Controls */}
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="rank">Rank</option>
          <option value="price">Price</option>
          <option value="mostVisited">Most Visited</option>
        </select>
      </div>
      <div>
        <label>Filter By Rank:</label>
        <select value={filterBy} onChange={(e) => setFilterBy(parseInt(e.target.value))}>
          <option value="0">All</option>
          <option value="3">Above 3</option>
          <option value="4">Above 4</option>
          <option value="5">Above 5</option>
          {/* Add more filter options as needed */}
        </select>
      </div>

      {/* List of Link Items */}
      <div className="link-items">
        {sortedAndFilteredLinks.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
        <div className="load-more-trigger" />
      </div>
    </div>
  );
}

export default StorePage;
