// MediaLibrary.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './MediaLibrary.css'; 

const MediaLibrary = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryFromURL = queryParams.get('search') || '';

  useEffect(() => {
    setSearchQuery(queryFromURL);
  }, [queryFromURL]);

  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const response = await axios.get(
          `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`
        );
        setMediaItems(response.data.collection.items);
      } catch (error) {
        console.error('Error fetching media items:', error);
      }
    };

    fetchMediaItems();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container-fluid ml-container">
      <div className="row">
        <div className="col-xl-3 p-4">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="form-control form-input ml-searchform"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>

      <div className="row mt-5">
        {mediaItems.map((mediaItem, index) => (
          <div key={index} className="col ml-mediaitem">
            <Link to={`/media/${mediaItem.data[0].nasa_id}`}>
              <img
                src={mediaItem.links[0].href}
                alt={mediaItem.data[0].title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;
