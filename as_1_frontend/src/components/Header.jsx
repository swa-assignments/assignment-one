import React from "react";
import Link from "next/link";

import styles from "../styles/components/Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <h1>
                Assignment 1 | <Link href="/home-with-fetch">Fetch</Link> |{" "}
                <Link href="/home-with-xmlhttprequest">XMLHttpRequest</Link> |{" "}
                <Link href="/send-weather-data">Send weather data</Link> |{" "}
                <Link href="/fetch">Test</Link> |{" "}
            </h1>
        </div>
    );
};

export default Header;
