import { useEffect, useState } from "react";
import api from "../services/api";

export default function useStats() {

    const [stats, setStats] = useState({
        total_documents: 0,
        total_characters: 0,
    });

    const loadStats = async () => {

        try {

            const response = await api.get("/files/stats");

            setStats(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadStats();

    }, []);

    return {

        stats,

        loadStats,

    };

}