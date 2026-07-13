import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import Preview from "../components/Preview";
import Sidebar from "../components/Sidebar";

import Stats from "../components/Stats";
import useStats from "../hooks/useStats";


function Home() {

    const [file, setFile] = useState(null);

    const [preview, setPreview] = useState("");
    
    const stats = useStats();

    return (
        <>
            <Navbar />
            <div className="layout">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    
                    <UploadBox
                        file={file}
                        setFile={setFile}
                        setPreview={setPreview}
                    />
                    <Stats stats={stats} />
                    <Preview preview={preview} />
                </div>
            </div>
        </>
    );

}

export default Home;