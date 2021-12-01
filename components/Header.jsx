import React from "react";
import { Nav } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import style from "./Header.module.scss";
export default function Header() {
  return (
    <>
      <header className={style.header}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* <Link href="/new-meetup">About Me</Link> */}
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
