import { useRouter } from "next/router";
import React from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import classes from "./MeetupList.module.scss";

export default function MeetupList({ list }) {
  const router = useRouter();
  return (
    <div>
      <ListGroup as="ul">
        {list &&
          list?.map((el) => (
            <ListGroup.Item key={el._id} as="li" className="d-flex">
              <div>
                <Image className={classes.img} src={el.image} roundedCircle />
                {el.label}
              </div>
              <Button
                variant="outline-primary"
                onClick={() => router.push("/" + el._id)}
              >
                Details
              </Button>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
