"use client"
import React, {useEffect} from "react";
import Link from "next/link";

import "@/styles/components/Header.css";
import {usePathname} from "next/navigation";

const Header = () => {
    // Get the current path
    // const currentPath = window.location.pathname;
    const router = usePathname();

    useEffect(() => {
        // console.log("Current path: " + router)
    }, [router]);

    return (
        <div className="container">
            <h1>
                <Link href="/" className={router === "/" ? "active" : ""}>Assignment 1</Link> |{" "}
                <Link href="/home-with-fetch">Fetch</Link> |{" "}
                <Link href="/home-with-xmlhttprequest">XMLHttpRequest</Link> |{" "}
                <Link href="/send-weather-data">Send weather data</Link> |{" "}
            </h1>
        </div>
    );
};

export default Header;
