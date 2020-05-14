import axios from "axios";

const getArticles = async () => {
  // return axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
  let response = await axios.get("/api/news/all");
  console.log("article response: ", response);
  return response;
};

export default {
  getArticles,
};
