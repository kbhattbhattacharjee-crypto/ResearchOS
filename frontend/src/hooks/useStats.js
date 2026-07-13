import { useEffect, useState } from "react";
import api from "../services/api";

export default function useStats() {

    const [stats, setStats] = useState({
        total_documents: 0,
        total_characters: 0,
    });

    useEffect(() => {

        api.get("/files/stats")
            .then((res) => setStats(res.data));

    }, []);

    return stats;
}