import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const CertificatesAndAwards = ({ certificatesAndAwards }) => {

    const [type, setType] = useState(certificatesAndAwards[0].type); 
    const [issuer, setIssuer] = useState(certificatesAndAwards[0].issuer); 
    const [award, setAward] = useState(certificatesAndAwards[0].award); 
    const [grade, setGrade] = useState(certificatesAndAwards[0].grade);
    const [year, setYear] = useState(certificatesAndAwards[0].year);
    const [weight, setWeight] = useState(certificatesAndAwards[0].weight); 
    const [priority, setPriority] = useState(certificatesAndAwards[0].priority); 
    const [description, setDescription] = useState(certificatesAndAwards[0].description);
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Issuer</th>
                    <th scope="col">Award</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Year</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <td>{type}</td>
                    <td>{issuer}</td>
                    <td>{award}</td>
                    <td className = "btn-group dropup"> <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {grade} </button> </td>
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
              <Form.Label>Type</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setType(e.target.value)}/>
            </Form.Group>
            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Issuer</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setIssuer(e.target.value)}/>
                        </Form.Group>
                        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Award</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setAward(e.target.value)}/>
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

export default CertificatesAndAwards;