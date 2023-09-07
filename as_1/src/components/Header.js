import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>
        Assignment 1 - <Link href="/home-with-fetch">Fetch</Link> |{" "}
        <Link href="/home-with-xmlhttprequest">XMLHttpRequest</Link> |{" "}
        <Link href="/send-weather-data">Send weather data</Link>
      </h1>
    </div>
  );
};

export default Header;
