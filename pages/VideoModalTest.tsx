import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import BaseLayout from '../components/baselayout';

const VideoModalTest = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const width: number = 400;
  const height: number = 225;

  return (
    <BaseLayout>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Container>
            <Row className="mb-lg-3">
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src="https://www.youtube.com/embed/TtEtYRZZW3g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src="https://www.youtube.com/embed/G_T9MeJQetU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src="https://www.youtube.com/embed/H4RtkC2JwQ0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src="https://www.youtube.com/embed/8a1bbifkiRI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </BaseLayout>
  )
};

export default VideoModalTest;