import React, { Component } from 'react';
import './App.scss';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import utils from './utils';

import Header from './components/Header';
import SearchResults from './components/SearchResults'
import apiServices from './components/apiServices/apiServices';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      error: null,
      apiData: [],
      searchQuery: ''
    }
  }

  componentDidMount() {
    console.log('App.js state --->', this.state)
  }

  handleSubmit = () => {
    let tags = utils.keywordExtractor(this.state.searchQuery)
    if(tags.length > 4) {
      tags = tags.splice(0, 5).toString(',').replace(/[^\w\d ]/g, ';')
    }
    tags = tags.toString(',').replace(/[^\w\d ]/g, ';')
    apiServices.getSearchResult(tags)
    .then(res => {
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.items,
        searchQuery: ''
      })
    })
    .catch(err => {
      this.setState({
        error: err
      })
    })
  }

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    return (
        <div className="App">
          <Header 
            handleSearch={this.handleSearch}
            handleSubmit={this.handleSubmit}
            data={this.state}
          />
          <SearchResults 
            data={this.state}
          />
        </div>
    );
  }
}

export default App;
