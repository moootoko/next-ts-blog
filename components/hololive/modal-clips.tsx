import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

type Props = {
  clipsId: string[]
}

const ModalClips = ({clipsId}: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [width, height] = [400, 225];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Container>
            <Row className="mb-lg-3">
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={clipsId[0]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={clipsId[1]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={clipsId[2]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col xs={12} lg={6} className="d-flex justify-content-center mb-2 mb-lg-0">
                <iframe width={width} height={height} src={clipsId[3]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default ModalClips;