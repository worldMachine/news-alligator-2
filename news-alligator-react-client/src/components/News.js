import React, {useState, useEffect} from 'react'

function News() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("items changed!!!")

    }, [items])
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result)
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
    else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title} 
              {/* {item.body} */}
              <img src={item.url}></img>
            </li>
          ))}
        </ul>
      );
    }
  }

  export default News;