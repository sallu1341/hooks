import React, { useState } from "react";

import { Container, Button, Modal, Form, Card } from "react-bootstrap";
const Home = () => {
  const [modalState, changeModalState] = useState(false);
  const [Formdata, setFormData] = useState({});
  const [submiteState, setSubmitState] = useState(false);

  //new user
  const NewUser = (data) => {
    console.log(data);
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={data.user.picture} />
            <Card.Title>{data.user.fullname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {data.user.email}
            </Card.Subtitle>
            <Card.Text>{data.user.mobile}</Card.Text>
            <Card.Text>{data.user.picture}</Card.Text>
            <Button variant="primary">Click</Button>
          </Card.Body>
        </Card>
      </>
    );
  };

  // colloection data
  const GetFORMData = (event) => {
    const input = event.target;
    const prop = event.target.name;
    let value = "";
    if (input.type === "file") {
      let newFile = input.files[0];
      value = URL.createObjectURL(newFile);
    } else {
      value = input.value;
    }
    setFormData((oldData) => {
      return {
        ...oldData,
        [prop]: value,
      };
    });
  };

  //adduser
  const AddUser = (e) => {
    e.preventDefault();
    console.log(Formdata);
    return setSubmitState(true), changeModalState(false);
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
        {submiteState ? <NewUser user={Formdata} /> : null}
      </Container>
    </>
  );
};

export default Home;
