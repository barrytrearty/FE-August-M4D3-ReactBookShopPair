import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";
// import books1 from "../data/fantasy.json";

const BookList = ({ array }) => {
  return (
    <Container>
      <Row className="row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {array.map((book) => SingleBook(book))}
      </Row>
    </Container>
  );
};

export default BookList;
