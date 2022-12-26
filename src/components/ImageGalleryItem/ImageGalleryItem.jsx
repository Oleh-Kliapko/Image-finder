import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const Item = ({ webformatURL, tags }) => {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

Item.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
