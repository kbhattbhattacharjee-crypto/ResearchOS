import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadBox from "../components/UploadBox";
import Preview from "../components/Preview";
import Stats from "../components/Stats";
import Activity from "../components/Activity";
import ResearchCard from "../components/ResearchCard";

import useStats from "../hooks/useStats";
import useDocuments from "../hooks/useDocuments";

export default function Home() {

    const stats = useStats();

    const {
        documents,
        loadDocuments,
    } = useDocuments();

    const [preview, setPreview] = useState("");

    const [metadata, setMetadata] = useState({
        filename: "",
        characters: 0,
        words: 0,
    });

    const [file, setFile] = useState(null);

    return (

        <>

            <Navbar />

            <div className="dashboard">

                <aside className="sidebar-panel">

                    <Sidebar
                        documents={documents}
                        setPreview={setPreview}
                        refreshDocuments={loadDocuments}
                    />

                </aside>

                <main className="main-panel">

                    <div className="hero-card">

                        <h1>
                            Build Your Research Brain
                        </h1>

                        <p>
                            Upload papers.
                            Search knowledge.
                            Organize ideas.
                            Prepare for AI-powered discovery.
                        </p>

                    </div>

                    <Stats
                        stats={stats}
                    />

                    <Activity />

                    <ResearchCard
                        metadata={metadata}
                    />

                    <UploadBox
                        file={file}
                        setFile={setFile}
                        setPreview={setPreview}
                        setMetadata={setMetadata}
                        refreshDocuments={loadDocuments}
                    />

                    <Preview
                        preview={preview}
                    />

                </main>

            </div>

        </>

    );

}