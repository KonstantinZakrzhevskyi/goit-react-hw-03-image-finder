import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return <Searchbar onSubmit={this.handleFormSubmit} />;
  }
}

export default App;
