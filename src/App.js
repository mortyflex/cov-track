import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import fetchData from './api';

export class App extends Component {
  componentDidMount() {
    fetchData();
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
