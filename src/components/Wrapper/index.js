import React from "react";
import "./style.css";

function Card() {
  return (
    <div className="col-12 col-sm-3">
      <div className="card mb-4" >
        <div className="text-center">
          <img src="/img/mrtreeger.jpg" className="card-img-top p-2" alt="" style={{width:"100%", height: "100%"}} />
        </div>
      </div>
    </div>
  )
}

function Cards() {
  return (
  <div className="container" style={{width:"800px"}}>
    <div class="row">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
  )
}

function Wrapper(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
      <Cards />
    </div>
  )
}

export default Wrapper;




