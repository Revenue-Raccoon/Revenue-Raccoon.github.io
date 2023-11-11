import React, { useState, useEffect, useRef } from 'react';
import LinkItem from '/src/components/LinkItem.jsx';
import socket from '/src/functions/socketConfig.js';
import Layout from '/src/components/layout.jsx';

function StorePage() {
  const [links, setLinks] = useState([]);
  const [sortBy, setSortBy] = useState('rank');
  const [filterBy, setFilterBy] = useState(0);
  const [batchIndex, setBatchIndex] = useState(1);
  const [loadedCount, setLoadedCount] = useState(10);
  const observerRef = useRef(null);

  // Function to fetch links for a given batch index
  const fetchAndUpdateLinks = (batchIndex) => {
    socket.emit('fetchLinks', batchIndex);
    socket.on('updateLinks', (data) => {
      setLinks((prevLinks) => [...prevLinks, ...data]);
    });
  };

  // Use an Intersection Observer to detect when to load more links
  useEffect(() => {
    fetchAndUpdateLinks(batchIndex);
    return () => {
      socket.off('updateLinks');
    };
  }, [batchIndex]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Increment the batch index when the "Load More" trigger is in the viewport
          setBatchIndex((prevIndex) => prevIndex + 1);
        }
      },
      { rootMargin: '0px 0px 100% 0px' }
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

  // Modify the sorted and filtered links to include only the desired number
  const sortedAndFilteredLinks = links
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
    <Layout>
      <div>
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
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(parseInt(e.target.value))}
          >
            <option value="0">All</option>
            <option value="3">Above 3</option>
            <option value="4">Above 4</option>
            <option value="5">Above 5</option>
          </select>
        </div>

        <div className="link-items">
          {sortedAndFilteredLinks.map((link) => (
          <LinkItem key={link.id} link={link} />
          ))}
          <div className="load-more-trigger" />
        </div>
      </div>
    </Layout>
  );
}

export default StorePage;
