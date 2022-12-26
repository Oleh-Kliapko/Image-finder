import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from './App.slyled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { API } from '../services/api';

export class App extends Component {
  state = {
    imageName: '',
    images: [],
  };

  onSearchImages = async imageName => {
    this.setState({ imageName });
    const images = await API.getImages(imageName).catch(
      this.setState({ images: [] })
    );
    this.setState({ images });
  };

  render() {
    const { images } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSearchImages} />
        <ImageGallery images={images} />
        <ToastContainer autoClose={3000} />
      </AppWrapper>
    );
  }
}
