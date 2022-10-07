import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const WorkspaceField = () => {
  return (
    <>
      <div className="card_item">
        <h5 style={{ fontWeight: "bolder" }}>
          Let's set up a home for all your work
        </h5>
        <p style={{ fontSize: "13px", color: "gray" }}>
          You can always create another workspace
        </p>
        <div className="d-flex gap-4 flex-column w-75 mt-2">
          <Form.Group>
            <Form.Label>Workspace name</Form.Label>
            <Form.Control type="text" name="workspace_name" placeholder="Eden"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Workspace URL</Form.Label>
            <InputGroup>
              <InputGroup.Text>www.eden.com/</InputGroup.Text>
              <Form.Control type="text" name="workspace_url" placeholder="Example"></Form.Control>
            </InputGroup>
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default WorkspaceField;
