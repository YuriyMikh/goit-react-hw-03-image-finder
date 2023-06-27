import React, { Component } from 'react';
import axios from 'axios';
import { AppContainer } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPixabay } from './services/api-pixabay';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showBtn: false,
    loading: true,
  };

  //переделать! на componentDidUpdate
  componentDidMount() {
    fetchPixabay('car', 1).then(({ hits }) =>
      this.setState({ images: [...hits] })
    );
  }

  //дописать проверку на пустую строку
  handleSearchSubmit = searchQuery => {
    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
      showBtn: false,
      loading: true,
    });
  };

  render() {
    // console.log(this.state.data);
    return (
      <AppContainer>
        <Searchbar handleSearchSubmit={this.handleSearchSubmit}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
      </AppContainer>
    );
  }
}
