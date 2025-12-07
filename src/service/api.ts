import axios from 'axios';
import { BASE_URL_API } from '../config';
import { AlertShow } from '../utils/AllertShow';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL_API}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
