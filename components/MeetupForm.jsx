import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./MeetupForm.module.scss";
import Card from "./UI/Card";
export default function MeetupForm(props) {
  const [newMeetup, setNewMeetup] = useState({ submit: false });
  const formSubmit = (evt) => {
    evt.preventDefault();
    props.onSummitHandler(newMeetup);
  };
  const setMeetupDetails = (key, value) => {
    setNewMeetup({ ...newMeetup, [key]: value });
  };
  return (
    <Card>
      <Form className="p-2" onSubmit={formSubmit}>
        <h2>Meetup Details:</h2>
        <hr></hr>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Meetup"
            onChange={(evt) => {
              setMeetupDetails("label", evt.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            onChange={(evt) => {
              setMeetupDetails("image", evt.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Meetup Description"
            onChange={(evt) => {
              setMeetupDetails("desc", evt.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Publish the meetup"
            onChange={(evt) =>
              setMeetupDetails("submit", evt.currentTarget.checked)
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
