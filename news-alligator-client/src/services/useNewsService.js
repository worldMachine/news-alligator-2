import axios from "axios";

const getArticles = async (pageNum) => {
  console.log("pageNum is: ", pageNum);

  // let page = pageNum.toString();
  // return axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
  // let response = await axios.get("/api/news/all");
  let response = await axios.get("/api/news/recent", {
    params: { page: pageNum },
  });
  console.log("article response: ", response);
  return response;
};

// const getNextAr = async () => {
//   let response = await axios.get("/api/news/recent");
//   console.log("article response: ", response);
//   return response;
// };

// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// }).then...

export default {
  getArticles,
};
