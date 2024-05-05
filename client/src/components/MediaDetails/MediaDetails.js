import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MediaDetails.css'; 

const MediaDetails = () => {
  const { id } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${id}`);
        const mediaData = response.data.collection.items[0];
        const { data, links } = mediaData;

        // Filtering images and videos separately
        const imageLinks = links.filter(link => link.href.includes('image'));
        const videoLinks = links.filter(link => link.href.includes('video'));

        // Constructing media details object
        const mediaDetails = {
          ...data[0],
          images: imageLinks.map(link => link.href),
          videos: videoLinks.map(link => link.href)
        };
        setMediaDetails(mediaDetails);
        setError(null);
      } catch (error) {
        console.error('Error fetching media details:', error);
        setError('Error fetching media details');
      }
    };

    fetchMediaDetails();
  }, [id]);

  const handleKeywordClick = (keyword) => {
    window.location.href = `/MediaLibrary?search=${encodeURIComponent(keyword)}`;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div
        className="d-flex md-container">
        {mediaDetails && (
          <div className="container-fluid p-4 m-3 text-white">
            <div className="row md-row">
              <div className="col-md-6 p-2 md-media">
                {mediaDetails.images && mediaDetails.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} className="img-fluid" />
                ))}
                {mediaDetails.videos && mediaDetails.videos.map((video, index) => (
                  <video key={index} controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
              <div className="col-md-6 p-2 md-desc">
                <h2>{mediaDetails.title}</h2>
                <p><strong>NASA ID: </strong> {mediaDetails.nasa_id}</p>
                <p><strong>Center: </strong> {mediaDetails.center}</p>
                <p><strong>Date Created: </strong> {mediaDetails.date_created}</p>
                <p className='md-description' ><strong>Description: </strong> {mediaDetails.description}</p>
                <p><strong>Keywords: </strong>
                  {mediaDetails.keywords ? (
                    mediaDetails.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className='md-keywords'
                        onClick={() => handleKeywordClick(keyword)}
                      >
                        {keyword}
                        {index !== mediaDetails.keywords.length - 1 && ' , '}
                      </span>
                    ))
                  ) : (
                    'No keywords available'
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaDetails;
