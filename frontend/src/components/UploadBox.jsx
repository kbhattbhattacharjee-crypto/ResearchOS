import { useState } from "react";

import api from "../services/api";

export default function UploadBox({

    file,

    setFile,

    setPreview,

    setMetadata,

    refreshDocuments,

    refreshStats,

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

                summary: response.data.summary,

                keywords: response.data.keywords,

                word_count: response.data.word_count,

                character_count: response.data.character_count,

                reading_time: response.data.reading_time,

            });

            if (refreshDocuments) {

                await refreshDocuments();

            }

            if (refreshStats) {

                await refreshStats();

            }

            setFile(null);

            alert("PDF uploaded successfully.");

        }

        catch (error) {

            console.error(error);

            alert("Upload failed.");

        }

        finally {

            setUploading(false);

        }

    };

    return (

        <div className="card upload-card">

            <h2>Upload Research Paper</h2>

            <input

                type="file"

                accept=".pdf"

                onChange={(e) =>

                    setFile(e.target.files[0])

                }

            />

            <button

                onClick={uploadPDF}

                disabled={uploading}

            >

                {

                    uploading

                        ? "Uploading..."

                        : "Upload PDF"

                }

            </button>

        </div>

    );

}