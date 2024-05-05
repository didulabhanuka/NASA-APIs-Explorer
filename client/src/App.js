import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import HomePage from './components/HomePage/HomePage';
import ImageOfTheDay from './pages/ImageOfTheDay/ImageOfTheDay';
import MarsRoverPage from './pages/MarsRoverPage/MarsRoverPage';
import MediaLibrary from './pages/MediaLibrary/MediaLibrary'; 
import MediaDetails from './components/MediaDetails/MediaDetails';
import Navbar from './components/Navigations/Navbar'; 
import Footer from './components/Navigations/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ImageOfTheDay" element={<ImageOfTheDay />} />
        <Route path="/MarsRoverPage" element={<MarsRoverPage />} />
        <Route path="/MediaLibrary" element={<MediaLibrary />} />
        <Route path="/Media/:id" element={<MediaDetails />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
