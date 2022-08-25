import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SchoolQualifications = ({ schoolQualifications }) => {
    
    const [school, setSchool] = useState(schoolQualifications[0].school); 
    const [examType, setExamType] = useState(schoolQualifications[0].examType); 
    const [subject, setSubject] = useState(schoolQualifications[0].subject); 
    const [grade, setGrade] = useState(schoolQualifications[0].grade);
    const [year, setYear] = useState(schoolQualifications[0].year);
    const [weight, setWeight] = useState(schoolQualifications[0].weight); 
    const [priority, setPriority] = useState(schoolQualifications[0].priority); 
    const [description, setDescription] = useState(schoolQualifications[0].description);
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">School</th>
                    <th scope="col">Exam Type</th>
                    <th scope="col">Subject</th>
                    <th scope="col"> Grade </th>
                    <th scope="col">Year</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{school}</td>
                    <td>{examType}</td>
                    <td>{subject}</td>
                    <td className="btn-group dropup"> <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {grade} </button> </td>
                    <td>{year}</td>
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
              <Form.Label>School</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setSchool(e.target.value)}/>
            </Form.Group>
            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Exam Type</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setExamType(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setSubject(e.target.value)}/>
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
              <Form.Label>Year</Form.Label>
              <Form.Control type="date" rows={3} onChange={e => setYear(e.target.value)}/>
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

export default SchoolQualifications; 