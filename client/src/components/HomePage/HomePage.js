import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid" >

      <div className='row text-white' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="mt-5 position-relative">
          <div className="image-container">
            <h2 className="position-absolute top-0 start-0 m-3" >Image Of The Day</h2>
            <Link to={`/ImageOfTheDay`} className="btn btn-outline-light position-absolute bottom-0 end-0 m-3" role="button"> View Image <i class="bi bi-arrow-right-circle-fill"></i></Link>
            <p className="mt-3 m-3" style={{width: "50vw", textAlign: "justify"}}>"Explore the cosmos one image at a time with NASA's Image of the Day. From stunning snapshots of distant galaxies to breathtaking views of our own planet, each day brings a new visual journey through the wonders of space exploration. Join us as we uncover the beauty and mysteries of the universe through the lens of NASA's cutting-edge imaging technology."
            </p>
          </div>
        </div>
      </div>

      <div className="row text-white" style={{ backgroundColor: "black", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}  >
        <div className="mt-5 position-relative">
          <div className="image-container">
            <h2 className="position-absolute top-0 start-0 m-3">NASA Image and Video Library</h2>
            <Link to={`/MediaLibrary`} className="btn btn-outline-light position-absolute bottom-0 end-0 m-3" role="button">Browse Media Archive <i class="bi bi-arrow-right-circle-fill"></i></Link>
            <p className="mt-3 m-3" style={{width: "50vw", textAlign: "justify"}}>"Dive into the vast archive of NASA's Image and Video Library, where every click unveils a treasure trove of captivating visuals from the forefront of space exploration. From awe-inspiring photographs of distant celestial bodies to mesmerizing videos capturing the majesty of rocket launches and planetary landscapes, immerse yourself in the wonders of the cosmos. Join us on a journey of discovery as we unlock the beauty and intrigue of the universe, one image and video at a time."</p>
          </div>
        </div>
      </div>

      <div className="row text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
        <div className="mt-5 position-relative">
          <div className="image-container">
            <h2 className="position-absolute top-0 start-0 m-3">Mars Rover Photos</h2>
            <Link to={`/MarsRoverPage`} className="btn btn-outline-light position-absolute bottom-0 end-0 m-3" role="button">Start Exploring <i class="bi bi-arrow-right-circle-fill"></i></Link>
            <p className="mt-3 m-3" style={{width: "50vw", textAlign: "justify"}}>"Embark on a visual odyssey across the Red Planet with Mars Rover Photos. Delve into the Martian landscape through the lens of NASA's rovers, capturing panoramic vistas, intriguing rock formations, and evidence of ancient environments. Join us as we traverse the alien terrain and unravel the secrets of Mars, one captivating image at a time."</p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HomePage;
