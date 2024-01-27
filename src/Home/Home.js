import React, { useState } from "react";
import { change, work } from "./index";
import { Container, Button, Modal, Form } from "react-bootstrap";
const Home = () => {
  const [modalState, changeModalState] = useState(false);
  const [Formdat, setFormData] = useState({});

  // colloection data
  const GetFORMData = (event) => {
    const input = event.target;
    const prop = event.target.name;
    let value = "";
    if (input.type === "file") {
      value = input.files[0];
    } else {
      value = input.value;
    }
    return (setFormData = (oldData) => {
      return {
        ...oldData,
        [prop]: value,
      };
    });
  };

  const AddUser = (e) => {
    e.preventDefault();
    console.log(Formdat);
  };

  return (
    <>
      <Container className="py-4">
        <h1 className="display-4 text-center mb-4">Best Practices</h1>
        <Button variant="primary" onClick={() => changeModalState(true)}>
          Add user
        </Button>
        <Modal show={modalState} onHide={() => changeModalState(false)}>
          <Modal.Header closeButton>
            <Modal.Title>New user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={AddUser}>
              <Form.Group className="mb-4">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  onChange={GetFORMData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={GetFORMData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  onChange={GetFORMData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Picture</Form.Label>
                <Form.Control
                  type="file"
                  name="picture"
                  accept="image/*"
                  onChange={GetFORMData}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add now
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Home;
