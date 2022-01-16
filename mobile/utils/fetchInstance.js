import axios from 'axios';

const options = {
  headers: { 'Content-Type': 'application/json' },
  timeout: 6000,
  timeoutErrorMessage: 'Timed Out.Please try again',
};

export const getData = async url => {
  const result = await axios.get(url);
  return result.data;
};

export const postData = async (url, data = {}) => {
  const result = await axios.post(url, JSON.stringify(data), options);
  return result.data;
};
