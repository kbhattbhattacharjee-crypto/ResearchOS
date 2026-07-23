import { useState } from "react";
import api from "../services/api";

export default function Search() {

    const [query, setQuery] = useState("");

    const [papers, setPapers] = useState([]);

    async function searchPapers() {

        if (!query.trim()) return;

        try {

            const response = await api.get(
                `/search/?query=${encodeURIComponent(query)}`
            );

            console.log(response.data);

            setPapers(response.data.results || []);

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <div className="card">

            <h1>Research Search</h1>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >

                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            searchPapers();

                        }

                    }}
                    placeholder="Search papers..."
                    style={{
                        flex: 1,
                    }}
                />

                <button
                    onClick={searchPapers}
                >
                    Search
                </button>

            </div>

            <hr />

            {

                papers.length === 0

                    ?

                    <p>No results.</p>

                    :

                    papers.map((paper) => (

                        <div
                            key={paper.id}
                            style={{
                                marginBottom: "25px",
                            }}
                        >

                            <h3>

                                {paper.display_name || paper.title}

                            </h3>

                            <p>

                                <strong>Year:</strong> {paper.publication_year}

                            </p>

                            <p>

                                <strong>Citations:</strong> {paper.cited_by_count ?? "N/A"}

                            </p>

                            <hr />

                        </div>

                    ))

            }

        </div>

    );

}