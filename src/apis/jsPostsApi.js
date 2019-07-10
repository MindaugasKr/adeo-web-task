import axios from 'axios';

export default async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    return response.status === 200 ?
      response.data :
      undefined;
  } catch {
    return undefined;
  }
}