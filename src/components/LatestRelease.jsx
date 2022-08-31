import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import horror from "../data/horror.json";

class LatestRelease extends Component {

  state = { selectedGenre: horror };

  render() {
    return (
      
      <Container>
        <Row >
          {horror.map((book) => {
            return (
              <Col>

                <Card>
                  <Card.Img variant="top" src={book.img} />

                  <Card.Body>

                    <Card.Title>{book.title}</Card.Title>

                    <Card.Text>
                      <b>Genere</b>: {book.category}
                    </Card.Text>

                    <Card.Text>
                      <b>ASIN</b>: {book.asin}
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer>
                    <Button variant="warning">{book.price} €</Button>
                  </Card.Footer>

                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;

// https://medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7
