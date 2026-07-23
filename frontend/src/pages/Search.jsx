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

            setPapers(response.data.results);

        } catch (err) {

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
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyDown={(e)=>{

                        if(e.key==="Enter"){

                            searchPapers();

                        }

                    }}
                    placeholder="Search papers..."
                    style={{
                        flex:1,
                    }}
                />

                <button onClick={searchPapers}>

                    Search

                </button>

            </div>

            {

                papers.map((paper)=>(

                    <div
                        key={paper.id}
                        className="card"
                        style={{
                            marginBottom:25,
                        }}
                    >

                        <h2>

                            {paper.title}

                        </h2>

                        <p>

                            <b>📅 Year:</b> {paper.year}

                        </p>

                        <p>

                            <b>⭐ Citations:</b> {paper.citations}

                        </p>

                        <p>

                            <b>🏛 Venue:</b> {paper.venue}

                        </p>

                        <p>

                            <b>👨 Authors:</b>

                            {" "}

                            {paper.authors.join(", ")}

                        </p>

                        <p>

                            <b>📄 Type:</b>

                            {" "}

                            {paper.type}

                        </p>

                        <p>

                            <b>🌍 Language:</b>

                            {" "}

                            {paper.language}

                        </p>

                        <p>

                            <b>🔬 Concepts:</b>

                            {" "}

                            {paper.concepts.join(", ")}

                        </p>

                        <p>

                            <b>📚 References:</b>

                            {" "}

                            {paper.referenced_works}

                        </p>

                        <p>

                            <b>🧠 Relevance:</b>

                            {" "}

                            {Math.round(paper.relevance_score)}

                        </p>

                        <p>

                            <b>🌍 Open Access:</b>

                            {" "}

                            {paper.open_access ? "Yes" : "No"}

                        </p>

                        <a

                            href={paper.doi}

                            target="_blank"

                            rel="noreferrer"

                        >

                            📖 Open Paper

                        </a>

                    </div>

                ))

            }

        </div>

    );

}