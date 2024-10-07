import React from 'react';
import Hero from './Hero';
import Info from './Info';
import Info1 from './Info1';
import CreativeArtistsGallery from './CreativeArtistsGallery';
import FestivalInfo from './FestivalInfo';
import PerformersGallery from './PerformersGallery';

const Lydhagen = () => {
  return (
    <div>
      <Hero />
      <Info />
      <PerformersGallery />
      <Info1 />
      <CreativeArtistsGallery />
      <FestivalInfo />
    </div>
  );
};

export default Lydhagen;