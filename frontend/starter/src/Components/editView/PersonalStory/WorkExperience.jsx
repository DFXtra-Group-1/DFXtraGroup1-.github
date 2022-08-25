import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const WorkExperience = ({ workExperience }) => {

  const [type, setType] = useState(workExperience[0].type); 
    const [employer, setEmployer] = useState(workExperience[0].employer); 
    const [position, setPosition] = useState(workExperience[0].position); 
    const [fromDate, setFromDate] = useState(workExperience[0].fromDate);
    const [toDate, setToDate] = useState(workExperience[0].toDate);
    const [weight, setWeight] = useState(workExperience[0].weight); 
    const [priority, setPriority] = useState(workExperience[0].priority); 
    const [description, setDescription] = useState(workExperience[0].description);
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Employer or other organization</th>
      <th scope="col">Position</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Weight</th>
      <th scope="col">Priority</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
            <td>{type}</td>
      <td>{employer}</td>
      <td>{position}</td>
      <td>{fromDate}</td>
      <td>{toDate}</td>
      <td>{weight}</td>
      <td>{priority}</td>
      <td>{description}</td>
    </tr>
    <Button className = "btn btn-outline-primary" variant="primary" onClick={handleShow}>
        Edit
      </Button>
  </tbody>
</table>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Type</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setType(e.target.value)}/>
            </Form.Group>
            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Employer or other organization </Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setEmployer(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Position</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setPosition(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>From</Form.Label>
              <Form.Control type="date" rows={3} onChange={e => setFromDate(e.target.value)}/>
            </Form.Group>
                <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
              <Form.Label>To</Form.Label>
              <Form.Control type="date" rows={3} onChange={e => setToDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Weight</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setWeight(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Priority</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setPriority(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setDescription(e.target.value)}/>
                        </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
            </Modal>
      </>
    )
}

export default WorkExperience; 