import api from "../services/api";

export default function DocumentCard({
    document,
    refreshDocuments,
    setPreview,
}) {

    async function deleteDocument() {

        if (!window.confirm("Delete this document?")) return;

        try {

            await api.delete(`/files/${document.id}`);

            refreshDocuments();

            setPreview("");

        }

        catch (error) {

            console.error(error);

            alert("Failed to delete document.");

        }

    }

    return (

        <div className="document-card">

            <div className="doc-info">

                <div className="doc-title">

                    📄 {document.filename}

                </div>

                <div className="doc-meta">

                    {document.characters} characters

                </div>

                <div className="doc-status">

                    Indexed ✓

                </div>

            </div>

            <button
                className="delete-btn"
                onClick={deleteDocument}
            >

                🗑

            </button>

        </div>

    );

}