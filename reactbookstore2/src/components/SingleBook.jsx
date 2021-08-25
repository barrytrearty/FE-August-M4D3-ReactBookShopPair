import books1 from "../data/fantasy.json";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Container>
        <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <Col key={books1[0].asin}>
            <div className="card mt-3">
              <img src={books1[0].img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{books1[0].title}</h5>
                <div className="under-the-title">
                  <h4>{books1[0].price}</h4>
                  <div className="buttons-sect">
                    <button
                      className="btn btn-success cart-button"
                      onclick="addItemToCart(event)"
                    >
                      <i className="bi bi-cart-fill"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onclick="skipItem(event)"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
