import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Degree = ({ degrees }) => {

    
    const [university, setUniversity] = useState(degrees[0].university ); 
    const [degreeSubject, setDegreeSubject] = useState(degrees[0].degreeSubject); 
    const [degreeLevel, setDegreeLevel] = useState(degrees[0].degreeLevel); 
    const [grade, setGrade] = useState(degrees[0].grade); 
    const [fromDate, setFromDate] = useState(degrees[0].fromDate); 
    const [toDate, setToDate] = useState(degrees[0].toDate);
    const [weight, setWeight] = useState(degrees[0].weight); 
    const [priority, setPriority] = useState(degrees[0].priority); 
    const [description, setDescription] = useState(degrees[0].description); 
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <table className="table">
            <thead>
                <tr>
                    <th scope="col">University</th>
                    <th scope="col">Degree Subject</th>
                    <th scope="col">Degree Level</th>
                    <th scope="col"> Grade </th>
                    <th scope="col"> From </th>
                    <th scope="col">To</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
            <th scope="row"> {university} </th>
                    <td>{degreeSubject}</td>
                    <td>{degreeLevel}</td>
                   <td className="btn-group dropup" > <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {grade} </button> </td>
                        <td> {fromDate}</td>
                    <td> {toDate} </td>
                    <td>{weight}</td>
                    <td>{priority}</td>
                    <td>{description}</td>
                    </tr>
            <Button variant="primary" onClick={handleShow}>
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
              <Form.Label>University</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setUniversity(e.target.value)}/>
            </Form.Group>
            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Degree Subject</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setDegreeSubject(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Degree Level</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setDegreeLevel(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Grade</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setGrade(e.target.value)}/>
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
    );
}


export default Degree;