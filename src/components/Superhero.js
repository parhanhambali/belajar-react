import { Container, Card, Row, Col, Image } from 'react-bootstrap';

import killerImage from '../assets/action/killer.jpg';
import midwayImage from '../assets/action/midway.jpg';
import missingImage from '../assets/action/missing.jpg';
import platoonImage from '../assets/action/platoon.jpg';
import revoltImage from '../assets/action/revolt.jpg';
import seizenImage from '../assets/action/seizen.jpg';

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Superhero Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={killerImage} alt="Marvel Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">Film Rame </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={midwayImage} alt="Marvel Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">Film Rame </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={missingImage} alt="Marvel Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">Film Rame </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={platoonImage} alt="Marvel Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">Film Rame </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={revoltImage} alt="Marvel Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">Film Rame </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={seizenImage} alt="Marvel Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">Film Rame </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
