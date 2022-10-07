import React from 'react'
import { Form } from 'react-bootstrap';

const UserNameField = () => {
  return (
    <>
      <div className="card_item">
        <h5 style={{ fontWeight: "bolder" }}>
          Welcome! First things first...
        </h5>
        <p style={{ fontSize: "13px", color: "gray" }}>
          You can always change them later
        </p>
        <div className="d-flex gap-4 flex-column w-75">
          <Form.Group>
            <Form.Label>Full name</Form.Label>
            <Form.Control
              name='full_name'
              type="text"
              placeholder="Muhammed Majid"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Display name</Form.Label>
            <Form.Control type="text" name='display_name' placeholder="Majid"></Form.Control>
          </Form.Group>
        </div>
      </div>
    </>
  );
}

export default UserNameField