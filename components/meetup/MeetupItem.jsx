import React from "react";
import { ListGroup } from "react-bootstrap";

export default function MeetupItem({ meetup }) {
  return (
    <ListGroup.Item key={el._id} as="li">
      {meetup.label}
    </ListGroup.Item>
  );
}
