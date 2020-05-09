import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import covImg from './assets/coronavirus.png';

import styles from './App.module.css';
import { fetchData } from './api';

export class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    //set state
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img src={covImg} alt="coronavirus" className={styles.image} />
          <h1>Cov-Tracker</h1>
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
