import React from 'react';
import Hero from './Hero';
import Info from './Info1';
import Info1 from './Info';
import CreativeArtistsGallery from './CreativeArtistsGallery';
import FestivalInfo from './FestivalInfo';
import PerformersGallery from './PerformersGallery';

const Lydhagen = () => {
  return (
    <div>
      <Hero />
      <Info1 />
      <CreativeArtistsGallery />
      <Info />
      <PerformersGallery />
      <FestivalInfo />
    </div>
  );
};

export default Lydhagen;