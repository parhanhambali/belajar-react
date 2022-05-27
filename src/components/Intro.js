import { Container, Row, Col, Button} from 'react-bootstrap'

const Intro = () => {
    return (
      <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">AYO NONTON FILM</div>
              <div className="title">BAYAR SEINGATNYA</div>
              <div className="introButton mt-4 text-center">
                <Button href="#trending" variant="primary">Lihat Semua Daftar</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Intro 