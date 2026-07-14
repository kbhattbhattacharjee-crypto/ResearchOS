import { useState } from "react";

import api from "../services/api";

export default function UploadBox({

    file,

    setFile,

    setPreview,

}) {

    const [loading, setLoading] = useState(false);

    const uploadPDF = async () => {

        if (!file) return;

        setLoading(true);

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await api.post(

                "/files/upload",

                formData

            );

            setPreview(response.data.preview);

        } catch (err) {

            alert("Upload failed.");

            console.error(err);

        }

        setLoading(false);

    };

    return (

        <div className="upload-card">

            <h2>Upload Research Paper</h2>

            <p>

                Select a PDF and ResearchOS will

                extract its text automatically.

            </p>

            <input

                type="file"

                accept=".pdf"

                onChange={(e)=>

                    setFile(e.target.files[0])

                }

            />

            <button

                onClick={uploadPDF}

            >

                {

                    loading

                    ?

                    "Uploading..."

                    :

                    "Upload PDF"

                }

            </button>

        </div>

    );

}