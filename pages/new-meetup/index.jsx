import React from "react";
import MeetupForm from "../../components/MeetupForm";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();
  const submitHandler = async (newMeetup) => {
    const resp = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await resp.json();
    if (data.status === 201) {
      router.push("/");
    }
  };
  return <MeetupForm onSummitHandler={submitHandler}></MeetupForm>;
}
