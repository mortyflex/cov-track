import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

const fetchData = async () => {
  try {
    const res = await axios.get(URL);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export default fetchData;
