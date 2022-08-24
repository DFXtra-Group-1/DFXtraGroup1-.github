import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Degree = ({ degrees, setDegrees }) => {

    const { university, degreeSubject, degreeLevel, grade, fromDate, toDate, weight, priority, description } = degrees[0];
    const { setUniversity, setDegreeSubject, setDegreeLevel, setGrade, setFromDate, setToDate, setWeight, setPriority, setDescription } = setDegrees; 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChangeHandler = e => {
        //Validation to decide if
        setUniversity(e.target.value);
        // should be done or display validation error
    }; 

    return (
        <>
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
              <Form.Control as="textarea" rows={3}  onChange={onChangeHandler}/>
            </Form.Group>
            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Degree Subject</Form.Label>
              <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Degree Level</Form.Label>
              <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Grade</Form.Label>
              <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>From</Form.Label>
              <Form.Control type="date" rows={3} />
            </Form.Group>
                <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>To</Form.Label>
              <Form.Control type="date" rows={3} />
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Weight</Form.Label>
              <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Priority</Form.Label>
              <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
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
            
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">University</th>
                    <th scope="col">Degree Subject</th>
                    <th scope="col">Degree Level</th>
                    <th className="btn-group dropup" scope="col"> <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Grade </button> </th>
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
                    <td>{grade}</td>
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
        </>
    );
}


export default Degree;