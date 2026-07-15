import { useState } from "react";

import api from "../services/api";

export default function UploadBox({

    file,

    setFile,

    setPreview,
    
    setMetadata,

    refreshDocuments,

}) {

    const [uploading, setUploading] = useState(false);

    const uploadPDF = async () => {

        if (!file) return;

        setUploading(true);

        const formData = new FormData();

        formData.append(

            "file",

            file

        );

        try {

            const response = await api.post(

                "/files/upload",

                formData

            );

            setPreview(response.data.preview);

            setMetadata({
                filename: response.data.filename,
                characters: response.data.characters,
                words: response.data.words,
            });
            
            refreshDocuments();

            alert(

                "PDF uploaded successfully."

            );

            // refreshDocuments();

            // setFile(null);

        }

        catch (error) {

            console.log(error);

            alert("Upload failed.");

        }

        finally {

            setUploading(false);

        }

    };

    return (

        <div className="card upload-card">

            <h2>

                Upload Research Paper

            </h2>

            <input

                type="file"

                accept=".pdf"

                onChange={(e)=>

                    setFile(

                        e.target.files[0]

                    )

                }

            />

            <button

                onClick={uploadPDF}

                disabled={uploading}

            >

                {

                    uploading

                    ?

                    "Uploading..."

                    :

                    "Upload PDF"

                }

            </button>

        </div>

    );

}