"use client";

import "@/styles/pages/Home.css";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main>
            <Header/>

            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-title">Click a header tab to fetch weather data</h1>
                </div>
            </div>
        </main>
    )
}
