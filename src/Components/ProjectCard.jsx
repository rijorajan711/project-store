import React from 'react'
import { useState } from 'react'
import {Card,Modal,Row,Col} from "react-bootstrap" 
function ProjectCard() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnaN2-5PBLKmzNkNLc4JYKy31fssQ_M3sUtonnY_o&s" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
    
        
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img style={{height:'200px'}} className='img-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnaN2-5PBLKmzNkNLc4JYKy31fssQ_M3sUtonnY_o&s'></img>
                </Col>
                <Col md={6}>
                    <h2>Projecttitle</h2>
                    <p>Project Overview</p>
                    <p>Languade Used:<span className='fw-bolder'>HTML,CSS,React</span></p>


                </Col>
            </Row>
            <div className='mt-3'>
               <a href='https://github.com/rijorajan711`  ' target='_blank' className='me-3 btn'><i className='fa-brands fa-github fa-2x'></i></a>
               <a href='https://github.com/rijorajan711/furnitureAppwithReduxTailwindJsonserver-' target='_blank' className='me-5 btn'><i className='fa-solid fa-link fa-2x'></i></a>
            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard
