import React from 'react';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = images => {
  const { id, webformatURL, largeImageURL } = images;

  return <Gallery></Gallery>;
};
