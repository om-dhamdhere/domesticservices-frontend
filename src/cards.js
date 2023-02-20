import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import {Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Card = (props) => {
  return (
    <>

<div class="container">
    <div class="card-deck my-3" >
    <div class="card" >
    <img style={{height:150, width:300}} src={props.imgsrc} class="card-img-top" alt="..." />

      <div className="card-body text-dark" >
        <div class="card-body text-center">
        <h2 className="card-title">{props.title}</h2>
      </div>
    </div>

    <div className="card-body text-dark">
     <div class="card-body text-center">
     <p style={{fontSize:20}} className="card-text text-secondary">{props.data}</p> 
     </div>
   </div>

   
   <Link to="/gender" style={{fontSize:20}} class="btn btn-dark">
          Learn More
    </Link>

  </div>
  </div>
</div>



      </>
  );
};

export default Card;
