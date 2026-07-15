import { FaFilePdf, FaTrash } from "react-icons/fa";
import api from "../services/api";

export default function DocumentCard({

    document,

    onClick,

    refreshDocuments,

}) {

    const deleteDocument = async (e) => {

        e.stopPropagation();

        const ok = window.confirm(

            `Delete "${document.filename}" ?`

        );

        if (!ok) return;

        await api.delete(

            `/files/${document.id}`

        );

        refreshDocuments();

    };

    return (

        <div

            className="document-card"

            onClick={onClick}

        >

            <FaFilePdf
                size={22}
                color="#ef4444"
            />

            <div className="doc-info">

                <div className="doc-title">

                    {document.filename}

                </div>

                <small>

                    {document.characters}

                    {" "}characters

                </small>

            </div>

            <button

                className="delete-btn"

                onClick={deleteDocument}

            >

                <FaTrash />

            </button>

        </div>

    );

}