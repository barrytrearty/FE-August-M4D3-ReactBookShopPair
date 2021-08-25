import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const MyNavbar = ({ title, color }) => {
  return (
    <Navbar bg={color} variant="secondary">
      <Navbar.Brand href="#">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Roosa's Reads</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Books"
            className="mr-2"
            aria-label="Search"
            onChange="FilterBookList(this.value)"
          ></FormControl>
          <Button variant="outline-success">GO</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
