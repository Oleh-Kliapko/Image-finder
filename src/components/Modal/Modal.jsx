import React from 'react';
import { Overlay, ModalWrapper } from './Modal.styled';

export const Modal = ({ largeImg, tags }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <img src={largeImg} alt={tags} />
      </ModalWrapper>
    </Overlay>
  );
};
