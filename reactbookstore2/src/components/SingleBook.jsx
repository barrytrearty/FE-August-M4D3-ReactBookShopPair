// import books1 from "../data/fantasy.json";
// import { Component } from "react";
import { Col } from "react-bootstrap";

const SingleBook = (obj) => {
  return (
    <Col key={obj.asin}>
      <div className="card mt-3">
        <img src={obj.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{obj.title}</h5>
          <div className="under-the-title">
            <h4>{obj.price}</h4>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBook;
