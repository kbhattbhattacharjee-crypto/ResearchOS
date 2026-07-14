import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadBox from "../components/UploadBox";
import Stats from "../components/Stats";
import Preview from "../components/Preview";

import useStats from "../hooks/useStats";

export default function Home() {

    const [file, setFile] = useState(null);

    const [preview, setPreview] = useState("");

    const stats = useStats();

    return (

        <>

            <Navbar />

            <div className="dashboard">

                <aside className="sidebar-panel">

                    <Sidebar />

                </aside>

                <main className="main-panel">

                    <div className="hero-card">

                        <h1>ResearchOS</h1>

                        <p>

                            AI-powered workspace for researchers,
                            students and engineers.

                        </p>

                    </div>

                    <Stats stats={stats} />

                    <UploadBox
                        file={file}
                        setFile={setFile}
                        setPreview={setPreview}
                    />

                    <Preview preview={preview} />

                </main>

            </div>

        </>

    );

}