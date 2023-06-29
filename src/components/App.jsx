import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPixabay } from './services/api-pixabay';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showBtn: false,
    loading: true,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   fetchPixabay().then(response => {
  //     console.log(response);
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...response.data],
  //     }));
  //   });
  // }

  // componentDidMount(prevProps, prevState) {
  //   fetchPixabay('cat', 1).then(({ hits }) => console.log(hits));
  // }

  //       ;
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...response.data],
  //     }));
  //   });
  // }

  // переделать на асинк авейт
  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
try {
  fetchPixabay(query, page).then(({ hits }) => {
    this.setState(prevState => ({
      images: [...prevState.images, ...hits],
    }));
  });
} catch (error) {
  
}
      
    }
  }

  handleSearchSubmit = searchQuery => {
    if (searchQuery.trim() === '') {
      return toast.info('Enter a query');
    }

    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
      showBtn: false,
      loading: true,
    });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    // const { images, showBtn, loading } = this.state;
    const { images } = this.state;
    console.log(images);
    return (
      <AppContainer>
        <Searchbar handleSearchSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} />
        <Button handleClickLoadMore={this.handleClickLoadMore} />
      </AppContainer>
    );
  }
}
