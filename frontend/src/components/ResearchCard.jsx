export default function ResearchCard({ metadata }) {

    const keywords = Array.isArray(metadata.keywords)
        ? metadata.keywords
        : typeof metadata.keywords === "string"
            ? metadata.keywords.split(",")
            : [];

    return (

        <div className="card">

            <h2>Research Intelligence</h2>

            <hr />

            <p>

                <strong>📄 Document</strong>

                <br />

                {metadata.filename || "No document uploaded"}

            </p>

            <p>

                <strong>📝 Summary</strong>

                <br />

                {metadata.summary || "Waiting for upload..."}

            </p>

            <p>

                <strong>🏷 Keywords</strong>

            </p>

            <div className="keyword-container">

                {

                    keywords.length > 0

                        ? keywords.map((keyword, index) => (

                            <span
                                key={index}
                                className="keyword"
                            >

                                {keyword.trim()}

                            </span>

                        ))

                        :

                        <span>No keywords</span>

                }

            </div>

            <p>

                <strong>📚 Words</strong>

                <br />

                {metadata.word_count || 0}

            </p>

            <p>

                <strong>🔤 Characters</strong>

                <br />

                {metadata.character_count || 0}

            </p>

            <p>

                <strong>⏱ Reading Time</strong>

                <br />

                {metadata.reading_time || 0} min

            </p>

        </div>

    );

}