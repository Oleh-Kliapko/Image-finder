import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loupe from '../../utils/loupe.svg';
import {
  SearchbarWrapper,
  SearchForm,
  SearchButton,
  LabelButton,
  SearchFormInput,
} from './Searchbar.styled';

const INITIAL_DATA = { data: '' };

export class Searchbar extends Component {
  state = INITIAL_DATA;

  handleChangeInput = evt => {
    this.setState({ data: evt.currentTarget.value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.dataPictures({ ...this.state });
    this.resetForm();
  };

  resetForm = () => this.setState(INITIAL_DATA);

  render() {
    const { data } = this.state;
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmitForm}>
          <SearchButton
            type="submit"
            style={{ backgroundImage: `url(${loupe})` }}
          >
            <LabelButton>Search</LabelButton>
          </SearchButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos..."
            value={data}
            onChange={this.handleChangeInput}
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
