import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from './App.slyled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { API } from '../services/api';
import { Loader } from './Loader/Loader';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    loading: false,
    visibleBtn: false,
    largeImg: '',
  };

  onSearchImages = async imageName => {
    if (imageName !== this.state.imageName) {
      this.setState({ loading: true });
      const images = await API.getImages(imageName)
        .catch(
          this.setState({
            imageName: '',
            images: [],
            visibleBtn: false,
          })
        )
        .finally(() => this.setState({ loading: false }));
      this.setState({ imageName, images, loading: false, visibleBtn: true });
    } else {
      toast.warn('The new search must be different from the current search');
    }
  };

  onSelectedImage = link => {
    this.setState({ largeImg: link });
  };

  render() {
    const { images, loading, visibleBtn } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSearchImages} />
        {loading && <Loader />}
        <ImageGallery images={images} onSelected={this.onSelectedImage} />
        {visibleBtn && <ButtonLoadMore />}
        <ToastContainer autoClose={3000} />
      </AppWrapper>
    );
  }
}
