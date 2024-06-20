// src/App.js
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import './SearchApp.module.css';

class SearchApp extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const apiKey = '35626787-1bb82a1b86a7ccdeac34922a3';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleFormSubmit = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <p>Loading...</p>}
      </div>
    );
  }
}

export default SearchApp;
