import { useEffect, useState } from "react";
import api from "../services/api";

export default function useDocuments() {

    const [documents, setDocuments] = useState([]);

    async function loadDocuments() {

        const res = await api.get("/files/documents");

        setDocuments(res.data);

    }

    useEffect(() => {

        loadDocuments();

    }, []);

    return {

        documents,

        loadDocuments,

    };

}
