import React, {useState, useEffect} from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import 'typeface-roboto';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import newsArticles from '../services/NewsService';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     maxWidth: 200,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   newsGrid: {
//     fontSize: "10px"
//   },
//   articlePhoto: {
//     maxWidth: 100
//   }

// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    fontSize: 12
  },
  image: {
    width: "100em",
    height: "20em",
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img: {
    
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function News() {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
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
      // const classes = useStyles();

      return (


        // <ul>
        //   {items.map(item => (
        //     <li key={item.id}>
        //       {item.title} 
        //       <img src={item.url}></img>
        //     </li>
        //   ))}
        // </ul>

        // <Container>
        //   <Row>
        // {items.map(item => (
        //   <Col key={item.id}>
        //     {item.title} 
        //     <img src={item.url}></img>
        //   </Col>
        // ))}
        // </Row>
        // </Container>
 <div container className={classes.root}>
   <Container maxWidth="lg">
  <Grid container spacing={6}>

    {items.map (item => (
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paper} key={item.id}>
          {item.title} 
          <img src={item.url} className={classes.image}></img>
          this is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an article          this is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an article


        </Paper>
      </Grid>
    ))}

  </Grid>
  </Container>
</div> 

/* <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {items.map((item) => (
          <GridListTile key={item.img} cols={1}>
            <img src={item.url} alt={item.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>

<div className={classes.root}>
<Grid container spacing={3}>
  <Grid item xs>
    <Paper className={classes.paper}>xs</Paper>
  </Grid>
  
</Grid>
</div> */





      );
    }
  }

  export default News;