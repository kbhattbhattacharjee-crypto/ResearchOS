import { useEffect, useState } from "react";
import api from "../services/api";

function Sidebar() {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {

        loadDocuments();

    }, []);

    async function loadDocuments() {

        const response = await api.get(
            "/files/documents"
        );

        setDocuments(response.data);

    }

    return (

        <div className="card">

            <h2>Documents</h2>

            <ul>

                {documents.map((doc) => (

                    <li key={doc.id}>

                        {doc.filename}

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default Sidebar;