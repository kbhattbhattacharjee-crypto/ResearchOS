import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [dark, setDark] = useState(false);

    useEffect(() => {

        if (dark) {

            document.body.classList.add("dark");

        }

        else {

            document.body.classList.remove("dark");

        }

    }, [dark]);

    return (

        <header className="navbar">

            <div>

                <h1>ResearchOS</h1>

                <p>

                    AI-powered research operating system

                </p>

            </div>

            <nav
                style={{
                    display: "flex",
                    gap: "18px",
                    alignItems: "center",
                }}
            >

                <Link to="/">
                    Home
                </Link>

                <Link to="/search">
                    Search
                </Link>

                <Link to="#">
                    Library
                </Link>

                <Link to="#">
                    Literature
                </Link>

                <Link to="#">
                    Graph
                </Link>

                <Link to="#">
                    AI
                </Link>

                <button
                    className="theme-btn"
                    onClick={() => setDark(!dark)}
                >

                    {dark ? "☀️" : "🌙"}

                </button>

                <div className="badge">

                    Version 2.0

                </div>

            </nav>

        </header>

    );

}