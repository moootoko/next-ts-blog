import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

type Props = {
  clipsId: string[]
}

const ModalClips = ({clipsId}: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [width, height] = [400, 225];
  const embedUrlPrefix = 'https://www.youtube.com/embed/';

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faFilm} size="2x" />
      </Button>
      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Container>
            <Row className="mb-lg-3">
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={embedUrlPrefix + clipsId[0]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={embedUrlPrefix + clipsId[1]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={embedUrlPrefix + clipsId[2]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={embedUrlPrefix + clipsId[3]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default ModalClips;