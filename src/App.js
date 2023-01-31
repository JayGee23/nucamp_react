import { Routes, Route } from 'react-router-dom'
import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {Header, Footer} from './components/index'
import { ContactPage, HomePage, CampsitesDirectoryPage, CampsiteDetailPage, AboutPage} from './pages/index';
import { fetchCampsites } from './features/campsites/campsitesSlice';

//import ContactPage from './pages/ContactPage';
//import HomePage from './pages/HomePage';
//import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
//import CampsiteDetailPage from './pages/CampsiteDetailPage';
//import AboutPage from './pages/AboutPage';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route 
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
