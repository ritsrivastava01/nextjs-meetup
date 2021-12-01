import React from "react";
import { Card } from "react-bootstrap";

export default function MeetupDetails({ meetup }) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={meetup?.image} />
        <Card.Body>
          <Card.Title>{meetup?.label}</Card.Title>
          <Card.Text>{meetup?.desc}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetup: {
        label: "Meetup1",
        image: "https://picsum.photos/200/300",
        desc: "This is first meetup",
        address: "Netherlands",
      },
    },
  };
}
