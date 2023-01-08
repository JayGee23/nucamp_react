import React from 'react';
import './App.css';
import CampsiteList from './features/campsites/CampSitesList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsiteList />
      <Footer />
    </div>
  );
}

export default App;
