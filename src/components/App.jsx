import React, { Component } from 'react';
import { AppWrapper } from './App.slyled';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  findImages = data => {
    console.log(data);
  };

  render() {
    return (
      <AppWrapper>
        <Searchbar dataPictures={this.findImages} />
      </AppWrapper>
    );
  }
}
