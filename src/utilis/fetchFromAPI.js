import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '0d08f29bf3msh692a1e9b06d8ff7p1774f5jsnda5851b6f0af',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error.message}`);
    return null;
  }
};

export default fetchFromAPI;
