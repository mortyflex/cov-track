import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (err) {
    console.error(err);
  }
};
