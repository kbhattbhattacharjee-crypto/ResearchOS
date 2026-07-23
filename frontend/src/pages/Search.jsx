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
                    marginBottom: "20px",
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

            {

                papers.length === 0

                    ?

                    <p>No results.</p>

                    :

                    papers.map((paper) => (

                        <div
                            key={paper.id}
                            className="card"
                            style={{
                                marginTop: "20px",
                            }}
                        >

                            <h2>

                                {paper.display_name}

                            </h2>

                            <p>

                                <strong>📅 Publication Year:</strong>{" "}

                                {paper.publication_year}

                            </p>

                            <p>

                                <strong>⭐ Citations:</strong>{" "}

                                {paper.cited_by_count ?? 0}

                            </p>

                            <p>

                                <strong>🌍 Open Access:</strong>{" "}

                                {

                                    paper.open_access?.is_oa

                                        ? "Yes"

                                        : "No"

                                }

                            </p>

                            <p>

                                <strong>👨 Authors:</strong>{" "}

                                {

                                    paper.authorships

                                        ?

                                        paper.authorships
                                            .slice(0, 5)
                                            .map(a => a.author.display_name)
                                            .join(", ")

                                        :

                                        "Unknown"

                                }

                            </p>

                            <p>

                                <strong>🏛 Venue:</strong>{" "}

                                {

                                    paper.primary_location?.source?.display_name

                                    ??

                                    "Unknown"

                                }

                            </p>

                            <p>

                                <strong>🧠 Relevance Score:</strong>{" "}

                                {

                                    Math.round(

                                        paper.relevance_score ?? 0

                                    )

                                }

                            </p>

                            <p>

                                <strong>📖 DOI:</strong>{" "}

                                {

                                    paper.doi

                                        ?

                                        <a
                                            href={paper.doi}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            Open Paper

                                        </a>

                                        :

                                        "N/A"

                                }

                            </p>

                            <hr />

                        </div>

                    ))

            }

        </div>

    );

}