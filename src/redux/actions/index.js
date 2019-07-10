import { RECEIVE_DATA } from './types';

import jsPostsApi from '../../apis/jsPostsApi';

// Generates random int in range [0, 99].
const randomInt0To99 = () => {
  return Math.ceil(Math.random()*100) - 1;
}

export const fetchData = () => async (dispatch, getState) => {

  // Fetched data from json placeholder API.
  const data = await jsPostsApi();

  if (!data) return;

  // Formats data for stote.
  const reducedData = [
    data[randomInt0To99()],
    data[randomInt0To99()],
    data[randomInt0To99()],
    data[randomInt0To99()],
  ];

  dispatch({
    type: RECEIVE_DATA,
    payload: reducedData,
  });
}