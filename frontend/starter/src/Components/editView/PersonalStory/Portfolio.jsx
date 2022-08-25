import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

  const Portfolio = ({ portfolio }) => {
  
  const [title, setTitle] = useState(portfolio[0].title);
  const [URL, setURL] = useState(portfolio[0].URL);
  const [year, setYear] = useState(portfolio[0].year);
  const [weight, setWeight] = useState(portfolio[0].weight);
  const [priority, setPriority] = useState(portfolio[0].priority);
  const [description, setDescription] = useState(portfolio[0].description);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">Year</th>
            <th scope="col">Weight</th>
            <th scope="col">Priority</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td>{URL} </td>
            <td>{year}</td>
            <td>{weight}</td>
            <td>{priority}</td>
            <td>{description}</td>
          </tr>
        </tbody>
         <Button className = "btn btn-outline-primary" variant="primary" onClick={handleShow}>
          Edit
        </Button>
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
              <Form.Label>Title</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setURL(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Year</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setYear(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Weight</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setWeight(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Priority</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setPriority(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setDescription(e.target.value)} />
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

export default Portfolio; 