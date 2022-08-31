import { Jumbotron, Button, Container } from "react-bootstrap";


const Welcome = () => {
  return (
    <Jumbotron Strive Books>
      <Container>
        <h1>Welcome!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          <Button variant="primary">Scopri di più</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Welcome


