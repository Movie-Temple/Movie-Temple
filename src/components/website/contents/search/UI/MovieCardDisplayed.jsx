import React from 'react'
import movieDb from '../../../../movieDb'

const MovieCardDisplayed = ({ movieDb }) => {
    return movieDb.map((item) => (
        <div key={item.id} className="card">
        <div>
          <div variant="top" src={item.img} />
          <div>
            <div>{item.names}</div>
            <div className="d-flex">
              <div><b>{movieDb}</b> {item.titles}</div>
           
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
