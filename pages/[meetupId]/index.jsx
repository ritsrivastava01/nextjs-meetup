import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import MeetupDetails from "../../components/meetup/MeetupDetails";

export default function index({ meetup }) {
  return <MeetupDetails meetup={meetup}></MeetupDetails>;
}

export async function getStaticPaths() {
  //feedback: <boolean>
  //true: all the params are declare and no 404 page
  // false: if Id not matched then show 404 page
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:dbuser@cluster0.efj9p.mongodb.net/meetupDB?retryWrites=true&w=majority"
  );

  const meetupIds = await client
    .db()
    .collection("meetups")
    .find({}, { _id: 1 })
    .toArray();

  const ids = meetupIds.map((meetup) => ({
    params: {
      meetupId: meetup._id.toString(),
    },
  }));
  console.log("ids", ids);
  return {
    paths: ids,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const req = context.params.meetupId;
  console.log("reg", req);
  const client = await MongoClient.connect(
    "mongodb+srv://dbuser:dbuser@cluster0.efj9p.mongodb.net/meetupDB?retryWrites=true&w=majority"
  );
  const selectedMeetup = await client
    .db()
    .collection("meetups")
    .findOne({ _id: ObjectId(req) });
  return {
    props: {
      meetup: {
        ...selectedMeetup,
        _id: selectedMeetup._id.toString(),
      },
    },
  };
}
