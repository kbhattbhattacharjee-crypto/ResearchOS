import { useState } from "react";
import api from "../services/api";

export default function Search() {

    const [query, setQuery] = useState("");

    const [papers, setPapers] = useState([]);

    const [semantic, setSemantic] = useState([]);

    async function searchPapers() {

        if (!query.trim()) return;

        try {

            const response = await api.get(

                `/search/?query=${encodeURIComponent(query)}`

            );

            setPapers(

                response.data.results || []

            );

            setSemantic(

                response.data.semantic_results || []

            );

        }

        catch (err) {

            console.error(err);

        }

    }

    return (

        <div className="card">

            <h1>🔍 Research Search</h1>

            <div

                style={{

                    display: "flex",

                    gap: 10,

                    marginBottom: 25,

                }}

            >

                <input

                    value={query}

                    onChange={(e) =>

                        setQuery(e.target.value)

                    }

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

            <h2>

                Search Results

            </h2>

            {

                papers.map((paper) => (

                    <div

                        key={paper.id}

                        className="card"

                        style={{

                            marginBottom: 25,

                        }}

                    >

                        <h2>

                            {paper.title}

                        </h2>

                        <p>

                            <b>📅 Year:</b>{" "}

                            {paper.year}

                        </p>

                        <p>

                            <b>⭐ Citations:</b>{" "}

                            {paper.citations}

                        </p>

                        <p>

                            <b>🏛 Venue:</b>{" "}

                            {paper.venue}

                        </p>

                        <p>

                            <b>👨 Authors:</b>{" "}

                            {

                                paper.authors.length

                                    ?

                                    paper.authors.join(", ")

                                    :

                                    "Unknown"

                            }

                        </p>

                        <p>

                            <b>👥 Author Count:</b>{" "}

                            {paper.authors_count}

                        </p>

                        <p>

                            <b>📄 Type:</b>{" "}

                            {paper.type}

                        </p>

                        <p>

                            <b>🌍 Language:</b>{" "}

                            {paper.language}

                        </p>

                        <p>

                            <b>🔬 Concepts:</b>{" "}

                            {

                                paper.concepts.length

                                    ?

                                    paper.concepts.join(", ")

                                    :

                                    "N/A"

                            }

                        </p>

                        <p>

                            <b>📚 References:</b>{" "}

                            {paper.referenced_works}

                        </p>

                        <p>

                            <b>🧠 Relevance:</b>{" "}

                            {

                                Math.round(

                                    paper.relevance_score

                                )

                            }

                        </p>

                        <p>

                            <b>🌍 Open Access:</b>{" "}

                            {

                                paper.open_access

                                    ?

                                    "Yes"

                                    :

                                    "No"

                            }

                        </p>

                        {

                            paper.doi && (

                                <a

                                    href={paper.doi}

                                    target="_blank"

                                    rel="noreferrer"

                                >

                                    📖 Open Paper

                                </a>

                            )

                        }

                    </div>

                ))

            }

            <hr />

            <h2>

                🤖 AI Similar Papers

            </h2>

            {

                semantic.length === 0

                ?

                <p>

                    No semantic matches yet.

                </p>

                :

                semantic.map((paper) => (

                    <div

                        key={paper.id}

                        className="card"

                        style={{

                            marginBottom: 20,

                        }}

                    >

                        <h3>

                            {paper.title}

                        </h3>

                        <p>

                            <b>🏛 Venue:</b>{" "}

                            {paper.venue}

                        </p>

                        <p>

                            <b>⭐ Citations:</b>{" "}

                            {paper.citations}

                        </p>

                        <p>

                            <b>📅 Year:</b>{" "}

                            {paper.year}

                        </p>

                    </div>

                ))

            }

        </div>

    );

}