import { useState, useEffect } from "react";

export default function Navbar() {

    const [dark, setDark] = useState(false);

    useEffect(() => {

        if (dark) {

            document.body.classList.add("dark");

        } else {

            document.body.classList.remove("dark");

        }

    }, [dark]);

    return (

        <header className="navbar">

            <div>

                <h1>

                    ResearchOS

                </h1>

                <p>

                    AI-powered workspace for reading, organizing and understanding research papers.

                </p>

            </div>

            <div
                style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                }}
            >

                <button
                    className="theme-btn"
                    onClick={() => setDark(!dark)}
                >

                    {dark ? "☀️ Light" : "🌙 Dark"}

                </button>

                <div className="badge">

                    Version 1.0

                </div>

            </div>

        </header>

    );

}