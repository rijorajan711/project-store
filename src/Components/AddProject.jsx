import React from 'react'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
function AddProject() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
       <Button variant="success" onClick={handleShow}>
       Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className='col-lg-6'>
              <label>

                  <input style={{display:"none"}} type='file'></input>
                  <img className='img-fluid' src='https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png'></img>
            
              </label>
                 </div>  
            <div className='col-lg-6'>
            <div className='mb-3'><input type='text' className='form-control' placeholder='Project Title'></input></div>
            <div className='mb-3'><input type='text' className='form-control' placeholder='Language Used'></input></div>
            <div className='mb-3'><input type='text' className='form-control' placeholder='Github Link'></input></div>
            <div className='mb-3'><input type='text' className='form-control' placeholder='Website Link'></input></div>
            <div className='mb-3'><input type='text' className='form-control' placeholder='Project Overview'></input></div>
            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject
