import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import BodySection from './components/Home/body/BodySection';
import FooterSection from './components/Home/footer/FooterSection';
import BrowseBooks from './components/Browse/BrowseBooks';
import ListBooks from './components/List/ListBooks';
import ProfileSection from './components/Profile/ProfileSection';
import GetRecommendations from './components/Recommendations/GetRecommendations';

function AppRoutes() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<BodySection />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/list" element={<ListBooks />} />
        <Route path="/recommendations" element={<GetRecommendations />} />
        <Route path="/profile" element={<ProfileSection />} />
      </Routes>
      
     <Routes>
        <Route path="/" element={<FooterSection />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;