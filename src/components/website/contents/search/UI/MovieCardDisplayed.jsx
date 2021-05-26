import React from 'react'
import movieDb from '../../../../movieDb';
import { useDispatch, useSelector } from "react-redux";

const MovieCardDisplayed = () => {
  
  const movies = useSelector(state => state.movies);

    return movies.map((item) => (
        <div key={item.imdbID} className="card">
        <div>
          <div variant="top" src={item.img} />
          <div>
            <div className="d-flex">
              <div><b>Title:</b> {item.Title}</div>
           
            </div>
          </div>
        </div>
      </div>
  ));
}
        

export default MovieCardDisplayed



/*  <Card key={item.id} className="card">
      <div>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <div className="d-flex">
            <div><b>Title:</b> {item.title}</div>
            <div><b>Genre:</b> {item.genre}</div>
         
          </div>
        </Card.Body>
      </div>
    </Card> */
