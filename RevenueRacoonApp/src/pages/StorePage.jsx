import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import LinkItem from '../components/LinkItem.jsx';
import socket from '../functions/socketConfig.js';

function StorePage() {
  const [links, setLinks] = useState([]);
  const [batchIndex, setBatchIndex] = useState(1);
  const [loadedCount, setLoadedCount] = useState(10);
  const observerRef = useRef(null);

  const fetchAndUpdateLinks = () => {
    socket.emit('fetchLinks', batchIndex);
  };

  useEffect(() => {
    const handleUpdateLinks = (data) => {
      const parsedData = JSON.parse(data);

      console.log("data", parsedData);

      setLinks((prevLinks) => {
        const uniqueLinks = [...prevLinks, ...parsedData].filter(
          (link, index, self) => self.findIndex((l) => l.id === link.id) === index
        );
        return uniqueLinks;
      });

      setBatchIndex((prevIndex) => prevIndex + 1);
    };

    socket.on('updateLinks', handleUpdateLinks);

    return () => {
      socket.off('updateLinks', handleUpdateLinks);
    };
  }, [batchIndex]);

  useEffect(() => {
    const observerOptions = { rootMargin: '0px 0px 50% 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoadedCount((prevCount) => prevCount + 10);
        }
      });
    }, observerOptions);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.disconnect();
      }
    };
  }, [links, loadedCount]);

  useEffect(() => {
    fetchAndUpdateLinks();

    return () => {
      socket.off('updateLinks');
    };
  }, []);

  return (

      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
        <View style={{ height: 50 }} ref={observerRef} />
      </ScrollView>
  );
}

export default StorePage;
