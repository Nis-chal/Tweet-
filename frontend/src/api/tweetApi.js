import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getTweets = () => axios.get(`${API_URL}/tweets`);
export const createTweet = (tweet) => axios.post(`${API_URL}/tweets`, tweet);
export const deleteTweet = (id) => axios.delete(`${API_URL}/tweets/${id}`);
