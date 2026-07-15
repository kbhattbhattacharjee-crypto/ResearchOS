import { useEffect, useState } from "react";

import api from "../services/api";

export default function useDocuments() {

    const [documents, setDocuments] = useState([]);

    const loadDocuments = async () => {

        const response = await api.get(
            "/files/documents"
        );

        setDocuments(response.data);

    };

    useEffect(() => {

        loadDocuments();

    }, []);

    return {

        documents,

        loadDocuments,

    };

}