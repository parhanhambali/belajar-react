import { Container, Card, Row , Col, Image} from 'react-bootstrap'

import anotherImage from '../assets/trending/another-round.jpg';
import controlImage from '../assets/trending/control.png'
import dreamsImage from '../assets/trending/dreams.jpg'
import inceptionImage from '../assets/trending/inception.jpg'
import inseparableImage from '../assets/trending/inseparable.jpg'
import mortalImage from '../assets/trending/mortal.jpg'

const Trending = () => {
    return (
      <div>
        <Container>
          <br />
            <h1 className="text-white">Trending Movies</h1>
          <br />
          <Row>
            <Col md={4} className="movieWrapper" id="trending">
              <Card className="movieImage">
                <Image src={anotherImage} alt="Marvel Movies" className="images" />
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
                <Image src={controlImage} alt="Marvel Movies" className="images" />
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
                <Image src={dreamsImage} alt="Marvel Movies" className="images" />
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
                <Image src={inceptionImage} alt="Marvel Movies" className="images" />
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
                <Image src={inseparableImage} alt="Marvel Movies" className="images" />
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
                <Image src={mortalImage} alt="Marvel Movies" className="images" />
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
}

export default Trending