import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AddMovie = ({ addMovie }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Title, setTitle] = useState('')
    const [Poster, setPoster] = useState('')
    const [Description, setDescription] = useState('')
    const [Rate, setRate] = useState(0)

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Movies
    </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie title" onChange={(e)=>setTitle(e.target.value)} />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie poster url" onChange={(e)=>setPoster(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description of movie" onChange={(e)=>setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control type="number" placeholder="Enter Rate for the movie" onChange={(e)=>setRate(e.target.value)} />
                        </Form.Group>


                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={()=>{addMovie(Title,Poster,Description,Rate);setShow(false)}}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie
